import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';

const Certificates = () => {
  const { certificates } = usePortfolio();

  if (!certificates || certificates.length === 0) return null;

  return (
    <div className="flex flex-col h-full w-full">
      <h2 className="font-display text-2xl md:text-3xl uppercase font-bold mb-8 tracking-wide text-black flex items-center gap-3">
        <span className="text-brutal-blue text-4xl">*</span> 
        Achievements & Certs 
        <span className="text-brutal-red text-4xl">*</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        {certificates.map((cert, index) => {
          const defaultBg = ['bg-brutal-blue', 'bg-brutal-pink', 'bg-brutal-yellow', 'bg-brutal-green'][index % 4];
          return (
            <div 
              key={cert.id} 
              className={`brutal-card ${cert.bgColor || defaultBg} flex flex-col p-6 border-4 border-black shadow-[6px_6px_0_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform`}
            >
              <h3 className="font-display text-xl sm:text-2xl font-bold uppercase mb-4 text-black bg-white inline-block w-fit px-2 border-2 border-black shadow-[2px_2px_0_rgba(0,0,0,1)]">
                {cert.title}
              </h3>
              
              {cert.imageUrl && (
                <div className="mb-4 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] bg-white overflow-hidden max-h-48 group cursor-pointer relative">
                  <img src={cert.imageUrl} alt={cert.title} className="w-full h-48 object-cover filter contrast-110 group-hover:scale-105 transition-transform" />
                </div>
              )}
              
              <p className="font-body text-sm font-bold mb-6 text-black/90 mt-2">
                <span className="uppercase tracking-widest text-xs border-b-2 border-black inline-block mb-1">Issuer</span>
                <br /> {cert.issuer}
                <br /><br />
                <span className="uppercase tracking-widest text-xs border-b-2 border-black inline-block mb-1">Date</span>
                <br /> {cert.date}
              </p>
              
              {cert.link && (
                <div className="mt-auto self-start">
                  <a href={cert.link} target="_blank" rel="noreferrer" className="brutal-button bg-white text-xs px-4 py-3 flex items-center gap-2 font-bold uppercase border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] hover:bg-black hover:text-white transition-colors">
                    VIEW CREDENTIAL
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
