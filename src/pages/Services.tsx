import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { SERVICES } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";

function slugify(id: string) {
  return id.toLowerCase().replace(/_/g, "-");
}

const Services = () => {
  const { t, isAr } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="AI SEO Services — ConstantSEO"
        description="Explore ConstantSEO's comprehensive AI-powered SEO services by Constant Labs. From technical audits to Arabic content strategy, we optimize your search presence across the GCC."
        path="/services"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">
            {t("services.label")}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold" style={{ color: "#ffffff" }}>
            {t("services.title")}
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${slugify(service.id)}`}
                  className="group relative rounded-2xl border border-slate-200 p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#7143E0] flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm text-[#7143E0] font-medium mt-0.5">
                        {service.oneLiner}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[15px] leading-relaxed mb-5">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7143E0]">
                    {isAr ? "اعرف المزيد" : "Learn More"}
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isAr ? "rotate-180" : ""}`} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;
