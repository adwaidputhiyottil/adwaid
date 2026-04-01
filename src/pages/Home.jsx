import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { usePortfolio } from '../context/PortfolioContext';

const Home = () => {
  const { profile } = usePortfolio();

  return (
    <div className="min-h-screen p-4 md:p-8 lg:p-12 flex items-center justify-center">
      
      {/* Master Wrapper mimicking the reference image constraint */}
      <div className="w-full max-w-[1400px] brutal-border bg-[#f4ebd0] shadow-[12px_12px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col relative">
        
        {/* Top Navbar Row */}
        <Navbar />

        {/* Content Rows */}
        <div className="flex flex-col">
          
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row border-b-4 border-black">
            {/* Left Col: Hero */}
            <div className="w-full lg:w-[60%] lg:border-r-4 border-black p-6 md:p-10 flex flex-col justify-between bg-[#f4ebd0]">
              <Hero />
            </div>

            {/* Right Col: About Me (Banner) */}
            <div className="w-full lg:w-[40%] flex flex-col bg-brutal-yellow p-6 md:p-10 justify-center items-center text-center overflow-hidden min-h-[200px] lg:min-h-full">
                <h3 className="font-display font-bold text-3xl mb-4 uppercase text-black flex items-center gap-2">
                  <span className="text-brutal-blue text-4xl">*</span> ABOUT ME <span className="text-brutal-red text-4xl">*</span>
                </h3>
                <p className="font-body font-bold text-sm uppercase leading-relaxed text-black max-w-sm">
                  {profile.about}
                </p>
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row bg-[#f4ebd0] border-t-4 border-black">
            {/* Left Col: Services (Skills list) */}
            <div className="w-full lg:w-[40%] flex flex-col lg:border-r-4 border-black">
              <div className="bg-white p-6 md:p-10 border-b-4 border-black" id="skills">
                <Skills />
              </div>
            </div>

            {/* Right Col: Work (Projects) */}
            <div className="w-full lg:w-[60%] p-6 md:p-10 bg-[#f4ebd0]"  id="projects">
              <Projects />
            </div>
          </div>

          {/* Row 3 (Contact Form appended at bottom block) */}
          <div className="border-t-4 border-black p-6 md:p-10 bg-white" id="contact">
            <Contact />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
