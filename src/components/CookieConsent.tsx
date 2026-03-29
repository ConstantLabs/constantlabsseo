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
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-900 mb-0.5">
            {isAr ? "نستخدم ملفات تعريف الارتباط" : "We use cookies"}
          </p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {isAr
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتحليل الزيارات. بالنقر على قبول، توافق على استخدامنا لها."
              : "We use cookies to improve your experience and analyze site traffic. By clicking Accept, you agree to our use of cookies."}
            {" "}
            <a href="/privacy" className="text-[#7143E0] hover:underline">
              {isAr ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full transition-colors"
          >
            {isAr ? "رفض" : "Decline"}
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-xs font-semibold text-white bg-[#7143E0] hover:bg-[#5a2dcc] rounded-full transition-colors"
          >
            {isAr ? "قبول" : "Accept"}
          </button>
          <button
            onClick={decline}
            className="p-1.5 text-slate-400 hover:text-slate-600 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
