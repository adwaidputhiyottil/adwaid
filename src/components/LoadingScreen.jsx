import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
  const [isStopping, setIsStopping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleStop = () => {
    setIsStopping(true);
    onComplete();
  };

  return (
    <motion.div
      onClick={handleStop}
      className="fixed inset-0 z-[100] bg-brutal-yellow flex items-center justify-center p-6 cursor-pointer"
      initial={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-6">
        <motion.div 
          className="w-16 h-16 border-8 border-black bg-brutal-blue shadow-[8px_8px_0_rgba(0,0,0,1)]"
          animate={isStopping ? {} : { y: [0, -40, 0] }}
          transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
        />
        <h1 className="font-display text-4xl uppercase font-bold tracking-widest text-black">
          LOADING
        </h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
