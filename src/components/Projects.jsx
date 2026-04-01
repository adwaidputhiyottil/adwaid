import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';

const mockProjects = [
  {
    id: 1,
    title: 'Modern Portfolio',
    description: 'A cutting-edge UI redesign featuring a Bento Grid layout, custom floating navigation, and skeleton loaders.',
    techStack: ['React', 'Tailwind', 'Vite', 'Framer Motion'],
    githubLink: '#',
    liveUrl: '#',
    accent: 'bg-primary-900',
    textAccent: 'text-white'
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    description: 'A complete shopping experience with session management, cart functionality, and responsive product grids.',
    techStack: ['React', 'Node.js', 'Express'],
    githubLink: '#',
    liveUrl: '',
    accent: 'bg-white',
    textAccent: 'text-primary-900'
  },
  {
    id: 3,
    title: 'Task Management System',
    description: 'A productivity booster helping teams organize daily tasks featuring an intuitive UI.',
    techStack: ['Java', 'Spring Boot', 'MySQL'],
    githubLink: '#',
    liveUrl: '#',
    accent: 'bg-white',
    textAccent: 'text-primary-900'
  }
];

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(mockProjects);
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-sm border border-primary-100 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent text-xl font-bold">
          <FiArrowUpRight />
        </div>
        <h2 className="text-2xl font-bold text-primary-900">Featured Work</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`
              relative group rounded-3xl p-8 lg:p-10 shadow-sm border border-primary-100 overflow-hidden flex flex-col justify-between min-h-[320px] transition-all duration-500
              ${project.accent} ${project.textAccent} hover:shadow-xl hover:-translate-y-1
            `}
          >
            {/* Background Hover Reveal Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
            
            <div className="relative z-10 flex-grow">
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className={`mb-8 font-medium leading-relaxed ${project.textAccent === 'text-white' ? 'text-primary-200' : 'text-primary-500'}`}>
                {project.description}
              </p>
            </div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, i) => (
                  <span key={i} className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full ${project.textAccent === 'text-white' ? 'bg-white/20 text-white' : 'bg-primary-100 text-primary-600'}`}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6 mt-auto">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity">
                    <FiGithub size={18} /> Code
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity ml-auto">
                    Live <FiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
