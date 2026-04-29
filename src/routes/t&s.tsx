import Tpage from '@/pages/T&C/Tpage'
import { createFileRoute } from '@tanstack/react-router'

type TermsConditionsSearch = {
  policy?: string
}

export const Route = createFileRoute('/t&s')({
  validateSearch: (search: Record<string, unknown>): TermsConditionsSearch => {
    return {
      policy: search.policy as string | undefined,
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Tpage /></div>
}
