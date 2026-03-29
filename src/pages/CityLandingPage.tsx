import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, MapPin, TrendingUp, Users, ChevronDown, ChevronRight } from "lucide-react";
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
  const headline = isAr ? (city.heroHeadlineAr ?? city.heroHeadline) : city.heroHeadline;
  const sub = isAr ? (city.heroSubAr ?? city.heroSub) : city.heroSub;
  const whyBody = isAr ? (city.whyMattersAr ?? city.whyMatters) : city.whyMatters;
  const stats = isAr ? (city.marketStatsAr ?? city.marketStats) : city.marketStats;
  const industries = isAr ? (city.topIndustriesAr ?? city.topIndustries) : city.topIndustries;
  const facts = isAr ? (city.localFactsAr ?? city.localFacts) : city.localFacts;
  const faqItems = isAr ? (city.faqAr ?? city.faq) : city.faq;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faq.map((item) => ({
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
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "SEO Services",
        item: `${BASE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `SEO Agency ${city.city}`,
        item: `${BASE_URL}/${city.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "ConstantSEO",
    description: city.metaDescription,
    url: `${BASE_URL}/${city.slug}`,
    telephone: "+971561495656",
    areaServed: {
      "@type": "City",
      name: city.city,
    },
    serviceType: "SEO Agency",
    priceRange: "$$",
  };

  return (
    <div className="min-h-screen bg-white text-slate-900" dir={isAr ? "rtl" : "ltr"}>
      <SEO
        title={city.metaTitle}
        description={city.metaDescription}
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

      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(113,67,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7143E0]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-6" dir="ltr">
            <Link to="/" className="hover:text-white transition-colors">{t("nav.home")}</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/services" className="hover:text-white transition-colors">{t("cityPage.breadcrumb.services")}</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-300">{cityName}</span>
          </nav>

          {/* City badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-sm font-medium text-gray-200 mb-6" dir="ltr">
            <span className="text-lg leading-none">{city.flag}</span>
            <span>{cityName}</span>
            <span className="text-gray-400">·</span>
            <span className="text-gray-300">{countryName}</span>
            <span className="text-gray-400">·</span>
            <span className="text-[#20B2AA]">{city.population}</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              {headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
              {sub}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-bold rounded-full text-sm uppercase tracking-wide shadow-lg shadow-[#FECD4D]/20 hover:shadow-[#FECD4D]/30 transition-all"
            >
              {t("cityPage.cta.audit")}
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent hover:bg-white/10 text-[#20B2AA] border border-[#20B2AA]/50 hover:border-[#20B2AA] font-semibold rounded-full text-sm transition-all"
            >
              {t("cityPage.cta.services")}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why SEO Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
                {t("cityPage.opportunity.label")}
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                {t("cityPage.why.titlePrefix")} {cityName}
              </h2>
              <p className="text-slate-600 text-[17px] leading-relaxed">
                {whyBody}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200 p-6 text-center hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="text-3xl font-extrabold text-[#7143E0] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-500 leading-snug">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F8F6FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
            {t("cityPage.industries.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("cityPage.industries.titlePrefix")} {cityName}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            {t("cityPage.industries.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#7143E0]/20 text-slate-700 font-medium text-sm shadow-sm hover:border-[#7143E0]/50 hover:text-[#7143E0] transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-[#7143E0]" />
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Keywords */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-[#20B2AA] uppercase tracking-wider mb-3">
            {t("cityPage.keywords.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            {t("cityPage.keywords.title")}
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-10">
            {t("cityPage.keywords.subtitle")}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {city.keywords.map((kw, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-sm font-mono tracking-wide shadow-sm"
                dir="ltr"
              >
                <Search className="w-3.5 h-3.5 text-[#20B2AA]" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Local Facts */}
      <section className="py-20 bg-[#F8F6FF]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              {t("cityPage.local.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {t("cityPage.local.titlePrefix")} {cityName} {t("cityPage.local.titleSuffix")}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              {t("cityPage.local.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white border border-slate-200 p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#7143E0]/10 flex items-center justify-center mb-5">
                  <TrendingUp className="w-5 h-5 text-[#7143E0]" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                  {fact.title}
                </h3>
                <p className="text-slate-600 text-[15px] leading-relaxed">
                  {fact.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              {t("cityPage.faq.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              {cityName} {t("cityPage.faq.titleSuffix")}
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              {t("cityPage.faq.subtitlePrefix")} {cityName} {t("cityPage.faq.subtitleSuffix")}
            </p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-semibold text-slate-900 text-[15px] leading-snug">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#7143E0] shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === i ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed border-t border-slate-100 pt-4">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-gradient-to-r from-[#2B124C] to-[#3d1a70]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: <Users className="w-5 h-5" />, number: "120+", label: t("cityPage.trust.clients") },
              { icon: <TrendingUp className="w-5 h-5" />, number: "3.2M+", label: t("cityPage.trust.visits") },
              { icon: <Search className="w-5 h-5" />, number: "50K+", label: t("cityPage.trust.keywords") },
              { icon: <MapPin className="w-5 h-5" />, number: "5", label: t("cityPage.trust.markets") },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-[#20B2AA] mb-3">
                  {item.icon}
                </div>
                <div className="text-2xl font-extrabold text-white">{item.number}</div>
                <div className="text-sm text-gray-400 mt-1">{item.label}</div>
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
