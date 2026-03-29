import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Brain,
  Code2,
  FileText,
  MapPin,
  Link2,
  Globe,
} from "lucide-react";

const services = [
  { key: "aiSeo", icon: Brain, slug: "ai-search-optimization" },
  { key: "technicalSeo", icon: Code2, slug: "technical-seo" },
  { key: "contentStrategy", icon: FileText, slug: "arabic-content" },
  { key: "localSeo", icon: MapPin, slug: "local-seo" },
  { key: "linkBuilding", icon: Link2, slug: "ai-link-building" },
  { key: "arabicSeo", icon: Globe, slug: "seo-audits" },
];

export const ServicesGrid = () => {
  const { t, isAr } = useLanguage();

  return (
    <section id="services" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="w-12 h-1 bg-[#7143E0] mx-auto mb-4" />
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">
            {t("services.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-slate-900">
            {t("services.title")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-[17px]">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <Link
                key={svc.key}
                to={`/services/${svc.slug}`}
                className="group relative p-4 sm:p-8 rounded-[16px] sm:rounded-[20px] bg-[#F0F0F0] hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#7143E0] flex items-center justify-center mb-3 sm:mb-5">
                  <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-sm sm:text-xl font-heading font-black text-slate-900 mb-1 sm:mb-2">
                  {t(`service.${svc.key}.title`)}
                </h3>
                <p className="text-xs sm:text-[15px] text-slate-600 leading-relaxed mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                  {t(`service.${svc.key}.desc`)}
                </p>

                <span className="text-xs sm:text-sm font-semibold text-[#2B124C] group-hover:text-[#7143E0] transition-colors">
                  {t("services.learnMore")}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
