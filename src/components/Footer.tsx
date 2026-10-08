import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";
import { MonoLabel } from "@/components/marketing/editorial";
import { legal } from "@/data/legal";
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, MAIN_SITE_URL } from "@/data/facts";

/* Mono, like every other label row on the page. In the body face these columns read
   as a different system from the rest of the footer. */
const navLinkClass =
  "tv-label inline-flex min-h-11 items-center text-[0.6875rem] leading-4 tracking-[0.14em] text-paper/60 transition-colors hover:text-signal";
const monoLinkClass =
  "tv-label inline-flex min-h-11 items-center gap-2 text-[0.625rem] leading-4 tracking-[0.18em] text-paper/50 transition-colors hover:text-signal";

/* The sister properties, linked from every page. URLs are fixed by the brand family, labels are translated. */
const family = [
  ["footer.family.agents", "https://constantlabs.ai/ai-agents/"],
  ["footer.family.websites", "https://websites.constantlabs.ai/"],
  ["footer.family.software", "https://constantlabs.ai/custom-software-development-dubai/"],
  ["footer.family.training", "https://constantlabs.ai/ai-training/"],
  ["footer.family.prices", "https://constantlabs.ai/pricing/"],
] as const;

export const Footer = () => {
  const { t } = useLanguage();
  const groups = [
    [
      t("footer.services"),
      [
        [t("footer.aiSeo"), "/services/ai-search-optimization"],
        [t("footer.technicalSeo"), "/services/technical-seo"],
        [t("footer.localSeo"), "/services/local-seo"],
      ],
    ],
    [
      t("footer.company"),
      [
        [t("footer.aboutUs"), "/about"],
        [t("footer.caseStudies"), "/case-studies"],
        [t("nav.pricing"), "/pricing"],
      ],
    ],
    [
      t("footer.resources"),
      [
        [t("footer.freeTools"), "/tools"],
        [t("footer.blog"), "/blog"],
        [t("nav.audit"), "/audit"],
      ],
    ],
  ] as const;

  return (
    <footer className="border-t border-line bg-void text-paper">
      <div className="mx-auto max-w-page px-4 py-14 sm:px-8 sm:py-16 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div>
            <p
              dir="ltr"
              className="tv-label text-sm leading-5 tracking-[0.12em] text-paper [unicode-bidi:isolate]"
            >
              ConstantSEO
              <span aria-hidden="true" className="text-signal">
                .
              </span>
            </p>
            {/* The parent-brand attribution, stated in the footer as well as the hero.
                ConstantSEO is a Constant Labs product, not a separate legal entity, and
                the footer is where that has to be unambiguous — the copyright line below
                names Constant Labs, so this makes the relationship explicit rather than
                leaving it to be inferred from the two names sitting near each other. */}
            <a
              href={MAIN_SITE_URL}
              className="tv-label mt-1 inline-flex min-h-11 items-center text-[0.625rem] leading-4 tracking-[0.18em] text-paper/60 transition-colors hover:text-signal"
            >
              {t("home.hero.parentBrand")}
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{t("footer.taglineShort")}</p>
            <MonoLabel className="mt-6">{t("footer.tagline")}</MonoLabel>
          </div>
          {groups.map(([title, links]) => (
            <div key={title}>
              <MonoLabel className="text-paper/50">{title}</MonoLabel>
              <ul className="mt-3">
                {links.map(([label, href]) => (
                  <li key={href}>
                    <Link to={href} className={navLinkClass}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <nav
          aria-label={t("footer.partOf")}
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-0 border-t border-line pt-6"
        >
          <a href={MAIN_SITE_URL} className={cn(monoLinkClass, "text-paper/70")}>
            {t("footer.partOf")}:
          </a>
          {family.map(([key, href], index) => (
            <span key={href} className="inline-flex items-center gap-6">
              {index > 0 && <span aria-hidden="true" className="hidden text-paper/25 sm:inline">·</span>}
              <a href={href} className={monoLinkClass}>
                {t(key)}
              </a>
            </span>
          ))}
        </nav>

        {/*
          Two rows, not one. Six items on a single line wrapped the copyright onto two
          lines and orphaned "Terms of service" underneath the contact block, which read
          as broken rather than as a deliberately dense row. Contact details get their
          own hairline-bounded row; legal sits opposite the copyright.
        */}
        <ul className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-0 border-t border-line pt-4">
          <li>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              dir="ltr"
              className={cn(monoLinkClass, "[unicode-bidi:isolate]")}
            >
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={CONTACT_PHONE_TEL} dir="ltr" className={cn(monoLinkClass, "[unicode-bidi:isolate]")}>
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              {CONTACT_PHONE_DISPLAY}
            </a>
          </li>
          <li className="tv-label inline-flex min-h-11 items-center gap-2 text-[0.625rem] leading-4 tracking-[0.18em] text-paper/40">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            {t("footer.location")}
          </li>
        </ul>

        {/*
          The registered entity, on its own row above the copyright.
          ConstantSEO is a product name; the licence is held by Constant Labs, and
          a prospect deciding whether to wire a retainer to an SEO agency should be
          able to find the number they can check without leaving the page.
          The name and number stay LTR in Arabic — they are a register entry.
        */}
        <p
          dir="ltr"
          className="tv-label mt-10 border-t border-line pt-6 text-[0.625rem] leading-4 tracking-[0.18em] text-paper/40 [unicode-bidi:isolate]"
        >
          <span dir="auto">{t("footer.registeredAs")}</span> {legal.legalName} ·{" "}
          {legal.licence.authorityShort} <span dir="auto">{t("footer.licenceNo")}</span>{" "}
          {legal.licence.number}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p dir="ltr" className="tv-label text-[0.625rem] leading-4 tracking-[0.18em] text-paper/40 [unicode-bidi:isolate]">
            {t("footer.copyright")}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-0">
            <li>
              <Link to="/privacy" className={monoLinkClass}>
                {t("footer.privacy")}
              </Link>
            </li>
            <li>
              <Link to="/terms" className={monoLinkClass}>
                {t("footer.terms")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
