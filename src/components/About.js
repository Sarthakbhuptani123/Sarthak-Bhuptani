// src/components/About.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import profileImg from '../assets/profile.jpg';
import { 
  GraduationCap, 
  User, 
  Terminal, 
  Download,
  Github,
  Linkedin
} from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('bio');

  const tabs = [
    { id: 'bio', label: 'Personal', icon: User },
    { id: 'education', label: 'Education', icon: GraduationCap },
  ];

  // Animation variants for tab content
  const tabContentVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 bg-transparent text-white">
      
      <div className="max-w-6xl mx-auto">
        
        {/* --- MAIN GLASS DASHBOARD CONTAINER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-8 lg:gap-0 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          
          {/* === LEFT SIDEBAR: PROFILE CARD === */}
          <div className="relative p-8 bg-black/20 border-r border-white/5 flex flex-col items-center text-center">
            
            {/* 1. Profile Image ID Card Style */}
            <div className="relative w-48 h-48 mb-6 group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/10 p-1 bg-slate-900">
                <img 
                  src={profileImg} 
                  alt="Sarthak" 
                  className="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Online Dot */}
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-slate-900 rounded-full flex items-center justify-center">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>

            {/* 2. Name & Title */}
            <h3 className="text-2xl font-bold text-white mb-1">Sarthak Bhuptani</h3>
            <p className="text-cyan-400 text-sm font-medium uppercase tracking-widest mb-6">Full Stack Developer</p>

            {/* 3. Quick Actions */}
            <div className="flex gap-3 w-full mb-8">
               <a href="https://github.com/Sarthakbhuptani123" target="_blank" rel="noreferrer" className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-300 transition-colors flex justify-center">
                 <Github size={20} />
               </a>
               <a href="https://www.linkedin.com/in/sarthak-bhuptani-8a232a247/" target="_blank" rel="noreferrer" className="flex-1 py-2 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-500/20 rounded-lg text-blue-400 transition-colors flex justify-center">
                 <Linkedin size={20} />
               </a>
            </div>

            {/* 4. Resume Button */}
            <a 
              href="/Bhuptani_Sarthak.pdf" 
              target="_blank"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-900/20 hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
            >
              <Download size={16} /> Download Resume
            </a>
          </div>


          {/* === RIGHT CONTENT AREA: TABS === */}
          <div className="p-8 lg:p-12 flex flex-col min-h-[500px]">
            
            {/* 1. Header & Tabs Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
              <div>
                <h2 className="text-3xl font-bold text-white">About Me</h2>
                <div className="h-1 w-12 bg-cyan-500 rounded-full mt-2"></div>
              </div>

              {/* Tab Buttons */}
              <div className="flex p-1 bg-slate-950/50 rounded-xl border border-white/5">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                      activeTab === tab.id 
                        ? 'text-white bg-slate-800 shadow-lg' 
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <tab.icon size={16} />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Tab Content Area */}
            <div className="flex-1 relative">
              <AnimatePresence mode="wait">
                
                {/* --- BIO TAB --- */}
                {activeTab === 'bio' && (
                  <motion.div
                    key="bio"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-6"
                  >
                    <div className="flex items-start gap-4">
                      <Terminal className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
                      <p className="text-lg text-slate-300 leading-relaxed">
                        Hello! I'm a final-year Computer Engineering student with a passion for building <span className="text-white font-semibold">scalable web applications</span>. 
                        I bridge the gap between complex backend logic and smooth frontend experiences.
                      </p>
                    </div>
                    
                    <p className="text-slate-400 pl-10 border-l-2 border-white/10 leading-relaxed">
                      My journey began with curiosity about how software impacts real lives. Today, I specialize in the <span className="text-cyan-400">MERN stack</span> and <span className="text-yellow-400">Python</span> automation, always looking for the next challenging problem to solve.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-8">
                       <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <h4 className="text-2xl font-bold text-white mb-1">3+</h4>
                          <p className="text-xs text-slate-400 uppercase">Projects Completed</p>
                       </div>
                       <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                          <h4 className="text-2xl font-bold text-white mb-1">01</h4>
                          <p className="text-xs text-slate-400 uppercase">Year Experience</p>
                       </div>
                    </div>
                  </motion.div>
                )}

                {/* --- EDUCATION TAB --- */}
                {activeTab === 'education' && (
                  <motion.div
                    key="education"
                    variants={tabContentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="space-y-8"
                  >
                    {/* Item 1 */}
                    <div className="relative pl-6 border-l border-white/10 group">
                      <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 group-hover:scale-150 transition-transform"></span>
                      <h4 className="text-xl font-bold text-white">Bachelor of Engineering</h4>
                      <p className="text-cyan-400 text-sm mb-2">LDRP Institute of Technology</p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Currently pursuing Computer Engineering. Focused on Advanced Algorithms, Web Technologies, and Database Management.
                      </p>
                      <span className="inline-block mt-3 px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">2023 - 2026</span>
                    </div>

                    {/* Item 2 */}
                    <div className="relative pl-6 border-l border-white/10 group">
                      <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform"></span>
                      <h4 className="text-xl font-bold text-white">Diploma in Engineering</h4>
                      <p className="text-purple-400 text-sm mb-2">BBIT Institute of Technology</p>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Built a strong foundation in C++, Java, and System Analysis. Graduated with distinction.
                      </p>
                      <span className="inline-block mt-3 px-2 py-1 bg-slate-800 rounded text-xs text-slate-300">2020 - 2023</span>
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;