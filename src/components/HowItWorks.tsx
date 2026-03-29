import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Search, BarChart3, Rocket, RefreshCw, Trophy } from "lucide-react";

const steps = [
  { key: "step1", icon: Search, num: "1" },
  { key: "step2", icon: BarChart3, num: "2" },
  { key: "step3", icon: Rocket, num: "3" },
  { key: "step4", icon: RefreshCw, num: "4" },
  { key: "step5", icon: Trophy, num: "5" },
];

export const HowItWorks = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-[#F5F5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-16"
        >
          <div className="w-12 h-1 bg-[#7143E0] mx-auto mb-4" />
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">
            {t("howItWorks.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-slate-900">
            {t("howItWorks.title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-[#b8a0e0]" />

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.key}
                  
                  
                  
                  
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step circle with number */}
                  <div className="relative z-10 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#7143E0] flex items-center justify-center shadow-lg mb-3 sm:mb-5">
                    <span className="text-white text-sm sm:text-lg font-bold">{step.num}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-slate-900 mb-1">
                    {t(`howItWorks.${step.key}.title`)}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {t(`howItWorks.${step.key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
