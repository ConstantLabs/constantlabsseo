import { ArrowUpRight, Brain, Code2, FileText, Globe, Link2, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, Lede, RuledGrid, SectionShell } from "@/components/marketing/primitives";

const services = [
  { key: "ai", icon: Brain, slug: "ai-search-optimization" }, { key: "technical", icon: Code2, slug: "technical-seo" },
  { key: "content", icon: FileText, slug: "arabic-content" }, { key: "local", icon: MapPin, slug: "local-seo" },
  { key: "authority", icon: Link2, slug: "ai-link-building" }, { key: "arabic", icon: Globe, slug: "seo-audits" },
];

export const ServicesGrid = () => {
  const { t } = useLanguage();
  return <SectionShell id="services" className="bg-void"><div className="mx-auto max-w-7xl"><div className="grid gap-6 border-b border-paper/25 pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end"><div><Eyebrow>{t("services.label")}</Eyebrow><DisplayTitle className="mt-4 text-paper">{t("home.services.title")}</DisplayTitle></div><Lede className="text-paper/65">{t("home.services.copy")}</Lede></div><RuledGrid className="mt-8 grid border-paper/25 bg-[linear-gradient(to_right,transparent_0,transparent_calc(100%-1px),rgb(237_242_228_/_0.18)_calc(100%-1px))] sm:grid-cols-2 lg:grid-cols-3">{services.map(({ key, icon: Icon, slug }, index) => <Link key={key} to={`/services/${slug}`} className="group min-h-64 border-b border-r border-paper/20 p-6 transition-colors hover:bg-paper hover:text-ink sm:p-8"><div className="flex items-start justify-between"><Icon className="h-6 w-6 text-lime group-hover:text-evidence-blue" /><span className="font-heading text-2xl text-paper/35 group-hover:text-ink/40">0{index + 1}</span></div><h3 className="mt-16 font-heading text-3xl uppercase leading-none text-paper group-hover:text-ink">{t(`home.services.${key}.title`)}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/65 group-hover:text-ink/70">{t(`home.services.${key}.copy`)}</p><span className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-lime group-hover:text-evidence-blue">{t("services.learnMore")} <ArrowUpRight className="h-4 w-4" /></span></Link>)}</RuledGrid></div></SectionShell>;
};
