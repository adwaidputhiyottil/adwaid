import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Main Intro Card */}
      <motion.div 
        className="md:col-span-2 bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-primary-100 flex flex-col justify-center relative overflow-hidden group"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-700"></div>
        <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6 self-start">
          Software Developer
        </div>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-primary-900 leading-tight mb-6">
          Hi, I am <span className="text-accent relative inline-block">Adwaid
            <motion.span className="absolute -bottom-2 left-0 w-full h-1.5 bg-accent/30 rounded-full" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ delay: 0.5, duration: 0.8 }}></motion.span>
          </span>
        </h1>
        <p className="text-lg lg:text-xl text-primary-500 max-w-lg leading-relaxed mb-8 font-medium">
          I build elegant, highly responsive web experiences. I'm currently pursuing my MCA and striving to become an exceptionally reliable tech professional.
        </p>
        <div className="flex items-center gap-4">
          <a href="#projects" className="bg-primary-900 text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:shadow-lg hover:shadow-accent/20 transition-all flex items-center gap-2">
            View Work <FiArrowRight />
          </a>
        </div>
      </motion.div>

      {/* Side Quick Stats / Visual Card */}
      <motion.div 
        className="bg-primary-900 rounded-3xl p-8 text-white shadow-xl shadow-primary-900/10 flex flex-col justify-between"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div>
          <h3 className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-2">Based In</h3>
          <p className="text-xl font-bold mb-8">Kerala, India</p>

          <h3 className="text-primary-300 text-sm font-semibold uppercase tracking-widest mb-2">Education</h3>
          <p className="text-xl font-bold">MCA (Pursuing)</p>
          <p className="text-sm font-medium text-primary-400 mt-1">Union Christian College, Aluva</p>
        </div>

        <div className="flex gap-4 mt-12">
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary-900 transition-colors">
            <FiGithub size={20} />
          </a>
          <a href="#" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary-900 transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="mailto:contact@adwaid.com" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-primary-900 transition-colors">
            <FiMail size={20} />
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
