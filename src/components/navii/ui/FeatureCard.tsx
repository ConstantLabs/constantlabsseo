import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  size?: "small" | "large";
  color?: "cyan" | "magenta" | "purple";
  imageSrc?: string;
}

const colorClasses = {
  cyan: {
    text: "text-navii-cyan",
    bg: "bg-navii-cyan/10",
    border: "hover:border-navii-cyan/40",
    glow: "rgba(0, 229, 255, 0.15)",
  },
  magenta: {
    text: "text-navii-magenta",
    bg: "bg-navii-magenta/10",
    border: "hover:border-navii-magenta/40",
    glow: "rgba(255, 0, 229, 0.15)",
  },
  purple: {
    text: "text-navii-purple",
    bg: "bg-navii-purple/10",
    border: "hover:border-navii-purple/40",
    glow: "rgba(157, 0, 255, 0.15)",
  },
};

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  size = "small",
  color = "cyan",
  imageSrc
}: FeatureCardProps) => {
  const colors = colorClasses[color];
  const isLarge = size === "large";

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      className={`relative p-6 rounded-2xl border border-white/10 ${colors.border}
                  bg-white/5 backdrop-blur-sm overflow-hidden group
                  transition-colors duration-300
                  ${isLarge ? "row-span-2" : ""}`}
    >
      {/* Background image for large cards */}
      {imageSrc && isLarge && (
        <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity">
          <img
            src={imageSrc}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navii-bg via-navii-bg/80 to-transparent" />
        </div>
      )}

      {/* Glow effect on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${colors.glow}, transparent 60%)`,
        }}
      />

      <div className={`relative z-10 h-full flex flex-col ${isLarge ? "justify-end" : ""}`}>
        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
          <Icon className={`w-6 h-6 ${colors.text}`} />
        </div>

        <h3 className={`font-bold text-white mb-2 font-rajdhani ${isLarge ? "text-2xl" : "text-xl"}`}>
          {title}
        </h3>

        <p className={`text-gray-400 ${isLarge ? "text-base" : "text-sm"}`}>
          {description}
        </p>
      </div>
    </motion.div>
  );
};
