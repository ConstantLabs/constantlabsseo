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

      {/* Case Studies Grid */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 space-y-8">
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
                className="block group border border-line bg-paper p-1 hover:-translate-y-1 hover:bg-lime/20 transition-all duration-300"
              >
                <div className="border border-dashed border-line/40 p-8 md:p-10">
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
                </div>
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
