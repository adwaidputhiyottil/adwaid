import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="scroll-mt-24 lg:scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
      >
        <div className="sticky top-0 z-20 -mx-6 mb-4 bg-primary-50/90 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary-900">About</h2>
        </div>
        
        <div className="text-primary-500 leading-relaxed space-y-4 font-medium text-lg">
          <p>
            I am <span className="font-semibold text-primary-900">Adwaid</span>, currently pursuing my MCA after completing my BCA at Union Christian College, Aluva.
          </p>
          <p>
            My career objective is to become a reliable, efficient tech professional who builds scalable and visually stunning web experiences. I constantly strive to explore new technologies and refine my skills to build products that make a difference.
          </p>
          <p>
            Whether it's designing highly interactive frontend interfaces or creating robust backend logic, I bring dedication and a keen eye for aesthetics to every project.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
