import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Skills = () => {
  const { skills } = usePortfolio();

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-display text-2xl uppercase font-bold mb-6 tracking-wide">Skills</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        {skills.map((skill, index) => {
          const bgColors = ['bg-brutal-blue', 'bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-green', 'bg-brutal-pink'];
          const barColor = bgColors[index % bgColors.length];
          
          return (
            <div 
              key={skill.id} 
              className="brutal-border p-4 shadow-[4px_4px_0_rgba(0,0,0,1)] flex flex-col justify-center bg-white hover:-translate-y-1 transition-transform cursor-default gap-3"
            >
              <div className="flex justify-between items-center font-display font-bold uppercase text-black text-xs sm:text-sm">
                <span>{skill.name}</span>
                <span>{skill.percentage}%</span>
              </div>
              <div className="w-full bg-[#f4ebd0] border-2 border-black h-3 md:h-4 relative overflow-hidden">
                 <div 
                    className={`absolute top-0 left-0 h-full border-r-2 border-black ${barColor}`} 
                    style={{ width: `${skill.percentage}%` }}
                 ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
