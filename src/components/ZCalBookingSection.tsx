import { useEffect, useState } from "react";
import { Calendar, Mail, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { DisplayTitle, Eyebrow, SectionShell } from "@/components/marketing/primitives";

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
      <a href="https://wa.me/971561495656" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-paper/50 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-paper hover:border-lime hover:text-lime"><MessageCircle className="h-4 w-4" aria-hidden="true" />{t("zcal.whatsapp")}</a>
      <a href={`mailto:akhmad@constantlabs.ai?subject=${encodeURIComponent(t("zcal.emailSubject"))}`} className="inline-flex items-center gap-2 border border-paper/50 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-paper hover:border-lime hover:text-lime"><Mail className="h-4 w-4" aria-hidden="true" />{t("zcal.email")}</a>
    </div>
  );

  return <SectionShell className="border-y border-line bg-paper text-ink"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Eyebrow>{t("home.booking.eyebrow")}</Eyebrow><DisplayTitle className="mt-4">{t("home.booking.title")}</DisplayTitle><p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70">{t("zcal.subtitle")}</p></div><div className="border border-line bg-ink p-6 text-paper sm:p-8">{showCalendar ? <><div className="mb-4 border border-paper/25 p-3 text-sm text-paper">{calendarStatus === "loading" && <p role="status">{t("zcal.loading")}</p>}{calendarStatus === "error" && <div role="alert"><p className="font-bold text-lime">{t("zcal.widgetFailed")}</p><p className="mt-1 text-paper">{t("zcal.fallback")}</p></div>}</div>{calendarStatus !== "error" && <iframe src="https://zcal.co/i/v5bi9xYQ?embed" className="h-[760px] w-full border-0 bg-paper" title={t("zcal.iframeTitle")} onLoad={() => setCalendarStatus("ready")} onError={() => setCalendarStatus("error")} />}<div className="mt-4 flex flex-col gap-4 border-t border-paper/25 pt-4">{directContact}<button type="button" onClick={() => { setShowCalendar(false); setCalendarStatus("idle"); }} className="w-fit text-sm font-bold text-paper hover:text-lime">← {t("zcal.back")}</button></div></> : <><Calendar className="h-8 w-8 text-lime" /><h3 className="mt-12 font-heading text-4xl uppercase leading-none">{t("home.booking.panelTitle")}</h3><p className="mt-4 max-w-md text-sm leading-relaxed text-paper">{t("home.booking.panelCopy")}</p><div className="mt-8"><button type="button" onClick={openCalendar} className="inline-flex items-center gap-2 bg-lime px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-lime/85">{t("zcal.bookNow")}</button></div><div className="mt-4">{directContact}</div><p className="mt-8 text-xs font-bold uppercase tracking-[0.1em] text-paper">{t("zcal.note")}</p></>}</div></div></SectionShell>;
};
