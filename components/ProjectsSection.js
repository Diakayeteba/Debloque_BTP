import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

const projectImages = [
  'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
  'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
  'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  'https://images.unsplash.com/photo-1542621334-a254cf47733d?w=800&q=80',
]

export default function ProjectsSection({ limit = 4 }) {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const allProjects = t('projects.items')
  const projects = Array.isArray(allProjects) ? allProjects.slice(0, limit) : []

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">{t('projects.section_label')}</span>
          <h2 className="section-title">{t('projects.title')}</h2>
          <p className="section-subtitle">{t('projects.subtitle')}</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative card overflow-hidden cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={projectImages[i % projectImages.length]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-accent text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Location + Type */}
                <div className="flex items-center justify-between text-xs text-accent/70">
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span>{t('projects.type_label')}: {project.type}</span>
                  </div>
                </div>
              </div>

              {/* Hover overlay arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-lg">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {limit < 6 && (
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              href="/projets"
              className="inline-flex items-center space-x-2 bg-primary text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>{t('projects.cta')}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
