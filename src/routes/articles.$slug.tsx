import Page from '@/pages/Article-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  return <div><Page slug={slug} /></div>
}
