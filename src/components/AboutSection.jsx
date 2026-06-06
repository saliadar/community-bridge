import React from 'react';

export default function AboutSection({ t }) {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4 text-center">
          {t.about.headline}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mt-12">
          {/* Avatar Placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="w-80 h-80 bg-gradient-warm rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-center text-white">
                <div className="text-8xl mb-4">😊</div>
                <p className="text-lg font-semibold">Stuart</p>
                <p className="text-sm opacity-90">Founder - Community Bridge Australia</p>
              </div>
            </div>
          </div>

          {/* Story and Credentials */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 font-semibold">
              {t.about.story}
            </p>

            <div className="space-y-6">
              {t.about.credibility.map((point, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
