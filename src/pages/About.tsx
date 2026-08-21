import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { Zap, Globe, Users, Target, Code, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

const values = [
  { icon: Zap, key: "ai" },
  { icon: Globe, key: "arabic" },
  { icon: Target, key: "useful" },
  { icon: Code, key: "technical" },
  { icon: Users, key: "gcc" },
  { icon: BarChart3, key: "transparent" },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={t("about.seo.title")}
        description={t("about.seo.description")}
        path="/about"
      />
      <Navbar />

      <PageHero
        eyebrow={t("nav.about")}
        title={<><span>{t("inner.about.titleLead")}</span><br /><span className="text-lime">{t("inner.about.titleTail")}</span></>}
        lede={t("inner.about.lede")}
      />

      {/* Story */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="mb-6 font-heading text-4xl uppercase text-ink">{t("about.story.title")}</h2>
          <div className="space-y-4 text-lg leading-relaxed text-ink/70">
            <p>{t("about.story.p1")}</p>
            <p>{t("about.story.p2")}</p>
            <p>{t("about.story.p3")}</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-paper/70 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink/70">{t("about.values.eyebrow")}</p>
            <h2 className="font-heading text-4xl uppercase text-ink md:text-5xl">{t("about.values.title")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className="border border-line bg-paper p-6"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center border border-line bg-ink">
                    <Icon className="w-5 h-5 text-lime" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{t(`about.values.${v.key}.title`)}</h3>
                  <p className="text-sm leading-relaxed text-ink/70">{t(`about.values.${v.key}.copy`)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink/70">{t("about.team.eyebrow")}</p>
          <h2 className="mb-8 font-heading text-4xl uppercase text-ink md:text-5xl">{t("about.team.title")}</h2>
          <div className="border border-line bg-paper p-8">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center border border-line bg-ink text-2xl font-bold text-lime">
              A
            </div>
            <h3 className="text-xl font-bold text-ink">Ahmad</h3>
            <p className="mb-4 font-medium text-ink/70">{t("about.team.role")}</p>
            <p className="mx-auto max-w-lg leading-relaxed text-ink/70">{t("about.team.bio")}</p>
          </div>
          <p className="mt-6 text-sm text-ink/70">{t("about.team.contact")} <span dir="ltr" className="inline-block [unicode-bidi:isolate]">akhmad@constantlabs.ai</span></p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
