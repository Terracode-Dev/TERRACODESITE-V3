// import Navbar from '@/components/navbar'

import { createRootRoute, Outlet, useLocation } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
// import { useAssetLoader } from '@/hooks/useAssetLoader'
import { AnimatePresence, motion } from 'framer-motion'
import Footer from '@/components/nfooter'
import { CookieBanner } from '@/components/CookieFile'
import NotFound from '@/components/NotFound'
import Navbar from '@/components/navbar'
import { ScrollToTop } from '@/components/scrolltop'
import Snowfall from '@/components/snow/snow-effect'
import { useEffect } from 'react'
import { trackPageView } from '@/lib/analytics'
import { Seo } from '@/components/Seo'


const isChristmasSeason = () => {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDate();
  return month === 11 && day >= 10 && day <= 31;
};



export const Route = createRootRoute({

  component: () => {
    const showChristmas = isChristmasSeason();
    const location = useLocation();

    useEffect(() => {
      trackPageView(location.pathname + location.search);
    }, [location.pathname, location.search]);

    const isNoFooterPage = location.pathname === '/success-page';

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
            <Seo pathname={location.pathname} />
            {showChristmas && <Snowfall />}
            <ScrollToTop />
            <CookieBanner />
            {/* <Navbar /> */}
            <Outlet />
            {!isNoFooterPage && <Footer />}
            {import.meta.env.DEV && <TanStackRouterDevtools />}
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
