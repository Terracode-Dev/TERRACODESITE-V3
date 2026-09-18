import assert from 'node:assert/strict'

// Run against `npm run preview`, or pass the deployed origin after release.
const origin = process.argv[2] ?? 'http://127.0.0.1:4173'
const canonicalOrigin = 'https://www.terracodedev.com'
const policies = [
  ['/privacy-policy', 'Privacy Policy', 'Privacy Policy'],
  ['/terms-and-conditions', 'Terms and Conditions', 'Terms &amp; Conditions'],
  ['/refund-policy', 'Refund Policy', 'Refund Policy'],
]

async function get(path, method = 'GET') {
  const response = await fetch(new URL(path, origin), {
    method, redirect: 'manual', signal: AbortSignal.timeout(15000),
  })
  assert.equal(response.status, 200, `${method} ${path}: expected direct HTTP 200`)
  assert(!response.headers.has('location'), `${path}: unexpected redirect`)
  assert(!/noindex|none/i.test(response.headers.get('x-robots-tag') ?? ''), `${path}: indexing blocked`)
  return response
}

for (const [path, title, heading] of policies) {
  const head = await get(path, 'HEAD')
  assert(head.headers.get('content-type')?.includes('text/html'))
  const response = await get(path)
  const html = await response.text()
  assert(html.includes(`<title>${title} | Terracode</title>`), `${path}: title missing`)
  assert(html.includes(`<h1>${heading}</h1>`), `${path}: heading missing`)
  assert(html.includes('<section>') && html.includes('operations@terracodedev.com'), `${path}: policy content missing`)
  assert(html.includes(`<link rel="canonical" href="${canonicalOrigin}${path}">`), `${path}: canonical incorrect`)
  assert(/<meta name="description" content="[^"]+">/.test(html), `${path}: description missing`)
  assert(!/<meta[^>]+content="[^"]*noindex/i.test(html), `${path}: noindex present`)
  assert(!html.includes('id="root"'), `${path}: received SPA shell`)
  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? ''
  for (const [target] of policies) assert(footer.includes(`href="${target}"`), `${path}: footer missing ${target}`)
  console.log(`PASS HEAD/GET ${path}: HTTP 200, full policy HTML, metadata and footer links`)
}

for (const path of ['/', '/contact', '/payments']) {
  const html = await (await get(path)).text()
  for (const [target] of policies) assert(html.includes(`href="${target}"`), `${path}: raw HTML missing ${target}`)
}
const sitemap = await (await get('/sitemap.xml')).text()
for (const [path] of policies) assert(sitemap.includes(`<loc>${canonicalOrigin}${path}</loc>`), `Sitemap missing ${path}`)
const robots = await (await get('/robots.txt')).text()
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`))
assert(/User-agent:\s*\*\s+Allow:\s*\//.test(robots))
const disallowed = [...robots.matchAll(/^Disallow:\s*(\S+)/gm)].map((match) => match[1])
for (const [path] of policies) {
  for (const rule of disallowed) {
    const pattern = rule.replace(/[.+?^{}()|[\]\\]/g, '\\$&').replace(/\*/g, '.*')
    assert(!new RegExp(`^${pattern}`).test(path), `${path}: blocked by robots rule ${rule}`)
  }
}
console.log('PASS raw links on homepage/contact/payments, sitemap and robots rules')
