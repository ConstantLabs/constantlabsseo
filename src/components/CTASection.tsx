import { CircleCheck, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { FieldBand } from "@/components/field";
import {
  Action,
  BandInner,
  Body,
  Display,
  MonoLabel,
  NoteBox,
  RailList,
  Tag,
} from "@/components/marketing/editorial";

export const CTASection = () => {
  const { t } = useLanguage();

  const railItems = [t("home.cta.rail1"), t("home.cta.rail2"), t("home.cta.rail3"), t("home.cta.rail4")];

  return (
    <section id="cta">
      {/*
        The showcase's own band recipe: full-strength ink at scrim 0.84.

        Dimming the ink and lowering the scrim instead produces the same average
        colour but a flat one — every cell lands on the same murky value and the band
        reads as a wash. Bright ink behind a heavy scrim keeps the contrast BETWEEN
        cells, so it reads as fine glitter on near-black and the type keeps its edge.
      */}
      <FieldBand
        section="cta"
        ground="#0F0A05"
        className="border-y border-signal/25"
      >
        <BandInner>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <Tag>{t("home.cta.eyebrow")}</Tag>
              <Display size="lg" className="mt-6">
                {t("home.cta.title")}
              </Display>
              <MonoLabel className="mt-4">{t("stats.businesses")}</MonoLabel>
              <Body className="mt-5 max-w-xl">{t("home.cta.copy")}</Body>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Action to="/audit" variant="solid">
                  {t("cta.freeAudit")}
                </Action>
                <Action
                  href="https://wa.me/971561495656"
                  variant="outline"
                  icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
                >
                  {t("zcal.whatsapp")}
                </Action>
              </div>
            </div>

            <div className="flex flex-col">
              <MonoLabel>{t("home.cta.railLabel")}</MonoLabel>
              <RailList items={railItems} className="mt-6" />
              <NoteBox
                label={t("home.cta.guaranteeLabel")}
                icon={<CircleCheck className="h-3.5 w-3.5" aria-hidden="true" />}
                className="mt-8"
              >
                {t("home.cta.guarantee")}
              </NoteBox>
              {/* No closing tagline line here: the footer directly below opens with the
                  same `footer.tagline` string, and two identical lines a few hundred
                  pixels apart read as a duplication bug. */}
            </div>
          </div>
        </BandInner>
      </FieldBand>
    </section>
  );
};
