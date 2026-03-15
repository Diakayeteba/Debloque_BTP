import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ServicesSection from '../components/ServicesSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

export default function Home() {
  const { language } = useLanguage()

  return (
    <>
      <Head>
        <title>
          {language === 'fr'
            ? 'DÉBLOQUÉ BTP | Expert en Construction & Dessin Technique au Mali'
            : 'DÉBLOQUÉ BTP | Construction & Technical Drawing Expert in Mali'}
        </title>
        <meta
          name="description"
          content={
            language === 'fr'
              ? "Technicien en bâtiment et concepteur de projets de construction au Mali. Expert en dessin architectural, supervision de chantiers et réalisation de grandes infrastructures."
              : "Building technician and construction project designer in Mali. Expert in architectural drawing, site supervision and construction of major infrastructures."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="DÉBLOQUÉ BTP | Construction & Design Mali" />
        <meta property="og:description" content="Expert en construction et dessin technique au Mali" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://debloque-btp.ml" />
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection limit={4} />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  )
}
