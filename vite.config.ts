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
}
const policyRewrites = new Map(hostingConfig.rewrites
  .filter((rule) => rule.destination.startsWith('/policies/'))
  .map((rule) => [rule.source, rule.destination]))

function configurePolicyRoutes(server: ViteDevServer | PreviewServer) {
  server.middlewares.use((req, _res, next) => {
    const requestUrl = new URL(req.url ?? '/', 'http://localhost')
    const destination = policyRewrites.get(requestUrl.pathname.replace(/\/$/, ''))
    if (destination) req.url = destination + requestUrl.search
    next()
  })
}
 
// https://vite.dev/config/
export default defineConfig({
  plugins: [{
    name: 'static-policy-routes',
    configureServer: configurePolicyRoutes,
    configurePreviewServer: configurePolicyRoutes,
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
