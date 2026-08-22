import { useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { DitherShader } from "@/components/DitherShader";
import { PrimaryCTA, SecondaryCTA } from "@/components/marketing/primitives";

/** The ConstantLabs hero recipe with the SEO audit as its first action. */
export const HeroSection = () => {
  const { t, isAr } = useLanguage();
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");

  const handleAudit = () => {
    navigate(domain.trim() ? `/audit?url=${encodeURIComponent(domain.trim())}` : "/audit");
  };

  return (
    <header className="relative flex min-h-[100svh] flex-col border-b border-line bg-void px-4 pb-5 pt-24 text-paper sm:px-8 sm:pb-6 sm:pt-28">
      <div className="mx-auto flex w-full max-w-page flex-wrap items-start gap-2 pr-28 sm:pr-36">
        <span className="tv-label border border-line px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-paper">
          CONSTANTSEO // GCC SEARCH SYSTEMS
        </span>
        <span className="tv-label border border-line px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted">
          {isAr ? "دبي، الإمارات" : "DUBAI, UAE"}
        </span>
      </div>

      <div className="mx-auto grid w-full max-w-page flex-1 items-center gap-6 py-6 sm:gap-10 sm:py-10 lg:grid-cols-[1fr_1.25fr] lg:gap-10">
        <div className="animate-field-swap">
          <h1 className="tv-display max-w-2xl text-[clamp(3.25rem,7vw,6rem)] uppercase leading-[0.92] tracking-[-0.025em] text-paper">
            {t("home.hero.title")}
          </h1>

          <p className="tv-body mt-4 max-w-xl text-base leading-[1.5] text-muted sm:mt-6 sm:text-lg">
            {t("home.hero.subtitle")}
          </p>

          <div className="mt-5 grid max-w-xl gap-2 sm:mt-7 sm:grid-cols-[1fr_auto]">
            <label className="sr-only" htmlFor="hero-domain">{t("home.hero.inputLabel")}</label>
            <div className="flex items-center border border-line bg-raised px-3 focus-within:border-signal">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <input
                id="hero-domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleAudit()}
                placeholder={t("hero.inputPlaceholder")}
                className="tv-body min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-paper outline-none placeholder:text-muted"
              />
            </div>
            <button
              type="button"
              onClick={handleAudit}
              className="tv-label inline-flex items-center justify-center gap-2 border border-signal bg-signal px-5 py-3 text-[0.625rem] leading-4 tracking-[0.16em] text-void transition-colors hover:bg-paper"
            >
              {t("hero.cta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <ul className="mt-5 flex flex-wrap gap-2 sm:mt-7">
            <li className="tv-label border border-signal px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-signal">{t("home.hero.proofCta")}</li>
            <li className="tv-label border border-line px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted">{t("home.hero.methodCta")}</li>
          </ul>

          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <PrimaryCTA href="#proof">{t("home.hero.proofCta")} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></PrimaryCTA>
            <SecondaryCTA href="#method" className="border-line text-muted hover:border-signal hover:bg-transparent hover:text-signal">{t("home.hero.methodCta")}</SecondaryCTA>
          </div>
        </div>

        <div className="relative order-first -mx-4 h-[36vh] min-h-[14rem] overflow-hidden border-y border-line sm:-mx-8 sm:h-[52vh] sm:min-h-[22rem] lg:order-none lg:mx-0 lg:-mr-8 lg:h-[46rem] lg:border-y-0">
          <DitherShader
            source="ridges"
            dither="4x4"
            foregroundColor="#C7FF38"
            backgroundColor="#030500"
            size={2}
            speed={0.59}
            scale={5}
            contrast={1.41}
            balance={-0.16}
            enablePointerRipples
            pointerRippleStrength={0.8}
            ariaLabel={isAr ? "حقل بحث متحرك" : "Live animated search field"}
          />
          <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-void/75 via-transparent to-transparent lg:from-void/70" aria-hidden="true" />
          <span className="tv-label absolute bottom-3 right-3 z-10 border border-line bg-void px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted">LIVE SEARCH FIELD // CLICK TO DISTURB</span>
        </div>
      </div>
    </header>
  );
};
