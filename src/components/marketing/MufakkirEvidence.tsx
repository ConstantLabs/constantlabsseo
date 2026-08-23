import { useLanguage } from "@/i18n/LanguageContext";
import { SectionShell } from "./primitives";
import { Body, Display, MonoLabel } from "./editorial";

/*
  Transcribed from the Search Console screenshot rendered below, not rounded or
  restated — if these two ever disagree the screenshot is the one a visitor
  believes, and the discrepancy is the whole credibility of this band.
*/
const metrics = [
  { value: "1.73K", label: "mufakkir.metric.clicks", help: "mufakkir.metric.clicks.help" },
  { value: "29.4K", label: "mufakkir.metric.impressions", help: "mufakkir.metric.impressions.help" },
  { value: "5.9%", label: "mufakkir.metric.ctr", help: "mufakkir.metric.ctr.help" },
  { value: "8.4", label: "mufakkir.metric.position", help: "mufakkir.metric.position.help" },
];

const PROOF_IMAGE = "/proof/mufakkir-search-console-6-months.png";

export function MufakkirEvidence() {
  const { t } = useLanguage();

  return (
    <SectionShell id="proof" aria-labelledby="mufakkir-title" className="bg-void">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <MonoLabel>{t("mufakkir.eyebrow")}</MonoLabel>
            <Display id="mufakkir-title" className="mt-4 max-w-3xl">{t("mufakkir.title")}</Display>
          </div>
          <Body>{t("mufakkir.statement")}</Body>
        </div>

        <section aria-label={t("mufakkir.regionLabel")} className="mt-10 border-t border-line pt-7 sm:pt-8">
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-4 sm:gap-x-8">
            {/*
              Each metric explains itself on hover, and on focus too — these are
              Search Console terms, and "average position 8.4" means nothing to a
              visitor who has never opened Search Console. tabIndex makes it reachable
              by keyboard and, on a phone where there is no hover, by tapping.
              aria-describedby ties the wording to the number for screen readers, so
              the explanation is not hover-only information.
            */}
            {metrics.map((metric) => (
              <div
                key={metric.label}
                tabIndex={0}
                aria-describedby={`${metric.label}-help`}
                className="group relative border-s border-line ps-4 outline-none sm:ps-5"
              >
                <p className="stat-number tv-display text-5xl leading-none text-paper sm:text-6xl">{metric.value}</p>
                <p className="tv-label mt-3 text-[0.625rem] leading-4 tracking-[0.16em] text-muted transition-colors group-hover:text-signal group-focus-visible:text-signal">
                  {t(metric.label)}
                </p>

                <span
                  role="tooltip"
                  id={`${metric.label}-help`}
                  className="tv-body pointer-events-none absolute bottom-full start-0 z-20 mb-3 w-60 max-w-[80vw] border border-signal/40 bg-void p-3 text-xs leading-[1.5] text-paper/85 opacity-0 shadow-[0_0_0_1px_rgba(0,0,0,0.6)] transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
                >
                  {t(metric.help)}
                </span>
              </div>
            ))}
          </div>
          {/* No "view source screenshot" link: the screenshot itself is rendered
              directly below this block, so the link pointed at what the visitor is
              already looking at. No rule either — the attribution belongs to the
              metrics above it, and a divider cut it away from them. */}
          <p className="tv-body mt-6 text-sm leading-relaxed text-paper/70">
            <span className="font-bold text-paper">Google Search Console</span> · {t("mufakkir.source")}
          </p>
        </section>

        <div className="relative mt-8 overflow-hidden bg-ink p-2 sm:p-3">
          <a href={PROOF_IMAGE} target="_blank" rel="noreferrer" className="relative block overflow-hidden">
            <img src={PROOF_IMAGE} alt={t("mufakkir.imageAlt")} className="h-auto w-full" />
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
