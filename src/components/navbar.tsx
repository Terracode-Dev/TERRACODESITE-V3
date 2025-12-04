import { Link } from '@tanstack/react-router'
import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// const isChristmasSeason = () => {
//   const today = new Date();
//   const month = today.getMonth(); 
//   const day = today.getDate();
//   return month === 11 && day >= 10 && day <= 31;
// };

const navbar = {
  links: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' }, // parent dropdown
    { name: 'Partnerships', path: '/partnerships' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'Career', path: '/career' },
    { name: 'Portfolio', path: '/digitalportfolio' },
    // { name: 'Pricing', path: '/pricing' },
    
  ],
  serviceLinks: [
    { name: 'UX Design', img: "/mainicons/icons8-wacom-tablet-96.png", path: '/ux-design' },
    { name: 'Business Softwares', img: "/mainicons/icons8-laptop-coding-96.png", path: '/business-softwares' },
    { name: 'Website Solutions', img: "/mainicons/icons8-software-development-96.png", path: '/website-solutions' },
    { name: 'Mobile Apps', img: "/mainicons/icons8-phonelink-setup-96.png", path: '/mobile-apps' },
    { name: 'AI Solutions', img: "/mainicons/icons8-artificial-intelligence-96.png", path: '/ai-solutions' }, 
    { name: 'Cloud Solutions', img: "/mainicons/icons8-cloud-connection-97.png", path: '/cloud-solutions' },  
  ],
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false)
  const [isQuoteButtonHovered, setIsQuoteButtonHovered] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleMenu = () => setIsMenuOpen((o) => !o)
  const toggleDropdown = () => setIsDropdownOpen((o) => !o)
  const toggleMobileDropdown = () => setIsMobileDropdownOpen((o) => !o)

  // const showChristmas = isChristmasSeason();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Close mobile menu when navigating
  useEffect(() => {
    return () => {
      setIsMenuOpen(false)
      setIsMobileDropdownOpen(false)
    }
  }, [])

  const linkBase =
    `rounded-[32px] h-12 flex items-center justify-center py-3 px-4 transition-colors text-[#8e8e8e] font-light hover:bg-black hover:text-amber-600`
  const linkActive = `[&.active]:text-amber-600  [&.active]:bg-black`

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <div className="w-full relative flex items-center justify-between px-4 sm:px-8 lg:px-[60px] text-xl font-lufga container mx-auto">
        <Link to="/">
          {/* <img className={showChristmas? "relative w-20 h-14 sm:w-[135px] sm:h-[90px] -top-3" :"w-20 h-12 sm:w-[102px] sm:h-[65px]"} alt="Logo" src={showChristmas ? "hero/chrilogo.png" : "hero/Frame 9.png"} /> */}
          <img className="w-20 h-12 sm:w-[102px] sm:h-[65px]" alt="Logo" src= "hero/Frame 9.png" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex bg-[#141414] rounded-[40px] py-2 px-6 gap-6 items-center">
          {navbar.links.map((link) =>
            link.name === "Services" ? (
              <div key={link.name} ref={dropdownRef} className="relative">
                <button
                  onClick={toggleDropdown}
                  className={`${linkBase} ${linkActive} gap-2`}
                >
                  {link.name}
                  <ChevronDown size={18} className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="absolute z-10 left-0 top-full mt-2  shadow-lg rounded-3xl overflow-hidden w-96 backdrop-blur-xl border border-zinc-600 p-3"
                    >
                      {navbar.serviceLinks.map((s) => (
                        <Link
                          key={s.path}
                          to={s.path}
                          className="block px-4 py-2 text-white/90  hover:text-amber-500 md:flex items-center justify-start"
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          <img src={s.img} className="inline-block mr-4 size-6 "/>
                          {s.name}
                          
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.path + link.name}
                to={link.path}
                className={`${linkBase} ${linkActive}`}
                activeOptions={{ exact: true }}
              >
                {link.name}
              </Link>
            )
          )}
        </div>

        {/* Desktop CTA */}
         <Link to="/contact">
          <div 
            className={`
              hidden xl:flex relative cursor-pointer
              overflow-hidden
              rounded-[32px]
              hover:scale-105
        transition-transform duration-500
              p-[2px] 
             w-48 h-16
            `}
            onMouseEnter={() => setIsQuoteButtonHovered(true)}
            onMouseLeave={() => setIsQuoteButtonHovered(false)}
          >
            <div 
              className={`
                transition-all duration-[3000ms] ease-in-out
                flex items-center justify-center 
                w-full h-full 
                rounded-[32px] text-white
              `}
              style={{
                background: isQuoteButtonHovered 
                  ? 'linear-gradient(to left, #f56d04, #fb9709)' 
                  : 'linear-gradient(to right, #f56d04, #fb9709)'
              }}
            >
              <div className="tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
            </div>
          </div>
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="xl:hidden p-2 rounded-full bg-[#141414] text-white hover:bg-black transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-500 ${
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMenu} />

        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#141414] shadow-xl transform transition-transform duration-500 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <img className="w-20 h-12" alt="Logo" src="/hero/Frame 9.png" />
            <button onClick={toggleMenu} className="p-2 rounded-lg text-white hover:bg-black">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-4">
            {navbar.links.map((link) =>
              link.name === "Services" ? (
                <div key={link.name} className="flex flex-col">
                  <button
                    onClick={toggleMobileDropdown} // Use the mobile-specific toggle
                    className="rounded-[16px] px-4 py-2 text-gray-300 text-left flex items-center justify-between hover:text-amber-500"
                  >
                    {link.name}
                    <ChevronDown size={18} className={`transition-transform ${isMobileDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isMobileDropdownOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col pl-6 border-l border-gray-700 mt-2 space-y-2"
                      >
                        {navbar.serviceLinks.map((s) => (
                          <Link
                            key={s.path}
                            to={s.path}
                            onClick={() => {
                              setIsMobileDropdownOpen(false)
                              setIsMenuOpen(false)
                            }}
                            className="px-2 py-2 text-gray-300 hover:text-amber-500 border-b border-gray-700 last:border-none"
                          >
                            {s.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={toggleMenu}
                  className="rounded-[16px] px-4 py-2 text-gray-300 hover:text-amber-500"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}
