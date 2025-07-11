import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

function Hero() {
  return (
    <div
      id="home"
      className="relative pt-24 min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    >
      {/* Animated Background Blobs */}
      <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse top-10 left-[-5rem]"></div>
      <div className="absolute w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse bottom-10 right-[-5rem]"></div>

      {/* Hero Content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-blue-400">Sarthak</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">
          I am a{' '}
          <span className="text-green-400">
            <Typewriter
              words={['Frontend Developer', 'React Enthusiast', 'Python Programmer', 'FullStack Developer']}
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
          Hi, I’m Sarthak — I design and build modern websites that load fast and look sharp. Let’s bring your ideas to life.
        </p>

        {/* Quick Stats */}
        <div className="mt-6 flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
          <div>🚀 3+ Projects</div>
          <div>📚 Final Year Student</div>
          <div>💼 Open to Work</div>
        </div>

        {/* Resume Button */}
        <div className="mt-8">
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
