import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight } from "lucide-react";
import { ClientLogos } from "./ClientLogos";

/* Platform icons row */
const PlatformIcons = () => {
  const platforms = [
    { name: "Google", color: "#4285F4" },
    { name: "ChatGPT", color: "#10A37F" },
    { name: "Claude", color: "#D4A574" },
    { name: "Gemini", color: "#8E75B2" },
    { name: "Perplexity", color: "#20B2AA" },
    { name: "Bing", color: "#008373" },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3" dir="ltr">
      {platforms.map((p) => (
        <div
          key={p.name}
          className="flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/10 text-[10px] sm:text-xs text-gray-200"
        >
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ backgroundColor: p.color }} />
          {p.name}
        </div>
      ))}
    </div>
  );
};

/* Counter animation */
const AnimatedStat = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-xl sm:text-3xl font-semibold text-white">{number}</div>
    <div className="text-[10px] sm:text-sm text-gray-200 mt-1">{label}</div>
  </div>
);

export const HeroSection = () => {
  const { t, isAr } = useLanguage();
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");

  const handleCTA = () => {
    if (domain.trim()) {
      navigate(`/contact?website=${encodeURIComponent(domain.trim())}`);
    } else {
      navigate("/contact");
    }
  };

  return (
    <section className="relative min-h-[100dvh] flex flex-col bg-[#2B124C] pt-20 pb-0">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full flex-1 flex flex-col justify-center">
        <div className="text-center max-w-4xl mx-auto">
          {/* Headline */}
          <h1
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] animate-fade-in-up"
          >
            <span className="block text-white">
              {t("hero.headline").split(".")[0]}.
            </span>
            <span className="block mt-1">
              <span
                className="text-[#FECD4D]"
                style={{
                  display: "inline",
                  background: "linear-gradient(to top, #7143E0 50%, transparent 50%)",
                  padding: "0 0.4em",
                  WebkitBoxDecorationBreak: "clone",
                  boxDecorationBreak: "clone",
                }}
              >
                {t("hero.headline").split(".").slice(1).join(".").trim() || "Powered by AI."}
              </span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-fade-in-up-delay-1"
          >
            {t("hero.subtitle")}
          </p>

          {/* Platform icons */}
          <div
            className="mt-8"
          >
            <PlatformIcons />
          </div>

          {/* Domain input CTA */}
          <div
            className="mt-6 sm:mt-10 max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:bg-white/10 sm:rounded-full sm:p-1.5">
              <div className="relative flex-1">
                <Search className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-gray-200 ${isAr ? "right-4" : "left-4"}`} />
                <input
                  type="text"
                  value={domain}
                  onChange={(e) => setDomain(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleCTA()}
                  placeholder={t("hero.inputPlaceholder")}
                  className={`w-full bg-white/10 sm:bg-transparent border border-white/10 sm:border-none rounded-full sm:rounded-none py-3.5 sm:py-2.5 text-white placeholder-gray-400 outline-none text-sm ${isAr ? "pr-12 pl-4" : "pl-12 pr-4"}`}
                />
              </div>
              <Button
                onClick={handleCTA}
                className="bg-[#FECD4D] hover:bg-[#ffe066] text-[#2B124C] font-semibold rounded-full px-7 py-3 sm:py-2.5 text-sm uppercase tracking-wide shadow-lg shadow-[#FECD4D]/20 hover:shadow-[#FECD4D]/30 transition-all whitespace-nowrap"
              >
                {t("hero.cta")}
                <ArrowRight className={`w-4 h-4 ${isAr ? "mr-1.5 rotate-180" : "ml-1.5"}`} />
              </Button>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div
          className="mt-6 sm:mt-12 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-6 w-full mx-auto sm:border-t sm:border-white/10 pt-6 sm:pt-10 md:pt-14 pb-6 sm:pb-10 md:pb-14"
        >
          <AnimatedStat number={t("hero.stat1.number")} label={t("hero.stat1.label")} />
          <AnimatedStat number={t("hero.stat2.number")} label={t("hero.stat2.label")} />
          <AnimatedStat number={t("hero.stat3.number")} label={t("hero.stat3.label")} />
          <AnimatedStat number={t("hero.stat4.number")} label={t("hero.stat4.label")} />
        </div>
      </div>

      <ClientLogos />
    </section>
  );
};
