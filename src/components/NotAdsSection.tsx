import { Infinity as InfinityIcon, Store, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { BandHead, BandInner, Body, Display, MonoLabel } from "@/components/marketing/editorial";

/*
  The band that answers "why not just run ads".

  It sits directly after the proof, because the proof is what earns the right to make
  this argument — the numbers come first, the reasoning second.

  Three points, hairline-separated, each one a claim rather than a feature. Deliberately
  no CTA: this band's job is to change how the visitor is thinking about the spend, and
  a button here competes with that.
*/
const points = [
  { key: "point1", icon: InfinityIcon },
  { key: "point2", icon: Target },
  { key: "point3", icon: Store },
];

export const NotAdsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="why-seo" className="border-y border-line bg-ink">
      <BandInner>
        {/* No lede paragraph and no second column. The three points below already make
            the argument concretely, and a paragraph restating it above them meant the
            headline had to share the row — which cost it the width it needs to land as
            two sentences rather than four wrapped lines. */}
        <BandHead
          label={t("home.notAds.eyebrow")}
          title={t("home.notAds.title")}
          className="max-w-5xl"
        />

        <ul className="mt-12 grid gap-px bg-line sm:grid-cols-3">
          {points.map(({ key, icon: Icon }, index) => (
            <li key={key} className="bg-ink p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <Icon className="h-5 w-5 text-signal" aria-hidden="true" />
                <MonoLabel className="text-paper/35">{String(index + 1).padStart(2, "0")}</MonoLabel>
              </div>
              <Display as="h3" size="md" className="mt-8">
                {t(`home.notAds.${key}.title`)}
              </Display>
              <Body className="mt-4 text-sm">{t(`home.notAds.${key}.copy`)}</Body>
            </li>
          ))}
        </ul>
      </BandInner>
    </section>
  );
};
