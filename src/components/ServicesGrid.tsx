import { ArrowUpRight, Brain, Code2, FileText, Globe, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { ShowcaseDitherField, useNarrowViewport } from "@/components/field";
import { BandHead, BandInner, Body, Display, MarkerChip, MonoLabel } from "@/components/marketing/editorial";
import { cn } from "@/lib/utils";

const services = [
  { key: "ai", icon: Brain, slug: "ai-search-optimization", chips: ["GEO", "AEO", "LLM", "SERP"] },
  { key: "technical", icon: Code2, slug: "technical-seo" },
  { key: "content", icon: FileText, slug: "arabic-content" },
  { key: "local", icon: MapPin, slug: "local-seo" },
  { key: "arabic", icon: Globe, slug: "seo-audits" },
];

const FEATURED_KEY = "ai";

export const ServicesGrid = () => {
  const { t } = useLanguage();
  const narrow = useNarrowViewport(639);

  return (
    <section id="services" className="bg-void">
      <BandInner>
        <BandHead
          label={t("services.label")}
          title={t("home.services.title")}
          lede={t("home.services.copy")}
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ key, icon: Icon, slug, chips }, index) => {
            const featured = key === FEATURED_KEY;
            return (
              // The featured card spans two columns so five cards resolve into two full
              // rows (2+1 / 1+1+1) instead of leaving a hole in the second row.
              <li key={key} className={cn(featured && "sm:col-span-2")}>
                <Link
                  to={`/services/${slug}`}
                  className={cn(
                    "group relative isolate flex h-full flex-col overflow-hidden border border-line bg-void p-6 transition-colors hover:border-signal sm:p-7",
                  )}
                >
                  {/*
                    The field is a layer on the CARD, not a box inside its padding.
                    It uses the same lightweight renderer as the hero so the texture
                    is painted immediately on phones instead of waiting for the much
                    larger shared shader to compile.
                  */}
                  {featured && (
                    <ShowcaseDitherField
                      section="services"
                      variant={narrow ? "mobile" : "desktop"}
                      className="absolute inset-0 z-0"
                    />
                  )}

                  <div className="relative z-10 flex items-center justify-between">
                    <Icon className="h-5 w-5 shrink-0 text-signal" aria-hidden="true" />
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-signal transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </div>

                  <MonoLabel className="relative z-10 mt-6">{String(index + 1).padStart(2, "0")}</MonoLabel>
                  <Display size="md" as="h3" className="relative z-10 mt-3">
                    {t(`home.services.${key}.title`)}
                  </Display>
                  <Body className="relative z-10 mt-4 line-clamp-2">{t(`home.services.${key}.copy`)}</Body>

                  {featured ? (
                    /* Staggered from the start edge, the way the reference sets them,
                       and each chip carries its own dark plate so it stays readable
                       wherever the field happens to be bright underneath. */
                    <ul className="relative z-10 mt-8 flex flex-1 flex-col items-start justify-end gap-2">
                      {chips?.map((chip, chipIndex) => (
                        <MarkerChip key={chip} style={{ marginInlineStart: `${chipIndex * 0.75}rem` }}>
                          {chip}
                        </MarkerChip>
                      ))}
                    </ul>
                  ) : (
                    <div className="mt-6 flex-1" aria-hidden="true" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </BandInner>
    </section>
  );
};
