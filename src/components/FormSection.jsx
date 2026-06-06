import React, { useState } from 'react';

export default function FormSection({ t, language }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t.form.errors.nameRequired;
    }

    if (!formData.email.trim()) {
      newErrors.email = t.form.errors.emailRequired;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.form.errors.emailInvalid;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = t.form.errors.phoneRequired;
    }

    if (!formData.interest) {
      newErrors.interest = t.form.errors.interestRequired;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      // Submit to API endpoint
      // Make sure you have created an API route at /api/submit-form
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          language,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', interest: '' });
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        alert(language === 'en' ? 'There was an error submitting the form. Please try again.' : 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert(language === 'en' ? 'There was an error submitting the form. Please try again.' : 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="form-section" className="section-padding bg-white">
      <div className="container max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-dark mb-4">
            {t.form.headline}
          </h2>
          <p className="text-lg text-gray-600">
            {t.form.subheadline}
          </p>
        </div>

        {submitted ? (
          <div className="bg-green-50 border-2 border-green-400 rounded-2xl p-8 text-center">
            <div className="text-5xl mb-4">✓</div>
            <h3 className="text-2xl font-bold text-green-700 mb-2">
              {t.form.success}
            </h3>
            <p className="text-green-600">
              {t.form.successMessage}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-light rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Name Field */}
              <div>
                <label className="block font-semibold text-dark mb-3">
                  {t.form.labels.name}
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder={t.form.placeholders.name}
                  value={formData.name}
                  onChange={handleChange}
                  className={`${errors.name ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block font-semibold text-dark mb-3">
                  {t.form.labels.email}
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={t.form.placeholders.email}
                  value={formData.email}
                  onChange={handleChange}
                  className={`${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-8">
              {/* Phone Field */}
              <label className="block font-semibold text-dark mb-3">
                {t.form.labels.phone}
              </label>
              <input
                type="tel"
                name="phone"
                placeholder={t.form.placeholders.phone}
                value={formData.phone}
                onChange={handleChange}
                className={`${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-2">{errors.phone}</p>
              )}
            </div>

            <div className="mb-10">
              {/* Interest Dropdown */}
              <label className="block font-semibold text-dark mb-3">
                {t.form.labels.interest}
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className={`${errors.interest ? 'border-red-500' : 'border-gray-200'}`}
              >
                <option value="">
                  {language === 'en' ? 'Select an option...' : 'Selecciona una opción...'}
                </option>
                {t.form.options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {errors.interest && (
                <p className="text-red-500 text-sm mt-2">{errors.interest}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary w-full text-lg"
            >
              {loading
                ? language === 'en'
                  ? 'Submitting...'
                  : 'Enviando...'
                : t.form.button}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
