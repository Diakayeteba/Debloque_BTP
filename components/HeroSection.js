import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '../context/LanguageContext'

export default function HeroSection() {
  const { t, language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      value: '15+',
      label: language === 'fr' ? "Ans d'expérience" : 'Years of experience',
    },
    {
      value: '50+',
      label: language === 'fr' ? 'Projets réalisés' : 'Completed projects',
    },
    {
      value: '100%',
      label: language === 'fr' ? 'Satisfaction client' : 'Client satisfaction',
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-hero-overlay" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-secondary/20 rounded-full animate-pulse pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-white/10 rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-secondary rounded-full animate-ping pointer-events-none" />
      <div
        className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary/60 rounded-full animate-ping pointer-events-none"
        style={{ animationDelay: '1s' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div
          className={`inline-flex items-center space-x-2 bg-secondary/20 border border-secondary/40 rounded-full px-4 py-2 mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
          <span className="text-secondary font-medium text-sm tracking-wide">
            Mali · Construction & Design
          </span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-shadow leading-tight mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {t('hero.title')}
        </h1>

        {/* Subheadline */}
        <p
          className={`text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <Link
            href="/projets"
            className="group flex items-center space-x-2 bg-secondary text-white font-semibold px-8 py-4 rounded-xl hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-lg"
          >
            <span>{t('hero.cta_projects')}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>

          <Link
            href="/contact"
            className="group flex items-center space-x-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary transition-all duration-300 text-lg"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>{t('hero.cta_contact')}</span>
          </Link>
        </div>

        {/* Stats bar */}
        <div
          className={`mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-4 text-center"
            >
              <div className="text-3xl font-bold text-secondary">{stat.value}</div>
              <div className="text-gray-300 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <svg
          className="w-5 h-5 text-white/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
