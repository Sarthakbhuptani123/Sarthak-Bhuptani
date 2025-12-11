// src/components/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { 
  SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, 
  SiDjango, SiMysql, SiGit, SiGithub, SiNetlify, SiVisualstudiocode,
  SiNodedotjs, SiMongodb 
} from 'react-icons/si';

const skills = [
  { name: "React.js", icon: SiReact, color: "#61DAFB", level: 90 },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85 }, // Added Node.js
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },   // Added MongoDB
  { name: "Python", icon: SiPython, color: "#3776AB", level: 85 },
  { name: "Django", icon: SiDjango, color: "#092E20", level: 80 },
  { name: "Tailwind", icon: SiTailwindcss, color: "#38B2AC", level: 95 },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", level: 88 },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 75 },
  { name: "Git", icon: SiGit, color: "#F05032", level: 85 },
  { name: "GitHub", icon: SiGithub, color: "#ffffff", level: 90 },
  { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC", level: 95 },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: 100 },
  { name: "CSS3", icon: SiCss3, color: "#1572B6", level: 95 },
  { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: 70 },
];

const Skills = () => {
  // Container Animation (Stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Card Entrance Animation
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="skills" className="relative py-24 px-6 bg-transparent overflow-hidden">
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={14} /> My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">Skillset</span>
          </h2>
        </motion.div>

        {/* --- SKILLS GRID --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="h-full bg-slate-900/40 backdrop-blur-md border border-white/5 rounded-2xl p-6 transition-all duration-300 group-hover:bg-slate-900/60 group-hover:border-white/10 overflow-hidden">
                
                {/* Hover Glow Gradient (Uses Skill Color) */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${skill.color}, transparent 70%)` }}
                ></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  
                  {/* Icon */}
                  <div 
                    className="mb-4 text-4xl transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                    style={{ color: skill.color }}
                  >
                    <skill.icon />
                  </div>

                  {/* Name */}
                  <h3 className="font-bold text-slate-200 text-lg mb-1">{skill.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mb-4">{skill.level}% Proficiency</p>

                  {/* Progress Bar Track */}
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    {/* Progress Bar Fill */}
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      className="h-full rounded-full"
                      style={{ 
                        backgroundColor: skill.color,
                        boxShadow: `0 0 10px ${skill.color}` 
                      }}
                    />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;