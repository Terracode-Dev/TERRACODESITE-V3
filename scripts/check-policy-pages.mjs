import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

// Run against `npm run preview`, or pass the deployed origin after release.
const origin = process.argv[2] ?? 'http://127.0.0.1:4173'
const canonicalOrigin = 'https://www.terracodedev.com'
const routes = JSON.parse(await readFile('src/data/policy-routes.json', 'utf8'))
const source = await readFile('src/pages/T&C/sections/data.tsx', 'utf8')
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext } }).outputText
const { articlesData } = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`)
const escape = value => renderToStaticMarkup(React.createElement(React.Fragment, null, value))
const policies = articlesData.map(article => [
  routes[article.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')],
  article.title === 'Terms & Conditions' ? 'Terms and Conditions' : article.title,
  escape(article.title), article,
])
const primaryPaths = ['/privacy-policy', '/terms-and-conditions', '/refund-policy']

async function get(path, method = 'GET') {
  const response = await fetch(new URL(path, origin), {
    method, redirect: 'manual', signal: AbortSignal.timeout(15000),
  })
  assert.equal(response.status, 200, `${method} ${path}: expected direct HTTP 200`)
  assert(!response.headers.has('location'), `${path}: unexpected redirect`)
  assert(!/noindex|none/i.test(response.headers.get('x-robots-tag') ?? ''), `${path}: indexing blocked`)
  return response
}

for (const [path, title, heading, article] of policies) {
  const head = await get(path, 'HEAD')
  assert(head.headers.get('content-type')?.includes('text/html'))
  const response = await get(path)
  const html = await response.text()
  assert(html.includes(`<title>${title} | Terracode</title>`), `${path}: title missing`)
  assert(html.includes(`<h1>${heading}</h1>`), `${path}: heading missing`)
  assert(html.includes('<section>'), `${path}: policy content missing`)
  const strings = value => typeof value === 'string' ? [value] : Object.values(value).flatMap(strings)
  for (const text of strings(article.sections)) assert(html.includes(escape(text)), `${path}: missing policy text: ${text.slice(0, 80)}`)
  assert(html.includes(`<link rel="canonical" href="${canonicalOrigin}${path}">`), `${path}: canonical incorrect`)
  assert(/<meta name="description" content="[^"]+">/.test(html), `${path}: description missing`)
  assert(!/<meta[^>]+content="[^"]*noindex/i.test(html), `${path}: noindex present`)
  assert(!html.includes('id="root"'), `${path}: received SPA shell`)
  for (const property of ['url', 'title', 'description']) assert(html.includes(`property="og:${property}"`), `${path}: missing OG ${property}`)
  assert(html.includes('<meta name="robots" content="index, follow">'))
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1] ?? 'null')
  assert(schema?.name === 'Terracode Private Limited' && schema?.telephone === '+94112838640', `${path}: company schema missing`)
  const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? ''
  for (const target of primaryPaths) assert(footer.includes(`href="${target}"`), `${path}: footer missing ${target}`)
  for (const [target] of policies) if (target !== path) assert(html.includes(`href="${target}"`), `${path}: related policy link missing ${target}`)
  console.log(`PASS HEAD/GET ${path}: HTTP 200, full policy HTML, metadata and footer links`)
}

for (const path of ['/', '/contact', '/payments']) {
  const html = await (await get(path)).text()
  for (const target of primaryPaths) assert(html.includes(`href="${target}"`), `${path}: raw HTML missing ${target}`)
  assert(/<h1\b/.test(html) && html.includes('hello@terracodedev.com') && html.includes('Maharagama'), `${path}: public content missing`)
  assert(html.includes(`href="${canonicalOrigin}${path}"`), `${path}: canonical missing`)
  assert(html.includes('application/ld+json'), `${path}: structured data missing`)
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

for (const [oldSlug, target] of [['privacy-policy', '/privacy-policy'], ['terms-conditions', '/terms-and-conditions'], ['refund-policy', '/refund-policy']]) {
  for (const suffix of ['', '.html']) {
    const response = await fetch(new URL(`/policies/${oldSlug}${suffix}`, origin), { redirect: 'follow', signal: AbortSignal.timeout(15000) })
    assert.equal(response.status, 200)
    const html = await response.text()
    assert(html.includes(`href="${canonicalOrigin}${target}"`) && !html.includes('id="root"'), `Legacy alias failed: ${oldSlug}${suffix}`)
  }
}
console.log('PASS six legacy policy aliases resolve to canonical policy content')
