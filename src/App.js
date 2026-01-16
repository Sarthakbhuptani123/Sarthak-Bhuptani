// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import AnimatedBackground from './components/AnimatedBackground';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import Preloader from './components/Preloader';

function App() {
  return (
    <div className="relative text-white antialiased selection:bg-cyan-500 selection:text-white">
      <Preloader />

      {/* Global Background - Stays fixed behind everything */}
      <AnimatedBackground />
      <CustomCursor />
      <ScrollProgress />

      {/* Main Content */}
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Timeline />
        <Skills />
        <Projects />
        <Contact />
      </main>

    </div>
  );
}

export default App;