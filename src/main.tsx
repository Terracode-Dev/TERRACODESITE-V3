import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { HelmetProvider } from 'react-helmet-async'
import { ToastProvider } from '@/components/toast';

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { initGA } from './lib/analytics'

initGA()

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

router.subscribe("onResolved", () => {
  router.state.location.pathname + router.state.location.searchStr,
    document.title
})

// Render the app
const rootElement = document.getElementById('root')!
// Replace the static policy navigation with the application when JavaScript runs.
const root = ReactDOM.createRoot(rootElement)
root.render(
  <StrictMode>
    <HelmetProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </HelmetProvider>
  </StrictMode>
)
