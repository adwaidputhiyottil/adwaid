import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('about');

  // Smooth scroll listener for right side sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is within the top half of the screen
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            current = section;
          }
        }
      }
      if (current) setActiveTab(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="flex flex-col h-full justify-between">
      {/* Hero Info */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-primary-900 leading-tight">
          Adwaid<span className="text-accent">.</span>
        </h1>
        <h2 className="text-xl font-semibold text-primary-900 mt-3 tracking-wide">
          Passionate Software Developer
        </h2>
        <p className="mt-4 text-primary-500 max-w-xs leading-relaxed font-medium">
          I build elegant, highly responsive web applications. Goal-oriented and motivated to be a reliable and efficient tech professional.
        </p>

        {/* Anchor Navigation (Desktop Only) */}
        <nav className="hidden lg:flex flex-col gap-4 mt-16 lg:mt-24">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`group flex items-center text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeTab === link.href.substring(1)
                  ? 'text-primary-900'
                  : 'text-primary-400 hover:text-primary-900'
              }`}
            >
              <span
                className={`transition-all duration-300 mr-4 h-px bg-current ${
                  activeTab === link.href.substring(1) ? 'w-16' : 'w-8 group-hover:w-16'
                }`}
              ></span>
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex items-center gap-6 mt-12 lg:mt-0 text-primary-500"
      >
        <a href="#" className="hover:text-primary-900 transition-colors">
          <span className="sr-only">GitHub</span>
          <FiGithub size={24} />
        </a>
        <a href="#" className="hover:text-primary-900 transition-colors">
          <span className="sr-only">LinkedIn</span>
          <FiLinkedin size={24} />
        </a>
        <a href="mailto:contact@adwaid.com" className="hover:text-primary-900 transition-colors">
          <span className="sr-only">Email</span>
          <FiMail size={24} />
        </a>
      </motion.div>
    </div>
  );
};

export default Sidebar;
