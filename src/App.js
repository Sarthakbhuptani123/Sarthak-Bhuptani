// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Page Components (Grouped)
const HomePage = () => <Hero />;
const AboutPage = () => (
  <>
    <div className="pt-20"><About /></div>
    <Timeline />
  </>
);
const SkillsPage = () => <div className="pt-20"><Skills /></div>;
const ProjectsPage = () => <div className="pt-20"><Projects /></div>;
const ContactPage = () => <div className="pt-20"><Contact /></div>;


function App() {
  return (
    <Router>
      <div className="relative antialiased selection:bg-cyan-500 selection:text-white min-h-screen flex flex-col">
        <Preloader />
        <ScrollToTop />

        {/* Global Background */}
        <AnimatedBackground />
        <CustomCursor />
        <ScrollProgress />

        {/* Navigation */}
        <Navbar />

        {/* Main Routed Content */}
        <main className="relative z-10 flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Optional Footer can go here */}
      </div>
    </Router>
  );
}

export default App;