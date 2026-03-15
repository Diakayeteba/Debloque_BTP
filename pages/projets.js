import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useLanguage } from '../context/LanguageContext'

const projectImages = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80',
]

const categoryKeys = {
  fr: {
    all: 'Tous',
    'Édifice religieux': 'Religieux',
    'Établissement éducatif': 'Éducatif',
    'Infrastructure industrielle': 'Industriel',
    'Construction résidentielle': 'Résidentiel',
    'Bâtiment commercial': 'Commercial',
    'Infrastructure publique': 'Public',
  },
  en: {
    all: 'All',
    'Religious building': 'Religious',
    'Educational institution': 'Educational',
    'Industrial infrastructure': 'Industrial',
    'Residential construction': 'Residential',
    'Commercial building': 'Commercial',
    'Public infrastructure': 'Public',
  },
}

export default function ProjetsPage() {
  const { t, language } = useLanguage()
  const [activeFilter, setActiveFilter] = useState('all')

  const allProjects = t('projects.items')
  const projects = Array.isArray(allProjects) ? allProjects : []

  const categories = language === 'fr' ? categoryKeys.fr : categoryKeys.en
  const filterButtons = [
    { key: 'all', label: categories.all },
    ...Object.entries(categories)
      .filter(([key]) => key !== 'all')
      .map(([key, label]) => ({ key, label })),
  ]

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.type === activeFilter)

  return (
    <>
      <Head>
        <title>
          {language === 'fr'
            ? 'Nos Projets | DÉBLOQUÉ BTP Mali'
            : 'Our Projects | DÉBLOQUÉ BTP Mali'}
        </title>
        <meta
          name="description"
          content={
            language === 'fr'
              ? "Découvrez tous nos projets de construction réalisés au Mali : mosquées, universités, complexes industriels et résidences privées."
              : "Discover all our construction projects completed in Mali: mosques, universities, industrial complexes and private residences."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navbar />

      <main>
        {/* Page Hero */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 border border-white rounded-full" />
            <div className="absolute bottom-0 right-20 w-48 h-48 border border-secondary rounded-full" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
              {t('projects.section_label')}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('projects_page.title')}
            </h1>
            <p className="text-blue-200 text-xl max-w-2xl mx-auto">
              {t('projects_page.subtitle')}
            </p>

            {/* Breadcrumb */}
            <nav className="flex items-center justify-center space-x-2 mt-6 text-sm text-blue-300">
              <Link href="/" className="hover:text-white transition-colors duration-300">
                {t('nav.home')}
              </Link>
              <span>/</span>
              <span className="text-white">{t('nav.projects')}</span>
            </nav>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {filterButtons.map((btn) => (
                <button
                  key={btn.key}
                  onClick={() => setActiveFilter(btn.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                    activeFilter === btn.key
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-white text-accent border-gray-200 hover:border-primary hover:text-primary'
                  }`}
                >
                  {btn.label}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((project, i) => (
                <div
                  key={i}
                  className="group card overflow-hidden"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={projectImages[i % projectImages.length]}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-accent text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-accent/70 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-1.5">
                        <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>{project.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-accent">
                <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-lg">{language === 'fr' ? 'Aucun projet dans cette catégorie.' : 'No projects in this category.'}</p>
              </div>
            )}

            {/* CTA */}
            <div className="text-center mt-16 p-10 bg-primary rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">
                {language === 'fr' ? 'Vous avez un projet ?' : 'Do you have a project?'}
              </h3>
              <p className="text-blue-200 mb-6 max-w-lg mx-auto">
                {language === 'fr'
                  ? "Discutons de votre projet et voyons comment nous pouvons vous aider à le réaliser."
                  : "Let's discuss your project and see how we can help you bring it to life."}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-secondary text-white font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>{t('hero.cta_contact')}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
