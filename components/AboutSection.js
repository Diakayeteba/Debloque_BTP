import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function AboutSection() {
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

  const highlights = t('about.highlights')

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Side */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            {/* Main portrait */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ID_pro_Ablo.png"
                alt="Abdoulaye KEITA"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              {/* Name overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight">Abdoulaye KEITA</p>
                <p className="text-secondary text-sm">Technicien en Bâtiment · Mali</p>
              </div>
            </div>

            {/* Floating experience card */}
            <div className="absolute -bottom-6 -right-6 bg-secondary rounded-2xl shadow-xl p-6 max-w-[180px]">
              <div className="text-4xl font-bold text-white">15+</div>
              <div className="text-white/90 text-sm mt-1 leading-tight">
                {t('about.experience_years')}
              </div>
            </div>

            {/* Floating projects card */}
            <div className="absolute -top-6 -left-6 bg-primary rounded-2xl shadow-xl p-5 max-w-[160px]">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-blue-200 text-sm mt-1 leading-tight">
                {t('about.projects_count')}
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 top-4 left-4 w-full h-full border-2 border-secondary/30 rounded-2xl" />
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <span className="section-label">{t('about.section_label')}</span>

            {/* Nom du professionnel */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-0.5 bg-secondary" />
              <span className="text-secondary font-bold text-lg tracking-wide uppercase">
                Abdoulaye KEITA
              </span>
            </div>

            <h2 className="section-title">{t('about.title')}</h2>
            <p className="text-accent text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Experience + Projects metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-background rounded-xl p-5 border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <span className="font-bold text-primary">{t('about.experience_years')}</span>
                </div>
                <p className="text-accent text-sm">{t('about.experience_desc')}</p>
              </div>

              <div className="bg-background rounded-xl p-5 border border-gray-100">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <span className="font-bold text-secondary">{t('about.projects_count')}</span>
                </div>
                <p className="text-accent text-sm">{t('about.projects_desc')}</p>
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-bold text-text-dark text-lg mb-4">{t('about.highlights_title')}</h3>
              <ul className="space-y-3">
                {Array.isArray(highlights) &&
                  highlights.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3.5 h-3.5 text-secondary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-accent">{item}</span>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
