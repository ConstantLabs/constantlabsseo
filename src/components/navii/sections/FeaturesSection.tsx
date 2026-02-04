import { motion } from "framer-motion";
import {
  Navigation,
  Globe,
  Search,
  Map,
  Timer,
  Building2
} from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Navigation,
    title: "AR Navigation",
    description: "Floating arrows overlay your camera view, guiding you step-by-step through complex venues. No more guessing which way to turn.",
    color: "cyan",
    size: "large",
    colSpan: 2,
    rowSpan: 2,
  },
  {
    icon: Globe,
    title: "Universal Coverage",
    description: "One app for all venues — malls, airports, hospitals, universities. No need for multiple apps.",
    color: "magenta",
    size: "small",
  },
  {
    icon: Search,
    title: "Item-Level Search",
    description: "Search for specific products, not just stores. Find 'Nike Air Max' or 'iPhone charger' directly.",
    color: "purple",
    size: "small",
  },
  {
    icon: Map,
    title: "2D Map Fallback",
    description: "Toggle between AR and traditional map view. Works even when you can't hold up your phone.",
    color: "cyan",
    size: "small",
  },
  {
    icon: Timer,
    title: "Real-Time Updates",
    description: "Live distance countdown, ETA, and floor changes. Know exactly how far you have left.",
    color: "magenta",
    size: "small",
  },
];

const colorStyles = {
  cyan: {
    text: "text-navii-cyan",
    bg: "bg-navii-cyan/10",
    border: "border-navii-cyan/20 hover:border-navii-cyan/40",
    glow: "rgba(0, 229, 255, 0.15)",
    iconBg: "bg-navii-cyan/20",
  },
  magenta: {
    text: "text-navii-magenta",
    bg: "bg-navii-magenta/10",
    border: "border-navii-magenta/20 hover:border-navii-magenta/40",
    glow: "rgba(255, 0, 229, 0.15)",
    iconBg: "bg-navii-magenta/20",
  },
  purple: {
    text: "text-navii-purple",
    bg: "bg-navii-purple/10",
    border: "border-navii-purple/20 hover:border-navii-purple/40",
    glow: "rgba(157, 0, 255, 0.15)",
    iconBg: "bg-navii-purple/20",
  },
};

export const FeaturesSection = () => {
  return (
    <SectionWrapper
      id="features"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <Badge className="mb-3 sm:mb-4 bg-navii-magenta/10 text-navii-magenta border-navii-magenta/30 font-tech text-xs sm:text-sm">
            Features
          </Badge>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-3 sm:mb-4 font-rajdhani text-white">
            Built for the <span className="text-navii-cyan">Real World</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Every feature designed to solve actual indoor navigation challenges.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4"
        >
          {features.map((feature) => {
            const styles = colorStyles[feature.color as keyof typeof colorStyles];
            const isLarge = feature.size === "large";

            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border ${styles.border}
                           bg-white/5 backdrop-blur-sm overflow-hidden
                           transition-all duration-300 group
                           ${isLarge ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${styles.glow}, transparent 60%)`,
                  }}
                />

                <div className={`relative z-10 h-full flex ${isLarge ? "flex-col justify-between" : "flex-row items-start gap-3 sm:flex-col sm:items-stretch sm:gap-0"}`}>
                  <div className={`${isLarge ? "" : "flex-shrink-0 sm:mb-3"}`}>
                    <div className={`w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl ${styles.iconBg} flex items-center justify-center ${isLarge ? "mb-3 sm:mb-4" : ""}`}>
                      <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${styles.text}`} />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className={`font-bold text-white mb-1 font-rajdhani ${isLarge ? "text-lg sm:text-xl md:text-2xl" : "text-base sm:text-lg"}`}>
                      {feature.title}
                    </h3>

                    <p className={`text-gray-400 ${isLarge ? "text-sm sm:text-base" : "text-xs sm:text-sm"} line-clamp-3 sm:line-clamp-none`}>
                      {feature.description}
                    </p>
                  </div>

                  {/* Large card extra visual - hidden on mobile */}
                  {isLarge && (
                    <div className="hidden sm:block mt-4 sm:mt-6 relative">
                      <div className="aspect-video rounded-xl bg-navii-bg border border-white/10 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="relative">
                            <motion.div
                              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-navii-cyan/50"
                              animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 1, 0.5],
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                              }}
                            />
                            <Navigation className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 text-navii-cyan" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}

          {/* Coming soon card */}
          <motion.div
            variants={itemVariants}
            className="relative p-3 sm:p-4 md:p-5 rounded-xl sm:rounded-2xl border border-dashed border-white/20
                       bg-white/[0.02] overflow-hidden flex items-center justify-center min-h-[80px] sm:min-h-0"
          >
            <div className="text-center">
              <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-gray-600 mx-auto mb-1 sm:mb-2" />
              <p className="text-gray-500 text-xs sm:text-sm">More coming soon</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
