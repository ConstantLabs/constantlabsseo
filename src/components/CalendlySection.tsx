import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { Calendar } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function CalendlySection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "200px 0px" });
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    // Load Calendly widget script
    const existing = document.querySelector('script[src*="calendly.com/assets/external/widget.js"]');
    if (existing) {
      // Script already loaded, just init
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, [isInView]);

  // Load Calendly CSS for proper widget styling (removes inner scrollbar)
  useEffect(() => {
    const existing = document.querySelector('link[href*="calendly.com/assets/external/widget.css"]');
    if (existing) return;

    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    document.head.appendChild(link);
  }, []);

  return (
    <section
      id="book"
      ref={ref}
      className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden"
    >
      {/* Background effects */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cl-cyan/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cl-green/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-cl-cyan" />
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
              {t("calendly.title")}
            </h2>
          </div>
          <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase mb-4">
            {t("calendly.subtitle")}
          </p>
          <span className="inline-block text-[10px] font-tech text-cl-green uppercase tracking-widest border border-cl-green/30 px-3 py-1">
            {t("calendly.free")}
          </span>
        </div>

        {/* Calendly embed container */}
        <div className="max-w-3xl mx-auto relative">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 pointer-events-none z-10" />
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 pointer-events-none z-10" />

          <div className="border border-foreground/20 bg-foreground/[0.02] backdrop-blur-sm">
            {isInView ? (
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/akhmad6093/30min?background_color=0d0f14&text_color=e8eaf0&primary_color=2e8b7a&hide_event_type_details=1&hide_landing_page_details=1"
                data-resize="true"
                style={{ minWidth: "280px", width: "100%" }}
              />
            ) : null}

            {/* Loading placeholder shown until Calendly widget loads */}
            {(!isInView || !loaded) && (
              <div className="h-[500px] flex items-center justify-center">
                <div className="flex items-center gap-2 text-foreground/40">
                  <div className="w-2 h-2 bg-cl-cyan animate-pulse rounded-full" />
                  <span className="text-xs font-tech tracking-wider uppercase">
                    Loading scheduler...
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
