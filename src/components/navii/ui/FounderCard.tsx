import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Linkedin, Instagram } from "lucide-react";

interface FounderCardProps {
  name: string;
  title: string;
  background: string;
  quote: string;
  photoUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
}

export const FounderCard = ({
  name,
  title,
  background,
  quote,
  photoUrl,
  linkedinUrl,
  instagramUrl
}: FounderCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative max-w-2xl mx-auto p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10
                 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
                 overflow-hidden group"
    >
      {/* Glow effect */}
      <div
        className="absolute -top-24 -right-24 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-3xl
                   bg-navii-cyan/20 group-hover:bg-navii-cyan/30 transition-colors duration-500"
      />
      <div
        className="absolute -bottom-24 -left-24 w-32 sm:w-48 h-32 sm:h-48 rounded-full blur-3xl
                   bg-navii-magenta/10 group-hover:bg-navii-magenta/20 transition-colors duration-500"
      />

      <div className="relative z-10 flex flex-row items-center gap-4 sm:gap-6 md:gap-8">
        {/* Avatar */}
        <div className="relative flex-shrink-0">
          <Avatar className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 border-2 sm:border-4 border-navii-cyan/30">
            <AvatarImage src={photoUrl} alt={name} />
            <AvatarFallback className="bg-navii-cyan/20 text-navii-cyan text-xl sm:text-2xl md:text-3xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -inset-1 rounded-full bg-navii-cyan/20 blur-xl -z-10" />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-0.5 sm:mb-1 font-rajdhani">{name}</h3>
          <p className="text-navii-cyan font-tech text-xs sm:text-sm mb-0.5 sm:mb-1">{title}</p>
          <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2 sm:line-clamp-none">{background}</p>

          {/* Social links */}
          <div className="flex items-center gap-2 sm:gap-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center
                           hover:border-navii-cyan/50 hover:bg-navii-cyan/10 transition-colors"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-navii-cyan" />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/10 flex items-center justify-center
                           hover:border-navii-magenta/50 hover:bg-navii-magenta/10 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 hover:text-navii-magenta" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-10 mt-4 sm:mt-6 md:mt-8 pt-4 sm:pt-6 border-t border-white/10">
        <blockquote className="text-gray-300 italic text-sm sm:text-base">
          "{quote}"
        </blockquote>
      </div>
    </motion.div>
  );
};
