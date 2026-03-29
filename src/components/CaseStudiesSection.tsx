import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ShoppingCart, Building2, Heart, ArrowUpRight } from "lucide-react";

const cases = [
  { key: "case1", icon: ShoppingCart, accent: "bg-[#FECD4D]", slug: "rapid-seo-deployment" },
  { key: "case2", icon: Building2, accent: "bg-[#64DEA3]", slug: "ai-search-visibility" },
  { key: "case3", icon: Heart, accent: "bg-[#E07143]", slug: "bilingual-gcc-seo" },
];

export const CaseStudiesSection = () => {
  const { t, isAr } = useLanguage();

  return (
    <section id="case-studies" className="py-20 md:py-24 bg-[#7143E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="w-12 h-1 bg-[#FECD4D] mx-auto mb-4" />
          <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-2">
            {t("caseStudies.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-white">
            {t("caseStudies.title")}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <Link
                key={c.key}
                to={`/case-studies/${c.slug}`}
                className="group relative rounded-[20px] bg-white overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Colored accent top */}
                <div className={`h-1.5 ${c.accent}`} />

                <div className="p-8">
                  {/* Industry + Market tags */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5F5F8] text-xs font-medium text-slate-700">
                      <Icon className="w-3.5 h-3.5" />
                      {t(`${c.key}.industry`)}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-[#F5F5F8] text-xs font-medium text-slate-500">
                      {t(`${c.key}.market`)}
                    </span>
                  </div>

                  {/* Big metric */}
                  <div className="text-4xl md:text-5xl font-extrabold text-[#FECD4D] mb-2">
                    {t(`${c.key}.metric`)}
                  </div>

                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                    {t(`${c.key}.title`)}
                  </h3>

                  <p className="text-[15px] text-slate-600 leading-relaxed mb-5">
                    {t(`${c.key}.desc`)}
                  </p>

                  {/* Hover reveal */}
                  <div className="flex items-center gap-1.5 text-sm font-semibold text-[#7143E0] opacity-0 group-hover:opacity-100 transition-opacity">
                    {t("services.learnMore")}
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
