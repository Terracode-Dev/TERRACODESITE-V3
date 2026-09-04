import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/dGVycmFjb2RlCg')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to="/digitalportfolio" replace />
}
