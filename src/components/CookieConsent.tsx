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
      className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6"
      dir={isAr ? "rtl" : "ltr"}
      role="dialog"
      aria-label={isAr ? "إشعار ملفات تعريف الارتباط" : "Cookie consent"}
    >
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 border border-line bg-paper p-5 text-ink sm:flex-row sm:items-center sm:p-6">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="mb-0.5 text-sm font-semibold text-ink">
            {isAr ? "نستخدم ملفات تعريف الارتباط" : "We use cookies"}
          </p>
          <p className="text-xs leading-relaxed text-ink/70">
            {isAr
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل الزيارات. بالنقر على قبول، توافق على استخدامنا لها."
              : "We use cookies to improve your experience and analyze site traffic. By clicking Accept, you agree to our use of cookies."}
            {" "}
            <a href="/privacy" className="text-ink underline underline-offset-4">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="border border-line px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-lime/20"
          >
            {isAr ? "رفض" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="border border-ink bg-ink px-5 py-2 text-xs font-semibold text-paper transition-colors hover:bg-lime hover:text-ink"
          >
            {isAr ? "قبول" : "Accept"}
          </button>
          <button
            onClick={decline}
            className="p-1.5 text-ink/70 transition-colors hover:text-ink"
            aria-label={isAr ? "إغلاق" : "Close"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
