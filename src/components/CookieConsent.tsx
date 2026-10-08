import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const STORAGE_KEY = "cookie_consent_v1";

export const CookieConsent = () => {
  const { isAr } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      // Small delay so it doesn't flash immediately on load
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-0 left-0 right-0 z-[60] p-2 sm:p-6"
      dir={isAr ? "rtl" : "ltr"}
      role="dialog"
      aria-label={isAr ? "إشعار ملفات تعريف الارتباط" : "Cookie consent"}
    >
      <div className="pointer-events-auto mx-auto flex max-w-3xl flex-col items-start gap-2 border border-line bg-void p-3 text-paper shadow-[0_0_0_1px_rgba(0,0,0,0.4)] sm:flex-row sm:items-center sm:gap-4 sm:p-6">
        {/* Text */}
        <div className="flex-1 min-w-0">
          {/* On a phone the banner is one short line plus the buttons, so it never
              reaches the hero's audit button. The full wording returns from sm up. */}
          <p className="mb-0.5 hidden text-sm font-semibold text-paper sm:block">
            {isAr ? "نستخدم ملفات تعريف الارتباط" : "We use cookies"}
          </p>
          <p className="text-xs leading-snug text-paper/70 sm:leading-relaxed">
            <span className="sm:hidden">{isAr ? "نستخدم ملفات تعريف الارتباط لتحليل الزيارات." : "We use cookies to analyze site traffic."}</span>
            <span className="hidden sm:inline">
              {isAr
                ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل الزيارات. بالنقر على قبول، توافق على استخدامنا لها."
                : "We use cookies to improve your experience and analyze site traffic. By clicking Accept, you agree to our use of cookies."}
            </span>
            {" "}
            <a href="/privacy" className="text-signal underline underline-offset-4">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="min-h-11 border border-line px-4 py-2 text-xs font-semibold text-paper transition-colors hover:border-signal hover:text-signal"
          >
            {isAr ? "رفض" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="min-h-11 border border-signal bg-signal px-5 py-2 text-xs font-semibold text-void transition-colors hover:bg-paper"
          >
            {isAr ? "قبول" : "Accept"}
          </button>
          <button
            onClick={decline}
            className="hidden p-1.5 text-paper/70 transition-colors hover:text-paper sm:block"
            aria-label={isAr ? "إغلاق" : "Close"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
