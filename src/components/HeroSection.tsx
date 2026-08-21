import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { PrimaryCTA, SecondaryCTA } from "@/components/marketing/primitives";
import { SearchSignalField } from "@/components/marketing/SearchSignalField";

export const HeroSection = () => {
  const { t, isAr } = useLanguage();
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");
  const handleAudit = () => navigate(domain.trim() ? `/audit?url=${encodeURIComponent(domain.trim())}` : "/audit");

  return (
    <section className="relative overflow-hidden bg-void px-5 pb-16 pt-28 text-paper sm:px-8 sm:pb-24 sm:pt-36 lg:px-12">
      <div aria-hidden="true" className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(237_242_228_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(237_242_228_/_0.08)_1px,transparent_1px)] [background-size:4rem_4rem]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-end">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime">{t("home.hero.eyebrow")}</p>
          <h1 className="mt-5 font-heading text-6xl uppercase leading-[0.94] tracking-[-0.04em] text-paper sm:text-7xl sm:leading-[0.82] lg:text-[6.5rem]">{t("home.hero.title")}</h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70 sm:text-xl">{t("home.hero.subtitle")}</p>
          <div className="mt-9 border border-paper/25 bg-paper/5 p-2 sm:flex sm:items-center">
            <label className="sr-only" htmlFor="hero-domain">{t("home.hero.inputLabel")}</label>
            <div className="relative flex-1"><Search className={`absolute top-1/2 h-4 w-4 -translate-y-1/2 text-paper/50 ${isAr ? "right-3" : "left-3"}`} aria-hidden="true" /><input id="hero-domain" value={domain} onChange={(event) => setDomain(event.target.value)} onKeyDown={(event) => event.key === "Enter" && handleAudit()} placeholder={t("hero.inputPlaceholder")} className={`w-full bg-transparent py-3 text-sm text-paper outline-none placeholder:text-paper/45 ${isAr ? "pr-9 pl-3" : "pl-9 pr-3"}`} /></div>
            <button type="button" onClick={handleAudit} className="mt-2 inline-flex w-full items-center justify-center gap-2 bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5 sm:mt-0 sm:w-auto">{t("hero.cta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
          <div className="mt-5 flex flex-wrap gap-4"><PrimaryCTA href="#proof">{t("home.hero.proofCta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></PrimaryCTA><SecondaryCTA href="#method" className="border-paper/50 text-paper">{t("home.hero.methodCta")}</SecondaryCTA></div>
        </div>
        <SearchSignalField className="lg:translate-y-5" />
      </div>
    </section>
  );
};
