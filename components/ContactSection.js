import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function ContactSection() {
  const { t, language } = useLanguage()
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'success' | 'error'

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

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setStatus('success')
        setFormState({ name: '', email: '', phone: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus(null), 5000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus(null), 5000)
    }
  }

  const contactItems = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: '+223 70 91 24 03',
      sublabel: '+223 66 72 48 69',
      href: 'tel:+22370912403',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.555 4.122 1.522 5.856L.057 23.5l5.797-1.52A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.374l-.357-.213-3.724.977.994-3.63-.233-.375A9.818 9.818 0 1112 21.818z" />
        </svg>
      ),
      label: t('contact.info.whatsapp_text'),
      sublabel: '+223 66 72 48 69',
      href: `https://wa.me/22366724869?text=${encodeURIComponent(
        language === 'fr'
          ? 'Bonjour Abdoulaye, je vous contacte depuis votre site web. Je souhaite discuter d\'un projet de construction. Pouvez-vous me donner plus d\'informations ?'
          : 'Hello Abdoulaye, I am contacting you from your website. I would like to discuss a construction project. Could you give me more information?'
      )}`,
      isWhatsApp: true,
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: 'madoudiakayeteba@gmail.com',
      href: 'mailto:madoudiakayeteba@gmail.com',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: t('contact.info.location'),
      href: 'https://maps.google.com/?q=Bamako,Mali',
    },
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="section-label">{t('contact.section_label')}</span>
          <h2 className="section-title">{t('contact.title')}</h2>
          <p className="section-subtitle">{t('contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Contact Info */}
          <div
            className={`lg:col-span-2 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="bg-primary rounded-2xl p-8 h-full text-white">
              <h3 className="text-xl font-bold mb-8">{t('contact.info.title')}</h3>

              <div className="space-y-6">
                {contactItems.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`flex items-center space-x-4 group p-3 rounded-xl transition-all duration-300 hover:bg-white/10 ${
                      item.isWhatsApp ? 'text-green-400' : 'text-blue-200'
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        item.isWhatsApp
                          ? 'bg-green-500/20 group-hover:bg-green-500/30'
                          : 'bg-white/10 group-hover:bg-secondary'
                      }`}
                    >
                      <span className="text-white">{item.icon}</span>
                    </div>
                    <div>
                      <span className="text-white group-hover:text-secondary transition-colors duration-300 font-medium block">
                        {item.label}
                      </span>
                      {item.sublabel && (
                        <span className="text-blue-300 text-xs mt-0.5 block">{item.sublabel}</span>
                      )}
                    </div>
                  </a>
                ))}
              </div>

              {/* Hours */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <div className="flex items-center space-x-3 text-blue-200">
                  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm">{t('contact.info.hours')}</span>
                </div>
              </div>

              {/* Map embed placeholder */}
              <div className="mt-8 rounded-xl overflow-hidden h-40 bg-blue-800/50 flex items-center justify-center border border-white/10">
                <div className="text-center">
                  <svg className="w-8 h-8 text-secondary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <a
                    href="https://maps.google.com/?q=Bamako,Mali"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-200 hover:text-secondary transition-colors duration-300"
                  >
                    Bamako, Mali
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:col-span-3 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t('contact.form.name_label')}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder={t('contact.form.name_placeholder')}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t('contact.form.email_label')}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder={t('contact.form.email_placeholder')}
                    required
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t('contact.form.phone_label')}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formState.phone}
                    onChange={handleChange}
                    placeholder={t('contact.form.phone_placeholder')}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-semibold text-text-dark mb-2">
                    {t('contact.form.subject_label')}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder={t('contact.form.subject_placeholder')}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-text-dark mb-2">
                  {t('contact.form.message_label')}
                </label>
                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.message_placeholder')}
                  required
                  rows={5}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-sm resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('contact.form.success')}</span>
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm flex items-center space-x-2">
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t('contact.form.error')}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-primary text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>{t('contact.form.sending')}</span>
                  </>
                ) : (
                  <>
                    <span>{t('contact.form.submit')}</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
