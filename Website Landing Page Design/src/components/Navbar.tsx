import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface NavbarProps {
  activePage?: 'home' | 'about';
  onPageChange?: (page: 'home' | 'about') => void;
}

export function Navbar({ activePage = 'home', onPageChange }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (page: 'home' | 'about', sectionId?: string) => {
    if (onPageChange) {
      onPageChange(page);
      // Scroll to top or specific section after page change
      setTimeout(() => {
        if (sectionId) {
          scrollToSection(sectionId);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleNavClick('home')}
          >
            <div className="p-2 bg-rose-50 rounded-lg group-hover:bg-rose-100 transition-all duration-300">
              <Sparkles className="w-5 h-5 text-rose-600" />
            </div>
            <div className="flex flex-col">
              <span className="text-rose-600 tracking-wide">TOP-NOTCH</span>
              <span className="text-xs text-gray-500">Sourcing Excellence</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-3 bg-gray-50 p-2 rounded-full">
            <button
              onClick={() => handleNavClick('home')}
              className={`${
                activePage === 'home'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
              } px-5 py-2 rounded-full transition-all duration-300`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`${
                activePage === 'about'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'text-gray-600 hover:bg-white hover:text-gray-900'
              } px-5 py-2 rounded-full transition-all duration-300`}
            >
              About Us
            </button>
            <button
              onClick={() => {
                if (activePage === 'home') {
                  scrollToSection('services');
                } else {
                  handleNavClick('home', 'services');
                }
              }}
              className="text-gray-600 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full transition-all duration-300"
            >
              Services
            </button>
            <button
              onClick={() => {
                if (activePage === 'home') {
                  scrollToSection('categories');
                } else {
                  handleNavClick('home', 'categories');
                }
              }}
              className="text-gray-600 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full transition-all duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => {
                if (activePage === 'home') {
                  scrollToSection('footer');
                } else {
                  handleNavClick('home', 'footer');
                }
              }}
              className="text-gray-600 hover:bg-white hover:text-gray-900 px-5 py-2 rounded-full transition-all duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
