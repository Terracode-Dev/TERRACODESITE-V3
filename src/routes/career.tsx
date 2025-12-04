import Loader from '@/components/loader'
import Navbar from '@/components/navbar'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import Page from '@/pages/Career-page/page'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/career')({
  component: ()=>{
    const assets = [
      'career/career.jpg'
    ]

    const loaded = useAssetLoader(assets)

    if (!loaded) {
      return (
        <div className="flex justify-center items-center h-screen w-full bg-black">
          <Loader/>
        </div>
      )
    }

    return (
      <div className='mt-10'>
        <Navbar />
        <Page />
      </div>
    )
  },
})


