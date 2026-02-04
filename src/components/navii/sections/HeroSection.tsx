import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "../ui/PhoneMockup";

interface HeroSectionProps {
  onWaitlistClick?: () => void;
  onPartnerClick?: () => void;
}

export const HeroSection = ({ onWaitlistClick, onPartnerClick }: HeroSectionProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navii-purple/20 via-transparent to-navii-cyan/10" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 229, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 229, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0, 229, 255, 0.2) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 229, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        style={{ opacity, y }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <Link to="/navii/demo" className="block group">
              <PhoneMockup enableParallax={true}>
                {/* Demo Preview */}
                <div className="w-full h-full relative bg-gradient-to-br from-navii-bg to-navii-bg-secondary">
                  {/* AR visualization placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="w-20 h-20 mx-auto mb-4 rounded-full bg-navii-cyan/20 flex items-center justify-center"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Sparkles className="w-8 h-8 text-navii-cyan" />
                      </motion.div>
                      <p className="text-navii-cyan font-tech text-sm">Interactive Demo</p>
                      <p className="text-gray-500 text-xs mt-1">Click to explore</p>
                    </div>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navii-bg/0 group-hover:bg-navii-cyan/10 transition-colors duration-300" />
                </div>
              </PhoneMockup>
            </Link>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="order-1 lg:order-2 text-center lg:text-left max-w-xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-navii-cyan/30 bg-navii-cyan/10 mb-6"
            >
              <Sparkles className="w-4 h-4 text-navii-cyan" />
              <span className="text-sm text-navii-cyan font-tech">AI-Powered AR Navigation</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight font-rajdhani">
              <span className="bg-gradient-to-r from-navii-cyan via-white to-navii-magenta bg-clip-text text-transparent">
                NAVII
              </span>
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 font-rajdhani">
              Indoor Navigation,
              <br />
              <span className="text-navii-cyan">Reinvented.</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0">
              Google Maps for inside buildings. AR arrows guide you through malls, airports, and hospitals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={onWaitlistClick}
                className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-navii-cyan to-navii-magenta
                           text-black font-semibold text-base sm:text-lg rounded-xl
                           hover:opacity-90 transition-opacity shadow-lg shadow-navii-cyan/20"
              >
                Join Waitlist
              </Button>
              <Button
                onClick={onPartnerClick}
                variant="outline"
                className="px-6 sm:px-8 py-4 sm:py-5 border-white/20 text-white font-semibold text-base sm:text-lg rounded-xl
                           hover:bg-white/5 hover:border-white/40 transition-colors"
              >
                Partner With Us
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-500 text-sm font-tech">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-navii-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
};
