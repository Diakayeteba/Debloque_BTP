import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const avatarColors = ['bg-primary', 'bg-secondary', 'bg-accent']

export default function TestimonialsSection() {
  const { t } = useLanguage()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

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

  const testimonials = t('testimonials.items')

  return (
    <section ref={sectionRef} className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-800/30 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/30 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-widest mb-3">
            {t('testimonials.section_label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Array.isArray(testimonials) &&
            testimonials.map((item, i) => (
              <div
                key={i}
                className={`bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-500 hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Quote icon */}
                <div className="mb-6">
                  <svg
                    className="w-10 h-10 text-secondary/60"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M10 8C6.686 8 4 10.686 4 14v10h10V14H7c0-1.654 1.346-3 3-3V8zm18 0c-3.314 0-6 2.686-6 6v10h10V14h-7c0-1.654 1.346-3 3-3V8z" />
                  </svg>
                </div>

                {/* Quote text */}
                <p className="text-blue-100 leading-relaxed mb-8 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                  <div
                    className={`w-12 h-12 ${avatarColors[i % avatarColors.length]} rounded-full flex items-center justify-center flex-shrink-0 shadow-md`}
                  >
                    <span className="text-white font-bold text-lg">
                      {item.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">{item.name}</div>
                    <div className="text-blue-300 text-sm">{item.role}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex space-x-1 mt-4">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      className="w-4 h-4 text-secondary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
        </div>

        {/* Trust indicators */}
        <div
          className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { icon: '🏗️', value: '50+', label: t('about.projects_count').replace('50+ ', '') },
            { icon: '⭐', value: '5/5', label: t('testimonials.subtitle').split('\'')[0].trim() || 'Satisfaction' },
            { icon: '🏆', value: '15+', label: t('about.experience_years').replace('15+ ', '') },
            { icon: '🤝', value: '100%', label: 'Confiance' },
          ].map((item, i) => (
            <div
              key={i}
              className="text-center bg-white/5 rounded-xl p-5 border border-white/10"
            >
              <div className="text-3xl mb-2">{item.icon}</div>
              <div className="text-2xl font-bold text-secondary">{item.value}</div>
              <div className="text-blue-300 text-sm mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
