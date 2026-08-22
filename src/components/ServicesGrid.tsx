import { ArrowUpRight, Brain, Code2, FileText, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { DitherShader } from "@/components/DitherShader";
import { DisplayTitle, Eyebrow, Lede, SectionShell } from "@/components/marketing/primitives";

const services = [
  { key: "ai", icon: Brain, slug: "ai-search-optimization" }, { key: "technical", icon: Code2, slug: "technical-seo" },
  { key: "content", icon: FileText, slug: "arabic-content" }, { key: "local", icon: MapPin, slug: "local-seo" },
  { key: "arabic", icon: Globe, slug: "seo-audits" },
];

export const ServicesGrid = () => {
  const { t } = useLanguage();

  return (
    <SectionShell id="services" className="relative isolate overflow-hidden bg-void">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.7]">
        <DitherShader
          className="absolute inset-0"
          ariaLabel=""
          source="warp"
          dither="4x4"
          foregroundColor="#C7FF38"
          backgroundColor="#030500"
          size={5}
          speed={0.28}
          scale={2.8}
          rotation={90}
          contrast={1.2}
          balance={-0.3}
          enablePointerRipples={false}
          performanceMode="balanced"
          autoScaleResolution={false}
          pauseOffscreen
        />
        <div className="dither-fallback absolute inset-0 opacity-90" />
        <div className="absolute inset-0 bg-void/58" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-6 border-b border-paper/25 pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <Eyebrow className="text-lime">{t("services.label")}</Eyebrow>
            <DisplayTitle className="mt-4 text-paper">{t("home.services.title")}</DisplayTitle>
          </div>
          <Lede className="text-paper">{t("home.services.copy")}</Lede>
        </div>

        <div className="mt-8 border-t border-paper/25">
          {services.map(({ key, icon: Icon, slug }, index) => (
            <Link
              key={key}
              to={`/services/${slug}`}
              className="group flex min-h-28 flex-col gap-5 border-b border-paper/20 py-6 transition-colors hover:bg-paper hover:px-5 hover:text-ink sm:min-h-32 sm:flex-row sm:items-center sm:gap-8 sm:py-7 lg:gap-12"
            >
              <span className="w-12 shrink-0 font-heading text-3xl text-lime transition-colors group-hover:text-ink">0{index + 1}</span>
              <Icon className="hidden h-5 w-5 shrink-0 text-lime transition-colors group-hover:text-ink sm:block" aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-3xl uppercase leading-none text-paper transition-colors group-hover:text-ink sm:text-4xl">{t(`home.services.${key}.title`)}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-paper/70 transition-colors group-hover:text-ink/70">{t(`home.services.${key}.copy`)}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-lime transition-colors group-hover:text-ink">
                {t("services.learnMore")} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
