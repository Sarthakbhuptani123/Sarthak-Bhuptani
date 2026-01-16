import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 600);
                    return 100;
                }
                return prev + 2;
            });
        }, 40);

        return () => clearInterval(interval);
    }, []);

    const [text, setText] = useState("");
    const finalText = "SARTHAK BHUPTANI";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%^&*";

    // Decrypt Effect
    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setText(prev =>
                finalText.split("").map((letter, index) => {
                    if (index < iteration) return letter;
                    return chars[Math.floor(Math.random() * chars.length)];
                }).join("")
            );

            if (iteration >= finalText.length) clearInterval(interval);
            iteration += 1 / 2; // Speed of reveal
        }, 50);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, filter: "blur(20px)", transition: { duration: 0.8 } }}
                >
                    <div className="text-center">
                        {/* Hacking / Decrypt Text */}
                        <motion.h1
                            className="text-3xl md:text-6xl font-black tracking-widest font-mono text-slate-900 dark:text-white mb-4 min-h-[60px]"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            {text}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1 }}
                            className="text-xs md:text-sm font-bold text-cyan-600 dark:text-cyan-400 tracking-[0.5em] uppercase"
                        >
                            Full Stack Developer
                        </motion.div>
                    </div>

                    {/* Minimal Progress Bar */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-900">
                        <motion.div
                            className="h-full bg-cyan-500 shadow-[0_0_20px_#06b6d4]"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Percentage Corner */}
                    <div className="absolute bottom-4 right-4 font-mono text-4xl font-black text-slate-200 dark:text-slate-800 select-none">
                        {Math.round(progress)}
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;