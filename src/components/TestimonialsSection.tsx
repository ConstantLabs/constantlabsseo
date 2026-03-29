import { useLanguage } from "@/i18n/LanguageContext";
import { Star, Quote } from "lucide-react";

const testimonialKeys = ["testimonial1", "testimonial2", "testimonial3"];

export const TestimonialsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-24 bg-[#7143E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-2">
            {t("testimonials.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-white">
            {t("testimonials.title")}
          </h2>
        </div>

        {/* Mobile: horizontal scroll snap | Desktop: 3-col grid */}
        <div className="md:hidden">
          <div className="scroll-track flex gap-4 pb-2 px-1">
            {testimonialKeys.map((key) => (
              <div
                key={key}
                className="scroll-snap-card bg-white rounded-[20px] p-5 shadow-lg"
                style={{ width: "82vw", maxWidth: "340px" }}
              >
                <Quote className="w-8 h-8 text-[#7143E0]/15 mb-3" />
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FECD4D] fill-[#FECD4D]" />
                  ))}
                </div>
                <blockquote className="text-sm text-slate-700 leading-relaxed mb-6 select-none">
                  "{t(`${key}.quote`)}"
                </blockquote>
                <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-[#7143E0] flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {t(`${key}.name`).charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm" dir="ltr">{t(`${key}.name`)}</div>
                    <div className="text-xs text-slate-500" dir="ltr">
                      {t(`${key}.title`)} — {t(`${key}.company`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonialKeys.map((_, i) => (
              <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? "bg-white" : "bg-white/30"}`} />
            ))}
          </div>
        </div>

        {/* Desktop: static 3-col grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {testimonialKeys.map((key) => (
            <div
              key={key}
              className="bg-white rounded-[20px] p-8 shadow-lg flex flex-col"
            >
              <Quote className="w-8 h-8 text-[#7143E0]/15 mb-3" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FECD4D] fill-[#FECD4D]" />
                ))}
              </div>
              <blockquote className="text-base text-slate-700 leading-relaxed mb-6 flex-1">
                "{t(`${key}.quote`)}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[#7143E0] flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {t(`${key}.name`).charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm" dir="ltr">{t(`${key}.name`)}</div>
                  <div className="text-xs text-slate-500" dir="ltr">
                    {t(`${key}.title`)} — {t(`${key}.company`)}
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
