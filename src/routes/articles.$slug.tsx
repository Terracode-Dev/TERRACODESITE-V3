import Page from '@/pages/Article-page/page'
import { articlesData } from '@/pages/Article-page/NewArticle'
import { createFileRoute, notFound } from '@tanstack/react-router'

export const Route = createFileRoute('/articles/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  if (!articlesData.some((article) => article.slug === slug)) {
    throw notFound()
  }
  return <div><Page slug={slug} /></div>
}
