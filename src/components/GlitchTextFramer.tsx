import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const GlitchTextFramer = ({ children }: { children: string }) => {
    const [isGlitching, setIsGlitching] = useState(false);

    // Auto-trigger glitch every 3-6 seconds
    useEffect(() => {
        const trigger = () => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 600);
        };

        // First glitch after 1s
        const initialTimeout = setTimeout(trigger, 1000);

        const interval = setInterval(() => {
            trigger();
        }, 3000 + Math.random() * 3000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    return (
        <div
            className="relative inline-block group"
            onMouseEnter={() => setIsGlitching(true)}
            onMouseLeave={() => setIsGlitching(false)}
        >
            {/* Glitch Layer 1 - Matte Cyan */}
            <motion.span
                className="absolute top-0 left-0 -z-10 opacity-0 mix-blend-screen"
                style={{ color: "hsl(170, 50%, 45%)" }}
                animate={isGlitching ? {
                    x: [0, -3, 4, -2, 0, 5, -3, 0],
                    y: [0, 2, -2, 3, -3, 1, 0],
                    opacity: [0.8, 0.4, 0.8, 0.2, 0.8, 0.5, 0.8],
                } : { x: 0, y: 0, opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.span>

            {/* Glitch Layer 2 - Matte Magenta */}
            <motion.span
                className="absolute top-0 left-0 -z-10 opacity-0 mix-blend-screen"
                style={{ color: "hsl(320, 45%, 45%)" }}
                animate={isGlitching ? {
                    x: [0, 3, -4, 2, 0, -5, 3, 0],
                    y: [0, -2, 2, -3, 3, -1, 0],
                    opacity: [0.8, 0.3, 0.8, 0.5, 0.8, 0.4, 0.8],
                } : { x: 0, y: 0, opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.span>

            {/* Glitch Layer 3 - Matte Amber (subtle) */}
            <motion.span
                className="absolute top-0 left-0 -z-10 opacity-0 mix-blend-screen"
                style={{ color: "hsl(38, 50%, 42%)" }}
                animate={isGlitching ? {
                    x: [0, -1, 2, 0, -2, 1, 0],
                    y: [0, 1, -1, 2, 0],
                    opacity: [0, 0.3, 0, 0.4, 0],
                } : { x: 0, y: 0, opacity: 0 }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.span>

            {/* Main Text */}
            <motion.span
                className="relative z-10 block"
                animate={isGlitching ? {
                    x: [0, -1, 1, 0],
                } : { x: 0 }}
                transition={{ duration: 0.15 }}
            >
                {children}
            </motion.span>
        </div>
    );
};
