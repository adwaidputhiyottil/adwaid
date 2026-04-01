import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-display text-2xl uppercase font-bold mb-6 tracking-wide">Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skills.map((skill, index) => {
          // Fallback colors if none specified in state
          const colors = ['bg-brutal-blue', 'bg-brutal-yellow', 'bg-brutal-red', 'bg-brutal-blue', 'bg-brutal-pink', 'bg-white'];
          const bgColor = skill.color || colors[index % colors.length];
          
          return (
            <div 
              key={skill.id} 
              className={`${bgColor} brutal-card px-4 py-4 md:py-6 flex flex-col justify-center items-center text-center cursor-pointer`}
            >
              <span className="font-display font-bold uppercase text-sm md:text-base tracking-widest">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
