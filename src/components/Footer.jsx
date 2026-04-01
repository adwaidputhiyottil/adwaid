import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-primary-100 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-primary-900 font-bold tracking-widest uppercase text-xl">
          Adwaid<span className="text-accent">.</span>
        </div>
        
        <p className="text-primary-500 text-sm font-medium">
          &copy; {new Date().getFullYear()} Adwaid. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6 text-primary-400">
          <a href="#" className="hover:text-accent transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="#" className="hover:text-accent transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:contact@adwaid.com" className="hover:text-accent transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
