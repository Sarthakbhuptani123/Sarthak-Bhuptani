import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div
      id="hero"
      className="relative pt-24 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      {/* Background Animated Blobs */}
      <div className="absolute w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000 -top-20 -left-20"></div>
      <div className="absolute w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob -bottom-24 right-[-5rem]"></div>

      {/* Hero Content */}
      <motion.div
        className="z-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-teal-400 to-purple-500 animate-gradient">
            Sarthak
          </span>
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
          I am a{' '}
          <span className="text-green-400">
            <Typewriter
              words={[
                'Frontend Developer',
                'React Enthusiast',
                'Python Programmer',
                'FullStack Developer',
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h2>

        {/* Short Summary */}
        <p className="text-lg text-gray-400 mt-6 max-w-xl mx-auto">
          I build performant, beautiful websites and web apps using modern tech. I focus on clean UI and smooth UX that makes a difference.
        </p>

        {/* Quick Stats */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm font-medium">
          <div className="px-4 py-2 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm">🚀 3+ Projects</div>
          <div className="px-4 py-2 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm">📚 Final Year Student</div>
          <div className="px-4 py-2 rounded-lg border border-gray-700 bg-black/30 backdrop-blur-sm">💼 Open to Work</div>
        </div>

        {/* Resume Button */}
        <div className="mt-10">
          <a
            href="/Bhuptani Sarthak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
          >
            View Resume
          </a>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
