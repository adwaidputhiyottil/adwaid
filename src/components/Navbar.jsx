import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let current = 'home';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-2 sm:px-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <nav className="flex items-center gap-1 sm:gap-2 px-3 py-2 sm:px-4 sm:py-3 bg-white/70 backdrop-blur-xl border border-white rounded-full shadow-lg shadow-primary-200/50">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-300 ${
              activeTab === link.name.toLowerCase()
                ? 'text-white'
                : 'text-primary-600 hover:text-primary-900 hover:bg-primary-100/50'
            }`}
          >
            {activeTab === link.name.toLowerCase() && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-primary-900 rounded-full shadow-sm"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default Navbar;
