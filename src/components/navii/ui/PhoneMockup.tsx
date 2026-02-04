import { motion } from "framer-motion";
import { useState, ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  enableParallax?: boolean;
}

export const PhoneMockup = ({
  children,
  className = "",
  enableParallax = true
}: PhoneMockupProps) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!enableParallax) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMouse({ x: x * 2, y: y * 2 });
  };

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 });
  };

  return (
    <motion.div
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        className="relative w-[220px] sm:w-[280px] md:w-[320px] h-[440px] sm:h-[560px] md:h-[640px] rounded-[32px] sm:rounded-[40px] border-4 border-white/20
                   bg-navii-bg shadow-2xl overflow-hidden"
        animate={{
          rotateY: mouse.x * 15,
          rotateX: -mouse.y * 15,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          boxShadow: `
            0 0 60px rgba(0, 229, 255, 0.3),
            0 0 120px rgba(0, 229, 255, 0.1),
            inset 0 0 30px rgba(0, 229, 255, 0.05)
          `,
        }}
      >
        {/* Phone notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20" />

        {/* Screen content */}
        <div className="absolute inset-2 rounded-[36px] overflow-hidden bg-navii-bg">
          {children}
        </div>

        {/* Glass reflection overlay */}
        <div
          className="absolute inset-0 rounded-[36px] pointer-events-none z-10"
          style={{
            background: `linear-gradient(
              135deg,
              rgba(255,255,255,0.1) 0%,
              transparent 50%,
              rgba(0,0,0,0.2) 100%
            )`,
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <div
        className="absolute -inset-4 rounded-[60px] -z-10 blur-3xl opacity-50"
        style={{
          background: `radial-gradient(ellipse at center, rgba(0, 229, 255, 0.3) 0%, transparent 70%)`,
        }}
      />
    </motion.div>
  );
};
