import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#full-menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // Smooth scroll to element
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-soft-cream/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <a href="#" className={`font-serif text-2xl tracking-wide z-50 transition-colors duration-300 ${isScrolled ? 'text-forest-green' : 'text-soft-cream'}`} onClick={(e) => handleNavClick(e, '#home')}>
            SYLVAN
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm uppercase tracking-widest transition-colors duration-300 ${
                  isScrolled 
                    ? 'text-forest-green/80 hover:text-forest-green' 
                    : 'text-soft-cream/80 hover:text-soft-cream'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={(e) => handleNavClick(e, '#reservations')}
              className={`text-sm uppercase tracking-widest px-6 py-2.5 transition-colors duration-300 ${
                isScrolled
                  ? 'bg-forest-green text-soft-cream hover:bg-botanical-green'
                  : 'bg-soft-cream text-forest-green hover:bg-beige'
              }`}
            >
              Reserve a Table
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 -mr-2 transition-colors duration-300 ${isScrolled ? 'text-forest-green' : 'text-soft-cream'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-soft-cream pt-24 pb-8 px-6 flex flex-col md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col space-y-8 items-center mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl text-forest-green"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-8 w-full flex justify-center">
                <a
                  href="#reservations"
                  onClick={(e) => handleNavClick(e, '#reservations')}
                  className="inline-block text-sm uppercase tracking-widest bg-forest-green text-soft-cream px-8 py-4 w-full max-w-xs text-center"
                >
                  Reserve a Table
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
