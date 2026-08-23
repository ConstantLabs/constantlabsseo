import { useEffect, useState } from "react";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Action, BandHead, BandInner, Body, Display, MonoLabel, Panel } from "@/components/marketing/editorial";

export const ZCalBookingSection = () => {
  const { t } = useLanguage();
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarStatus, setCalendarStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");

  useEffect(() => {
    if (!showCalendar || calendarStatus !== "loading") return;
    const timeout = window.setTimeout(() => setCalendarStatus("error"), 10_000);
    return () => window.clearTimeout(timeout);
  }, [calendarStatus, showCalendar]);

  const openCalendar = () => {
    setShowCalendar(true);
    setCalendarStatus("loading");
  };

  const directContact = (
    <div className="flex flex-wrap gap-3">
      <Action
        href="https://wa.me/971561495656"
        variant="outline"
        icon={<MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />}
      >
        {t("zcal.whatsapp")}
      </Action>
      <Action
        href={`mailto:akhmad@constantlabs.ai?subject=${encodeURIComponent(t("zcal.emailSubject"))}`}
        variant="ghost"
        icon={<Mail className="h-3.5 w-3.5" aria-hidden="true" />}
      >
        {t("zcal.email")}
      </Action>
    </div>
  );

  return (
    <section className="border-y border-line bg-void text-paper">
      <BandInner>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <BandHead label={t("home.booking.eyebrow")} title={t("home.booking.title")} lede={t("zcal.subtitle")} />

          <Panel className="p-6 sm:p-8">
            {showCalendar ? (
              <>
                <div className="mb-4 border border-line p-3 text-sm text-paper">
                  {calendarStatus === "loading" && <p role="status">{t("zcal.loading")}</p>}
                  {calendarStatus === "error" && (
                    <div role="alert">
                      <p className="font-bold text-signal">{t("zcal.widgetFailed")}</p>
                      <p className="mt-1 text-paper">{t("zcal.fallback")}</p>
                    </div>
                  )}
                </div>
                {calendarStatus !== "error" && (
                  <div className="border border-line">
                    <iframe
                      src="https://zcal.co/i/v5bi9xYQ?embed"
                      className="h-[760px] w-full border-0 bg-paper"
                      title={t("zcal.iframeTitle")}
                      onLoad={() => setCalendarStatus("ready")}
                      onError={() => setCalendarStatus("error")}
                    />
                  </div>
                )}
                <div className="mt-4 flex flex-col gap-4 border-t border-line pt-4">
                  {directContact}
                  <Action
                    variant="ghost"
                    onClick={() => {
                      setShowCalendar(false);
                      setCalendarStatus("idle");
                    }}
                  >
                    {t("zcal.back")}
                  </Action>
                </div>
              </>
            ) : (
              <>
                <Calendar className="h-8 w-8 text-signal" aria-hidden="true" />
                <Display as="h3" size="md" className="mt-8">
                  {t("home.booking.panelTitle")}
                </Display>
                <Body className="mt-4 max-w-md text-sm sm:text-base">{t("home.booking.panelCopy")}</Body>
                <div className="mt-8">
                  <Action variant="solid" onClick={openCalendar}>
                    {t("zcal.bookNow")}
                  </Action>
                </div>
                <div className="mt-4">{directContact}</div>
                <MonoLabel className="mt-8 text-paper/50">{t("zcal.note")}</MonoLabel>
              </>
            )}
          </Panel>
        </div>
      </BandInner>
    </section>
  );
};
