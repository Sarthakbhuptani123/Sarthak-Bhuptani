import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { theme } = useTheme();

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if the hovered element (or its parent) is clickable
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
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
            height: 32,
            width: 32,
            backgroundColor: theme === 'dark' ? "rgba(6, 182, 212, 0.3)" : "rgba(6, 182, 212, 0.2)",
            border: theme === 'dark' ? "1px solid rgba(6, 182, 212, 0.5)" : "1px solid rgba(6, 182, 212, 0.8)",
            mixBlendMode: theme === 'dark' ? "screen" : "multiply"
        },
        hover: {
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
            height: 64,
            width: 64,
            backgroundColor: theme === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)",
            border: theme === 'dark' ? "1px solid rgba(255, 255, 255, 0.5)" : "1px solid rgba(0, 0, 0, 0.2)",
            mixBlendMode: "difference"
        }
    };

    // Dot logic
    const dotVariants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: theme === 'dark' ? "#06b6d4" : "#0891b2", // Cyan-500 vs Cyan-600
        },
        hover: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            backgroundColor: theme === 'dark' ? "#ffffff" : "#000000",
            scale: 0.5
        }
    };

    return (
        <div className="pointer-events-none fixed top-0 left-0 z-[9999] hidden md:block">
            {/* Outer Circle */}
            <motion.div
                className="fixed top-0 left-0 rounded-full"
                variants={variants}
                animate={isHovering ? "hover" : "default"}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5
                }}
            />

            {/* Center Dot */}
            <motion.div
                className="fixed top-0 left-0 h-2 w-2 rounded-full"
                variants={dotVariants}
                animate={isHovering ? "hover" : "default"}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
            />
        </div>
    );
};

export default CustomCursor;
