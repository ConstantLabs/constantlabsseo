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

  return (
    <header className={`${heroOnly ? "absolute border-transparent bg-transparent" : "fixed border-line bg-void/95"} inset-x-0 top-0 z-40`}>
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
