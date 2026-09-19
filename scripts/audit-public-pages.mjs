import { execFile } from 'node:child_process'
import { promisify } from 'node:util'
import { mkdtemp, readFile, writeFile, mkdir, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const exec = promisify(execFile)
const origin = process.argv[2] ?? 'http://127.0.0.1:4173'
const output = process.argv[3] ?? 'docs/audit-local.json'
const policyRoutes = JSON.parse(await readFile('src/data/policy-routes.json', 'utf8'))
const paths = ['/', '/contact', '/payments', '/t&s', ...Object.values(policyRoutes)]
const agents = { browser: 'Mozilla/5.0', googlebot: 'Googlebot', bot: 'PaymentReviewBot/1.0', curl: 'curl/8.0' }
const temp = await mkdtemp(join(tmpdir(), 'terracode-audit-'))
let serial = 0
async function request(path, agent, head = false) {
  const id = serial++
  const bodyFile = join(temp, `${id}.html`)
  const headerFile = join(temp, `${id}.headers`)
  try {
    const { stdout } = await exec('curl', ['-sS', '-L', '--max-redirs', '5', '--max-time', '30',
      '-A', agent, ...(head ? ['-I'] : []), '-D', headerFile, '-o', bodyFile,
      '-w', '%{json}', new URL(path, origin).href], { maxBuffer: 2 * 1024 * 1024 })
    const stats = JSON.parse(stdout)
    const headers = await readFile(headerFile, 'utf8')
    const body = head ? '' : await readFile(bodyFile, 'utf8')
    const statuses = [...headers.matchAll(/^HTTP\/\S+ (\d+)/gm)].map(m => Number(m[1]))
    const canonical = body.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]
    return { initial: statuses[0], final: stats.http_code, redirects: stats.num_redirects,
      finalUrl: stats.url_effective, contentType: stats.content_type, statuses,
      challenge: /cf-mitigated:\s*challenge|cf-chl-|<title>Just a moment/i.test(headers + body),
      noindex: /x-robots-tag:[^\r\n]*(?:noindex|none)/i.test(headers) || /<meta[^>]*name="robots"[^>]*content="[^"]*(?:noindex|none)/i.test(body),
      title: body.match(/<title[^>]*>(.*?)<\/title>/s)?.[1], canonical,
      canonicalMatchesFinal: canonical === stats.url_effective.replace(new URL(origin).origin, 'https://www.terracodedev.com'),
      description: /<meta[^>]*name="description"[^>]*content="[^"]+"/.test(body),
      og: ['url', 'title', 'description'].every(key => body.includes(`property="og:${key}"`)),
      robotsMeta: /<meta[^>]*name="robots"/.test(body),
      text: /<h1\b/.test(body) && (path.includes('polic') || path.includes('terms')
        ? /<article[\s\S]*?<section>/.test(body) : body.includes('hello@terracodedev.com')),
      company: body.includes('Terracode'), email: /(?:hello|operations)@terracodedev.com/.test(body),
      phone: /(?:112838640|11 283|112 838)/.test(body), address: body.includes('Maharagama'),
      schema: /application\/ld\+json/.test(body),
      server: headers.match(/^server:\s*(.*)/im)?.[1]?.trim(),
      csp: headers.match(/^content-security-policy:\s*(.*)/im)?.[1]?.trim(),
      body }
  } catch (error) { return { error: error.message } }
}
try {
  const robots = await request('/robots.txt', agents.curl)
  const sitemap = await request('/sitemap.xml', agents.curl)
  const rows = []
  for (const path of paths) {
    const tests = Object.fromEntries(await Promise.all(Object.entries(agents).map(async ([name, agent]) => {
      const [get, head] = await Promise.all([request(path, agent), request(path, agent, true)])
      delete get.body
      delete head.body
      return [name, { ...get, headStatus: head.final, headInitial: head.initial, headError: head.error }]
    })))
    const allowed = ![...(robots.body ?? '').matchAll(/^Disallow:\s*(\S+)/gm)].some(m => {
      const pattern = m[1].replace(/[.+?^{}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
      return new RegExp(`^${pattern}`).test(path)
    })
    const inSitemap = (sitemap.body ?? '').includes(`<loc>https://www.terracodedev.com${path.replaceAll('&', '&amp;')}</loc>`)
    rows.push({ path, allowed, inSitemap, tests })
    console.log(`${path}: ${Object.entries(tests).map(([ua, r]) => `${ua}=${r.initial}->${r.final},text=${r.text}`).join(' ')}`)
  }
  await mkdir('docs', { recursive: true })
  const failures = rows.flatMap(row => Object.entries(row.tests).flatMap(([agent, result]) => {
    const reasons = []
    if (result.error || result.final !== 200 || result.headStatus !== 200) reasons.push('HTTP/HEAD failure')
    if (result.challenge) reasons.push('challenge')
    if (!result.text) reasons.push('content requires JavaScript')
    if (!row.allowed) reasons.push('robots blocked')
    if (row.path !== '/t&s') {
      if (!result.title || !result.description || !result.og || !result.robotsMeta) reasons.push('metadata incomplete')
      if (!result.canonicalMatchesFinal) reasons.push('canonical does not match served URL')
      if (result.noindex) reasons.push('indexing disabled')
      if (!row.inSitemap) reasons.push('canonical missing from sitemap')
    }
    return reasons.length ? [{ path: row.path, agent, reasons }] : []
  }))
  await writeFile(output, JSON.stringify({ timestamp: new Date().toISOString(), origin, robots, sitemap, rows, failures }, null, 2) + '\n')
  console.log(`Saved ${output}`)
  if (failures.length) { console.error(`${failures.length} failed page/user-agent checks`); process.exitCode = 1 }
} finally { await rm(temp, { recursive: true, force: true }) }
