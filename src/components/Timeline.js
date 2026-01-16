// src/components/Timeline.js
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const timelineData = [
    {
        type: "experience",
        title: "Full Stack Developer",
        place: "Freelance",
        date: "2025 - Present",
        highlights: [
            "Developed responsive web applications using React and Tailwind.",
            "Integrated secure authentication systems with Clerk/Auth0.",
            "Improved site performance scores by 40% via optimizations."
        ],
        icon: Briefcase,
        color: "text-cyan-400",
        glow: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]",
        border: "border-cyan-500/30"
    },
    {
        type: "education",
        title: "Bachelor of Engineering",
        place: "LDRP Institute of Technology",
        date: "2023 - 2026",
        highlights: [
            "Major: Computer Engineering",
            "Focus: Advanced Algorithms & System Design",
            "Building a comprehensive final year project on AI"
        ],
        icon: GraduationCap,
        color: "text-purple-400",
        glow: "shadow-[0_0_40px_-5px_rgba(168,85,247,0.3)]",
        border: "border-purple-500/30"
    },
    {
        type: "education",
        title: "Diploma in Engineering",
        place: "BBIT Institute of Technology",
        date: "2020 - 2023",
        highlights: [
            "Graduated with Distinction",
            "Core Subjects: C++, Java, RDBMS",
            "Completed capstone project on Library Management"
        ],
        icon: Award,
        color: "text-blue-400",
        glow: "shadow-[0_0_30px_-5px_rgba(96,165,250,0.3)]",
        border: "border-blue-500/30"
    }
];

const TimelineItem = ({ data, index }) => {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex items-start md:items-stretch md:justify-center gap-6 md:gap-24 mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Date Desktop - Opposite Side */}
            <div className={`hidden md:flex w-5/12 flex-col justify-center ${isEven ? 'items-start text-left' : 'items-end text-right'}`}>
                <div className="bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
                    <span className={`font-mono text-sm font-bold ${data.color}`}>{data.date}</span>
                </div>
            </div>

            {/* Scale-up Connector Node */}
            <div className="relative md:absolute md:left-1/2 flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 rounded-full z-10 shadow-2xl md:-translate-x-1/2 mr-4 md:mr-0">
                <data.icon size={20} className={data.color} />
            </div>

            {/* Card Content */}
            <div className="flex-1 md:w-5/12 ml-0 md:ml-0">
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent ${data.glow}`}
                >
                    <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-[22px] p-6 h-full border border-slate-200 dark:border-white/5">

                        {/* Mobile Date */}
                        <div className="md:hidden mb-4 inline-block bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/10">
                            <span className={`text-xs font-bold ${data.color}`}>{data.date}</span>
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2">{data.title}</h3>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-6 font-medium">
                            <MapPin size={16} className={data.color} /> {data.place}
                        </div>

                        <ul className="space-y-3">
                            {data.highlights.map((point, i) => (
                                <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${data.color.replace('text-', 'bg-')}`}></span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const Timeline = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Animate the line height based on scroll
    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="experience" className="relative py-24 px-6 overflow-hidden">

            <div ref={ref} className="max-w-6xl mx-auto relative z-10">

                {/* Header */}
                <div className="text-center mb-24">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">My Journey</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                <div className="relative">

                    {/* The Magic Glowing Line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full overflow-hidden">
                        <motion.div
                            style={{ height: lineHeight }}
                            className="w-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 shadow-[0_0_20px_rgba(59,130,246,0.6)]"
                        />
                    </div>

                    <div className="py-10">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={index} data={item} index={index} />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Timeline;
