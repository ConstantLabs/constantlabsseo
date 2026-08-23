import { useLanguage } from "@/i18n/LanguageContext";
import { SectionShell } from "@/components/marketing/primitives";
import { MonoLabel } from "@/components/marketing/editorial";

const capabilities = ["technical", "local", "content", "schema", "bilingual", "answers"];

export const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    /* The capability names ARE the content of this strip, so they get the contrast and
       the lede that introduces them gets less — it was the other way round, which
       inverted the hierarchy and left the labels almost invisible at 10px on ink. */
    <SectionShell className="border-y border-line bg-ink py-10 sm:py-12">
      <div className="mx-auto max-w-page">
        <div className="flex flex-col gap-3 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
          <MonoLabel>{t("home.capabilities.eyebrow")}</MonoLabel>
          <p className="tv-body max-w-xl text-sm leading-[1.4] text-paper/55">
            {t("home.capabilities.copy")}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
          {capabilities.map((capability, index) => (
            <span key={capability} className="inline-flex items-center gap-5">
              {index > 0 && <span aria-hidden="true" className="text-line">/</span>}
              <span className="tv-label text-[0.6875rem] leading-4 tracking-[0.16em] text-paper/75 transition-colors hover:text-signal">
                {t(`home.capabilities.${capability}`)}
              </span>
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
