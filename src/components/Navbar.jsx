import React from 'react';
import { FiHome, FiCode, FiBriefcase, FiAward } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';

const Navbar = () => {
  const { profile } = usePortfolio();

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 py-4 border-b-4 border-black bg-[#f4ebd0]">
      {/* Profile Pic / Logo */}
      <div className="w-12 h-12 brutal-border bg-brutal-blue flex items-center justify-center font-display font-bold text-xl shadow-[2px_2px_0px_rgba(0,0,0,1)]">
        {profile.name ? profile.name.charAt(0) : 'A'}
      </div>

      {/* Center Nav Icons */}
      <div className="flex gap-6 sm:gap-12 my-4 sm:my-0 w-full sm:w-auto justify-center">
        <a href="#home" className="hover:-translate-y-1 transition-transform p-2 bg-white brutal-border shadow-brutal-active">
          <FiHome size={24} className="stroke-[2.5]" />
        </a>
        <a href="#skills" className="hover:-translate-y-1 transition-transform p-2 bg-white brutal-border shadow-brutal-active">
          <FiCode size={24} className="stroke-[2.5]" />
        </a>
        <a href="#projects" className="hover:-translate-y-1 transition-transform p-2 bg-white brutal-border shadow-brutal-active">
          <FiBriefcase size={24} className="stroke-[2.5]" />
        </a>
        {profile.show_certificates !== false && (
          <a href="#certificates" className="hover:-translate-y-1 transition-transform p-2 bg-white brutal-border shadow-brutal-active">
            <FiAward size={24} className="stroke-[2.5]" />
          </a>
        )}
      </div>

      {/* CTA Button */}
      <a href="#contact" className="brutal-button bg-brutal-yellow px-6 py-3 text-sm shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] flex items-center justify-center gap-2 w-full sm:w-auto">
        <span className="text-xl leading-none">*</span> LET'S TALK <span className="text-xl leading-none">*</span>
      </a>
    </div>
  );
};

export default Navbar;
