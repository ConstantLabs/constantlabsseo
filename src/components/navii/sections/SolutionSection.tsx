import { motion } from "framer-motion";
import { Search, Navigation, MapPin } from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    number: 1,
    icon: Search,
    title: "POINT",
    subtitle: "Search for any store",
    description: "Find stores, products, restaurants, or services across any connected venue.",
    color: "navii-cyan",
  },
  {
    number: 2,
    icon: Navigation,
    title: "FOLLOW",
    subtitle: "AR arrows guide you",
    description: "Floating arrows overlay your camera view, showing the exact path to walk.",
    color: "navii-magenta",
  },
  {
    number: 3,
    icon: MapPin,
    title: "ARRIVE",
    subtitle: "Reach your destination",
    description: "Get notified when you've arrived. Never walk past your destination again.",
    color: "navii-purple",
  },
];

export const SolutionSection = () => {
  return (
    <SectionWrapper
      id="how-it-works"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navii-cyan/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-navii-cyan/10 text-navii-cyan border-navii-cyan/30 font-tech">
            How It Works
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
            Three Steps to Your Destination
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            No more asking for directions. No more wandering. Just point, follow, and arrive.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 md:gap-4 relative"
        >
          {/* Connection line (desktop only) */}
          <div className="hidden md:block absolute top-1/3 left-[20%] right-[20%] h-px bg-gradient-to-r from-navii-cyan via-navii-magenta to-navii-purple" />

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number badge */}
              <div className="relative mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className={`w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-${step.color}/20
                             border-2 border-${step.color}/30
                             flex items-center justify-center relative z-10`}
                  style={{
                    boxShadow: `0 0 40px var(--tw-shadow-color)`,
                    '--tw-shadow-color': step.color === 'navii-cyan'
                      ? 'rgba(0, 229, 255, 0.2)'
                      : step.color === 'navii-magenta'
                      ? 'rgba(255, 0, 229, 0.2)'
                      : 'rgba(157, 0, 255, 0.2)'
                  } as React.CSSProperties}
                >
                  <step.icon className={`w-6 h-6 sm:w-8 sm:h-8 text-${step.color}`} />
                </motion.div>

                {/* Step number */}
                <Badge
                  className={`absolute -top-2 -right-2 w-8 h-8 p-0 flex items-center justify-center
                             bg-${step.color} text-black font-bold text-lg border-0`}
                >
                  {step.number}
                </Badge>
              </div>

              {/* Phone preview placeholder */}
              <div className="w-24 h-40 sm:w-32 sm:h-56 mb-4 sm:mb-6 rounded-xl sm:rounded-2xl border-2 border-white/10
                            bg-navii-bg-secondary overflow-hidden
                            hover:border-white/20 transition-colors">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-b from-white/5 to-transparent">
                  <step.icon className={`w-8 h-8 sm:w-10 sm:h-10 text-${step.color}/50`} />
                </div>
              </div>

              {/* Content */}
              <h3 className={`text-xl sm:text-2xl font-bold text-${step.color} mb-1 font-rajdhani tracking-wide`}>
                {step.title}
              </h3>
              <p className="text-white font-medium mb-2">{step.subtitle}</p>
              <p className="text-gray-400 text-sm max-w-[240px]">
                {step.description}
              </p>

              {/* Arrow (hidden on last and mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 transform -translate-y-1/2 z-20">
                  <motion.svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    initial={{ x: -5, opacity: 0.5 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-${step.color}/50`}
                    />
                  </motion.svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
