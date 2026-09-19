import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

await build({ configFile: false, plugins: [react()], resolve: { alias: { '@': resolve('src') } },
  ssr: { noExternal: ['react-helmet-async'] },
  build: { ssr: 'src/entry-prerender.tsx', outDir: 'dist-ssr', emptyOutDir: true,
    rollupOptions: { output: { entryFileNames: 'entry-prerender.mjs' } } } })
const { render } = await import(pathToFileURL(resolve('dist-ssr/entry-prerender.mjs')).href)
const template = await readFile('dist/index.html', 'utf8')
for (const path of ['/', '/contact', '/payments', '/t&s']) {
  const { body, head } = await render(path)
  if (!body.includes('<h1') || !body.includes('hello@terracodedev.com')) throw new Error(`Empty prerender: ${path}`)
  const html = template.replace(/<title>[\s\S]*?<\/title>/g, '')
    .replace(/<meta\b[^>]*(?:name="(?:description|robots)"|property="og:[^"]+")[^>]*>/g, '')
    .replace('</head>', `${head}<noscript><style>#root [style*="opacity:0"]{opacity:1!important;transform:none!important}</style></noscript></head>`)
    .replace(/<!-- app-start -->[\s\S]*?<!-- app-end -->/, `<!-- app-start --><div id="root">${body}</div><!-- app-end -->`)
  await writeFile(path === '/' ? 'dist/index.html' : `dist/${path.slice(1)}.html`, html)
  console.log(`Prerendered ${path}`)
}
