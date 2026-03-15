import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.projects'), href: '/projets' },
    { label: t('nav.services'), href: '/#services' },
    { label: t('nav.contact'), href: '/contact' },
  ]

  return (
    <footer className="bg-text-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 block w-fit">
              <Logo size={46} showText={true} scrolled={false} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
              {t('footer.description')}
            </p>

            {/* Social / Contact quick links */}
            <div className="flex space-x-3">
              <a
                href={`https://wa.me/22366724869?text=${encodeURIComponent('Bonjour Abdoulaye, je vous contacte depuis votre site web. Je souhaite discuter d\'un projet de construction.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.522 5.856L.057 23.5l5.797-1.52A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.357-.213-3.724.977.994-3.63-.233-.375A9.818 9.818 0 1112 21.818z" />
                </svg>
              </a>
              <a
                href="mailto:madoudiakayeteba@gmail.com"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="tel:+22370912403"
                className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center hover:bg-gray-500 transition-colors duration-300"
                aria-label="Phone"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
              {t('footer.quick_links')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center space-x-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-gray-600 group-hover:bg-secondary rounded-full transition-colors duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-widest">
              {t('footer.contact_info')}
            </h4>
            <ul className="space-y-4">
              <li>
                <div className="flex items-start space-x-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+22370912403" className="hover:text-secondary transition-colors duration-300 block">+223 70 91 24 03</a>
                    <a href="tel:+22366724869" className="hover:text-secondary transition-colors duration-300 block">+223 66 72 48 69</a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="mailto:madoudiakayeteba@gmail.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-secondary transition-colors duration-300 text-sm group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-secondary/20 transition-colors duration-300 flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span>madoudiakayeteba@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span>{t('contact.info.location')}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DÉBLOQUÉ BTP. {t('footer.rights')}
          </p>
          <p className="text-gray-600 text-sm flex items-center space-x-1">
            <span>{t('footer.made_with')}</span>
            <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
