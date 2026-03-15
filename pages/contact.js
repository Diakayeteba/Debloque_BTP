import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

export default function ContactPage() {
  const { t, language } = useLanguage()

  return (
    <>
      <Head>
        <title>
          {language === 'fr'
            ? 'Contactez-nous | DÉBLOQUÉ BTP Mali'
            : 'Contact Us | DÉBLOQUÉ BTP Mali'}
        </title>
        <meta
          name="description"
          content={
            language === 'fr'
              ? "Contactez notre équipe pour discuter de votre projet de construction au Mali. Téléphone, WhatsApp, email disponibles."
              : "Contact our team to discuss your construction project in Mali. Phone, WhatsApp, email available."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-0 right-20 w-48 h-48 border border-secondary rounded-full" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              {t('contact.section_label')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('contact_page.title')}
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              {t('contact_page.subtitle')}
            </p>

            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 mt-6 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors duration-300">
                {t('nav.home')}
              </Link>
              <span>/</span>
              <span className="text-white">{t('nav.contact')}</span>
            </nav>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
