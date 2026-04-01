import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-primary-50 min-h-screen text-primary-900 selection:bg-accent selection:text-white pb-12">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 space-y-6">
        {/* Bento Grid layout applied section by section */}
        <section id="home" className="scroll-mt-32">
          <Hero />
        </section>

        <section id="skills" className="scroll-mt-32">
          <Skills />
        </section>

        <section id="projects" className="scroll-mt-32">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-32">
          <Contact />
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Home;
