import { motion } from "framer-motion";

export const GlitchTextFramer = ({ children }: { children: string }) => {
    return (
        <div className="relative inline-block group">
            {/* Glitch Layer 1 - Cyan */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-cyan-500 opacity-70 mix-blend-screen"
                animate={{
                    x: [0, -2, 2, -1, 0, 3, -2, 0],
                    y: [0, 1, -1, 2, -2, 1, 0],
                    opacity: [0.7, 0.4, 0.7, 0.2, 0.7],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    repeatType: "mirror",
                }}
            >
                {children}
            </motion.span>

            {/* Glitch Layer 2 - Magenta */}
            <motion.span
                className="absolute top-0 left-0 -z-10 text-magenta-500 opacity-70 mix-blend-screen text-[#ff00ff]"
                animate={{
                    x: [0, 2, -2, 1, 0, -3, 2, 0],
                    y: [0, -1, 1, -2, 2, -1, 0],
                    opacity: [0.7, 0.3, 0.7, 0.5, 0.7],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: "easeInOut",
                    repeatType: "mirror",
                    delay: 0.1,
                }}
            >
                {children}
            </motion.span>

            {/* Main Text with subtle shake */}
            <motion.span
                className="relative z-10 block"
                whileHover={{ scale: 1.02 }}
                animate={{
                    x: [0, 1, -1, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                    repeatDelay: 2
                }}
            >
                {children}
            </motion.span>
        </div>
    );
};
