import React from 'react';

export default function ServicesSection({ t }) {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {t.services.headline}
          </h2>
          <p className="text-xl text-gray-600">
            {t.services.subheadline}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Immigration Service Card */}
          <div className="bg-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-6">📋</div>
            <h3 className="text-2xl font-bold text-dark mb-4">
              {t.services.immigration.title}
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t.services.immigration.description}
            </p>
            <ul className="space-y-4">
              {t.services.immigration.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">→</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Job Placement Service Card */}
          <div className="bg-light rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-5xl mb-6">💼</div>
            <h3 className="text-2xl font-bold text-dark mb-4">
              {t.services.jobPlacement.title}
            </h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t.services.jobPlacement.description}
            </p>
            <ul className="space-y-4">
              {t.services.jobPlacement.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-primary text-xl mt-1">→</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
