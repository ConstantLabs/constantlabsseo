import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/data/projectsData";
import { PageHero } from "@/components/marketing/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t, isAr } = useLanguage();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-screen bg-paper text-ink">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">{t("caseStudies.notFound.title")}</h1>
          <p className="text-ink/70 mb-8">{t("caseStudies.notFound.copy")}</p>
          <Link to="/case-studies" className="font-semibold text-ink underline underline-offset-4">
            {t("inner.caseStudyDetail.all")}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const title = isAr ? cs.titleAr : cs.title;
  const description = isAr ? cs.descriptionAr : cs.description;
  const industry = isAr ? cs.industryAr : cs.industry;
  const market = isAr ? cs.marketAr : cs.market;
  const metric = isAr ? cs.metricAr : cs.metric;
  const client = isAr ? cs.clientAr : cs.client;
  const tags = isAr ? cs.tagsAr : cs.tags;

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={title}
        description={description}
        path={`/case-studies/${slug}`}
      />
      <Navbar />

      <PageHero
        eyebrow={industry}
        title={title}
        lede={description}
        meta={<span>{market} · {metric}</span>}
        actions={<Link to="/case-studies" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{t("inner.caseStudyDetail.all")}</Link>}
      />

      {/* Content */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 border-s-2 border-ink ps-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">{t("caseStudies.detail.category")}</h2>
              <p className="font-heading text-2xl uppercase text-ink">{client}</p>
          </div>

          <div className="mb-8">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink">{t("caseStudies.detail.overview")}</h2>
              <p className="text-lg leading-relaxed text-ink/70">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-4 py-2 text-sm font-medium text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Other case studies */}
          {caseStudies.filter((c) => c.id !== cs.id).length > 0 && (
            <div className="border-t border-line pt-8">
              <h3 className="mb-4 font-heading text-2xl uppercase text-ink">{t("caseStudies.detail.more")}</h3>
              <div className="space-y-3">
                {caseStudies
                  .filter((c) => c.id !== cs.id)
                  .map((other) => (
                    <Link
                      key={other.id}
                      to={`/case-studies/${other.slug}`}
                      className="block border border-line bg-paper p-4 hover:bg-lime/20 transition-all"
                    >
                      <div className="mb-1 text-sm font-bold text-ink">{isAr ? other.metricAr : other.metric}</div>
                      <div className="font-semibold text-ink">{isAr ? other.titleAr : other.title}</div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
