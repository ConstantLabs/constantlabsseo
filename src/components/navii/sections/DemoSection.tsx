import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const DEMO_SOURCE_URL = "https://navii-demo.vercel.app/";
const DEMO_ROUTE = "/navii/demo";

export const DemoSection = () => {
  return (
    <SectionWrapper
      id="demo"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navii-bg via-navii-purple/5 to-navii-bg" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-navii-purple/10 text-navii-purple border-navii-purple/30 font-tech">
            See It In Action
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
            Try the <span className="text-navii-cyan">Live Demo</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Experience Navii's AR indoor navigation firsthand. Click below to explore the interactive demo.
          </p>
        </motion.div>

        {/* Demo preview container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto max-w-md"
        >
          {/* Phone frame - clickable */}
          <Link
            to={DEMO_ROUTE}
            className="block relative group"
          >
            {/* Phone body */}
            <div
              className="relative w-full aspect-[9/19.5] rounded-[3rem] border-[6px] border-white/20
                        bg-navii-bg overflow-hidden group-hover:border-navii-cyan/40 transition-colors duration-300"
              style={{
                boxShadow: `
                  0 0 60px rgba(0, 229, 255, 0.2),
                  0 0 120px rgba(157, 0, 255, 0.1),
                  inset 0 0 30px rgba(0, 0, 0, 0.5)
                `,
              }}
            >
              {/* Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20" />

              {/* Screen with iframe */}
              <div className="absolute inset-[6px] rounded-[2.4rem] overflow-hidden bg-navii-bg">
                <iframe
                  src={DEMO_SOURCE_URL}
                  className="w-full h-full border-0 pointer-events-none"
                  title="Navii Demo Preview"
                />

                {/* Overlay for click handling */}
                <div className="absolute inset-0 bg-transparent group-hover:bg-navii-cyan/5 transition-colors duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                               bg-navii-bg/90 backdrop-blur-sm px-6 py-4 rounded-2xl border border-navii-cyan/30"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center gap-3 text-navii-cyan">
                      <ExternalLink className="w-5 h-5" />
                      <span className="font-semibold">Open Demo</span>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Glass reflection */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: `linear-gradient(
                    135deg,
                    rgba(255,255,255,0.1) 0%,
                    transparent 30%,
                    transparent 70%,
                    rgba(0,0,0,0.2) 100%
                  )`,
                }}
              />
            </div>

            {/* Glow effect */}
            <div
              className="absolute -inset-8 rounded-[4rem] -z-10 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"
              style={{
                background: `radial-gradient(ellipse at center, rgba(0, 229, 255, 0.3) 0%, rgba(157, 0, 255, 0.2) 50%, transparent 70%)`,
              }}
            />
          </Link>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Button
              asChild
              className="px-8 py-6 bg-gradient-to-r from-navii-cyan to-navii-magenta
                         text-black font-semibold text-lg rounded-xl
                         hover:opacity-90 transition-opacity shadow-lg shadow-navii-cyan/20"
            >
              <Link to={DEMO_ROUTE}>
                <Smartphone className="w-5 h-5 mr-2" />
                Try Interactive Demo
              </Link>
            </Button>
            <p className="text-gray-500 text-sm mt-3">
              Best experienced on mobile devices
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
