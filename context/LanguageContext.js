import { createContext, useContext, useState } from 'react'
import translations from '../lib/translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('fr')

  const t = (path) => {
    const keys = path.split('.')
    let value = translations[language]
    for (const key of keys) {
      if (value === undefined) return path
      value = value[key]
    }
    return value !== undefined ? value : path
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'))
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
