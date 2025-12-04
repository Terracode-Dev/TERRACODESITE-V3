import { createFileRoute } from '@tanstack/react-router'
import Page from '@/pages/main-page/page'
import { useAssetLoader } from '@/hooks/useAssetLoader'
import Loader from '@/components/loader'


export const Route = createFileRoute('/')({
  component: () => {
    const assets = [
      'hero/Hero.mp4',
      'images/bg.webp',
      'hero/Frame 9.png',
      '/sl.png',
      'processcard/vector.svg',
      '/image 1.svg',
      'processcard/2.svg',
      'processcard/3.svg',
      'processcard/4.svg',
      '/Property 23.png'
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
      <div >
        
        <Page />
      </div>
    )
  },
})

