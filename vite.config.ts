import path from "path"
import { readFileSync } from "node:fs"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import type { PreviewServer, ViteDevServer } from "vite"
import { tanstackRouter } from '@tanstack/router-plugin/vite'
// Match production's static legal-page rewrites in development and preview.
const hostingConfig = JSON.parse(readFileSync(new URL('./vercel.json', import.meta.url), 'utf8')) as {
  rewrites: { source: string; destination: string }[]
  redirects: { source: string; destination: string; permanent: boolean }[]
}
const policyRewrites = new Map(hostingConfig.rewrites
  .filter((rule) => rule.source !== '/(.*)' && !['/contact', '/payments', '/t&s'].includes(rule.source))
  .map((rule) => [rule.source, rule.destination]))

function configurePolicyRoutes(server: ViteDevServer | PreviewServer) {
  server.middlewares.use((req, res, next) => {
    const requestUrl = new URL(req.url ?? '/', 'http://localhost')
    const redirect = hostingConfig.redirects.find(rule => rule.source === requestUrl.pathname)
    if (redirect) {
      res.writeHead(redirect.permanent ? 308 : 307, { Location: redirect.destination + requestUrl.search })
      res.end()
      return
    }
    const destination = policyRewrites.get(requestUrl.pathname.replace(/\/$/, ''))
    if (destination) req.url = destination + requestUrl.search
    next()
  })
}

function configurePublicPreview(server: PreviewServer) {
  server.middlewares.use((req, _res, next) => {
    const requestUrl = new URL(req.url ?? '/', 'http://localhost')
    const path = requestUrl.pathname.replace(/\/$/, '')
    if (['/contact', '/payments', '/t&s'].includes(path)) req.url = `${path}.html${requestUrl.search}`
    next()
  })
  configurePolicyRoutes(server)
}
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [{
    name: 'static-policy-routes',
    configureServer: configurePolicyRoutes,
    configurePreviewServer: configurePublicPreview,
  }, tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
