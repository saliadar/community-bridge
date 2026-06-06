import React from 'react';

export default function Footer({ t }) {
  return (
    <footer className="bg-dark text-white py-16 md:py-20">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">CB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Community Bridge</h3>
                <p className="text-xs text-gray-400">Australia</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Immigration Help
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Job Placement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Settlement Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Career Coaching
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">{t.footer.contact.heading}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-gray-400 text-xs uppercase mb-1">Email</p>
                <a
                  href={`mailto:${t.footer.contact.email}`}
                  className="text-white hover:text-primary transition-colors font-semibold"
                >
                  {t.footer.contact.email}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase mb-1">Phone</p>
                <a
                  href={`tel:${t.footer.contact.phone.replace(/\s/g, '')}`}
                  className="text-white hover:text-primary transition-colors font-semibold"
                >
                  {t.footer.contact.phone}
                </a>
              </div>
              <div>
                <p className="text-gray-400 text-xs uppercase mb-1">Website</p>
                <a
                  href="#"
                  className="text-white hover:text-primary transition-colors font-semibold"
                >
                  {t.footer.contact.website}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links and Copyright */}
        <div className="border-t border-gray-700 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-400 text-sm">{t.footer.copyright}</p>

            <div className="flex items-center space-x-6">
              <span className="text-gray-400 text-sm font-semibold">
                {t.footer.followUs}
              </span>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                📷
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                in
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="TikTok"
              >
                ♪
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
