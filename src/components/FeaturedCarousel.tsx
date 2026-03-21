import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { softwareProjects, clientProjects } from "@/data/projectsData";
import type { Project } from "@/data/projectsData";
import { useLanguage } from "@/i18n/LanguageContext";
import { PhoneMockup } from "@/components/PhoneMockup";

const featuredProjects: Project[] = [
  ...softwareProjects,
  ...clientProjects,
].filter(
  (p) =>
    p.status === "live" &&
    !p.internalRoute &&
    !p.link.includes("github.com")
);

export function FeaturedCarousel() {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", direction: isAr ? "rtl" : "ltr" },
    [Autoplay({ delay: 5000, stopOnInteraction: true, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const handleCardClick = (project: Project) => {
    window.open(project.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="mb-16">
      {/* Section heading */}
      <div className="mb-8">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
          {t("featured.title")}
        </h2>
        <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
          {t("featured.subtitle")}
        </p>
      </div>

      {/* Carousel */}
      <div className="relative group">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex -ml-4">
            {featuredProjects.map((project) => (
              <div
                key={project.slug}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleCardClick(project)}
                  className="relative border border-foreground/20 bg-foreground/[0.02] hover:bg-foreground/[0.05] backdrop-blur-sm overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] h-full flex flex-col"
                >
                  {/* Corner decorations */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-foreground/20 pointer-events-none z-10" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-foreground/20 pointer-events-none z-10" />

                  {/* Image or Phone Mockup */}
                  <div className="relative h-48 md:h-56 overflow-hidden flex items-center justify-center bg-background/50">
                    {project.screenshots ? (
                      <PhoneMockup
                        screenshots={project.screenshots}
                        alt={project.title}
                        className="py-2"
                      />
                    ) : (
                      <>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          style={{
                            objectPosition: project.imagePosition || "center",
                          }}
                          loading="lazy"
                        />
                        {/* Scanline overlay */}
                        <div
                          className="absolute inset-0 pointer-events-none opacity-[0.03]"
                          style={{
                            backgroundImage:
                              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 4px)",
                          }}
                        />
                      </>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm md:text-base font-bold font-tech uppercase tracking-wider">
                        {project.title}
                      </h3>
                      <span
                        className={cn(
                          "text-[8px] font-tech uppercase tracking-wider px-2 py-0.5 border",
                          project.status === "live"
                            ? "text-emerald-400 border-emerald-400/30"
                            : project.status === "beta"
                            ? "text-amber-400 border-amber-400/30"
                            : "text-blue-400 border-blue-400/30"
                        )}
                      >
                        {project.status}
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed mb-3 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mt-auto mb-3">
                      {project.tech.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-[8px] font-tech text-foreground/40 uppercase tracking-wider"
                        >
                          // {tag}
                        </span>
                      ))}
                    </div>

                    {/* Visit link */}
                    <div className="flex items-center gap-1 text-cl-cyan text-[10px] font-tech uppercase tracking-wider">
                      <ExternalLink className="w-3 h-3" />
                      <span>{isAr ? "زيارة" : "VISIT"}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Previous"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 border border-foreground/20 bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all opacity-0 group-hover:opacity-100"
          aria-label="Next"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              idx === selectedIndex
                ? "bg-cl-cyan w-4"
                : "bg-foreground/20 hover:bg-foreground/40"
            )}
            aria-label={`Go to slide group ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
