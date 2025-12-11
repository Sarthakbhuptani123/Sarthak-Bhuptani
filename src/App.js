// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="relative text-white antialiased selection:bg-cyan-500 selection:text-white">
      
      {/* Global Background - Stays fixed behind everything */}
      <AnimatedBackground />

      {/* Main Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;