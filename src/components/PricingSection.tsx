import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle, Mail } from "lucide-react";

interface PricingTier {
  key: string;
  featured?: boolean;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    key: "starter",
    features: [
      "pricing.starter.f1",
      "pricing.starter.f2",
      "pricing.starter.f3",
      "pricing.starter.f4",
      "pricing.starter.f5",
    ],
  },
  {
    key: "growth",
    featured: true,
    features: [
      "pricing.growth.f1",
      "pricing.growth.f2",
      "pricing.growth.f3",
      "pricing.growth.f4",
      "pricing.growth.f5",
      "pricing.growth.f6",
      "pricing.growth.f7",
    ],
  },
  {
    key: "enterprise",
    features: [
      "pricing.enterprise.f1",
      "pricing.enterprise.f2",
      "pricing.enterprise.f3",
      "pricing.enterprise.f4",
      "pricing.enterprise.f5",
      "pricing.enterprise.f6",
      "pricing.enterprise.f7",
    ],
  },
];

export const PricingSection = () => {
  const { t, lang } = useLanguage();
  const [openTier, setOpenTier] = useState<string | null>(null);

  const getPlanEmailSubject = (tierKey: string, planName: string) => {
    const subject = lang === "ar" 
      ? `استفسار عن خطة ${planName}`
      : `Inquiry about ${planName} plan`;
    return encodeURIComponent(subject);
  };

  const getWhatsAppMessage = (tierKey: string, planName: string, price: string) => {
    const message = lang === "ar"
      ? `مرحباً، أرغب في الاستعلام عن خطة ${planName} (${price})`
      : `Hi, I'm interested in the ${planName} plan (${price})`;
    return encodeURIComponent(message);
  };

  return (
    <section id="pricing" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="w-12 h-1 bg-[#7143E0] mx-auto mb-4" />
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">
            {t("pricing.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-slate-900">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[17px]">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.key}
              
              
              
              
              className={`relative rounded-[20px] p-7 md:p-8 flex flex-col ${
                tier.featured
                  ? "bg-[#2B124C] text-white shadow-2xl"
                  : "bg-white border border-slate-200 text-slate-900"
              }`}
            >
              {/* Tier name */}
              <h3 className={`text-lg font-heading font-bold mb-1 ${tier.featured ? "text-white" : "text-slate-900"}`}>
                {t(`pricing.${tier.key}.name`)}
              </h3>
              <p className={`text-sm mb-5 ${tier.featured ? "text-slate-300" : "text-slate-500"}`}>
                {t(`pricing.${tier.key}.desc`)}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl md:text-4xl font-extrabold ${tier.featured ? "text-white" : "text-slate-900"}`}>
                  {t(`pricing.${tier.key}.price`)}
                </span>
                {tier.key !== "enterprise" && (
                  <span className={`text-sm ${tier.featured ? "text-slate-300" : "text-slate-500"}`}>
                    {" "}{t("pricing.monthly")}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      tier.featured ? "bg-[#7143E0]/30" : "bg-[#7143E0]/10"
                    }`}>
                      <Check className={`w-3 h-3 ${tier.featured ? "text-[#FECD4D]" : "text-[#7143E0]"}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${tier.featured ? "text-slate-300" : "text-slate-600"}`}>
                      {t(fKey)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="relative">
                <Button
                  onClick={() => setOpenTier(openTier === tier.key ? null : tier.key)}
                  className={`w-full font-bold rounded-full py-6 shadow-lg transition-all ${
                    tier.featured
                      ? "bg-[#FECD4D] hover:bg-[#fdd85e] text-[#2B124C]"
                      : "border-[#7143E0] hover:bg-[#7143E0]/5 text-[#7143E0] border-2"
                  }`}
                >
                  {tier.featured ? t("pricing.getStarted") : tier.key === "enterprise" ? t("pricing.contactUs") : t("pricing.getStarted")}
                </Button>

                <AnimatePresence>
                  {openTier === tier.key && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden z-10"
                    >
                      <a
                        href={`https://wa.me/971561495656?text=${getWhatsAppMessage(tier.key, t(`pricing.${tier.key}.name`), t(`pricing.${tier.key}.price`))}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 transition-colors text-green-700"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">{lang === "ar" ? "تواصل على واتساب" : "Chat on WhatsApp"}</span>
                      </a>
                      <a
                        href={`mailto:akhmad@constantlabs.ai?subject=${getPlanEmailSubject(tier.key, t(`pricing.${tier.key}.name`))}`}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-[#7143E0]"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="font-medium">{lang === "ar" ? "راسلنا على البريد" : "Email us"}</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
