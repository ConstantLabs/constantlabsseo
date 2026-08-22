import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroVisual from "@/assets/hero-intelligence-v1.png";
import { useLanguage } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { PrimaryCTA, SecondaryCTA } from "@/components/marketing/primitives";

/** One complete ConstantLabs-style hero: navigation, copy, action, and image. */
export const HeroSection = () => {
  const { t, isAr } = useLanguage();
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");

  const handleAudit = () => {
    navigate(domain.trim() ? `/audit?url=${encodeURIComponent(domain.trim())}` : "/audit");
  };

  return (
    <header className="relative isolate flex min-h-[100svh] flex-col overflow-hidden border-b border-line bg-void text-paper">
      <Navbar heroOnly />

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_76%_54%,rgb(199_255_56_/_0.11),transparent_34%),linear-gradient(105deg,#030500_0%,#030500_44%,transparent_76%)]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[62%] bg-cover bg-center opacity-95 mix-blend-screen" style={{ backgroundImage: `url(${heroVisual})` }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[68%] bg-gradient-to-l from-transparent via-void/20 to-void" aria-hidden="true" />

      <div className="mx-auto flex w-full max-w-page flex-1 items-end px-4 pb-10 pt-28 sm:px-8 sm:pb-14 sm:pt-32 lg:pb-20">
        <div className="max-w-3xl">
          <div className="mb-7 flex flex-wrap gap-2 sm:mb-10">
            <span className="tv-label border border-line bg-void/65 px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-paper">
              CONSTANTSEO // GCC SEARCH SYSTEMS
            </span>
            <span className="tv-label border border-line bg-void/65 px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted">
              {isAr ? "دبي، الإمارات" : "DUBAI, UAE"}
            </span>
          </div>

          <p className="tv-label mb-4 text-[0.6875rem] leading-4 tracking-[0.18em] text-signal sm:mb-5">
            {t("home.hero.eyebrow")}
          </p>
          <h1 className="tv-display max-w-4xl text-pretty text-[clamp(3.35rem,8.5vw,8rem)] uppercase leading-[0.94] tracking-[-0.025em] text-paper">
            {t("home.hero.title")}
          </h1>
          <p className="tv-body mt-5 max-w-xl text-pretty text-base leading-[1.35] text-paper/70 sm:mt-7 sm:text-xl">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-7 grid max-w-2xl gap-2 sm:mt-9 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="hero-domain">{t("home.hero.inputLabel")}</label>
            <div className="flex items-center border border-line bg-void/75 px-3 backdrop-blur-sm focus-within:border-signal">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <input
                id="hero-domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleAudit()}
                placeholder={t("hero.inputPlaceholder")}
                className="tv-body min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-paper outline-none placeholder:text-muted"
              />
            </div>
            <button type="button" onClick={handleAudit} className="tv-label inline-flex items-center justify-center gap-2 border border-signal bg-signal px-6 py-3.5 text-[0.625rem] leading-4 tracking-[0.16em] text-void transition-colors hover:bg-paper">
              {t("hero.cta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-7">
            <PrimaryCTA href="#proof">{t("home.hero.proofCta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></PrimaryCTA>
            <SecondaryCTA href="#method" className="border-line bg-void/35 text-paper hover:border-signal hover:bg-transparent hover:text-signal">{t("home.hero.methodCta")}</SecondaryCTA>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-4 right-4 hidden tv-label text-[0.625rem] leading-4 tracking-[0.16em] text-muted sm:block lg:right-8">
        IMAGE STUDY 04 // SEARCH SIGNAL CORE
      </div>
    </header>
  );
};
