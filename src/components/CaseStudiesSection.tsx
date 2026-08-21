import { ArrowUpRight, FileSearch, Languages, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, SectionShell } from "@/components/marketing/primitives";

const methods = [
  { key: "research", icon: FileSearch, href: "/services/technical-seo" }, { key: "local", icon: Map, href: "/services/local-seo" }, { key: "bilingual", icon: Languages, href: "/services/arabic-content" },
];

export const CaseStudiesSection = () => {
  const { t } = useLanguage();
  return <SectionShell className="bg-ink"><div className="mx-auto max-w-7xl"><Eyebrow className="text-lime">{t("home.methods.eyebrow")}</Eyebrow><div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><DisplayTitle className="text-paper">{t("home.methods.title")}</DisplayTitle><p className="max-w-lg text-lg leading-relaxed text-paper">{t("home.methods.copy")}</p></div><div className="mt-10 grid gap-4 md:grid-cols-3">{methods.map(({ key, icon: Icon, href }, index) => <Link key={key} to={href} className="group border border-paper/35 p-6 transition-colors hover:bg-lime hover:text-ink sm:p-8"><div className="flex items-start justify-between"><Icon className="h-7 w-7 text-lime group-hover:text-ink" /><span className="font-heading text-3xl text-paper group-hover:text-ink/70">0{index + 1}</span></div><h3 className="mt-16 font-heading text-4xl uppercase leading-none text-paper group-hover:text-ink">{t(`home.methods.${key}.title`)}</h3><p className="mt-4 text-sm leading-relaxed text-paper group-hover:text-ink/70">{t(`home.methods.${key}.copy`)}</p><span className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-lime group-hover:text-ink">{t("home.methods.link")} <ArrowUpRight className="h-4 w-4" /></span></Link>)}</div></div></SectionShell>;
};
