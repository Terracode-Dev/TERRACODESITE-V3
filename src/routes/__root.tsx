// import Navbar from '@/components/navbar'

import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import { useAssetLoader } from '@/hooks/useAssetLoader'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '@/components/nfooter'
import { CookieBanner } from '@/components/CookieFile'
import NotFound from '@/components/NotFound'
import Navbar from '@/components/navbar'
import { ScrollToTop } from '@/components/scrolltop'
import SnowFlowerEffect  from '@/components/snow/snow-effect'


const isChristmasSeason = () => {
  const today = new Date();
  const month = today.getMonth(); 
  const day = today.getDate();
  return month === 11 && day >= 10 && day <= 31;
};



export const Route = createRootRoute({
  
  component: () => {
    const showChristmas = isChristmasSeason();

    return (
      <div>
        
        <AnimatePresence mode="wait">
          
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {showChristmas &&<SnowFlowerEffect />}
            <ScrollToTop/>
            <CookieBanner />
            {/* <Navbar /> */}
            <Outlet />
            <Footer />
            <TanStackRouterDevtools />
          </motion.div>
        </AnimatePresence>
      </div>
    )
  },

  notFoundComponent: () => (
    <div className='mt-10'>
      <Navbar />
      <NotFound />
    </div>
  ),
})