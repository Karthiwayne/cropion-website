'use client'

import { useState, useEffect } from 'react'
import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import ContactModal from './ContactModal'
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Helper to swap /en, /hi, /ta at beginning of path (if present)
  const locales = [
    { code: 'en', label: 'English' },
    { code: 'hi', label: 'हिन्दी' },
    { code: 'ta', label: 'தமிழ்' },
  ];

  function localePath(path: string, newLocale: string) {
    // Remove current locale
    const pathWithoutLocale = path.replace(/^\/(en|hi|ta)(\/|$)/, '/')
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
  }

  const handleLocaleChange = (newLocale: string) => {
    router.push(localePath(pathname, newLocale))
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-sm' 
          : 'bg-white'
      }`}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}

<Link href="/">
  <div className="flex items-center space-x-3 cursor-pointer">
    <img src="/cropion-logo.svg" width={160} alt="Cropion Logo" />
  </div>
</Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
{['Product', 'FAQ'].map((item) => (
                <a 
                  key={item}
                  href={`/${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact us
              </button>
              {/* Language Switcher Dropdown UI */}
              <div className="ml-6">
                <select
                  className="border-gray-300 border rounded-lg px-3 py-1 text-gray-700 text-sm focus:ring-2 focus:ring-[#0ea47a] bg-white shadow-sm hover:shadow-md transition duration-200 min-w-[90px]"
                  value={locale}
                  onChange={e => {
                    handleLocaleChange(e.target.value)
                  }}
                  aria-label="Change language"
                  title="Select language"
                >
                  {locales.map(({ code, label }) => (
                    <option key={code} value={code}>{label}</option>
                  ))}
                </select>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <nav className="px-6 py-4 space-y-3">
              {['Product', 'Resources', 'Customers', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="block text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="block w-full text-left text-gray-700 hover:text-gray-900 transition-colors py-2 font-medium text-sm">
                  Login
                </button>
                <button 
                  onClick={() => {
                    setIsContactModalOpen(true)
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                >
                  Contact us
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  )
}

export default Header