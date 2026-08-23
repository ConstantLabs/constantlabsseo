import { Check, CircleDashed } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SectionShell } from "@/components/marketing/primitives";
import { Body, Display, MonoLabel } from "@/components/marketing/editorial";

const systemKeys = ["home.system.signal", "home.system.structure", "home.system.measure"];

export const ProblemSolution = () => {
  const { t } = useLanguage();
  return (
    <SectionShell className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <MonoLabel>{t("home.system.eyebrow")}</MonoLabel>
          <Display className="mt-4">{t("home.system.title")}</Display>
          <Body className="mt-6">{t("home.system.copy")}</Body>
        </div>
        <div className="grid gap-px bg-line p-px sm:grid-cols-3">
          {systemKeys.map((key, index) => (
            <div key={key} className="bg-void p-6 sm:p-7">
              <div className="flex items-center justify-between text-signal">
                <CircleDashed className="h-5 w-5" aria-hidden="true" />
                <span className="tv-display text-3xl">0{index + 1}</span>
              </div>
              <Display as="h3" size="md" className="mt-12 leading-none">
                {t(`${key}.title`)}
              </Display>
              <p className="mt-4 text-sm leading-relaxed text-paper/70">{t(`${key}.copy`)}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-line pt-6 lg:col-span-2">
          <MonoLabel>{t("home.system.outcome")}</MonoLabel>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            {["home.system.outcome1", "home.system.outcome2", "home.system.outcome3"].map((key) => (
              <p key={key} className="flex gap-3 text-base font-semibold text-paper">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                {t(key)}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
