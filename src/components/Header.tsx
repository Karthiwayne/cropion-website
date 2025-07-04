'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Layers } from 'lucide-react'
import ContactModal from './ContactModal'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-[#0ea47a] to-[#12d39d] rounded-lg flex items-center justify-center">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">
                Cropion
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {['Product', 'Resources', 'Customers', 'Pricing'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm">
                Login
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-[#0ea47a] to-[#12d39d] hover:from-[#0a7557] hover:to-[#0ea47a] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-sm hover:shadow-md"
              >
                Contact us
              </button>
            </div>

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