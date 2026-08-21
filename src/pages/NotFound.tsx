import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/marketing/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <SEO title="404 - Page Not Found" description="Page not found on ConstantSEO." />
      <Navbar />
      <PageHero
        eyebrow="404"
        title={t("inner.notFound.title")}
        lede={t("inner.notFound.lede")}
        actions={<Link to="/" className="border border-ink bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink">{t("inner.notFound.backHome")}</Link>}
      />
      <div className="flex flex-1 items-center justify-center px-4 py-16">
        <p className="font-heading text-[9rem] uppercase leading-none text-ink/10">404</p>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
