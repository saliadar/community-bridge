import React from 'react';

export default function HeroSection({ t }) {
  const scrollToForm = () => {
    const formSection = document.getElementById('form-section');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />
      
      <div className="container px-4 md:px-8 max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-dark mb-6 leading-tight">
          {t.hero.headline}
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subheadline}
        </p>

        <button
          onClick={scrollToForm}
          className="btn btn-primary text-lg mb-16"
        >
          {t.hero.cta}
        </button>

        {/* Decorative element */}
        <div className="relative h-64 md:h-80 mt-12 flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl" />
          <div className="relative z-10 text-center">
            <div className="text-6xl md:text-8xl opacity-20 font-bold text-primary">👥</div>
            <p className="text-gray-600 mt-4 text-sm md:text-base">Community-Driven Immigration & Career Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
