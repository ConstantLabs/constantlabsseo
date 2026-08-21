import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CornerTicks, DisplayTitle, Eyebrow, Lede, RuledGrid, SectionShell } from "./primitives";

const metrics = [
  { value: "1.74K", label: "mufakkir.metric.clicks" },
  { value: "29K", label: "mufakkir.metric.impressions" },
  { value: "6.0%", label: "mufakkir.metric.ctr" },
  { value: "8.4", label: "mufakkir.metric.position" },
];

export function MufakkirEvidence() {
  const { t } = useLanguage();

  return (
    <SectionShell id="proof" aria-labelledby="mufakkir-title" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <Eyebrow>{t("mufakkir.eyebrow")}</Eyebrow>
            <DisplayTitle id="mufakkir-title" className="mt-4 max-w-xl">{t("mufakkir.title")}</DisplayTitle>
          </div>
          <Lede>{t("mufakkir.statement")}</Lede>
        </div>

        <section aria-label={t("mufakkir.regionLabel")} className="mt-10 border border-line bg-paper">
          <RuledGrid className="grid grid-cols-2 divide-x divide-y divide-line sm:grid-cols-4 sm:divide-y-0">
            {metrics.map((metric) => (
              <div key={metric.label} className="p-5 sm:p-7">
                <p className="stat-number font-heading text-5xl leading-none text-ink sm:text-6xl">{metric.value}</p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-ink/60">{t(metric.label)}</p>
              </div>
            ))}
          </RuledGrid>
          <div className="flex flex-col gap-4 border-t border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <p className="text-sm leading-relaxed text-ink/70"><span className="font-bold text-ink">Google Search Console</span> · {t("mufakkir.source")}</p>
            <a href="/proof/mufakkir-search-console-12-months.png" target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-ink transition-colors hover:bg-ink hover:text-paper">
              {t("mufakkir.viewScreenshot")} <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        <div className="relative mt-6 border border-line bg-ink p-3 sm:p-5">
          <CornerTicks />
          <a href="/proof/mufakkir-search-console-12-months.png" target="_blank" rel="noreferrer" className="relative block overflow-hidden">
            <img src="/proof/mufakkir-search-console-12-months.png" alt={t("mufakkir.imageAlt")} className="h-auto w-full" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
