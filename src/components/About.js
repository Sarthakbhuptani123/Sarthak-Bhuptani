// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code, Rocket, ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg'; // Optional: Use if you want to show your face again

const About = () => {
  return (
    <section id="about" className="relative py-24 px-6 bg-transparent overflow-hidden">

      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 items-center"
        >

          {/* --- LEFT: The Fresh Narrative --- */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-widest mb-6">
                <Rocket size={14} className="animate-pulse" /> Aspiring Developer
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Eager to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">learn, build, and grow.</span>
              </h2>

              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                Hi, I'm Sarthak! I am a Final Year Computer Engineering student at LDRP Institute of Technology.
                While I may be early in my career, my passion for technology is limitless.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                I have spent my academic years not just passing exams, but <strong>building real projects</strong>.
                From automating tasks with Python to crafting responsive React UIs, I have treated every assignment as an opportunity to master the craft of software engineering.
              </p>
            </div>

            {/* Education Highlight Box */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-start gap-4">
              <div className="p-3 bg-slate-800 rounded-xl text-white">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg">Bachelor of Engineering</h4>
                <p className="text-slate-400 text-sm mb-2">Computer Engineering • 2026 (Expected)</p>
                <p className="text-sm text-slate-500 italic">"Focused on Data Structures, Web Development, and Database Management."</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="#contact" className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-colors flex items-center gap-2">
                Hire Me <ArrowRight size={18} />
              </a>
            </div>
          </div>


          {/* --- RIGHT: The "Fresher Energy" Cards --- */}
          <div className="grid grid-cols-1 gap-6">

            {/* Card 1: What I brings */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-black border border-white/10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Code size={100} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Why Hiring Me?</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span>
                  Strong CS Fundamentals
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span>
                  Quick Learner & Adaptable
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center text-xs">✓</span>
                  Ready to Start Immediately
                </li>
              </ul>
            </div>

            {/* Card 2: Current Status */}
            <div className="p-6 rounded-3xl bg-slate-900/50 border border-white/10 flex items-center justify-between">
              <div>
                <p className="text-slate-400 text-sm uppercase tracking-wider mb-1">Current Status</p>
                <p className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  Looking for Internship / Junior Roles
                </p>
              </div>
            </div>

          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;