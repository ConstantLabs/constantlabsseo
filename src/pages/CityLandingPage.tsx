import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Braces, Languages, MapPin, Search, Settings, TrendingUp, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import type { CityData } from "@/data/cityData";

interface CityLandingPageProps {
  city: CityData;
}

const BASE_URL = "https://seo.constantlabs.ai";

export const CityLandingPage = ({ city }: CityLandingPageProps) => {
  const { t, isAr } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const cityName = isAr ? (city.cityAr ?? city.city) : city.city;
  const countryName = isAr ? (city.countryAr ?? city.country) : city.country;
  const headline = isAr ? `أنظمة بحث للشركات في ${cityName}` : `Search systems for ${cityName} businesses`;
  const sub = t("cityPage.hero.sub");
  const whyBody = t("cityPage.why.copy");
  const stats = [
    { number: "TECH", label: t("cityPage.system.technical") },
    { number: "LOCAL", label: t("cityPage.system.local") },
    { number: "AR+EN", label: t("cityPage.system.bilingual") },
  ];
  const industries = isAr ? (city.topIndustriesAr ?? city.topIndustries) : city.topIndustries;
  const facts = ["technical", "local", "content"].map((key) => ({
    title: t(`cityPage.facts.${key}.title`),
    body: t(`cityPage.facts.${key}.body`),
  }));
  const faqItems = ["timing", "arabic", "process", "ai"].map((key) => ({
    q: t(`cityPage.faq.${key}.q`),
    a: t(`cityPage.faq.${key}.a`),
  }));

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
      {
        "@type": "ListItem",
        position: 1,
        name: t("nav.home"),
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: t("cityPage.breadcrumb.services"),
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: headline,
        item: `${BASE_URL}/${city.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ConstantSEO",
    description: sub,
    url: `${BASE_URL}/${city.slug}`,
    telephone: "+971561495656",
    areaServed: {
      "@type": "City",
      name: cityName,
    },
    serviceType: isAr ? "خدمات SEO" : "SEO services",
    priceRange: "$$",
  };

  return (
    <div className="min-h-screen bg-paper text-ink" dir={isAr ? "rtl" : "ltr"}>
      <SEO
        title={headline}
        description={sub}
        path={`/${city.slug}`}
      />

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>

      <Navbar />

      <PageHero
        eyebrow={`${city.flag} ${cityName} · ${countryName}`}
        title={headline}
        lede={sub}
        meta={countryName}
        actions={<><Link to="/contact" className="border border-ink bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink">{t("cityPage.cta.audit")}</Link><Link to="/services" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{t("cityPage.cta.services")}</Link></>}
      />

      {/* Why SEO Matters */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
                {t("cityPage.opportunity.label")}
              </p>
              <h2 className="mb-6 font-heading text-4xl uppercase text-ink md:text-5xl">
                {t("cityPage.why.titlePrefix")} {cityName}
              </h2>
              <p className="text-[17px] leading-relaxed text-ink/70">
                {whyBody}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="border border-line bg-paper p-6 text-center transition-colors hover:bg-lime/20"
                >
                  <div className="mb-2 font-heading text-3xl uppercase text-ink">
                    {stat.number}
                  </div>
                  <div className="text-sm leading-snug text-ink/70">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-line bg-paper/70 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
            {t("cityPage.industries.label")}
          </p>
          <h2 className="mb-4 font-heading text-4xl uppercase text-ink md:text-5xl">
            {t("cityPage.industries.titlePrefix")} {cityName}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-ink/70">
            {t("cityPage.industries.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 border border-line bg-paper px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-lime/20"
              >
                <MapPin className="h-3.5 w-3.5 text-ink" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="border-b border-line bg-paper py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
            {t("cityPage.keywords.label")}
          </p>
          <h2 className="mb-4 font-heading text-4xl uppercase text-ink md:text-5xl">
            {t("cityPage.keywords.title")}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-ink/70">
            {t("cityPage.keywords.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {city.keywords.map((kw, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 border border-line bg-ink px-4 py-2 font-mono text-sm tracking-wide text-paper"
                dir="ltr"
              >
                <Search className="h-3.5 w-3.5 text-lime" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local Facts */}
      <section className="border-b border-line bg-paper/70 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {t("cityPage.local.label")}
            </p>
            <h2 className="mb-4 font-heading text-4xl uppercase text-ink md:text-5xl">
              {t("cityPage.local.titlePrefix")} {cityName} {t("cityPage.local.titleSuffix")}
            </h2>
            <p className="mx-auto max-w-xl text-ink/70">
              {t("cityPage.local.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="border border-line bg-paper p-7 transition-colors hover:bg-lime/20"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center border border-line bg-ink">
                  <TrendingUp className="h-5 w-5 text-lime" />
                </div>
                <h3 className="mb-3 text-lg font-bold leading-snug text-ink">
                  {fact.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/70">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-line bg-paper py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {t("cityPage.faq.label")}
            </p>
            <h2 className="mb-4 font-heading text-4xl uppercase text-ink md:text-5xl">
              {cityName} {t("cityPage.faq.titleSuffix")}
            </h2>
            <p className="mx-auto max-w-xl text-ink/70">
              {t("cityPage.faq.subtitlePrefix")} {cityName} {t("cityPage.faq.subtitleSuffix")}
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden border border-line bg-paper"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-start transition-colors hover:bg-lime/20"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-[15px] font-semibold leading-snug text-ink">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-ink transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-line px-6 pb-5 pt-4 text-[15px] leading-relaxed text-ink/70">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-y border-line bg-ink py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Settings className="h-5 w-5" />, label: t("cityPage.trust.technical") },
              { icon: <MapPin className="h-5 w-5" />, label: t("cityPage.trust.local") },
              { icon: <Languages className="h-5 w-5" />, label: t("cityPage.trust.bilingual") },
              { icon: <Braces className="h-5 w-5" />, label: t("cityPage.trust.structured") },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center border border-paper/30 bg-paper/10 text-lime">
                  {item.icon}
                </div>
                <div className="mt-1 text-sm font-bold uppercase tracking-[0.08em] text-paper">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CityLandingPage;
