import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import HowItWorksSection from './components/HowItWorksSection';
import FormSection from './components/FormSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  const [language, setLanguage] = useState(() => {
    // Load language preference from localStorage, default to Spanish
    const savedLanguage = localStorage.getItem('communitybridge-language');
    return savedLanguage || 'es';
  });

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('communitybridge-language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  const t = translations[language];

  return (
    <div className="min-h-screen bg-white text-dark font-body">
      <Header 
        language={language} 
        onToggleLanguage={toggleLanguage}
        t={t}
      />
      <HeroSection t={t} />
      <AboutSection t={t} />
      <ServicesSection t={t} />
      <HowItWorksSection t={t} />
      <FormSection t={t} language={language} />
      <TestimonialsSection t={t} />
      <FAQSection t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
