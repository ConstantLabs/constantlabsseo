import { Check, CircleDashed } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, Lede, SectionShell, SignalPanel } from "@/components/marketing/primitives";

const systemKeys = ["home.system.signal", "home.system.structure", "home.system.measure"];

export const ProblemSolution = () => {
  const { t } = useLanguage();
  return <SectionShell className="bg-paper text-ink"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]"><div><Eyebrow>{t("home.system.eyebrow")}</Eyebrow><DisplayTitle className="mt-4">{t("home.system.title")}</DisplayTitle><Lede className="mt-6">{t("home.system.copy")}</Lede></div><SignalPanel className="grid gap-px bg-line p-px sm:grid-cols-3">{systemKeys.map((key, index) => <div key={key} className="bg-ink p-6 sm:p-7"><div className="flex items-center justify-between text-lime"><CircleDashed className="h-5 w-5" /><span className="font-heading text-3xl">0{index + 1}</span></div><h3 className="mt-12 font-heading text-3xl uppercase leading-none text-paper">{t(`${key}.title`)}</h3><p className="mt-4 text-sm leading-relaxed text-paper/65">{t(`${key}.copy`)}</p></div>)}</SignalPanel><div className="border-t border-line pt-6 lg:col-span-2"><p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/55">{t("home.system.outcome")}</p><div className="mt-5 grid gap-4 sm:grid-cols-3">{["home.system.outcome1", "home.system.outcome2", "home.system.outcome3"].map((key) => <p key={key} className="flex gap-3 text-base font-semibold"><Check className="mt-0.5 h-5 w-5 shrink-0 text-evidence-blue" />{t(key)}</p>)}</div></div></div></SectionShell>;
};
