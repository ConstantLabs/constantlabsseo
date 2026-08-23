import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Navbar = ({ heroOnly = false }: { heroOnly?: boolean }) => {
  const { t, toggleLang, isAr } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.caseStudies"), href: "/case-studies" },
    { label: t("nav.contact"), href: "/contact" },
  ];

  // The hero renders its own field full-bleed behind the page, so the nav here
  // is a small bordered plate floating in the corner rather than a bar spanning
  // it. Every other page still gets the fixed, full-width bar below.
  if (heroOnly) {
    return (
      <div className="absolute top-4 end-4 z-40 border border-line bg-void/70 backdrop-blur-sm sm:top-6 sm:end-6">
        {/* No brand link here: the hero already carries the wordmark at full size
            directly beside this plate, so repeating it reads as a duplicate. Other
            pages have no wordmark and keep theirs, in the bar below. */}
        <nav aria-label={t("home.nav.label")} className="flex h-12 items-center gap-1 px-3 sm:h-14 sm:px-4">
          <div className="hidden items-center gap-1 md:flex">
            {links.map(({ label, href }) => (
              <Link key={href} to={href} className="tv-label px-3 py-2 text-[0.625rem] leading-4 tracking-[0.14em] text-paper/70 transition-colors hover:text-signal">
                {label}
              </Link>
            ))}
          </div>

          {/* Both languages shown, current one boxed — the reference toggle. */}
          <button type="button" onClick={toggleLang} className="tv-label ms-1 flex items-center gap-1.5 border border-line px-2.5 py-1.5 text-[0.625rem] leading-4 tracking-[0.14em] text-paper/70 transition-colors hover:border-signal hover:text-signal" aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}>
            <span className={isAr ? "" : "text-signal"}>EN</span>
            <span aria-hidden="true" className="text-muted/60">/</span>
            <span className={isAr ? "text-signal" : ""}>AR</span>
          </button>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)} className="grid h-9 w-9 place-items-center text-paper/70 transition-colors hover:text-signal md:hidden">
            <span className="sr-only">{mobileOpen ? t("home.nav.close") : t("home.nav.open")}</span>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </nav>

        {mobileOpen && (
          <div id="mobile-navigation" className="border-t border-line bg-void/90 px-4 py-4 backdrop-blur-sm md:hidden">
            {links.map(({ label, href }) => (
              <Link key={href} to={href} onClick={() => setMobileOpen(false)} className="tv-label block border-b border-line py-3 text-[0.6875rem] leading-4 tracking-[0.12em] text-paper/70 transition-colors hover:text-signal">
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-line bg-void/95">
      <nav aria-label={t("home.nav.label")} className="mx-auto flex h-14 max-w-page items-center justify-between px-4 sm:h-16 sm:px-8">
        <Link to="/" dir="ltr" className="tv-label text-[0.6875rem] leading-4 tracking-[0.14em] text-paper [unicode-bidi:isolate] sm:text-xs">
          ConstantLabs SEO<span className="text-signal">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <Link key={href} to={href} className="tv-label px-3 py-2 text-[0.625rem] leading-4 tracking-[0.14em] text-paper/70 transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleLang} className="tv-label px-2 py-2 text-[0.625rem] leading-4 tracking-[0.14em] text-paper/70 transition-colors hover:text-signal" aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}>
            {isAr ? "EN" : "عربي"}
          </button>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)} className="grid h-9 w-9 place-items-center text-paper/70 transition-colors hover:text-signal md:hidden">
            <span className="sr-only">{mobileOpen ? t("home.nav.close") : t("home.nav.open")}</span>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-paper/15 bg-void/90 px-4 py-4 backdrop-blur-sm md:hidden">
          {links.map(({ label, href }) => (
            <Link key={href} to={href} onClick={() => setMobileOpen(false)} className="tv-label block border-b border-line py-3 text-[0.6875rem] leading-4 tracking-[0.12em] text-paper/70 transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};
