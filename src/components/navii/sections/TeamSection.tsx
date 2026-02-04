import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { FounderCard } from "../ui/FounderCard";
import { Badge } from "@/components/ui/badge";

const founderPhotoUrl = "/images/founder-mohamad-tamer.jpg";

export const TeamSection = () => {
  return (
    <SectionWrapper
      id="team"
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20">
        <div className="w-full h-full bg-gradient-to-br from-navii-cyan via-navii-purple to-navii-magenta" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-white/10 text-white border-white/20 font-tech">
            The Team
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-rajdhani text-white">
            From Frustration to <span className="text-navii-cyan">Innovation</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <FounderCard
            name="Mohamad Tamer"
            title="Founder & Developer"
            background="Computer Engineer | Building the future of indoor navigation"
            quote="After spending 20 minutes looking for a single store in Dubai Mall, I knew there had to be a better way. That frustration became Navii."
            photoUrl={founderPhotoUrl}
            linkedinUrl="https://www.linkedin.com/in/mohamad-rabie-b304a8203/"
            instagramUrl="https://instagram.com/m7md.t_"
          />
        </motion.div>
      </div>
    </SectionWrapper>
  );
};
