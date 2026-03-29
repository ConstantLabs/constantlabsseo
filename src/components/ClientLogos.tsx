import { useEffect, useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const logosBase = [
  "Google Search", "Google Business", "ChatGPT", "Gemini",
  "Perplexity", "Claude AI", "Bing", "Analytics",
  "Search Console", "PageSpeed", "Schema.org", "Vercel",
];

// 3× so one copy (~3000px) exceeds any screen
const oneCopy = [...logosBase, ...logosBase, ...logosBase];

export const ClientLogos = () => {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const copy1Ref = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const track = trackRef.current;
    const copy1 = copy1Ref.current;
    if (!track || !copy1) return;

    // Let layout settle before measuring
    const raf = requestAnimationFrame(() => {
      const copyWidth = copy1.getBoundingClientRect().width;

      const step = () => {
        posRef.current -= 0.6;
        if (posRef.current <= -copyWidth) {
          posRef.current += copyWidth;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    });

    return () => {
      cancelAnimationFrame(raf);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const itemStyle: React.CSSProperties = {
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    flexShrink: 0,
    overflow: "visible",
    whiteSpace: "nowrap",
  };

  const copyStyle: React.CSSProperties = {
    display: "flex",
    flexShrink: 0,
    overflow: "visible",   // override * { overflow: hidden }
    whiteSpace: "nowrap",
  };

  return (
    <section className="pt-5 sm:pt-6 pb-8 sm:pb-10 bg-[#64DEA3]">
      <p className="text-xs sm:text-sm text-[#2B124C] font-medium uppercase tracking-wider text-center mb-6 px-4">
        {t("clients.trusted")}
      </p>

      {/* overflow hidden only on the outer clip container */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div
          ref={trackRef}
          dir="ltr"
          style={{ display: "flex", overflow: "visible", willChange: "transform" }}
        >
          <div ref={copy1Ref} style={copyStyle}>
            {oneCopy.map((name, i) => (
              <span key={i} className="text-[#2B124C] text-xs sm:text-sm font-bold tracking-wider uppercase" style={itemStyle}>
                {name}
              </span>
            ))}
          </div>
          <div style={copyStyle} aria-hidden="true">
            {oneCopy.map((name, i) => (
              <span key={i} className="text-[#2B124C] text-xs sm:text-sm font-bold tracking-wider uppercase" style={itemStyle}>
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
