import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
import { PageHero } from "@/components/marketing/PageHero";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
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
    name: isAr ? "أدوات SEO المجانية من ConstantSEO" : "ConstantSEO Free SEO Tools",
    itemListElement: freeTools.map((tool, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: getLocalizedText(tool.title, isAr),
      url: `${BASE_URL}/tools/${tool.slug}`,
    })),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: isAr ? "ما أدوات SEO المجانية التي تقدمها ConstantSEO؟" : "What free SEO tools does ConstantSEO offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isAr ? "تقدم ConstantSEO أدوات مجانية لبيانات الميتا والعناوين وخرائط الموقع وrobots.txt وFAQ Schema وOpen Graph وتكلفة الموقع واستهلاك البيانات وSEO يوتيوب." : "ConstantSEO offers free metadata, heading, sitemap, robots.txt, FAQ schema, Open Graph, website cost, bandwidth, and YouTube SEO tools for marketers and business owners.",
        },
      },
      {
        "@type": "Question",
        name: isAr ? "كيف تساعد أدوات SEO المجانية؟" : "How do free tools help SEO?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isAr ? "تساعد الأدوات المجانية في فحص إشارات محددة وفهم المشاكل وإنشاء مسار واضح نحو المراجعات والخدمات المناسبة." : "Free tools help inspect specific signals, understand issues, and create a clear path to relevant reviews and services.",
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-paper text-ink" dir={isAr ? "rtl" : "ltr"}>
      <SEO
        title={isAr ? "أدوات SEO مجانية لمسوقي الخليج" : "Free SEO Tools for GCC Marketers"}
        description={isAr ? "استخدم أدوات ConstantSEO المجانية لفحص بيانات الميتا والعناوين وخرائط الموقع وFAQ Schema وrobots.txt وOpen Graph واستهلاك البيانات والتكلفة وSEO يوتيوب." : "Use ConstantSEO's free SEO tools to check meta tags, headings, sitemaps, FAQ schema, robots.txt, Open Graph previews, website bandwidth, cost, and YouTube SEO."}
        path="/tools"
        breadcrumbs={[{ name: getLocalizedText(toolUiCopy.allTools, isAr), path: "/tools" }]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(itemListSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <PageHero
        eyebrow={copy.eyebrow}
        title={copy.title}
        lede={copy.subtitle}
        actions={<><Link to="/audit" className="inline-flex items-center gap-2 border border-ink bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink">{copy.primaryCta}<ArrowRight className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} /></Link><a href="#tool-library" className="inline-flex items-center justify-center border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{copy.secondaryCta}</a></>}
      />

      <section className="border-b border-line bg-paper/70 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border border-line bg-paper p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-ink/70">
              {copy.quickAnswerLabel}
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              {copy.quickAnswer}
            </p>
          </div>
        </div>
      </section>

      <section id="tool-library" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-ink/70">
              {copy.popularLabel}
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-ink">
              {copy.categoriesTitle}
            </h2>
            <p className="mt-4 max-w-2xl text-ink/70">
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
                  className="group border border-line bg-paper p-6 transition-colors hover:-translate-y-1 hover:bg-lime/20"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-line bg-ink">
                      <Icon className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <h3 className="font-bold text-ink transition-colors">
                        {getLocalizedText(tool.title, isAr)}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">
                        {getLocalizedText(tool.shortDescription, isAr)}
                      </p>
                    </div>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink">
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
                    <h2 className="text-2xl font-extrabold text-ink">
                      {getLocalizedText(categoryText.title, isAr)}
                    </h2>
                    <p className="mt-2 text-ink/70">
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
                          className="group border border-line bg-paper p-5 transition-colors hover:bg-lime/20"
                        >
                          <div className="flex gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-paper transition-colors group-hover:bg-lime/20">
                              <Icon className="h-5 w-5 text-ink" />
                            </div>
                            <div>
                              <h3 className="font-bold text-ink transition-colors">
                                {getLocalizedText(tool.title, isAr)}
                              </h3>
                              <p className="mt-1.5 text-sm leading-relaxed text-ink/70">
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

      <section className="py-16 bg-paper/70">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
            <h2 className="text-3xl font-extrabold text-ink">
              {copy.howTitle}
            </h2>
            <p className="text-lg leading-relaxed text-ink/80">
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
