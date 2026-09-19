import { renderToString } from 'react-dom/server'
import { createMemoryHistory, createRouter, createRoute, RouterProvider } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async'
import type { HelmetServerState } from 'react-helmet-async'
import { ToastProvider } from './components/toast'
import { Route as rootRoute } from './routes/__root'
import { Route as homeRoute } from './routes/index'
import { Route as contactRoute } from './routes/contact'
import { Route as paymentRoute } from './routes/payments'
import { Route as policiesRoute } from './routes/t&s'

// Reuse the existing components and root layout; no alternate crawler UI.
const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: '/', component: homeRoute.options.component }),
  createRoute({ getParentRoute: () => rootRoute, path: '/contact', component: contactRoute.options.component }),
  createRoute({ getParentRoute: () => rootRoute, path: '/payments', component: paymentRoute.options.component }),
  createRoute({ getParentRoute: () => rootRoute, path: '/t&s', component: policiesRoute.options.component,
    validateSearch: policiesRoute.options.validateSearch }),
])

export async function render(path: string) {
  const router = createRouter({ routeTree, history: createMemoryHistory({ initialEntries: [path] }), isServer: true })
  await router.load()
  const context = {} as { helmet: HelmetServerState }
  const body = renderToString(<HelmetProvider context={context}><ToastProvider><RouterProvider router={router} /></ToastProvider></HelmetProvider>)
  const { helmet } = context
  return { body, head: [helmet.title, helmet.meta, helmet.link, helmet.script].map(tag => tag.toString()).join('') }
}
