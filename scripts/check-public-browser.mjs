import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { mkdtemp, mkdir, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const origin = process.argv[2] ?? 'http://127.0.0.1:4173'
const binary = process.env.BROWSER_BINARY ?? 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'
const profile = await mkdtemp(join(tmpdir(), 'terracode-browser-'))
const browser = spawn(binary, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank'], { windowsHide: true, stdio: ['ignore', 'ignore', 'pipe'] })
let socket
try {
  const endpoint = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error('Browser startup timeout')), 20000)
    browser.on('error', reject)
    browser.stderr.on('data', chunk => {
      const match = chunk.toString().match(/DevTools listening on (ws:\/\/\S+)/)
      if (match) { clearTimeout(timer); resolve(match[1]) }
    })
  })
  socket = new WebSocket(endpoint)
  await new Promise(resolve => socket.addEventListener('open', resolve, { once: true }))
  let id = 0
  let sessionId
  const pending = new Map()
  const exceptions = []
  function send(method, params = {}, session = sessionId) {
    return new Promise((resolve, reject) => {
      const key = ++id
      const timer = setTimeout(() => { pending.delete(key); reject(new Error(`Timeout: ${method}`)) }, 15000)
      pending.set(key, { resolve, reject, timer })
      socket.send(JSON.stringify({ id: key, method, params, ...(session ? { sessionId: session } : {}) }))
    })
  }
  socket.addEventListener('message', async event => {
    const message = JSON.parse(event.data)
    if (message.id && pending.has(message.id)) {
      const task = pending.get(message.id)
      pending.delete(message.id)
      clearTimeout(task.timer)
      if (message.error) task.reject(new Error(JSON.stringify(message.error)))
      else task.resolve(message.result)
    }
    if (message.method === 'Runtime.exceptionThrown') exceptions.push(message.params.exceptionDetails.text)
    // Tests never send external analytics, form submissions, or payment requests.
    if (message.method === 'Fetch.requestPaused') {
      const { requestId, request } = message.params
      await send(request.url.startsWith(origin + '/') ? 'Fetch.continueRequest' : 'Fetch.failRequest',
        request.url.startsWith(origin + '/') ? { requestId } : { requestId, errorReason: 'Aborted' })
    }
  })
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' })
  sessionId = (await send('Target.attachToTarget', { targetId, flatten: true })).sessionId
  await send('Page.enable')
  await send('Runtime.enable')
  await send('Fetch.enable', { patterns: [{ urlPattern: '*' }] })
  await send('Emulation.setDeviceMetricsOverride', { width: 1280, height: 900, deviceScaleFactor: 1, mobile: false })
  async function evaluate(expression) {
    const result = await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })
    if (result.exceptionDetails) throw new Error(JSON.stringify(result.exceptionDetails))
    return result.result.value
  }
  async function until(expression) {
    for (let attempt = 0; attempt < 100; attempt++) {
      if (await evaluate(expression)) return
      await new Promise(resolve => setTimeout(resolve, 100))
    }
    throw new Error(`Condition not met: ${expression}`)
  }
  async function navigate(path) {
    await send('Page.navigate', { url: origin + path })
    await until(`location.pathname === ${JSON.stringify(path.split('?')[0])} && document.readyState === 'complete' && !!document.querySelector('h1')`)
  }
  const results = []
  await send('Emulation.setScriptExecutionDisabled', { value: true })
  for (const path of ['/', '/contact', '/payments', '/t&s', '/privacy-policy', '/terms-and-conditions', '/refund-policy']) {
    await navigate(path)
    const visible = await evaluate(`(() => { const h = document.querySelector('h1'); for(let el=h;el;el=el.parentElement) { if(getComputedStyle(el).opacity === '0') return false; } return !!h && document.body.innerText.length > 500; })()`)
    assert(visible, `${path}: no-JavaScript content hidden`)
    results.push(`PASS no-JavaScript visible content: ${path}`)
  }
  await send('Emulation.setScriptExecutionDisabled', { value: false })
  await navigate('/contact')
  await until(`Array.from(document.querySelectorAll('button')).some(b => b.textContent.trim() === 'Decline')`)
  assert.equal(await evaluate(`document.querySelectorAll('script[src*="googletagmanager"]').length`), 0)
  await evaluate(`Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Decline').click()`)
  assert.equal(await evaluate(`localStorage.getItem('cookie-consent')`), 'declined')
  assert.equal(await evaluate(`document.querySelectorAll('script[src*="googletagmanager"]').length`), 0)
  assert(await evaluate(`!!document.querySelector('form input[name="email"]')`))
  results.push('PASS contact form rendered; analytics absent before consent and after decline')
  await evaluate('localStorage.clear()')
  await navigate('/payments?firstName=Audit&currency=USD')
  await until(`document.querySelector('input[name="firstName"]')?.value === 'Audit'`)
  await evaluate(`Array.from(document.querySelectorAll('button')).find(b => b.textContent.trim() === 'Accept').click()`)
  assert.equal(await evaluate(`document.querySelectorAll('script[src*="googletagmanager"]').length`), 1)
  results.push('PASS payment query state preserved; analytics initializes once after acceptance')
  await navigate('/t&s?policy=refund-policy')
  await until(`document.querySelector('h1')?.textContent === 'Refund Policy'`)
  await until(`document.title === 'Refund Policy | Terracode' && document.querySelector('link[rel="canonical"]')?.href === 'https://www.terracodedev.com/refund-policy'`)
  results.push('PASS legacy policy query navigation preserved')
  await send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true })
  await navigate('/terms-and-conditions')
  assert(await evaluate('document.documentElement.scrollWidth <= window.innerWidth'), 'Mobile policy overflows')
  await mkdir('docs', { recursive: true })
  const screenshot = await send('Page.captureScreenshot', { format: 'png' })
  await writeFile('docs/policy-mobile.png', Buffer.from(screenshot.data, 'base64'))
  results.push('PASS mobile policy fits viewport')
  assert.deepEqual(exceptions, [], 'Browser runtime exceptions')
  await writeFile('docs/browser-validation.json', JSON.stringify({ timestamp: new Date().toISOString(), origin, results, exceptions }, null, 2) + '\n')
  console.log(results.join('\n'))
  await send('Browser.close', {}, null)
} finally {
  socket?.close()
  browser.kill()
  // The isolated temporary profile is left to OS cleanup; no shared profile is touched.
}
