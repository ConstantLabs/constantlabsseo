import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { SERVICES } from "@/data/projectsData";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

function slugify(id: string) {
  return id.toLowerCase().replace(/_/g, "-");
}

const Services = () => {
  const { t, isAr } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="AI SEO Services - ConstantSEO"
        description="Explore ConstantSEO's comprehensive AI-powered SEO services by Constant Labs. From technical audits to Arabic content strategy, we optimize your search presence across the GCC."
        path="/services"
      />
      <Navbar />

      <PageHero eyebrow={t("services.label")} title={t("services.title")} lede={t("services.subtitle")} />

      {/* Services Grid */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.id}
                  to={`/services/${slugify(service.id)}`}
                  className="group relative border border-line bg-paper p-6 sm:p-8 hover:-translate-y-1 hover:bg-lime/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-ink">
                      <Icon className="w-6 h-6 text-lime" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl uppercase leading-none text-ink">
                        {service.title}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-evidence-blue">
                        {service.oneLiner}
                      </p>
                    </div>
                  </div>

                  <p className="mb-5 text-[15px] leading-relaxed text-ink/70">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-evidence-blue">
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
