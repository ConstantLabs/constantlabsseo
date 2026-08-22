import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const Navbar = ({ heroOnly = false }: { heroOnly?: boolean }) => {
  const { t, toggleLang, isAr } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = [
    { label: t("nav.services"), href: "/services" },
    { label: t("nav.tools"), href: "/tools" },
    { label: t("nav.pricing"), href: "/pricing" },
    { label: t("nav.about"), href: "/about" },
  ];

  return (
    <header className={`${heroOnly ? "absolute" : "fixed"} inset-x-0 top-0 z-40 border-b border-line bg-void/90 backdrop-blur-sm`}>
      <nav aria-label={t("home.nav.label")} className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:h-20 sm:px-8">
        <Link to="/" dir="ltr" className="tv-display text-xl uppercase tracking-[-0.005em] text-paper sm:text-2xl [unicode-bidi:isolate]">
          ConstantSEO<span className="text-signal">.</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {links.map(({ label, href }) => (
            <Link key={href} to={href} className="tv-label px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button type="button" onClick={toggleLang} className="tv-label border border-line px-3 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-muted transition-colors hover:border-signal hover:text-signal" aria-label={isAr ? "Switch to English" : "التبديل إلى العربية"}>
            {isAr ? "EN" : "عربي"}
          </button>
          <Link to="/audit" className="tv-label hidden border border-signal bg-signal px-4 py-2 text-[0.625rem] leading-4 tracking-[0.16em] text-void transition-colors hover:bg-paper sm:inline-flex">
            {t("nav.audit")}
          </Link>
          <button type="button" aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen((value) => !value)} className="grid h-9 w-9 place-items-center border border-line text-muted transition-colors hover:border-signal hover:text-signal md:hidden">
            <span className="sr-only">{mobileOpen ? t("home.nav.close") : t("home.nav.open")}</span>
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-line bg-void px-4 py-4 md:hidden">
          {links.map(({ label, href }) => (
            <Link key={href} to={href} onClick={() => setMobileOpen(false)} className="tv-label block border-b border-line py-3 text-[0.6875rem] leading-4 tracking-[0.12em] text-muted transition-colors hover:text-signal">
              {label}
            </Link>
          ))}
          <Link to="/audit" onClick={() => setMobileOpen(false)} className="tv-label mt-4 block border border-signal bg-signal px-4 py-3 text-center text-[0.6875rem] leading-4 tracking-[0.12em] text-void">
            {t("nav.audit")}
          </Link>
        </div>
      )}
    </header>
  );
};
