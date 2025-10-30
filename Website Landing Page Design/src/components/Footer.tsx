import { Sparkles } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-rose-500" />
              <span className="text-rose-500">TOP-NOTCH</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in sourcing and fashion furnishing. Bringing visions to life with unmatched quality and control.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('footer')}
                  className="text-gray-400 hover:text-white hover:underline transition-all duration-300 text-sm"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-white">Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Design Services</li>
              <li className="text-gray-400">Sourcing & Manufacturing</li>
              <li className="text-gray-400">Quality Control</li>
              <li className="text-gray-400">Sustainable Practices</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-white">Contacts</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Sanjay Sharma</li>
              <li>+91 9720192608</li>
              <li className="break-all">
                <a href="mailto:merchants.topnotch@gmail.com" className="hover:text-white hover:underline transition-all duration-300">
                  merchants.topnotch@gmail.com
                </a>
              </li>
              <li>Jaipur, Rajasthan India</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-500">
          <p>© 2025 Top-Notch Sourcing. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
