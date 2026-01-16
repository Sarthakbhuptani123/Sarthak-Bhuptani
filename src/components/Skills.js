// src/components/Skills.js
import React, { useRef, useState } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Sparkles, Code2, Database, Terminal, Wrench } from 'lucide-react';
import {
  SiReact, SiPython, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiDjango, SiMysql, SiGit, SiGithub, SiNetlify, SiVisualstudiocode,
  SiNodedotjs, SiMongodb, SiVercel
} from 'react-icons/si';

const SkillPill = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 + 0.2 }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(255, 255, 255, 0.3)"
      }}
      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300 dark:border-white/5 backdrop-blur-sm transition-colors cursor-pointer group"
    >
      <div
        className="p-1.5 rounded-full bg-white group-hover:bg-white/80 dark:bg-white/5 dark:group-hover:bg-white/10 transition-colors"
        style={{ color: skill.color }}
      >
        <skill.icon className="text-lg" />
      </div>
      <span className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
        {skill.name}
      </span>
    </motion.div>
  );
};

const SpotlightCard = ({ title, icon: Icon, skills, delay, spotlightColor }) => {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="group relative border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/40 rounded-3xl p-8 overflow-hidden"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform duration-300">
            <Icon size={24} />
            {/* Icon Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <SkillPill key={skill.name} skill={skill} index={idx} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend Development",
      icon: Code2,
      spotlightColor: "rgba(6, 182, 212, 0.15)", // Cyan
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38B2AC" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      ]
    },
    {
      title: "Backend Core",
      icon: Database,
      spotlightColor: "rgba(168, 85, 247, 0.15)", // Purple
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#092E20" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      spotlightColor: "rgba(249, 115, 22, 0.15)", // Orange
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
        { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-32 px-6 bg-transparent overflow-hidden">

      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-semibold tracking-wide uppercase mb-4">
            <Sparkles size={14} /> My Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600 dark:from-cyan-400 dark:to-purple-600">Skillset</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A diverse stack of technologies I use to bring ideas to life, from pixel-perfect UIs to scalable backend logic.
          </p>
        </motion.div>

        {/* --- SKILLS MASONRY GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <SpotlightCard
              key={index}
              {...category}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;