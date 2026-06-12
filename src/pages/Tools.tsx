import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeHelp,
  Bot,
  Calculator,
  Gauge,
  Heading1,
  Map as MapIcon,
  SearchCheck,
  Share2,
  Tags,
  Youtube,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  featuredToolSlugs,
  freeTools,
  getLocalizedText,
  toolCategoryCopy,
  toolsPageCopy,
  toolUiCopy,
  type ToolCategory,
} from "@/data/freeToolsData";

const iconMap = {
  BadgeHelp,
  Bot,
  Calculator,
  Gauge,
  Heading1,
  Map: MapIcon,
  SearchCheck,
  Share2,
  Tags,
  Youtube,
};

const categoryOrder: ToolCategory[] = ["seo", "schema", "crawler", "web", "youtube"];
const BASE_URL = "https://seo.constantlabs.ai";

const Tools = () => {
  const { isAr } = useLanguage();
  const copy = {
    eyebrow: getLocalizedText(toolsPageCopy.eyebrow, isAr),
    title: getLocalizedText(toolsPageCopy.title, isAr),
    subtitle: getLocalizedText(toolsPageCopy.subtitle, isAr),
    quickAnswer: getLocalizedText(toolsPageCopy.quickAnswer, isAr),
    primaryCta: getLocalizedText(toolsPageCopy.primaryCta, isAr),
    secondaryCta: getLocalizedText(toolsPageCopy.secondaryCta, isAr),
    popularLabel: getLocalizedText(toolsPageCopy.popularLabel, isAr),
    categoriesTitle: getLocalizedText(toolsPageCopy.categoriesTitle, isAr),
    categoriesSubtitle: getLocalizedText(toolsPageCopy.categoriesSubtitle, isAr),
    howTitle: getLocalizedText(toolsPageCopy.howTitle, isAr),
    howBody: getLocalizedText(toolsPageCopy.howBody, isAr),
    openTool: getLocalizedText(toolUiCopy.openTool, isAr),
    quickAnswerLabel: getLocalizedText(toolUiCopy.quickAnswer, isAr),
  };

  const featuredTools = featuredToolSlugs
    .map((slug) => freeTools.find((tool) => tool.slug === slug))
    .filter(Boolean);

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ConstantSEO Free SEO Tools",
    itemListElement: freeTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: tool.title.en,
      url: `${BASE_URL}/tools/${tool.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What free SEO tools does ConstantSEO offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "ConstantSEO offers free metadata, heading, sitemap, robots.txt, FAQ schema, Open Graph, website cost, bandwidth, and YouTube SEO tools for marketers and business owners.",
        },
      },
      {
        "@type": "Question",
        name: "Why do free tools help SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Free tools target high-intent search queries, earn links, prove technical expertise, and create natural internal paths to audits and SEO services.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Free SEO Tools for GCC Marketers"
        description="Use ConstantSEO's free SEO tools to check meta tags, headings, sitemaps, FAQ schema, robots.txt, Open Graph previews, website bandwidth, cost, and YouTube SEO."
        path="/tools"
        breadcrumbs={[{ name: "Free SEO Tools", path: "/tools" }]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl">
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4"
            >
              {copy.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            >
              {copy.title}
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-lg text-gray-200 max-w-3xl"
            >
              {copy.subtitle}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link to="/audit">
                <Button className="w-full sm:w-auto bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-bold rounded-full px-7">
                  {copy.primaryCta}
                  <ArrowRight className={`w-4 h-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
                </Button>
              </Link>
              <a
                href="#tool-library"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 px-7 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
              >
                {copy.secondaryCta}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8">
            <p className="text-sm font-bold text-[#7143E0] uppercase tracking-wider mb-3">
              {copy.quickAnswerLabel}
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              {copy.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      <section id="tool-library" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-3">
              {copy.popularLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
              {copy.categoriesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-slate-600">
              {copy.categoriesSubtitle}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {featuredTools.map((tool) => {
              if (!tool) return null;
              const Icon = iconMap[tool.icon as keyof typeof iconMap] || SearchCheck;
              return (
                <Link
                  key={tool.slug}
                  to={`/tools/${tool.slug}`}
                  className="group rounded-xl border border-slate-200 bg-white p-6 hover:-translate-y-1 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-lg bg-[#7143E0]/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#7143E0]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors">
                        {getLocalizedText(tool.title, isAr)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {getLocalizedText(tool.shortDescription, isAr)}
                      </p>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#7143E0]">
                    {copy.openTool}
                    <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isAr ? "rotate-180" : ""}`} />
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="space-y-14">
            {categoryOrder.map((category) => {
              const categoryTools = freeTools.filter((tool) => tool.category === category);
              const categoryText = toolCategoryCopy[category];
              return (
                <div key={category}>
                  <div className="mb-5">
                    <h2 className="text-2xl font-extrabold text-slate-900">
                      {getLocalizedText(categoryText.title, isAr)}
                    </h2>
                    <p className="mt-2 text-slate-600">
                      {getLocalizedText(categoryText.description, isAr)}
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {categoryTools.map((tool) => {
                      const Icon = iconMap[tool.icon as keyof typeof iconMap] || SearchCheck;
                      return (
                        <Link
                          key={tool.slug}
                          to={`/tools/${tool.slug}`}
                          className="group rounded-lg border border-slate-200 bg-white p-5 hover:border-[#7143E0]/40 hover:shadow-md transition-all"
                        >
                          <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-[#7143E0]/10 transition-colors">
                              <Icon className="w-5 h-5 text-[#7143E0]" />
                            </div>
                            <div>
                              <h3 className="font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors">
                                {getLocalizedText(tool.title, isAr)}
                              </h3>
                              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                                {getLocalizedText(tool.shortDescription, isAr)}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <h2 className="text-3xl font-extrabold text-slate-900">
              {copy.howTitle}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700">
              {copy.howBody}
            </p>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Tools;
