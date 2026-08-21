import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import type { IndustryData } from "@/data/industryData";
import {
  AlertTriangle,
  TrendingDown,
  SearchX,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

interface IndustryLandingPageProps {
  industry: IndustryData;
}

const PAIN_ICONS = [AlertTriangle, TrendingDown, SearchX];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden border border-line bg-paper">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start text-ink transition-colors hover:bg-lime/20"
        aria-expanded={open}
      >
        <span className="text-[15px] font-semibold leading-snug text-ink">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-ink" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-ink" />
        )}
      </button>
      {open && (
        <div className="border-t border-line px-6 pb-5 text-[15px] leading-relaxed text-ink/70">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export const IndustryLandingPage = ({ industry }: IndustryLandingPageProps) => {
  const { t, isAr } = useLanguage();

  const industryName = isAr ? (industry.industryAr ?? industry.industry) : industry.industry;
  const location = isAr ? industry.locationAr : industry.location;
  const headline = isAr ? `أنظمة SEO لقطاع ${industryName}` : `${industryName} SEO systems`;
  const sub = t("industryPage.hero.sub");
  const painPoints = ["structure", "local", "trust"].map((key) => ({
    title: t(`industryPage.pain.${key}.title`),
    body: t(`industryPage.pain.${key}.body`),
  }));
  const ourApproach = ["audit", "map", "build", "measure"].map((key, index) => ({
    step: String(index + 1).padStart(2, "0"),
    title: t(`industryPage.approach.${key}.title`),
    body: t(`industryPage.approach.${key}.body`),
  }));
  const results = ["tech", "local", "bilingual"].map((key) => ({
    metric: t(`industryPage.model.${key}.metric`),
    label: t(`industryPage.model.${key}.label`),
  }));
  const faqItems = ["timing", "scope", "arabic", "measurement"].map((key) => ({
    q: t(`industryPage.faq.${key}.q`),
    a: t(`industryPage.faq.${key}.a`),
  }));

  const breadcrumbs = [
    { name: t("industryPage.breadcrumb.services"), path: "/services" },
    { name: `${industryName} SEO`, path: `/${industry.slug}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: t("nav.home"), item: "https://seo.constantlabs.ai" },
      ...breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `https://seo.constantlabs.ai${crumb.path}`,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-paper text-ink" dir={isAr ? "rtl" : "ltr"}>
      <SEO
        title={headline}
        description={sub}
        path={`/${industry.slug}`}
      />

      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      <PageHero
        eyebrow={`${industryName} · ${location}`}
        title={headline}
        lede={sub}
        actions={<><Link to="/contact" className="border border-ink bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink">{t("industryPage.cta.audit")}</Link><a href="https://wa.me/971561495656" target="_blank" rel="noopener noreferrer" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{t("industryPage.cta.whatsapp")}</a></>}
      />

      {/* Results Stats Bar */}
      <section className="border-b border-line bg-ink py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-px bg-line text-center text-paper sm:grid-cols-3">
            {results.map((result) => (
              <div key={result.label} className="flex flex-col gap-2 bg-ink p-6">
                <span className="font-heading text-4xl uppercase text-lime">{result.metric}</span>
                <span className="mx-auto max-w-[240px] text-sm leading-snug text-paper">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="bg-paper py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {t("industryPage.pain.label")}
            </p>
            <h2 className="font-heading text-4xl uppercase text-ink md:text-5xl">
              {t("industryPage.pain.titlePrefix")} {industryName}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {painPoints.map((point, i) => {
              const Icon = PAIN_ICONS[i] ?? AlertTriangle;
              return (
                <div
                  key={point.title}
                  className="border border-line bg-paper p-7 transition-colors hover:bg-lime/20"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center border border-line bg-ink">
                    <Icon className="h-6 w-6 text-lime" />
                  </div>
                  <h3 className="mb-3 text-lg font-bold text-ink">{point.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-line bg-paper py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {t("industryPage.approach.label")}
            </p>
            <h2 className="font-heading text-4xl uppercase text-ink md:text-5xl">
              {t("industryPage.approach.title")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {ourApproach.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 border border-line p-7 transition-colors hover:bg-lime/20"
              >
                <div className="shrink-0">
                  <span className="flex h-12 w-12 items-center justify-center border border-line bg-ink text-lg font-extrabold text-lime">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink/70">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Keywords */}
      <section className="border-y border-line bg-void py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-lime">
              {t("industryPage.keywords.label")}
            </p>
            <h2 className="font-heading text-4xl uppercase text-paper md:text-5xl">
              {t("industryPage.keywords.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] text-paper">
              {t("industryPage.keywords.subtitle")}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {industry.targetKeywords.map((kw) => (
              <div
                key={kw}
                className="flex items-center gap-3 border border-paper/25 bg-ink px-5 py-3.5 transition-colors hover:border-lime"
                dir="ltr"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-lime" />
                <span className="text-[15px] font-medium text-paper">{kw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {t("industryPage.faq.label")}
            </p>
            <h2 className="font-heading text-4xl uppercase text-ink md:text-5xl">
              {industryName} {t("industryPage.faq.titleSuffix")}
            </h2>
          </div>

          <div className="space-y-3">
            {faqItems.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default IndustryLandingPage;
