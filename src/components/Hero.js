import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div
      id="hero"
      className="relative pt-24 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      {/* Background Animated Blobs */}
      <div className="absolute w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -top-32 -left-32"></div>
      <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -bottom-32 right-[-8rem]"></div>
      <div className="absolute w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-15 animate-blob animation-delay-4000 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

      {/* Hero Content */}
      <motion.div
        className="z-10 text-center max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-6xl md:text-7xl font-extrabold mb-8 leading-tight"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-pulse">
            Sarthak
          </span>
        </motion.h1>

        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-gray-200 mb-6"
          variants={itemVariants}
        >
          I am a{' '}
          <span className="text-emerald-400 font-bold">
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
        </motion.h2>

        {/* Professional Summary */}
        <motion.p
          className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Passionate about crafting innovative digital solutions. I specialize in building high-performance web applications with a focus on exceptional user experiences and cutting-edge technologies.
        </motion.p>

        {/* Quick Stats */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-8 text-gray-300 text-base font-medium"
          variants={itemVariants}
        >
          <motion.div
            className="px-6 py-3 rounded-xl border border-gray-600 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            🚀 3+ Projects Completed
          </motion.div>
          <motion.div
            className="px-6 py-3 rounded-xl border border-gray-600 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            📚 Final Year Computer Science Student
          </motion.div>
          <motion.div
            className="px-6 py-3 rounded-xl border border-gray-600 bg-black/40 backdrop-blur-md hover:bg-black/60 transition-all duration-300 hover:scale-105 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            💼 Open to Opportunities
          </motion.div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          variants={itemVariants}
        >
          <motion.a
            href="/Bhuptani_Sarthak.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            📄 View Resume
          </motion.a>
          <motion.a
            href="#contact"
            className="inline-block bg-transparent border-2 border-cyan-400 text-cyan-400 font-semibold py-3 px-8 rounded-full hover:bg-cyan-400 hover:text-black transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            💬 Let's Connect
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;
