import { useState } from "react";
import { X, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

export const AnnouncementBar = () => {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="relative z-50 bg-gradient-to-r from-cyan-600 via-teal-500 to-cyan-600 text-white overflow-hidden"
        >
          {/* Animated shimmer overlay */}
          <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent animate-[shimmer_3s_ease-in-out_infinite]" />
          <div className="relative max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-sm font-medium">
            <Sparkles className="w-4 h-4 shrink-0 animate-pulse text-amber-200" />
            <span>{t("announcement.text")}</span>
            <span className="hidden sm:inline">—</span>
            <a
              href="#services"
              className="hidden sm:inline underline underline-offset-2 hover:text-amber-200 transition-colors font-semibold"
            >
              {t("announcement.cta")} &rarr;
            </a>
            <button
              onClick={() => setVisible(false)}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-white/20 active:bg-white/30 transition-colors focus:outline-none focus:ring-2 focus:ring-white/40"
              aria-label="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
