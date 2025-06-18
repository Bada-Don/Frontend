// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '../common/Icon';
import Button from '../common/Button';

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-text-secondary hover:text-link font-medium transition-colors duration-200 block py-2 md:py-0"
  >
    {children}
  </a>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      className={`py-4 fixed w-full z-50 transition-shadow duration-300
        bg-white border-b border-border-nav {/* CHANGED HERE: bg-white directly */}
        ${isScrolled ? 'shadow-lg' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3">
            <Icon name="gavel" className="text-white" size="xl" />
          </div>
          <span className="text-2xl font-bold text-text-primary">LegalPilot</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center">
            <Button href="#pricing" variant="primary" size="md">
                Get Started Free
            </Button>
        </div>

        <div className="md:hidden">
          <Button
            variant="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open menu"
            className="text-text-secondary"
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size="2xl" />
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 border-t border-border-nav" // CHANGED HERE: bg-white for mobile menu
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="container mx-auto px-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Button href="#pricing" variant="primary" size="md" className="w-full mt-3" onClick={() => setMobileMenuOpen(false)}>
              Get Started Free
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;