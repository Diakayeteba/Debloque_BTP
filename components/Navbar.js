import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, toggleLanguage, t } = useLanguage()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.projects'), href: '/projets' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  const isActive = (href) => {
    if (href === '/') return router.pathname === '/'
    return router.pathname.startsWith(href.split('#')[0]) && href !== '/'
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo size={42} showText={true} scrolled={isScrolled} />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm transition-all duration-300 hover:text-secondary relative group ${
                  isScrolled ? 'text-accent' : 'text-gray-200'
                } ${isActive(link.href) ? 'text-secondary' : ''}`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                    isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-full border transition-all duration-300 text-sm font-semibold ${
                isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white text-white hover:bg-white hover:text-primary'
              }`}
              aria-label="Toggle language"
            >
              <span>{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
              <span>{language === 'fr' ? 'FR' : 'EN'}</span>
              <span className={`text-xs opacity-60 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                / {language === 'fr' ? 'EN' : 'FR'}
              </span>
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="bg-secondary text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-yellow-500 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={toggleLanguage}
              className={`flex items-center space-x-1 px-2 py-1 rounded-full border text-xs font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'border-primary text-primary'
                  : 'border-white text-white'
              }`}
            >
              <span>{language === 'fr' ? '🇫🇷' : '🇬🇧'}</span>
              <span>{language === 'fr' ? 'FR' : 'EN'}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 ${
                isScrolled ? 'text-primary hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-2xl shadow-xl p-4 border border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-3 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:bg-gray-50 hover:text-secondary ${
                  isActive(link.href) ? 'text-secondary bg-blue-50' : 'text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-gray-100">
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center bg-secondary text-white font-semibold text-sm px-5 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300"
              >
                {t('nav.contact')}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
