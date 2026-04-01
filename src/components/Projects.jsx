import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { usePortfolio } from '../context/PortfolioContext';

const Projects = () => {
  const { projects } = usePortfolio();

  return (
    <div className="flex flex-col h-full">
      <h2 className="font-display text-2xl uppercase font-bold mb-6 tracking-wide text-black">Work</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        {projects.filter(p => !p.hidden).map((project, index) => {
          const defaultBg = ['bg-brutal-blue', 'bg-brutal-red', 'bg-brutal-yellow', 'bg-brutal-green'][index % 4];
          return (
            <div 
              key={project.id} 
              className={`brutal-card ${project.bgColor || defaultBg} flex flex-col justify-between p-6 border-4 border-black`}
            >
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase mb-4 text-black">{project.title}</h3>
                <p className="font-body text-sm font-semibold mb-6 text-black/80 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="text-xs font-bold uppercase px-2 py-1 bg-white border-2 border-black">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4 mt-auto">
                {project.githubLink && (
                  <a href={project.githubLink} className="brutal-button bg-white text-xs px-4 py-2 flex items-center gap-2">
                    CODE <FiGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} className="brutal-button bg-brutal-pink text-xs px-4 py-2 flex items-center gap-2 ml-auto">
                    LIVE <FiExternalLink />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
