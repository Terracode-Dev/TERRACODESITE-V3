import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Navigate to="/" replace />
}
