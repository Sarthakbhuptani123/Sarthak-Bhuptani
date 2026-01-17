import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CustomCursor = () => {
    const { theme } = useTheme();
    const [isHovering, setIsHovering] = useState(false);

    // Mouse position state for simple rendering
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Create a "Snake" of springs
    // Minimal lag
    const springConfig1 = { damping: 25, stiffness: 700 };
    const springX1 = useSpring(mouseX, springConfig1);
    const springY1 = useSpring(mouseY, springConfig1);

    // Medium lag
    const springConfig2 = { damping: 30, stiffness: 500 };
    const springX2 = useSpring(mouseX, springConfig2);
    const springY2 = useSpring(mouseY, springConfig2);

    // High lag
    const springConfig3 = { damping: 35, stiffness: 300 };
    const springX3 = useSpring(mouseX, springConfig3);
    const springY3 = useSpring(mouseY, springConfig3);

    // Very High lag
    const springConfig4 = { damping: 40, stiffness: 200 };
    const springX4 = useSpring(mouseX, springConfig4);
    const springY4 = useSpring(mouseY, springConfig4);

    // Ultra High lag (The tail)
    const springConfig5 = { damping: 45, stiffness: 100 };
    const springX5 = useSpring(mouseX, springConfig5);
    const springY5 = useSpring(mouseY, springConfig5);

    useEffect(() => {
        const updateMousePosition = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('a, button, input, textarea, .cursor-pointer')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    // Visual styles for the segments
    // We will render them from "Bottom" (tail) to "Top" (head)
    // Tail is #5, Head is #1

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block mix-blend-screen">

            {/* Tail Segments - Creating the "Comet" look */}

            {/* Segment 5 - Purple Fade */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full bg-purple-600/20 blur-sm"
                style={{ x: springX5, y: springY5, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Segment 4 - Blue Fade */}
            <motion.div
                className="fixed top-0 left-0 w-6 h-6 rounded-full bg-blue-500/30 blur-[2px]"
                style={{ x: springX4, y: springY4, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Segment 3 - Cyan Fade */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cyan-400/50"
                style={{ x: springX3, y: springY3, translateX: '-50%', translateY: '-50%' }}
            />
            {/* Segment 2 - White Core glow */}
            <motion.div
                className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white/80"
                style={{ x: springX2, y: springY2, translateX: '-50%', translateY: '-50%' }}
            />

            {/* HEAD - The actual cursor */}
            <motion.div
                className="fixed top-0 left-0 flex items-center justify-center"
                style={{ x: springX1, y: springY1, translateX: '-50%', translateY: '-50%' }}
            >
                {/* Reactive Ring */}
                <motion.div
                    animate={{
                        scale: isHovering ? 4 : 1,
                        borderColor: isHovering ? "rgba(6, 182, 212, 0.8)" : "rgba(255, 255, 255, 0)",
                        backgroundColor: isHovering ? "rgba(6, 182, 212, 0.1)" : "rgba(255, 255, 255, 1)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="w-3 h-3 rounded-full border border-transparent backdrop-blur-none"
                />
            </motion.div>
        </div>
    );
};

export default CustomCursor;
