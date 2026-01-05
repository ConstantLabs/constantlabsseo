import { motion } from "framer-motion";
import { useState } from "react";

export const GlitchTextFramer = ({ children }: { children: string }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative inline-block group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Glitch Layer 1 - Cyan - only animate on hover */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-0 mix-blend-screen"
                animate={isHovered ? {
                    x: [0, -2, 2, -1, 0, 3, -2, 0],
                    y: [0, 1, -1, 2, -2, 1, 0],
                    opacity: [0.7, 0.4, 0.7, 0.2, 0.7],
                } : { x: 0, y: 0, opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.span>

            {/* Glitch Layer 2 - Magenta - only animate on hover */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-magenta-500 opacity-0 mix-blend-screen text-[#ff00ff]"
                animate={isHovered ? {
                    x: [0, 2, -2, 1, 0, -3, 2, 0],
                    y: [0, -1, 1, -2, 2, -1, 0],
                    opacity: [0.7, 0.3, 0.7, 0.5, 0.7],
                } : { x: 0, y: 0, opacity: 0 }}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            >
                {children}
            </motion.span>

            {/* Main Text - subtle scale on hover only */}
            <motion.span
                className="relative z-10 block"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
            >
                {children}
            </motion.span>
        </div>
    );
};

