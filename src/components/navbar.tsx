// Navbar.tsx
import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navbar = {
  links: [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/service' },
    { name: 'Contact', path: '/contact' },
    { name: 'About', path: '/about' },
    { name: 'Career', path: '/career' },
    { name: 'Portfolio', path: '/portfolio' },
    // { name: 'Pricing', path: '/pricing' },
  ],
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((o) => !o)

  const linkBase = `rounded-[32px] h-12 flex items-center justify-center py-3 px-4 transition-colors text-[#8e8e8e] font-light hover:bg-black hover:text-amber-600`
  const linkActive = `[&.active]:text-amber-600  [&.active]:bg-black`

  return (
    <>
      {/* Desktop & Mobile Navbar */} 
      <div className="w-full relative flex items-center justify-between px-4 sm:px-8 lg:px-[60px] text-xl font-lufga container mx-auto">
        <Link to="/">
          <img className="w-20 h-12 sm:w-[102px] sm:h-[65px]" alt="Logo" src="hero/Frame 9.png" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden xl:flex bg-[#141414] backdrop-filter backdrop-blur-lg rounded-[40px] py-2 px-6 gap-6">
          {navbar.links.map((link) => (
            <Link
              key={link.path + link.name}
              to={link.path}
              className={`${linkBase} ${linkActive}`}
              activeOptions={{ exact: true }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link to="/contact" >
        <div className="hidden xl:flex w-48 rounded-[32px] bg-gradient-to-r from-[#f56d04] to-[#fb9709] h-16 items-center justify-center text-white cursor-pointer hover:shadow-lg transition-shadow">
          <div className="tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
        </div>
        </Link>
        {/* Mobile Hamburger */}
        <button onClick={toggleMenu} className="xl:hidden p-2 rounded-full bg-[#141414] text-white hover:bg-black transition-colors">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`xl:hidden fixed inset-0 z-50 transition-opacity duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={toggleMenu} />

        <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#141414] shadow-xl transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <img className="w-20 h-12" alt="Logo" src="Frame 9.png" />
            <button onClick={toggleMenu} className="p-2 rounded-lg text-white hover:bg-black">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col p-6 space-y-4">
            {navbar.links.map((link, idx) => (
              <div
                key={link.path + link.name}
                className={`transform transition-all duration-500 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: isMenuOpen ? `${idx * 200}ms` : '0ms' }}
              >
                <Link
                  to={link.path}
                  onClick={toggleMenu}
                  className={`${linkBase.replace('rounded-[32px]', 'rounded-[16px]')} ${linkActive}`}
                  activeOptions={{ exact: true }}
                >
                  {link.name}
                </Link>
              </div>
            ))}

            {/* Mobile CTA Button */}
            <Link to="/contact">
            <div
              className={`mt-6 transform transition-all duration-300 ease-out ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
              style={{ transitionDelay: isMenuOpen ? `${navbar.links.length * 200}ms` : '0ms' }}
            >
              <div className="rounded-[16px] bg-gradient-to-r from-[#f56d04] to-[#fb9709] p-4 text-center text-white cursor-pointer hover:shadow-lg transition-shadow">
                <div className="tracking-[0.04px] leading-6 font-semibold">Get a Quote</div>
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
