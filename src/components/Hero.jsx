import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';

const Hero = () => {
  const { profile } = usePortfolio();

  return (
    <div className="flex flex-col h-full bg-[#f4ebd0] relative relative">
      <div className="absolute top-0 right-0 md:top-4 md:right-4 bg-brutal-blue brutal-border px-3 py-1 shadow-[2px_2px_0_rgba(0,0,0,1)] transform rotate-3 z-10 hidden sm:block">
        <p className="font-display font-bold text-xs uppercase animate-pulse">AVAILABLE TO WORK</p>
      </div>

      <div className="flex justify-between items-start mb-4">
        {/* Intro text */}
        <p className="font-display font-bold uppercase tracking-widest text-lg md:text-xl text-black">
          Hello. I'm {profile.name}
        </p>
        <div className="bg-brutal-blue brutal-border px-2 py-1 shadow-[2px_2px_0_rgba(0,0,0,1)] transform rotate-3 sm:hidden">
          <p className="font-display font-bold text-[10px] uppercase animate-pulse">AVAILABLE TO WORK</p>
        </div>
      </div>

      {/* Massive Title */}
      <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.9] uppercase tracking-tighter mb-6 text-black" style={{ textShadow: '4px 4px 0px rgba(0,0,0,1), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff' }}>
        <span className="text-brutal-blue block mb-2" style={{ WebkitTextStroke: '2px black' }}>{profile.title.split('&')[0] || profile.title}</span> 
        {profile.title.includes('&') && (
          <span className="text-brutal-yellow block" style={{ WebkitTextStroke: '2px black' }}>& {profile.title.split('&')[1]}</span>
        )}
      </h1>

      {/* Bio */}
      <p className="font-body font-bold text-sm md:text-base uppercase max-w-sm mb-12 text-black leading-relaxed">
        {profile.bio}
      </p>

      {/* Social Icons Box */}
      <div className="flex gap-4 mt-auto">
        <a href="#" className="w-12 h-12 bg-white brutal-card flex items-center justify-center text-xl">
          <FiGithub className="stroke-[2.5]" />
        </a>
        <a href="#" className="w-12 h-12 bg-white brutal-card flex items-center justify-center text-xl">
          <FiLinkedin className="stroke-[2.5]" />
        </a>
        <a href="mailto:admin@gmail.com" className="w-12 h-12 bg-white brutal-card flex items-center justify-center text-xl">
          <FiMail className="stroke-[2.5]" />
        </a>
      </div>
      
    </div>
  );
};

export default Hero;
