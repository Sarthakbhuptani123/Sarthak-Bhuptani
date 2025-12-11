// src/components/AnimatedBackground.js
import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  // Animation config for random floating movement
  const blobVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const moveVariants = {
    animate: {
      y: [0, -50, 0],
      x: [0, 30, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-950">
      
      {/* 1. Subtle Grid Overlay for Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>

      {/* 2. Floating Gradient Orbs */}
      
      {/* Top Left - Purple (Deep) */}
      <motion.div
        variants={moveVariants}
        animate="animate"
        className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Bottom Right - Cyan (Bright) */}
      <motion.div
        variants={moveVariants}
        animate="animate"
        transition={{ delay: 2 }}
        className="absolute bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] bg-cyan-900/20 rounded-full blur-[100px] mix-blend-screen"
      />

      {/* Center - Blue (Subtle Pulse) */}
      <motion.div
        variants={blobVariants}
        animate="animate"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-900/10 rounded-full blur-[120px] mix-blend-screen"
      />

      {/* 3. Noise Overlay (Optional - adds film grain texture) */}
      <div className="absolute inset-0 opacity-[0.03] bg-repeat pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
    </div>
  );
};

export default AnimatedBackground;