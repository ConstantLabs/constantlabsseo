import { useLanguage } from "@/i18n/LanguageContext";
import { SectionShell } from "@/components/marketing/primitives";
import { Body, Display, MonoLabel } from "@/components/marketing/editorial";

const stepKeys = ["audit", "map", "build", "publish", "learn"];

export const HowItWorks = () => {
  const { t } = useLanguage();
  return (
    <SectionShell id="method" className="overflow-hidden border-y border-line bg-void">
      <div className="mx-auto max-w-7xl">
        <MonoLabel>{t("home.method.eyebrow")}</MonoLabel>
        <div className="mt-4 grid gap-8 border-b border-line pb-10 lg:grid-cols-[minmax(0,1.6fr)_minmax(18rem,0.7fr)] lg:items-end">
          <Display className="max-w-5xl">{t("home.method.title")}</Display>
          <Body className="max-w-md lg:justify-self-end">{t("home.method.copy")}</Body>
        </div>

        <ol
          aria-label={t("home.method.sequenceLabel")}
          className="relative mt-12 grid before:absolute before:inset-y-0 before:start-[5px] before:w-px before:bg-gradient-to-b before:from-signal before:via-signal/60 before:to-line before:content-[''] md:grid-cols-5 md:gap-6 md:before:inset-x-0 md:before:top-[5px] md:before:h-px md:before:w-auto md:before:bg-gradient-to-r"
        >
          {stepKeys.map((key, index) => (
            <li
              key={key}
              className={`group relative min-h-44 pb-10 ps-10 md:min-h-64 md:pb-0 md:ps-0 md:pe-5 ${index % 2 ? "md:pt-20" : "md:pt-12"}`}
            >
              <span
                aria-hidden="true"
                className={`absolute start-0 top-0 h-[11px] w-[11px] border border-signal bg-void transition-colors duration-300 group-hover:bg-signal ${index === stepKeys.length - 1 ? "bg-signal" : ""}`}
              />
              <div className="flex items-center gap-3">
                <span className="tv-label text-xs tracking-[0.18em] text-signal">0{index + 1}</span>
                <span aria-hidden="true" className="h-px w-8 bg-line transition-all duration-300 group-hover:w-14 group-hover:bg-signal" />
                <span className="tv-label text-[0.55rem] tracking-[0.16em] text-muted">/ 05</span>
              </div>
              <Display as="h3" size="md" className="mt-7 leading-none transition-colors duration-300 group-hover:text-signal">
                {t(`home.method.${key}.title`)}
              </Display>
              <p className="mt-4 max-w-[15rem] text-sm leading-relaxed text-paper/65">{t(`home.method.${key}.copy`)}</p>
            </li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
};
