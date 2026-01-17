// src/components/AnimatedBackground.js
import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import circuitBg from '../assets/binary-rain.png';

const AnimatedBackground = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the cursor follower
  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-slate-100 dark:bg-slate-950 transition-colors duration-600">

      {/* 0. Infinite Circuit Board Scanning Background */}
      <div className="absolute inset-0 z-0 text-left">
        <motion.div
          className="absolute inset-0 w-full h-[200%]"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 60,
            ease: "linear",
            repeat: Infinity
          }}
        >
          <div className="w-full h-[50%] opacity-20 dark:opacity-30" style={{ backgroundImage: `url(${circuitBg})`, backgroundSize: 'cover' }}></div>
          <div className="w-full h-[50%] opacity-20 dark:opacity-30" style={{ backgroundImage: `url(${circuitBg})`, backgroundSize: 'cover' }}></div>
        </motion.div>

        {/* Darken overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-50/90 dark:bg-[#0a0a0a]/70"></div>
      </div>

      {/* 1. Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      {/* 2. Interactive Mouse Spotlight */}
      <motion.div
        style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
        className="absolute w-[600px] h-[600px] bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-[100px] opacity-50 pointer-events-none hidden md:block"
      />

      {/* 3. Primary aurora bloom (Top Left) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 45, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-r from-cyan-400/30 to-blue-500/30 dark:from-cyan-900/40 dark:to-blue-900/40 blur-[80px] md:blur-[120px]"
      />

      {/* 4. Secondary warmed bloom (Bottom Right) */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] min-w-[300px] min-h-[300px] rounded-full bg-gradient-to-l from-purple-400/30 to-pink-500/30 dark:from-purple-900/40 dark:to-pink-900/40 blur-[80px] md:blur-[120px]"
      />

      {/* 5. Drifting Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, Math.random() * -100 + "%"],
              x: [null, (Math.random() - 0.5) * 50 + "%"],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-1 h-1 md:w-2 md:h-2 bg-slate-900/10 dark:bg-white/10 rounded-full blur-[1px]"
          />
        ))}
      </div>

    </div>
  );
};

export default AnimatedBackground;