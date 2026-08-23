import { ArrowUpRight, FileSearch, Languages, Map } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { FieldBand } from "@/components/field";
import { Action, BandInner, Body, Display, Frame, MarkerChip, MonoLabel, Tag } from "@/components/marketing/editorial";

const methods = [
  { key: "research", icon: FileSearch, href: "/services/technical-seo" },
  { key: "local", icon: Map, href: "/services/local-seo" },
  { key: "bilingual", icon: Languages, href: "/services/arabic-content" },
];

export const CaseStudiesSection = () => {
  const { t } = useLanguage();

  // No id on this band: HowItWorks owns `#method`, and the hero's action stack links
  // to it. Two elements with the same id made that anchor ambiguous.
  return (
    <section className="bg-void">
      <BandInner>
        <Frame className="grid lg:grid-cols-2">
          <FieldBand
            section="caseStudies"
            className="min-h-[22rem]"
            contentClassName="flex h-full flex-col justify-between p-6 sm:p-10"
          >
            <div>
              <MonoLabel>{t("home.methods.eyebrow")}</MonoLabel>
              {/* Emphasis comes from the `*...*` markers in the translation string
                  now, not from splitting off the last word here — the split placed
                  the accent by position, which cannot be right in two languages at
                  once, and it broke outright once the string carried markup. */}
              <Display size="lg" className="mt-5">
                {t("home.methods.title")}
              </Display>
            </div>

            <ul className="mt-8 grid grid-cols-2 gap-2">
              {methods.map(({ key }) => (
                <MarkerChip key={key}>{t(`home.methods.${key}.title`)}</MarkerChip>
              ))}
            </ul>
          </FieldBand>

          {/* Copy and action grouped at the top, not split by `justify-between` —
              that pushed the action into the middle of the cell with ~200px of dead
              space above it, which read as a layout accident. */}
          <div className="flex flex-col items-start gap-7 border-t border-line bg-void p-6 sm:p-10 lg:border-s lg:border-t-0">
            <Body>{t("home.methods.copy")}</Body>
            <Action variant="outline" to="/services">
              {t("home.methods.link")}
            </Action>
          </div>
        </Frame>

        <div className="grid border-s border-t border-line sm:grid-cols-3">
          {methods.map(({ key, icon: Icon, href }, index) => (
            <Link
              key={key}
              to={href}
              className="group relative flex flex-col border-b border-e border-line bg-void p-6 transition-colors hover:bg-ink sm:p-8"
            >
              <Tag className="absolute start-0 top-0">{String(index + 1).padStart(2, "0")}</Tag>

              <Icon className="mt-10 h-6 w-6 shrink-0 text-signal" aria-hidden="true" />
              <Display size="md" as="h3" className="mt-6">
                {t(`home.methods.${key}.title`)}
              </Display>
              <Body className="mt-4">{t(`home.methods.${key}.copy`)}</Body>
              <span className="tv-label mt-6 inline-flex items-center gap-2 text-[0.625rem] leading-4 tracking-[0.16em] text-signal transition-colors group-hover:text-paper">
                {t("home.methods.link")}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </BandInner>
    </section>
  );
};
