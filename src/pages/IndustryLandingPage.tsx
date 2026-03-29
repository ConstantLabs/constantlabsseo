import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import type { IndustryData } from "@/data/industryData";
import {
  AlertTriangle,
  TrendingDown,
  SearchX,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ArrowRight,
} from "lucide-react";

interface IndustryLandingPageProps {
  industry: IndustryData;
}

const PAIN_ICONS = [AlertTriangle, TrendingDown, SearchX];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-slate-900 text-[15px] leading-snug">{q}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-[#7143E0] shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#7143E0] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 text-slate-600 text-[15px] leading-relaxed border-t border-slate-100">
          <p className="pt-4">{a}</p>
        </div>
      )}
    </div>
  );
}

export const IndustryLandingPage = ({ industry }: IndustryLandingPageProps) => {
  const breadcrumbs = [
    { name: "Services", path: "/services" },
    { name: `${industry.industry} SEO`, path: `/${industry.slug}` },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faq.map((item) => ({
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
      { "@type": "ListItem", position: 1, name: "Home", item: "https://seo.constantlabs.ai" },
      ...breadcrumbs.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: crumb.name,
        item: `https://seo.constantlabs.ai${crumb.path}`,
      })),
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SEO meta tags */}
      <SEO
        title={industry.metaTitle}
        description={industry.metaDescription}
        path={`/${industry.slug}`}
      />

      {/* Additional structured data */}
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-[#2B124C] via-[#1e0d38] to-[#1a0a30] text-white overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(113,67,224,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#7143E0]/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 text-xs text-gray-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-300">{industry.industry} SEO</span>
          </nav>

          {/* Industry badge */}
          <span className="inline-flex items-center gap-2 bg-[#7143E0]/20 border border-[#7143E0]/40 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            {industry.industry} · {industry.location}
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white mb-6">
            {industry.heroHeadline}
          </h1>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            {industry.heroSub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-bold text-sm px-8 py-4 rounded-full uppercase tracking-wide shadow-lg shadow-[#FECD4D]/25 hover:shadow-[#FECD4D]/40 transition-all"
            >
              Get Free SEO Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/971561495656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white text-sm font-semibold px-8 py-4 rounded-full transition-all hover:bg-white/5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Results Stats Bar ───────────────────────────────────── */}
      <section className="bg-[#7143E0] py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center text-white">
            {industry.results.map((result) => (
              <div key={result.label} className="flex flex-col gap-1">
                <span className="text-4xl font-extrabold text-[#FECD4D]">{result.metric}</span>
                <span className="text-sm text-purple-200 leading-snug max-w-[200px] mx-auto">
                  {result.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pain Points ─────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              Why This Is Hard
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              The SEO Challenges in {industry.industry}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {industry.painPoints.map((point, i) => {
              const Icon = PAIN_ICONS[i] ?? AlertTriangle;
              return (
                <div
                  key={point.title}
                  className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-red-500" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{point.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{point.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Our Approach ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              How We Fix It
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {industry.ourApproach.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 p-7 rounded-2xl border border-slate-200 hover:border-[#7143E0]/30 hover:shadow-md transition-all"
              >
                <div className="shrink-0">
                  <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#7143E0] text-white font-extrabold text-lg">
                    {step.step}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-600 text-[15px] leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Target Keywords ──────────────────────────────────────── */}
      <section className="py-20 bg-[#2B124C]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">
              Keyword Intelligence
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Keywords We Help You Rank For
            </h2>
            <p className="mt-4 text-gray-300 max-w-xl mx-auto text-[15px]">
              These are real, high-intent search queries your target customers use. Ranking for these means ranking for revenue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {industry.targetKeywords.map((kw) => (
              <div
                key={kw}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 hover:bg-white/10 transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-[#20B2AA] shrink-0" />
                <span className="text-white text-[15px] font-medium">{kw}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              Common Questions
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {industry.industry} SEO — FAQs
            </h2>
          </div>

          <div className="space-y-3">
            {industry.faq.map((item) => (
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
