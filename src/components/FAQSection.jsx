import React, { useState } from 'react';

export default function FAQSection({ t }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {t.faq.headline}
          </h2>
        </div>

        <div className="space-y-4">
          {t.faq.items.map((item, index) => (
            <div key={index} className="bg-light rounded-lg overflow-hidden">
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-button"
              >
                <span>{item.question}</span>
                <span
                  className={`text-primary text-xl transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                >
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="accordion-content">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
