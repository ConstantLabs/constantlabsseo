import { Calendar, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Action, BandHead, BandInner, Body, Display, MonoLabel, Panel } from "@/components/marketing/editorial";
import { CONTACT_EMAIL, WHATSAPP_URL } from "@/data/facts";

export const ZCalBookingSection = () => {
  const { t } = useLanguage();

  return (
    <section className="border-y border-line bg-void text-paper">
      <BandInner>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <BandHead label={t("home.booking.eyebrow")} title={t("home.booking.title")} lede={t("zcal.subtitle")} />

          <Panel className="p-6 sm:p-8">
            <Calendar className="h-8 w-8 text-signal" aria-hidden="true" />
            <Display as="h3" size="md" className="mt-8">
              {t("home.booking.panelTitle")}
            </Display>
            <Body className="mt-4 max-w-md text-sm sm:text-base">{t("home.booking.panelCopy")}</Body>
            <div className="mt-8">
              <Action variant="solid" to="/contact">
                {t("zcal.bookNow")}
              </Action>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Action
                href={WHATSAPP_URL}
                variant="outline"
                icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                {t("zcal.whatsapp")}
              </Action>
              <Action
                href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t("zcal.emailSubject"))}`}
                variant="ghost"
                icon={<Mail className="h-3.5 w-3.5" aria-hidden="true" />}
              >
                {t("zcal.email")}
              </Action>
            </div>
            <MonoLabel className="mt-8 text-paper/50">{t("zcal.note")}</MonoLabel>
          </Panel>
        </div>
      </BandInner>
    </section>
  );
};
