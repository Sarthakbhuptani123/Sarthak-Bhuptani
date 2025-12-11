// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FiDownload, FiMessageSquare, FiGithub, FiLinkedin, FiCode } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineBriefcase } from 'react-icons/hi';
import { SiReact, SiPython, SiJavascript, SiTailwindcss, SiDjango } from 'react-icons/si';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 50 } },
  };

  // Animation for the floating tech icons
  const floatVariants = (delay) => ({
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
        delay: delay,
      }
    }
  });

  return (
    <div id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-transparent text-white">
      
      {/* --- FLOATING TECH ICONS (Background Decor) --- */}
      {/* These icons float around your main content to give depth */}
      <div className="absolute inset-0 pointer-events-none max-w-7xl mx-auto">
        <motion.div variants={floatVariants(0)} animate="animate" className="absolute top-[20%] left-[10%] text-cyan-500/20 text-6xl md:text-8xl"><SiReact /></motion.div>
        <motion.div variants={floatVariants(1.5)} animate="animate" className="absolute bottom-[25%] left-[15%] text-yellow-500/20 text-5xl md:text-7xl"><SiPython /></motion.div>
        <motion.div variants={floatVariants(1)} animate="animate" className="absolute top-[25%] right-[15%] text-yellow-300/20 text-5xl md:text-7xl"><SiJavascript /></motion.div>
        <motion.div variants={floatVariants(2)} animate="animate" className="absolute bottom-[30%] right-[10%] text-emerald-500/20 text-6xl md:text-8xl"><SiDjango /></motion.div>
        <motion.div variants={floatVariants(0.5)} animate="animate" className="absolute top-[15%] left-[50%] -translate-x-1/2 text-sky-400/20 text-4xl md:text-6xl"><SiTailwindcss /></motion.div>
      </div>

      {/* --- MAIN CONTENT --- */}
      <div className="z-10 container mx-auto px-4 pt-20 pb-32 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability Badge */}
          <motion.div variants={itemVariants} className="flex justify-center mb-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span className="text-cyan-400 text-sm font-semibold tracking-wide uppercase">Available for Hire</span>
            </div>
          </motion.div>

          {/* Headline with Animated Gradient */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Hello, I'm <br className="md:hidden" />
            {/* Added 'animate-gradient' class logic via style for simplicity */}
            <span 
              className="relative inline-block mt-2 md:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-[length:200%_auto] animate-gradient"
              style={{ animation: 'gradientMove 3s linear infinite' }} 
            >
              Sarthak
            </span>
          </motion.h1>

          {/* Typewriter Subheadline */}
          <motion.div variants={itemVariants} className="h-12 md:h-16 mb-6">
            <h2 className="text-2xl md:text-4xl font-light text-slate-300">
              I build things as a{' '}
              <span className="font-semibold text-cyan-400">
                <Typewriter
                  words={['Frontend Developer', 'React Specialist', 'Python Coder', 'FullStack Dev']}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={80}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h2>
          </motion.div>

          {/* Summary */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Passionate about crafting pixel-perfect digital experiences. I blend 
            <span className="text-white font-medium"> clean code</span> with 
            <span className="text-white font-medium"> artistic design</span> to build scalable applications.
          </motion.p>

          {/* Stats Cards - Added Glass Hover Effect */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12"
          >
            {[
              { icon: <FiCode />, text: "3+ Projects Completed", color: "text-purple-400" },
              { icon: <HiOutlineAcademicCap />, text: "Final Year CS Student", color: "text-blue-400" },
              { icon: <HiOutlineBriefcase />, text: "Open to Work", color: "text-emerald-400" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all cursor-default"
              >
                <span className={`text-2xl ${stat.color}`}>{stat.icon}</span>
                <span className="text-sm font-medium text-slate-200">{stat.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="/Bhuptani_Sarthak.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 flex items-center gap-2 group"
            >
              <FiDownload className="text-xl group-hover:animate-bounce" /> Download Resume
            </motion.a>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white font-semibold transition-all flex items-center gap-2"
            >
              <FiMessageSquare className="text-xl" /> Let's Connect
            </motion.a>
          </motion.div>
          
          {/* Social Links */}
          <motion.div variants={itemVariants} className="mt-16 flex gap-8 justify-center">
             <a href="https://github.com/Sarthakbhuptani123" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors text-3xl hover:scale-110 transform duration-200">
               <FiGithub />
             </a>
             <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors text-3xl hover:scale-110 transform duration-200">
               <FiLinkedin />
             </a>
          </motion.div>

        </motion.div>
      </div>

      {/* Modern Mouse Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center p-1">
            <motion.div 
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
        </div>
      </motion.div>

      {/* Inline styles for the gradient animation */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
      `}</style>
    </div>
  );
}

export default Hero;