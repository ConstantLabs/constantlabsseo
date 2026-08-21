import { useLanguage } from "@/i18n/LanguageContext";
import { RuledGrid, SectionShell } from "@/components/marketing/primitives";

const capabilities = ["Google", "Google Maps", "ChatGPT", "Gemini", "Perplexity", "Bing"];

export const ClientLogos = () => {
  const { t } = useLanguage();
  return <SectionShell className="bg-lime py-8 sm:py-10"><div className="mx-auto max-w-7xl"><div className="flex flex-col gap-4 sm:flex-row sm:items-baseline sm:justify-between"><p className="text-xs font-bold uppercase tracking-[0.18em] text-ink">{t("home.capabilities.eyebrow")}</p><p className="max-w-xl text-sm text-ink/70">{t("home.capabilities.copy")}</p></div><RuledGrid className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">{capabilities.map((capability) => <div key={capability} className="border-r border-t border-line p-4 text-center text-sm font-bold uppercase tracking-[0.1em] text-ink last:border-r-0 lg:border-t-0">{capability}</div>)}</RuledGrid></div></SectionShell>;
};
