import { motion } from "framer-motion";
import {
  CheckCircle2,
  Building2,
  BarChart3,
  Megaphone,
  Calendar
} from "lucide-react";
import { SectionWrapper, containerVariants, itemVariants } from "../ui/SectionWrapper";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: CheckCircle2,
    text: "Increase customer satisfaction",
  },
  {
    icon: CheckCircle2,
    text: "Boost dwell time and foot traffic",
  },
  {
    icon: CheckCircle2,
    text: "Gain valuable visitor analytics",
  },
  {
    icon: CheckCircle2,
    text: "Offer promoted listings to retailers",
  },
];

const revenueStreams = [
  {
    icon: Building2,
    title: "SaaS Platform",
    price: "$5-50K/mo",
    description: "White-label navigation for venues",
  },
  {
    icon: Megaphone,
    title: "Promoted Listings",
    price: "$500-2K/mo",
    description: "Priority placement for retailers",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    price: "$1-10K/mo",
    description: "Visitor flow and behavior insights",
  },
];

interface B2BSectionProps {
  onScheduleClick?: () => void;
}

export const B2BSection = ({ onScheduleClick }: B2BSectionProps) => {
  return (
    <SectionWrapper
      id="partners"
      className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navii-purple/10 via-transparent to-navii-cyan/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="mb-4 bg-navii-purple/10 text-navii-purple border-navii-purple/30 font-tech">
              For Business
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-rajdhani text-white">
              For Mall Operators & <span className="text-navii-magenta">Venue Partners</span>
            </h2>
            <p className="text-gray-400 mb-8">
              Transform your venue's visitor experience while unlocking new revenue streams.
              Partner with Navii to lead the indoor navigation revolution.
            </p>

            {/* Benefits */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.text}
                  variants={itemVariants}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-navii-cyan/20 flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-navii-cyan" />
                  </div>
                  <span className="text-gray-300">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <Button
              onClick={onScheduleClick}
              className="px-6 sm:px-8 py-4 sm:py-5 bg-gradient-to-r from-navii-magenta to-navii-purple
                         text-white font-semibold text-base sm:text-lg rounded-xl
                         hover:opacity-90 transition-opacity shadow-lg shadow-navii-magenta/20"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Partnership Call
            </Button>
          </motion.div>

          {/* Right: Revenue Model */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 font-rajdhani">
                Revenue Model Preview
              </h3>

              <div className="space-y-4">
                {revenueStreams.map((stream, index) => (
                  <motion.div
                    key={stream.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    className="p-4 rounded-xl border border-white/10 bg-white/5
                               hover:border-navii-cyan/30 transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-navii-cyan/10 flex items-center justify-center
                                    group-hover:bg-navii-cyan/20 transition-colors">
                        <stream.icon className="w-5 h-5 text-navii-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-white">{stream.title}</h4>
                          <span className="text-navii-cyan font-tech text-sm">{stream.price}</span>
                        </div>
                        <p className="text-gray-400 text-sm">{stream.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-gray-500 text-sm text-center">
                  Custom enterprise pricing available for large venues
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};
