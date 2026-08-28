import Page from '@/pages/Article-page/page'
import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router'

export const Route = createFileRoute('/articles')({
  component: RouteComponent,
})

function RouteComponent() {
  const location = useLocation()

  // This file is also the layout route for /articles/$slug. Render the
  // landing article only at /articles, and let the slug child render itself.
  return location.pathname.replace(/\/$/, '') === '/articles'
    ? <Page />
    : <Outlet />
}
