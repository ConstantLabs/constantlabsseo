import { motion } from "framer-motion";
import { Clock, FrownIcon, Store } from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { StatCard } from "../ui/StatCard";

export const ProblemSection = () => {
  const stats = [
    {
      icon: Clock,
      value: 15,
      suffix: "+",
      label: "Minutes wasted per visit looking for stores",
      color: "cyan" as const,
    },
    {
      icon: FrownIcon,
      value: 67,
      suffix: "%",
      label: "Of shoppers get frustrated navigating malls",
      color: "magenta" as const,
    },
    {
      icon: Store,
      value: 1200,
      suffix: "+",
      label: "Stores in Dubai Mall alone",
      color: "purple" as const,
    },
  ];

  return (
    <SectionWrapper
      id="problem"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div className="absolute inset-0 bg-gradient-to-l from-navii-magenta/30 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 font-rajdhani">
            Getting lost indoors isn't just{" "}
            <span className="text-navii-magenta">annoying</span>.
            <br />
            It's <span className="text-navii-cyan">expensive</span>.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Every year, millions of visitors waste time, miss appointments, and
            leave frustrated — all because there's no reliable way to navigate
            inside large venues.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={itemVariants}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </motion.div>

        {/* Problem statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-start gap-4 sm:gap-6">
            <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-navii-orange/20 flex items-center justify-center">
              <span className="text-2xl sm:text-3xl">🗺️</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 font-rajdhani">The Problem</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                <span className="text-navii-cyan font-semibold">Google Maps stops at the entrance.</span>{" "}
                Mall apps only work in one venue. Paper directories are confusing.
                There's no universal solution for indoor navigation...{" "}
                <span className="text-navii-magenta font-semibold">until now.</span>
              </p>
            </div>
          </div>

        </motion.div>
      </div>
    </SectionWrapper>
  );
};
