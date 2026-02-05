import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: LucideIcon;
  color?: "cyan" | "magenta" | "purple";
}

const colorClasses = {
  cyan: {
    text: "text-navii-cyan",
    bg: "bg-navii-cyan/10",
    border: "border-navii-cyan/20",
    glow: "rgba(0, 229, 255, 0.2)",
  },
  magenta: {
    text: "text-navii-magenta",
    bg: "bg-navii-magenta/10",
    border: "border-navii-magenta/20",
    glow: "rgba(255, 0, 229, 0.2)",
  },
  purple: {
    text: "text-navii-purple",
    bg: "bg-navii-purple/10",
    border: "border-navii-purple/20",
    glow: "rgba(157, 0, 255, 0.2)",
  },
};

export const StatCard = ({
  value,
  suffix = "",
  prefix = "",
  label,
  icon: Icon,
  color = "cyan"
}: StatCardProps) => {
  const colors = colorClasses[color];

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={`relative p-5 sm:p-6 rounded-xl sm:rounded-2xl border ${colors.border} ${colors.bg}
                  backdrop-blur-sm overflow-hidden group`}
      style={{
        boxShadow: `0 0 40px ${colors.glow}`,
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at top right, ${colors.glow}, transparent 60%)`,
        }}
      />

      <div className="relative z-10 flex items-start gap-4">
        {Icon && (
          <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
            <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.text}`} />
          </div>
        )}

        <div className="flex-1 min-w-0">
          <div className={`text-3xl sm:text-4xl md:text-5xl font-bold ${colors.text} mb-1`}>
            <AnimatedCounter
              target={value}
              suffix={suffix}
              prefix={prefix}
            />
          </div>

          <p className="text-gray-400 text-sm sm:text-base leading-snug">{label}</p>
        </div>
      </div>
    </motion.div>
  );
};
