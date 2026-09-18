import { readFile, mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ts from 'typescript'

const source = await readFile('src/pages/T&C/sections/data.tsx', 'utf8')
const javascript = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText
const { articlesData } = await import(`data:text/javascript;base64,${Buffer.from(javascript).toString('base64')}`)
const directory = join('public', 'policies')
await mkdir(directory, { recursive: true })
const h = React.createElement
const slug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
const url = (article) => `/policies/${slug(article.title)}.html`
const policyMeta = [
  ['privacy-policy', 'privacy-policy.html'],
  ['terms-of-service', 'terms-conditions.html'],
  ['refund-policy', 'refund-policy.html'],
].map(([name, file]) => `<meta name="${name}" content="https://www.terracodedev.com/policies/${file}">`).join('')
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
})[character])

function PolicyPage({ article }) {
  return h(React.Fragment, null,
    h('header', null, h('a', { href: '/' }, h('img', { src: '/hero/Frame 9.png', alt: 'Terracode' })),
      h('nav', null, ['Home', 'Services', 'Partnerships', 'About Us', 'Contact', 'Portfolio'].map((label, i) =>
        h('a', { key: label, href: ['/', '/service', '/partnerships', '/about', '/contact', '/digitalportfolio'][i] }, label)))),
    h('main', null,
      h('article', null, h('h1', null, article.title), article.date && h('div', { className: 'date' }, article.date),
        article.sections.map((section, i) => h('section', { key: i },
          section.title && h('h2', null, section.title), section.content && h('p', null, section.content),
          section.subsections?.map((sub, j) => h('div', { key: j }, sub.subtopic && h('h3', null, sub.subtopic),
            ...['subDescription', 'subDescription1', 'subDescription2', 'subDescription3'].filter((key) => sub[key]).map((key) => h('p', { key }, sub[key]))))))),
      h('aside', null, h('h2', null, 'Other Policies'), articlesData.filter((other) => other.id !== article.id).map((other) =>
        h('a', { className: 'card', href: url(other), key: other.id }, h('h3', null, other.title), h('p', null, other.description), h('span', null, 'Read More →'))))),
    h('footer', null, h('span', null, `© ${new Date().getFullYear()} Terracode Private Limited. All rights reserved.`),
      h('nav', null, ['Terms & Conditions', 'Privacy Policy', 'End-User License Agreement (EULA)', 'Refund Policy'].map((title) => {
        const other = articlesData.find((item) => item.title === title)
        return h('a', { key: title, href: url(other) }, title)
      }))))
}

const css = `*{box-sizing:border-box}body{margin:0;background:#000;color:#fff;font-family:Arial,sans-serif}a{color:inherit;text-decoration:none}a:hover{text-decoration:underline;color:#fda10a}header{max-width:1280px;margin:40px auto 0;padding:0 24px;display:flex;align-items:center;justify-content:space-between;gap:24px}header img{width:102px;height:65px;object-fit:cover}header nav{display:flex;flex-wrap:wrap;gap:24px;color:#aaa}main{max-width:1280px;margin:40px auto 80px;padding:48px 24px;display:grid;grid-template-columns:2fr 1fr;gap:40px}article h1{font-size:45px;color:#fda10a;font-weight:400;margin:0 0 24px}article h2{font-size:30px;font-weight:400;margin:32px 0 16px}article h3{font-size:24px;font-weight:400;margin:16px 0}article p{font-size:22px;color:#a4a4a4;line-height:1.5;margin:12px 0}.date{color:#a4a4a4;font-size:22px}aside h2{font-size:30px;color:#fda10a;text-align:center;font-weight:400;margin:0 0 24px}.card{display:block;background:#171717;border-radius:16px;padding:16px;margin:0 0 24px}.card h3{font-size:24px;color:#fda10a;font-weight:400;margin:0 0 8px}.card p{font-size:20px;color:#a4a4a4;line-height:1.4}.card span{color:#fda10a}footer{background:#262626;padding:24px 40px;display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap}footer nav{display:flex;gap:24px;flex-wrap:wrap;text-decoration:underline}@media(max-width:800px){header{flex-direction:column}header nav{justify-content:center}main{grid-template-columns:1fr;padding:24px}article h1{font-size:32px}article p{font-size:18px}}`

for (const article of articlesData) {
  const filename = `${slug(article.title)}.html`
  const title = escapeHtml(`${article.title} | Terracode`)
  const isPrivacyPolicy = slug(article.title) === 'privacy-policy'
  const description = escapeHtml(isPrivacyPolicy
    ? 'Learn how Terracode collects, uses, stores and protects personal data, your privacy rights, and how to contact us about data protection.'
    : article.description)
  const socialMeta = isPrivacyPolicy ? [
    '<meta property="og:site_name" content="Terracode">',
    '<meta property="og:image" content="https://www.terracodedev.com/logo.png">',
    '<meta property="og:image:alt" content="Terracode logo">',
    '<meta name="twitter:card" content="summary">',
    `<meta name="twitter:title" content="${title}">`,
    `<meta name="twitter:description" content="${description}">`,
    '<meta name="twitter:image" content="https://www.terracodedev.com/logo.png">',
    '<meta name="twitter:image:alt" content="Terracode logo">',
  ].join('') : ''
  const canonical = `https://www.terracodedev.com${url(article)}`
  const html = `<!doctype html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title><meta name="description" content="${description}"><meta name="robots" content="index, follow">${policyMeta}<link rel="canonical" href="${canonical}"><meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><style>${css}</style></head><body>${renderToStaticMarkup(h(PolicyPage, { article }))}</body></html>`
  await writeFile(join(directory, filename), html.replace('<style>', `${socialMeta}<style>`))
}
