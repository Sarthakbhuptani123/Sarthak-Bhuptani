// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FiDownload, FiMessageSquare, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../assets/profile.jpg'; // Ensure this matches your asset path

function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20 md:py-0">

      {/* Background Ambience e.g. a soft gradient orb in top-right */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">

        {/* --- LEFT COLUMN: TEXT --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left"
        >
          {/* Greeting Pill */}
          <div className="mb-6 px-4 py-1.5 rounded-full bg-slate-800/50 border border-white/10 text-cyan-400 text-xs md:text-sm font-semibold tracking-wide inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Available for New Projects
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Sarthak.</span>
            <br />
            I build <span className="text-slate-500">digital<br className="hidden md:block" /> experiences.</span>
          </h1>

          <div className="text-lg md:text-2xl text-slate-300 mb-8 font-light h-8 md:h-10">
            <Typewriter
              words={['Full Stack Developer', 'MERN Stack Specialist', 'Python Automation', 'UI/UX Enthusiast']}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </div>

          <p className="text-slate-400 text-base md:text-lg max-w-lg leading-relaxed mb-10">
            A computer engineering student passionate about simplifying complex problems with clean, scalable code. I turn ideas into high-performance web applications.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center md:justify-start">
            <motion.a
              href="/resume.pdf"
              target="_blank"
              download="Sarthak_Bhuptani_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-7 py-3.5 rounded-xl bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-cyan-50 transition-colors"
            >
              <FiDownload /> Download CV
            </motion.a>

            <div className="flex gap-6 items-center justify-center px-4 mt-2 sm:mt-0">
              <SocialIcon href="https://github.com/Sarthakbhuptani123" icon={<FiGithub />} delay={0} />
              <SocialIcon href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" icon={<FiLinkedin />} delay={0.1} />
              <SocialIcon href="#contact" icon={<FiMail />} delay={0.2} />
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT COLUMN: IMAGE --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 md:order-2 flex justify-center relative mt-4 md:mt-0"
        >
          {/* Abstract Background for Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-[2rem] rotate-6 opacity-20 scale-105 blur-lg"></div>

          <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-[2rem] overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-900 group">
            <img
              src={profileImg}
              alt="Sarthak Bhuptani"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>

            {/* Floating Tag */}
            <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-xl border border-white/10">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <p className="text-[10px] md:text-xs text-slate-300 uppercase tracking-wider">Located in</p>
                  <p className="text-white font-semibold text-sm md:text-base">India 🇮🇳</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-black">
                  <FiMessageSquare size={14} />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator - Hidden on mobile to save space */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-400 to-transparent"></div>
      </motion.div>
    </section>
  );
}

const SocialIcon = ({ href, icon, delay }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noreferrer"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 + delay }}
    whileHover={{ y: -3, color: "#22d3ee" }}
    className="text-2xl text-slate-400 transition-colors"
  >
    {icon}
  </motion.a>
);

export default Hero;