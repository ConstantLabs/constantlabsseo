import { useLanguage } from "@/i18n/LanguageContext";
import { Quote } from "lucide-react";

const testimonialKeys = ["testimonial1", "testimonial2", "testimonial3"];

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-ink py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-2">
            {t("testimonials.label")}
          </p>
          {/* No font-black on Anton: it has one weight, so the browser fakes the rest
              by smearing the glyphs and it stops looking like Anton at all. */}
          <h2 className="font-heading text-3xl leading-[0.96] text-paper md:text-[42px]">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Mobile: horizontal scroll snap | Desktop: 3-col grid */}
        <div className="md:hidden">
          <div className="scroll-track flex gap-4 pb-2 px-1">
            {testimonialKeys.map((key) => (
              <div
                key={key}
                className="scroll-snap-card bg-paper  p-5 "
                style={{ width: "82vw", maxWidth: "340px" }}
              >
                <Quote className="mb-3 h-8 w-8 text-ink/20" />
                <blockquote className="text-sm text-ink/80 leading-relaxed mb-6 select-none">
                  "{t(`${key}.quote`)}"
                </blockquote>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink text-sm font-bold text-paper">
                    {t(`${key}.name`).charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-ink text-sm" dir="ltr">{t(`${key}.name`)}</div>
                    <div className="text-xs text-ink/70" dir="ltr">
                      {t(`${key}.title`)} - {t(`${key}.company`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonialKeys.map((_, i) => (
              <div key={i} className={`w-2 h-2  ${i === 0 ? "bg-paper" : "bg-paper/30"}`} />
            ))}
          </div>
        </div>

        {/* Desktop: static 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="bg-paper  p-8  flex flex-col"
            >
              <Quote className="mb-3 h-8 w-8 text-ink/20" />
              <blockquote className="text-base text-ink/80 leading-relaxed mb-6 flex-1">
                "{t(`${key}.quote`)}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink text-sm font-bold text-paper">
                  {t(`${key}.name`).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-ink text-sm" dir="ltr">{t(`${key}.name`)}</div>
                  <div className="text-xs text-ink/70" dir="ltr">
                    {t(`${key}.title`)} - {t(`${key}.company`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
