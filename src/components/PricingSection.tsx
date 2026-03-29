import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

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
  const { t } = useLanguage();

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
              {tier.featured ? (
                <Button className="w-full bg-[#FECD4D] hover:bg-[#fdd85e] text-[#2B124C] font-bold rounded-full py-6 shadow-lg transition-all">
                  {t("pricing.getStarted")}
                </Button>
              ) : tier.key === "enterprise" ? (
                <Button
                  variant="outline"
                  className="w-full rounded-full py-6 border-[#7143E0] hover:bg-[#7143E0]/5 text-[#7143E0] font-semibold transition-all"
                >
                  {t("pricing.contactUs")}
                </Button>
              ) : (
                <Button
                  variant="outline"
                  className="w-full rounded-full py-6 border-[#7143E0] hover:bg-[#7143E0]/5 text-[#7143E0] font-semibold transition-all"
                >
                  {t("pricing.getStarted")}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
