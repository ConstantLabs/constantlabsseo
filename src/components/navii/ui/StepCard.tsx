import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
}

export const StepCard = ({
  stepNumber,
  title,
  description,
  imageSrc
}: StepCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative flex flex-col items-center text-center group"
    >
      {/* Step number badge */}
      <Badge
        className="mb-4 bg-navii-cyan/20 text-navii-cyan border-navii-cyan/30
                   font-tech text-lg px-4 py-1 hover:bg-navii-cyan/30"
      >
        {stepNumber}
      </Badge>

      {/* Phone preview */}
      <div className="relative w-40 h-72 mb-6 rounded-3xl border-2 border-white/10
                      bg-navii-bg-secondary overflow-hidden
                      group-hover:border-navii-cyan/30 transition-colors duration-300">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-navii-cyan/20 animate-pulse" />
          </div>
        )}

        {/* Glow on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, rgba(0, 229, 255, 0.1), transparent 70%)`,
          }}
        />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 font-rajdhani">{title}</h3>
      <p className="text-gray-400 text-sm max-w-[200px]">{description}</p>

      {/* Arrow connector (hidden on last item) */}
      <div className="hidden md:block absolute top-1/3 -right-8 text-navii-cyan/30
                      group-last:hidden">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
};
