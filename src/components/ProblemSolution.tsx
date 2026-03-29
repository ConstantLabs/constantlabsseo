import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Zap } from "lucide-react";

export const ProblemSolution = () => {
  const { t, isAr } = useLanguage();

  const problems = [
    t("problem.point1"),
    t("problem.point2"),
    t("problem.point3"),
    t("problem.point4"),
  ];

  const solutions = [
    t("solution.point1"),
    t("solution.point2"),
    t("solution.point3"),
    t("solution.point4"),
  ];

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Problem */}
          <div
            
            
            
            
            className="relative p-8 md:p-10 rounded-[20px] bg-white shadow-lg border border-slate-200"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#7143E0]/10 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-[#7143E0]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#7143E0] uppercase tracking-wider">
                  {t("problem.label")}
                </p>
                <h3 className="text-xl md:text-2xl font-heading font-black text-slate-900">
                  {t("problem.title")}
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {problems.map((item, i) => (
                <motion.li
                  key={i}
                  
                  
                  
                  
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-[#7143E0]/10 flex items-center justify-center shrink-0">
                    <X className="w-3.5 h-3.5 text-[#7143E0]" />
                  </div>
                  <span className="text-slate-800 text-[15px] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div
            
            
            
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative p-8 md:p-10 rounded-[20px] bg-[#2B124C] shadow-lg"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-[#FECD4D]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#FECD4D] uppercase tracking-wider">
                  {t("solution.label")}
                </p>
                <h3 className="text-xl md:text-2xl font-heading font-black text-white">
                  {t("solution.title")}
                </h3>
              </div>
            </div>

            <ul className="space-y-4">
              {solutions.map((item, i) => (
                <motion.li
                  key={i}
                  
                  
                  
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-[#FECD4D]" />
                  </div>
                  <span className="text-gray-100 text-[15px] leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
