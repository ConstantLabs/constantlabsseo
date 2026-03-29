import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const CTASection = () => {
  const { t, isAr } = useLanguage();
  const [email, setEmail] = useState("");

  return (
    <section
      id="cta"
      className="relative py-20 md:py-28 bg-[#2B124C] overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(113,67,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#7143E0]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <div
          
          
          
          
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-xl mx-auto">
            {t("cta.subtitle")}
          </p>
        </div>

        {/* Email input */}
        <div
          
          
          
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-lg mx-auto mb-6"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:bg-white/10 sm:border sm:border-white/10 sm:rounded-full sm:p-1.5">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("cta.emailPlaceholder")}
              className={`flex-1 bg-white/10 sm:bg-transparent border border-white/10 sm:border-none rounded-full sm:rounded-none py-3.5 sm:py-2.5 text-white placeholder-gray-400 outline-none text-sm ${isAr ? "pr-5 pl-4" : "pl-5 pr-4"}`}
            />
            <Button className="bg-[#FECD4D] hover:bg-[#fee580] text-[#2B124C] font-bold rounded-full px-7 py-3 sm:py-2.5 text-sm shadow-lg shadow-[#FECD4D]/20 hover:shadow-[#FECD4D]/30 transition-all whitespace-nowrap">
              {t("cta.button")}
              <ArrowRight className={`w-4 h-4 ${isAr ? "mr-1.5 rotate-180" : "ml-1.5"}`} />
            </Button>
          </div>
        </div>

        {/* WhatsApp link */}
        <div
          
          
          
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a
            href="https://wa.me/971561495656"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            {t("cta.whatsapp")}
          </a>
        </div>
      </div>
    </section>
  );
};
