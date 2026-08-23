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
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={t("services.seo.title")}
        description={t("services.seo.description")}
        path="/services"
      />
      <Navbar />

      <PageHero eyebrow={t("services.label")} title={t("services.title")} lede={t("services.subtitle")} />

      {/* Editorial services index */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="border-t border-line">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              const title = isAr ? service.titleAr : service.title;
              const oneLiner = isAr ? service.oneLinerAr : service.oneLiner;
              const description = isAr ? service.descriptionAr : service.description;
              const tags = isAr ? service.tagsAr : service.tags;
              return (
                <Link
                  key={service.id}
                  to={`/services/${slugify(service.id)}`}
                  className="group relative grid border-b border-line py-8 transition-colors duration-300 hover:bg-lime/10 sm:px-4 md:grid-cols-[minmax(16rem,0.75fr)_1fr] md:gap-12 md:py-10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-line bg-ink">
                      <Icon className="w-6 h-6 text-lime" />
                    </div>
                    <div>
                      <h2 className="font-heading text-2xl uppercase leading-none text-ink">
                        {title}
                      </h2>
                      <p className="mt-1 text-sm font-medium text-ink/70">
                        {oneLiner}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 md:mt-0">
                    <p className="text-[15px] leading-relaxed text-ink/70">{description}</p>

                    <div className="mb-5 mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span key={tag} className="border border-line px-3 py-1 text-xs font-medium text-ink/70">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                      {t("services.learnMore")}
                      <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isAr ? "rotate-180" : ""}`} />
                    </span>
                  </div>
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
