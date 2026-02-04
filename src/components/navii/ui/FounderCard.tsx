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
      className="relative max-w-2xl mx-auto p-8 rounded-3xl border border-white/10
                 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm
                 overflow-hidden group"
    >
      {/* Glow effect */}
      <div
        className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl
                   bg-navii-cyan/20 group-hover:bg-navii-cyan/30 transition-colors duration-500"
      />
      <div
        className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl
                   bg-navii-magenta/10 group-hover:bg-navii-magenta/20 transition-colors duration-500"
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="relative">
          <Avatar className="w-32 h-32 border-4 border-navii-cyan/30">
            <AvatarImage src={photoUrl} alt={name} />
            <AvatarFallback className="bg-navii-cyan/20 text-navii-cyan text-3xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -inset-1 rounded-full bg-navii-cyan/20 blur-xl -z-10" />
        </div>

        {/* Info */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl font-bold text-white mb-1 font-rajdhani">{name}</h3>
          <p className="text-navii-cyan font-tech text-sm mb-1">{title}</p>
          <p className="text-gray-400 text-sm mb-4">{background}</p>

          {/* Social links */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                           hover:border-navii-cyan/50 hover:bg-navii-cyan/10 transition-colors"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-navii-cyan" />
              </a>
            )}
            {instagramUrl && (
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center
                           hover:border-navii-magenta/50 hover:bg-navii-magenta/10 transition-colors"
              >
                <Instagram className="w-5 h-5 text-gray-400 hover:text-navii-magenta" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Quote */}
      <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
        <blockquote className="text-gray-300 italic text-center md:text-left">
          "{quote}"
        </blockquote>
      </div>
    </motion.div>
  );
};
