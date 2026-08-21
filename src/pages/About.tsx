import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { useLanguage } from "@/i18n/LanguageContext";
import { Zap, Globe, Users, Target, Code, BarChart3 } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

const values = [
  { icon: Zap, titleKey: "AI-First", descKey: "Every strategy starts with AI. We use agentic AI to do in hours what traditional agencies take months to deliver." },
  { icon: Globe, titleKey: "Arabic-Native", descKey: "Not an afterthought - Arabic SEO is core to what we do. Native speakers, RTL expertise, GCC market understanding." },
  { icon: Target, titleKey: "Results-Obsessed", descKey: "We don't sell reports. We deliver rankings, traffic, and revenue. If it doesn't move the needle, we don't do it." },
  { icon: Code, titleKey: "Tech-Forward", descKey: "Built by engineers, not just marketers. We understand the technical foundations that make SEO actually work." },
  { icon: Users, titleKey: "GCC-Focused", descKey: "Dubai-based, serving the entire Gulf. We understand the market, the culture, and what GCC businesses need to grow." },
  { icon: BarChart3, titleKey: "Transparent", descKey: "No black boxes. You see exactly what we do, how we do it, and what results we're driving. Real dashboards, real data." },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="About Us - ConstantSEO"
        description="Learn about ConstantSEO by Constant Labs - Dubai's AI-powered SEO agency. We combine agentic AI with deep SEO expertise to deliver results across the GCC market."
        path="/about"
      />
      <Navbar />

      <PageHero
        eyebrow={t("nav.about")}
        title={<><span>{t("inner.about.titleLead")}</span><br /><span className="text-evidence-blue">{t("inner.about.titleTail")}</span></>}
        lede={t("inner.about.lede")}
      />

      {/* Story */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why We Exist</h2>
          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              The SEO industry is broken. Traditional agencies charge thousands per month, take 6-12 months for results, and still haven't adapted to the AI search revolution. Meanwhile, local businesses across the GCC are stuck with outdated websites and zero online presence.
            </p>
            <p>
              We saw an opportunity: use the same agentic AI technology that's transforming software development to revolutionize SEO. Build 50+ optimized pages in hours instead of months. Run comprehensive audits instantly. Optimize for both Google AND AI platforms like ChatGPT and Gemini simultaneously.
            </p>
            <p>
              ConstantSEO was built by Constant Labs - a Dubai tech company with deep roots in AI, robotics, and software development. We're not another marketing agency that added "AI" to their name. We're engineers who built the AI-first approach from the ground up.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-b border-line bg-paper/70 py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">What Drives Us</h2>
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
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.titleKey}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.descKey}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">The Team</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Built by Builders</h2>
          <div className="border border-line bg-paper p-8">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#7143E0] to-[#5a2dcc] flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
              A
            </div>
            <h3 className="text-xl font-bold text-slate-900">Ahmad</h3>
            <p className="text-[#7143E0] font-medium mb-4">Founder & CEO</p>
            <p className="text-slate-600 leading-relaxed max-w-lg mx-auto">
              AI engineer and serial builder behind Constant Labs. Founded ConstantSEO to bring agentic AI into the SEO industry. Building the future of search for the GCC market with technology that actually delivers results.
            </p>
          </div>
          <p className="mt-6 text-slate-500 text-sm">
            We're growing our team. Interested in joining? Reach out at akhmad@constantlabs.ai
          </p>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default About;
