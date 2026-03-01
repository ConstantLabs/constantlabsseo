import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations } from "./translations";

export type Locale = "en" | "ar";

interface LanguageContextType {
  lang: Locale;
  setLang: (locale: Locale) => void;
  toggleLang: () => void;
  t: (key: string) => string;
  isAr: boolean;
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

  const setLang = (newLang: Locale) => {
    setLangState(newLang);
    try {
      localStorage.setItem("cl-lang", newLang);
    } catch { /* localStorage unavailable */ }
  };

  const toggleLang = () => setLang(lang === "en" ? "ar" : "en");

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
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, isAr: lang === "ar" }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
