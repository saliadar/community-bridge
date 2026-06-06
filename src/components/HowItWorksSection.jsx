import React from 'react';

export default function HowItWorksSection({ t }) {
  return (
    <section className="section-padding bg-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {t.howItWorks.headline}
          </h2>
          <p className="text-xl text-gray-600">
            {t.howItWorks.subheadline}
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < t.howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-warm -z-10" 
                     style={{ width: 'calc(100% - 1rem)', left: 'calc(100% + 0.5rem)' }} />
              )}

              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                {/* Step number circle */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto md:mx-0">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-dark mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
