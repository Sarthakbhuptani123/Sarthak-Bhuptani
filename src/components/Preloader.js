import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    // Simulate loading progress
    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer);
                    setTimeout(() => setLoading(false), 500); // Slight delay after 100%
                    return 100;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    // Text reveal variants
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.1,
            }
        }
    };

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-black text-white"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    {/* Pulsing Logo/Name */}
                    <div className="mb-8 relative">
                        <motion.h1
                            className="text-4xl md:text-6xl font-bold tracking-tighter flex overflow-hidden"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {Array.from("SARTHAK").map((letter, i) => (
                                <motion.span key={i} variants={letterVariants}>
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-64 h-1 bg-white/10 rounded-full overflow-hidden relative">
                        {/* Fill */}
                        <motion.div
                            className="h-full bg-cyan-500 shadow-[0_0_10px_#06b6d4]"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Percentage Text */}
                    <div className="mt-4 font-mono text-cyan-500 text-sm">
                        {Math.round(progress)}%
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
