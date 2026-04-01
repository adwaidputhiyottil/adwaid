import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    // Artificial delay to show Bento skeleton
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-primary-50 min-h-screen flex items-center justify-center p-6 md:p-12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        
        {/* Mock Floating Nav */}
        <div className="h-14 w-64 bg-primary-200/50 mx-auto rounded-full animate-pulse mb-8"></div>

        {/* Bento Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-96">
          <div className="md:col-span-2 bg-primary-200/30 rounded-3xl animate-pulse h-64 md:h-full"></div>
          <div className="bg-primary-200/40 rounded-3xl animate-pulse h-48 md:h-full"></div>
        </div>

        {/* Bento Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-auto md:h-64">
          <div className="bg-primary-200/30 rounded-3xl animate-pulse h-48 md:h-full"></div>
          <div className="md:col-span-2 bg-primary-200/40 rounded-3xl animate-pulse h-48 md:h-full"></div>
          <div className="bg-primary-200/30 rounded-3xl animate-pulse h-48 md:h-full"></div>
        </div>

      </div>
    </motion.div>
  );
};

export default LoadingScreen;
