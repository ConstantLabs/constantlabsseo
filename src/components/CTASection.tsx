import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, PrimaryCTA, SectionShell } from "@/components/marketing/primitives";

export const CTASection = () => {
  const { t } = useLanguage();
  return <SectionShell id="cta" className="overflow-hidden border-y border-line bg-ink text-paper"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><Eyebrow className="text-lime">{t("home.cta.eyebrow")}</Eyebrow><DisplayTitle className="mt-4 max-w-3xl text-paper">{t("home.cta.title")}</DisplayTitle><p className="mt-5 max-w-xl text-lg leading-relaxed text-paper">{t("home.cta.copy")}</p></div><div className="flex flex-wrap gap-4"><PrimaryCTA href="/audit">{t("cta.freeAudit")} <ArrowUpRight className="h-4 w-4" /></PrimaryCTA><a href="https://wa.me/971561495656" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-paper/60 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] transition-colors hover:border-lime hover:bg-lime hover:text-ink"><MessageCircle className="h-4 w-4" />{t("zcal.whatsapp")}</a></div></div></SectionShell>;
};
