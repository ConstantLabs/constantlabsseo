import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, SectionShell } from "@/components/marketing/primitives";

const stepKeys = ["audit", "map", "build", "publish", "learn"];

export const HowItWorks = () => {
  const { t } = useLanguage();
  return <SectionShell id="method" className="bg-paper text-ink"><div className="mx-auto max-w-7xl"><Eyebrow>{t("home.method.eyebrow")}</Eyebrow><div className="mt-4 flex flex-col gap-6 border-b border-line pb-10 lg:flex-row lg:items-end lg:justify-between"><DisplayTitle>{t("home.method.title")}</DisplayTitle><p className="max-w-lg text-lg leading-relaxed text-ink/70">{t("home.method.copy")}</p></div><ol className="mt-8 grid gap-px bg-line md:grid-cols-5">{stepKeys.map((key, index) => <li key={key} className="min-h-64 bg-paper p-6"><span className="font-heading text-5xl text-evidence-violet">0{index + 1}</span><h3 className="mt-16 font-heading text-3xl uppercase leading-none">{t(`home.method.${key}.title`)}</h3><p className="mt-4 text-sm leading-relaxed text-ink/65">{t(`home.method.${key}.copy`)}</p></li>)}</ol></div></SectionShell>;
};
