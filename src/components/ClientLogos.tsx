import { useLanguage } from "@/i18n/LanguageContext";
import { SectionShell } from "@/components/marketing/primitives";

const capabilities = ["technical", "local", "content", "schema", "bilingual", "answers"];

export const ClientLogos = () => {
  const { t } = useLanguage();
  return (
    <SectionShell className="border-y border-line bg-paper py-8 text-ink sm:py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-3 border-b border-line/60 pb-5 sm:flex-row sm:items-end sm:justify-between">
          <p className="tv-label text-[0.625rem] tracking-[0.16em] text-ink/70">{t("home.capabilities.eyebrow")}</p>
          <p className="max-w-xl text-sm leading-[1.35] text-ink/70">{t("home.capabilities.copy")}</p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-ink">
          {capabilities.map((capability, index) => (
            <span key={capability} className="inline-flex items-center gap-2">
              {index > 0 && <span aria-hidden="true" className="text-ink/30">/</span>}
              {t(`home.capabilities.${capability}`)}
            </span>
          ))}
        </div>
      </div>
    </SectionShell>
  );
};
