import { createFileRoute } from '@tanstack/react-router'
import Page from '@/pages/main-page/page'


export const Route = createFileRoute('/')({
  component: () => {
    return (
      <div >
        
        <Page />
      </div>
    )
  },
})

