import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/data/projectsData";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudies = () => {
  const { t, isAr } = useLanguage();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={t("caseStudies.seo.title")}
        description={t("caseStudies.seo.description")}
        path="/case-studies"
      />
      <Navbar />

      <PageHero
        eyebrow={t("inner.caseStudies.eyebrow")}
        title={t("inner.caseStudies.title")}
        lede={t("inner.caseStudies.lede")}
      />

      {/* Editorial case study index */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="mx-auto max-w-5xl border-t border-line px-4 sm:px-0">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ y: 30 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={`/case-studies/${cs.slug}`}
                className="group block border-b border-line px-2 py-10 transition-colors duration-300 hover:bg-lime/10 sm:px-4 md:py-12"
              >
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-4">
                    <span className="border border-line px-3 py-1 text-xs font-semibold text-ink">
                      {isAr ? cs.industryAr : cs.industry}
                    </span>
                    <span className="border border-line px-3 py-1 text-xs font-medium text-ink/70">
                      {isAr ? cs.marketAr : cs.market}
                    </span>
                  </div>

                  {/* Metric */}
                  <div className="mb-3 font-heading text-4xl uppercase text-ink md:text-5xl">
                    {isAr ? cs.metricAr : cs.metric}
                  </div>

                  <h2 className="mb-3 font-heading text-3xl uppercase leading-none text-ink">
                    {isAr ? cs.titleAr : cs.title}
                  </h2>

                  <p className="mb-5 max-w-3xl leading-relaxed text-ink/70">
                    {isAr ? cs.descriptionAr : cs.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {(isAr ? cs.tagsAr : cs.tags).map((tag) => (
                      <span
                        key={tag}
                        className="border border-line px-3 py-1 text-xs font-medium text-ink/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
                    {t("caseStudies.readMore")}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudies;
