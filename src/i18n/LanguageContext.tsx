import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";
import { translations } from "./translations";

export type Locale = "en" | "ar";

interface LanguageContextType {
  lang: Locale;
  setLang: (locale: Locale) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isAr: boolean;
  isTransitioning: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Locale>(() => {
    try {
      return (localStorage.getItem("cl-lang") as Locale) || "en";
    } catch {
      return "en";
    }
  });
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setLang = (newLang: Locale) => {
    setLangState(newLang);
    try {
      localStorage.setItem("cl-lang", newLang);
    } catch { /* localStorage unavailable */ }
  };

  const toggleLang = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setLang(lang === "en" ? "ar" : "en");
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [lang]);

  useEffect(() => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: string): string => {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] || entry.en || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isAr: lang === "ar", isTransitioning }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
