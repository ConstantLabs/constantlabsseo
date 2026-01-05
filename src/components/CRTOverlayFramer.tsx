import { motion } from "framer-motion";

export const CRTOverlayFramer = () => {
    return (
        <>
            {/* Vignette Overlay */}
            <div
                className="fixed inset-0 pointer-events-none z-[9998]"
                style={{
                    background: "radial-gradient(ellipse at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%)"
                }}
            />

            {/* Subtle Screen Glow */}
            <motion.div
                className="fixed inset-0 pointer-events-none z-[9999] mix-blend-overlay"
                animate={{
                    opacity: [0.03, 0.05, 0.03]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    background: "rgba(255, 255, 255, 0.05)"
                }}
            />
        </>
    );
};
