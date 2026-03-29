import { useLanguage } from "@/i18n/LanguageContext";

const logosBase = [
  "Google Search", "Google Business", "ChatGPT", "Gemini",
  "Perplexity", "Claude AI", "Bing", "Analytics",
  "Search Console", "PageSpeed", "Schema.org", "Vercel",
];
// Repeat enough times so one copy always exceeds any screen width
const logos = [...logosBase, ...logosBase, ...logosBase, ...logosBase];

export const ClientLogos = () => {
  const { t } = useLanguage();

  return (
    <section className="pt-8 sm:pt-10 pb-8 sm:pb-10 bg-[#64DEA3]">
      <div className="max-w-7xl mx-auto px-4 text-center mb-10">
        <p className="text-sm text-[#2B124C] font-medium uppercase tracking-wider">
          {t("clients.trusted")}
        </p>
      </div>

      <div style={{ overflow: "hidden" }}>
        <div
          className="marquee-track"
          dir="ltr"
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee-scroll 90s linear infinite",
          }}
        >
          {logos.map((name, i) => (
            <span key={`a${i}`} className="text-[#2B124C] text-xs sm:text-sm font-bold tracking-wider uppercase mx-4 sm:mx-6 shrink-0">
              {name}
            </span>
          ))}
          {logos.map((name, i) => (
            <span key={`b${i}`} aria-hidden="true" className="text-[#2B124C] text-xs sm:text-sm font-bold tracking-wider uppercase mx-4 sm:mx-6 shrink-0">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
