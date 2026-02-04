import { motion } from "framer-motion";
import { TrendingUp, Users, Building } from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: TrendingUp,
    value: 40,
    prefix: "$",
    suffix: "B+",
    label: "Global indoor location market by 2030",
    color: "cyan",
  },
  {
    icon: Users,
    value: 111,
    suffix: "M",
    label: "Dubai Mall visitors in 2024",
    color: "magenta",
  },
  {
    icon: Building,
    value: 65,
    suffix: "+",
    label: "Shopping malls in UAE alone",
    color: "purple",
  },
];

const colorStyles = {
  cyan: {
    text: "text-navii-cyan",
    bg: "bg-navii-cyan/10",
    border: "border-navii-cyan/20",
    glow: "0 0 60px rgba(0, 229, 255, 0.2)",
  },
  magenta: {
    text: "text-navii-magenta",
    bg: "bg-navii-magenta/10",
    border: "border-navii-magenta/20",
    glow: "0 0 60px rgba(255, 0, 229, 0.2)",
  },
  purple: {
    text: "text-navii-purple",
    bg: "bg-navii-purple/10",
    border: "border-navii-purple/20",
    glow: "0 0 60px rgba(157, 0, 255, 0.2)",
  },
};

export const MarketSection = () => {
  return (
    <SectionWrapper
      id="market"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navii-cyan/5 to-transparent" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-navii-cyan to-transparent"
          animate={{ y: ["-100%", "100%"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-navii-magenta to-transparent"
          animate={{ y: ["100%", "-100%"] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 bg-navii-cyan/10 text-navii-cyan border-navii-cyan/30 font-tech">
            Market Opportunity
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
            A <span className="text-navii-magenta">Massive</span> Opportunity
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dubai Mall is the most visited place on Earth. Yet no one has solved indoor navigation.
          </p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat) => {
            const styles = colorStyles[stat.color as keyof typeof colorStyles];

            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className={`relative p-8 rounded-3xl border ${styles.border}
                           ${styles.bg} backdrop-blur-sm overflow-hidden group`}
                style={{ boxShadow: styles.glow }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${styles.bg} flex items-center justify-center mb-6`}>
                  <stat.icon className={`w-7 h-7 ${styles.text}`} />
                </div>

                {/* Value */}
                <div className={`text-5xl md:text-6xl font-bold ${styles.text} mb-2`}>
                  <AnimatedCounter
                    target={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    className={styles.text}
                  />
                </div>

                {/* Label */}
                <p className="text-gray-400 text-sm">{stat.label}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${styles.text.includes('cyan') ? 'rgba(0, 229, 255, 0.1)' : styles.text.includes('magenta') ? 'rgba(255, 0, 229, 0.1)' : 'rgba(157, 0, 255, 0.1)'}, transparent 70%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm text-center"
        >
          <div className="absolute top-6 left-8 text-6xl text-navii-cyan/20 font-serif">"</div>
          <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto relative z-10">
            Dubai Mall is the most visited place on Earth, yet there's no universal way to navigate it.
            Navii aims to change that — starting with the UAE, then the world.
          </blockquote>
          <div className="absolute bottom-6 right-8 text-6xl text-navii-magenta/20 font-serif rotate-180">"</div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
