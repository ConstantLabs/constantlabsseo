import { useState, useEffect, useCallback, useRef, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GlitchTextFramer } from "@/components/GlitchTextFramer";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetailModal } from "@/components/ProjectDetailModal";
import { TeamMember } from "@/components/TeamMember";
import { Button } from "@/components/ui/button";
import { Search, Wrench, CheckCircle } from "lucide-react";
import { SEO } from "@/components/SEO";
import { useLanguage } from "@/i18n/LanguageContext";
import { SERVICES, softwareProjects, clientProjects, hardwareProjects } from "@/data/projectsData";
import type { Project } from "@/data/projectsData";
import { cn } from "@/lib/utils";
import { useWebHaptics } from "web-haptics/react";

import tamerAvatar from "@/assets/tamer-avatar.webp";
import ahmadAvatar from "@/assets/ahmad-avatar.webp";
import tjAvatar from "@/assets/tj-avatar.webp";
import wahabAvatar from "@/assets/wahab-avatar.webp";

// Lazy load HackerBackground for better performance
const HackerBackground = lazy(() => import("@/components/HackerBackground").then(module => ({ default: module.HackerBackground })));



const Index = () => {
  const { t, lang, toggleLang, isTransitioning } = useLanguage();
  const isAr = lang === "ar";
  const navigate = useNavigate();

  const { trigger } = useWebHaptics();
  const [shouldLoadBackground, setShouldLoadBackground] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const modalOpenRef = useRef(false);

  const openModal = useCallback((project: Project) => {
    setSelectedProject(project);
    modalOpenRef.current = true;
    window.history.pushState({ modal: true }, "");
  }, []);

  const closeModal = useCallback(() => {
    if (modalOpenRef.current) {
      modalOpenRef.current = false;
      setSelectedProject(null);
    }
  }, []);

  // Close modal on browser back button
  useEffect(() => {
    const onPopState = (e: PopStateEvent) => {
      if (modalOpenRef.current) {
        e.preventDefault();
        closeModal();
      }
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [closeModal]);

  const handleProjectClick = (project: Project) => {
    if (project.internalRoute) {
      navigate(project.internalRoute);
    } else {
      openModal(project);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      setShouldLoadBackground(true);
    } else {
      const timer = setTimeout(() => setShouldLoadBackground(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % SERVICES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const team = [
    {
      name: isAr ? "أحمد حسن" : "AHMAD HASAN",
      role: isAr ? "مؤسس مشارك / مصمم أنظمة" : "CO-FOUNDER / ARCHITECT",
      journey: isAr
        ? [
            "تصنيع ثلاثي الأبعاد ونماذج أولية مادية ← هندسة الأجهزة",
            "فيزياء تطبيقية ← بحث فلكي",
            "بناء مراصد لرصد الفضاء العميق",
            "الآن: تصميم تجارب رقمية تتخطى الحدود"
          ]
        : [
            "3D fabrication and physical prototyping → Hardware engineering",
            "Applied Physics (dropout) → Astronomical research",
            "Built observatories for deep space observation",
            "Now: Architecting digital experiences that push boundaries"
          ],
      avatar: ahmadAvatar,
      github: "https://github.com/Astrobubu",
      linkedin: "https://www.linkedin.com/in/astrobubu"
    },
    {
      name: isAr ? "محمد تامر" : "MOHAMAD TAMER",
      role: isAr ? "مؤسس مشارك / مدير إبداعي" : "CO-FOUNDER / CREATIVE DIRECTOR",
      journey: isAr
        ? [
            "مهندس حاسوب ومصور فلكي",
            "تصميم ونمذجة ثلاثية الأبعاد",
            "رسوم متحركة ومونتاج فيديو",
            "تطوير كامل وهندسة أنظمة",
            "الآن: صياغة تجارب بصرية تكسر المألوف"
          ]
        : [
            "Computer Engineer and Astrophotographer",
            "3D design and modeling",
            "Motion graphics and video editing",
            "Full-stack development and system architecture",
            "Now: Crafting visual experiences that break conventions"
          ],
      avatar: tamerAvatar,
      github: "https://github.com/Moenamatics",
      linkedin: "https://www.linkedin.com/in/mohamad-rabie-b304a8203/"
    },
    {
      name: isAr ? "محمد تيجاني" : "MOHAMMAD TIJANI",
      role: isAr ? "مهندس برمجيات" : "SOFTWARE ENGINEER",
      journey: isAr
        ? [
            "بكالوريوس هندسة حاسوب",
            "ماجستير علوم حاسوب (جامعة يورك)",
            "تطوير ويب وبرمجة",
            "الآن: بناء حلول برمجية متينة"
          ]
        : [
            "BSc Computer Engineering",
            "MSc Computer Science (University of York)",
            "Web development and programming",
            "Now: Building robust software solutions"
          ],
      avatar: tjAvatar,
      github: "",
      linkedin: "https://www.linkedin.com/in/altigani-501599235/"
    },
    {
      name: isAr ? "محمد عبدالوهاب" : "MOHAMED ABDELWAHAB",
      role: isAr ? "مدير التسويق والإعلام" : "MARKETING & MEDIA LEAD",
      journey: isAr
        ? [
            "ماجستير تكنولوجيا حيوية ← باحث سرطان منشور ← فني مختبر كوفيد",
            "انتقل إلى التسويق في مجموعة دبي الفلكية",
            "وسّع علامة Drub Media عبر أرقى معارض دبي",
            "الآن: استراتيجية رقمية وحملات إعلانية ومحتوى يحقق النتائج"
          ]
        : [
            "MSc Biotechnology → Published cancer researcher → COVID frontline lab tech",
            "Pivoted into marketing at Dubai Astronomy Group",
            "Scaled Drub Media's brand and content ops across Dubai's top exhibitions",
            "Now: Digital strategy, ad campaigns, and content that converts"
          ],
      avatar: wahabAvatar,
      github: "",
      linkedin: "https://www.linkedin.com/in/abdulwahab1996/"
    }
  ];

  return (
    <div
      className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page transition-all duration-300 ease-out"
      style={{
        opacity: isTransitioning ? 0 : 1,
        transform: isTransitioning
          ? `translateX(${isAr ? '-60px' : '60px'})`
          : 'translateX(0)',
      }}
    >
      <SEO
        title="Home"
        description="Constant Labs — Dubai-based technology studio. AI solutions, web applications, robotics, and smart systems for businesses across the UAE and the Emirates."
        path="/"
      />
      {shouldLoadBackground && (
        <Suspense fallback={null}>
          <HackerBackground />
        </Suspense>
      )}

      {/* System Status Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4" dir="ltr">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cl-cyan animate-pulse rounded-full" />
              <span className="text-[10px] tracking-wider text-foreground/60 uppercase" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                SYSTEM ONLINE
              </span>
            </div>
            <span className="text-[10px] text-foreground/80 font-bold tracking-wider" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              CONSTANT_LABS
            </span>
            <span className="hidden sm:inline text-[8px] text-foreground/40" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
              // SECURE CONNECTION ESTABLISHED
            </span>
          </div>
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <div className="flex items-center gap-1 border border-foreground/20 px-2 py-0.5">
              <button
                onClick={() => isAr && toggleLang()}
                className={cn(
                  "text-[10px] font-tech tracking-wider px-1 transition-colors",
                  !isAr ? "text-foreground" : "text-foreground/40 hover:text-foreground/60"
                )}
              >
                EN
              </button>
              <span className="text-[10px] text-foreground/20">|</span>
              <button
                onClick={() => !isAr && toggleLang()}
                className={cn(
                  "text-[10px] font-tech tracking-wider px-1 transition-colors",
                  isAr ? "text-foreground" : "text-foreground/40 hover:text-foreground/60"
                )}
              >
                AR
              </button>
            </div>
            <span className="text-[8px] font-tech text-foreground/40 uppercase">
              {new Date().toLocaleString(isAr ? 'ar-AE' : 'en-US', {
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
              })}
            </span>
          </div>
        </div>
      </div>

      {/* ENTRY POINT */}
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-24 select-none">
        <div className="container mx-auto px-4 text-center">
          {/* Main title */}
          <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight uppercase transform -rotate-3 font-dedsec mb-4 select-none">
            <GlitchTextFramer>CONSTANT LABS</GlitchTextFramer>
            {isAr && (
              <span
                className="absolute -top-[1em] left-1/2 -translate-x-1/2 text-[0.3em] font-black text-foreground opacity-60 pointer-events-none whitespace-nowrap tracking-[0.15em]"
                style={{ fontFamily: "'Changa', sans-serif" }}
                dir="rtl"
              >
                كونستانت لابز
              </span>
            )}
          </h1>


          {/* Tagline */}
          <p className="text-sm md:text-base text-muted-foreground font-tech tracking-[0.3em] uppercase mb-8">
            {t("hero.tagline")}
          </p>

          {/* Rotating service highlight */}
          <div className="h-12 mb-6 flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center gap-3"
              >
                {(() => {
                  const ActiveIcon = SERVICES[currentService].icon;
                  return <ActiveIcon className="w-4 h-4 text-foreground/60" />;
                })()}
                <span className="text-xs sm:text-sm font-tech text-foreground/80 uppercase tracking-wider">
                  [{t(`service.${SERVICES[currentService].id}.title`)}]
                </span>
                <span className="hidden sm:inline text-xs text-muted-foreground font-tech">
                  — {t(`service.${SERVICES[currentService].id}.oneLiner`)}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mb-12" />

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="border-2 border-cl-cyan bg-transparent text-cl-cyan hover:bg-cl-cyan hover:text-background font-tech tracking-wide transition-all focus:ring-2 focus:ring-cl-cyan focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to services section"
            >
              {t("hero.viewServices")}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-foreground/30 text-foreground hover:border-cl-magenta hover:text-cl-magenta hover:bg-transparent font-tech tracking-wide transition-all focus:ring-2 focus:ring-cl-magenta focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to contact section"
            >
              {t("hero.contact")}
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dot grid + gradient bg */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-cl-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-cl-purple/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
              {t("services.subtitle")}
            </p>
          </div>

          {/* SOFTWARE & WEB */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-cl-cyan/20" />
              <h3 className="text-base font-tech text-cl-cyan uppercase tracking-wider">
                {isAr ? "// برمجيات وويب" : "// SOFTWARE & WEB"}
              </h3>
              <div className="h-px flex-1 bg-cl-cyan/20" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(["MOBILE_WEB_APPS", "DASHBOARDS_INTERNAL_TOOLS", "E_COMMERCE", "B2B_B2C_PLATFORMS", "DIGITAL_PRESENCE", "DIGITAL_MARKETING"] as const).map((id) => {
                const service = SERVICES.find(s => s.id === id)!;
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => trigger("light")}
                    className="group flex flex-col border border-foreground/10 border-s-4 border-s-cl-cyan bg-foreground/[0.02] hover:bg-foreground/[0.05] backdrop-blur-sm p-3 md:p-6 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-foreground/60 group-hover:text-cl-cyan transition-colors" />
                      <h3 className="text-xs md:text-lg font-bold font-tech uppercase tracking-wider text-foreground leading-tight">
                        {t(`service.${service.id}.title`)}
                      </h3>
                    </div>
                    <p className="hidden md:block text-base text-muted-foreground leading-relaxed mb-4">
                      {t(`service.${service.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[8px] md:text-[10px] font-tech text-foreground/40 uppercase tracking-wider">
                          // {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* AI & AUTOMATION */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-cl-purple/20" />
              <h3 className="text-base font-tech text-cl-purple uppercase tracking-wider">
                {isAr ? "// ذكاء اصطناعي وأتمتة" : "// AI & AUTOMATION"}
              </h3>
              <div className="h-px flex-1 bg-cl-purple/20" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(["AI_AGENTS", "CUSTOM_AI_AGENTS", "PRIVATE_AI"] as const).map((id) => {
                const service = SERVICES.find(s => s.id === id)!;
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => trigger("rigid")}
                    className="group flex flex-col border border-foreground/10 border-s-4 border-s-cl-purple bg-foreground/[0.02] hover:bg-foreground/[0.05] backdrop-blur-sm p-3 md:p-6 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-foreground/60 group-hover:text-cl-purple transition-colors" />
                      <h3 className="text-xs md:text-lg font-bold font-tech uppercase tracking-wider text-foreground leading-tight">
                        {t(`service.${service.id}.title`)}
                      </h3>
                    </div>
                    <p className="hidden md:block text-base text-muted-foreground leading-relaxed mb-4">
                      {t(`service.${service.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[8px] md:text-[10px] font-tech text-foreground/40 uppercase tracking-wider">
                          // {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* INTEGRATION & INFRASTRUCTURE */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px flex-1 bg-cl-amber/20" />
              <h3 className="text-base font-tech text-cl-amber uppercase tracking-wider">
                {isAr ? "// ربط أنظمة وبنية تحتية" : "// INTEGRATION & INFRASTRUCTURE"}
              </h3>
              <div className="h-px flex-1 bg-cl-amber/20" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {(["SYSTEM_INTEGRATION", "IOT_EMBEDDED", "ERP_INTEGRATIONS"] as const).map((id) => {
                const service = SERVICES.find(s => s.id === id)!;
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    onClick={() => trigger("medium")}
                    className="group flex flex-col border border-foreground/10 border-s-4 border-s-cl-amber bg-foreground/[0.02] hover:bg-foreground/[0.05] backdrop-blur-sm p-3 md:p-6 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-foreground/60 group-hover:text-cl-amber transition-colors" />
                      <h3 className="text-xs md:text-lg font-bold font-tech uppercase tracking-wider text-foreground leading-tight">
                        {t(`service.${service.id}.title`)}
                      </h3>
                    </div>
                    <p className="hidden md:block text-base text-muted-foreground leading-relaxed mb-4">
                      {t(`service.${service.id}.description`)}
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                      {service.tags.map((tag) => (
                        <span key={tag} className="text-[8px] md:text-[10px] font-tech text-foreground/40 uppercase tracking-wider">
                          // {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE ARE — Mission + Approach */}
      <section id="mission" className="relative z-10 py-12 md:py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dark gradients only */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cl-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cl-purple/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div onClick={() => trigger("soft")} className="relative border-2 border-foreground/20 bg-background p-6 md:p-12 overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all cursor-pointer">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-12 h-12 md:w-24 md:h-24 border-t-2 border-l-2 border-foreground/20" />
              <div className="absolute top-0 right-0 w-12 h-12 md:w-24 md:h-24 border-t-2 border-r-2 border-foreground/20" />
              <div className="absolute bottom-0 left-0 w-12 h-12 md:w-24 md:h-24 border-b-2 border-l-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-12 h-12 md:w-24 md:h-24 border-b-2 border-r-2 border-foreground/20" />

              {/* Halftone background */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
                  backgroundSize: '16px 16px'
                }}
              />

              <div className="relative z-10 text-center">
                <div className="text-[10px] font-tech text-foreground/40 mb-3 md:mb-6 tracking-widest">
                  {t("mission.label")}
                </div>

                <div className="flex items-center justify-center gap-3 mb-4 md:mb-8">
                  <div className="h-px w-8 md:w-16 bg-foreground/40" />
                  <h2 className="text-2xl md:text-4xl font-black text-foreground uppercase tracking-wider font-tech">
                    {t("mission.title")}
                  </h2>
                  <div className="h-px w-8 md:w-16 bg-foreground/40" />
                </div>

                <div className="space-y-3 md:space-y-6">
                  <p className="text-base md:text-xl text-foreground leading-relaxed">
                    {t("mission.line1")}
                  </p>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {t("mission.line2")}
                  </p>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {t("mission.line3")}
                  </p>
                </div>

                {/* How we work — Diagnose / Engineer / Deliver */}
                <div className="mt-6 md:mt-10 pt-4 md:pt-8 border-t border-foreground/10">
                  <p className="text-[10px] font-tech text-foreground/40 mb-4 md:mb-6 tracking-widest">{t("mission.approach")}</p>
                  <div className="grid grid-cols-3 gap-3 md:gap-8">
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 border-2 border-cl-cyan/40 flex items-center justify-center">
                        <Search className="w-3 h-3 md:w-5 md:h-5 text-cl-cyan" />
                      </div>
                      <h3 className="text-[10px] md:text-sm font-tech font-bold uppercase tracking-wider mb-1">{t("mission.diagnose")}</h3>
                      <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                        {t("mission.diagnose.desc")}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 border-2 border-cl-purple/40 flex items-center justify-center">
                        <Wrench className="w-3 h-3 md:w-5 md:h-5 text-cl-purple" />
                      </div>
                      <h3 className="text-[10px] md:text-sm font-tech font-bold uppercase tracking-wider mb-1">{t("mission.engineer")}</h3>
                      <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                        {t("mission.engineer.desc")}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 md:w-12 md:h-12 mx-auto mb-2 md:mb-3 border-2 border-cl-green/40 flex items-center justify-center">
                        <CheckCircle className="w-3 h-3 md:w-5 md:h-5 text-cl-green" />
                      </div>
                      <h3 className="text-[10px] md:text-sm font-tech font-bold uppercase tracking-wider mb-1">{t("mission.deliver")}</h3>
                      <p className="hidden md:block text-sm text-muted-foreground leading-relaxed">
                        {t("mission.deliver.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-foreground/20">
                  <div className="flex items-center justify-center gap-4 md:gap-8 mb-4 md:mb-6">
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1 md:mb-2 border-2 border-cl-amber/40 flex items-center justify-center">
                        <span className="text-cl-amber font-tech text-base md:text-lg">H</span>
                      </div>
                      <p className="text-[9px] md:text-[10px] font-tech text-muted-foreground uppercase">{t("mission.hardware")}</p>
                    </div>
                    <div className="text-sm md:text-base font-tech text-foreground/40">+</div>
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1 md:mb-2 border-2 border-cl-magenta/40 flex items-center justify-center">
                        <span className="text-cl-magenta font-tech text-base md:text-lg">S</span>
                      </div>
                      <p className="text-[9px] md:text-[10px] font-tech text-muted-foreground uppercase">{t("mission.software")}</p>
                    </div>
                    <div className="text-sm md:text-base font-tech text-foreground/40">=</div>
                    <div className="text-center">
                      <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-1 md:mb-2 border-2 border-cl-cyan flex items-center justify-center">
                        <span className="text-cl-cyan font-tech text-base md:text-lg">∞</span>
                      </div>
                      <p className="text-[9px] md:text-[10px] font-tech text-muted-foreground uppercase">{t("mission.noLimits")}</p>
                    </div>
                  </div>
                  <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
                    {t("mission.tagline")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE VAULT - All Projects */}
      <section id="vault" className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dot grid + gradient bg */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-cl-green/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cl-cyan/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("vault.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
              {t("vault.subtitle")}
            </p>
          </div>

          {/* SOFTWARE SECTION */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-foreground/20" />
              <h3 className="text-lg font-tech text-foreground/60 uppercase tracking-wider">
                {t("vault.software")}
              </h3>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>

            {/* AI & LANGUAGE */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cl-cyan" />
                <span className="text-sm font-tech uppercase tracking-widest text-cl-cyan">
                  {isAr ? "// ذكاء اصطناعي ولغات" : "// AI & LANGUAGE"}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {softwareProjects.filter(p => ["mufakkir", "motargem", "voicetype"].includes(p.slug)).map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    status={project.status}
                    link={project.link}
                    image={project.image}
                    imagePosition={project.imagePosition}
                    index={idx}
                    onCardClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>

            {/* ISLAMIC & SPIRITUAL */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cl-green" />
                <span className="text-sm font-tech uppercase tracking-widest text-cl-green">
                  {isAr ? "// إسلامي وروحاني" : "// ISLAMIC & SPIRITUAL"}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {softwareProjects.filter(p => ["athkar-desktop", "mosque-silence", "crescent-watch", "ramadan-tracker"].includes(p.slug)).map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    status={project.status}
                    link={project.link}
                    image={project.image}
                    imagePosition={project.imagePosition}
                    index={idx}
                    onCardClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>

            {/* NAVIGATION & DISCOVERY */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cl-amber" />
                <span className="text-sm font-tech uppercase tracking-widest text-cl-amber">
                  {isAr ? "// تنقل واستكشاف" : "// NAVIGATION & DISCOVERY"}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {softwareProjects.filter(p => ["navii", "sanaye"].includes(p.slug)).map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    status={project.status}
                    link={project.link}
                    image={project.image}
                    imagePosition={project.imagePosition}
                    index={idx}
                    onCardClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>

            {/* RESEARCH & CREATIVE */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cl-purple" />
                <span className="text-sm font-tech uppercase tracking-widest text-cl-purple">
                  {isAr ? "// بحث وإبداع" : "// RESEARCH & CREATIVE"}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {softwareProjects.filter(p => ["paper-to-product", "medieval-quest-journal"].includes(p.slug)).map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    status={project.status}
                    link={project.link}
                    image={project.image}
                    imagePosition={project.imagePosition}
                    index={idx}
                    onCardClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>

            {/* UTILITIES & PRODUCTIVITY */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-cl-cyan" />
                <span className="text-sm font-tech uppercase tracking-widest text-cl-cyan">
                  {isAr ? "// أدوات وإنتاجية" : "// UTILITIES & PRODUCTIVITY"}
                </span>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {softwareProjects.filter(p => ["trip-bill-splitter"].includes(p.slug)).map((project, idx) => (
                  <ProjectCard
                    key={project.slug}
                    title={project.title}
                    description={project.description}
                    tech={project.tech}
                    status={project.status}
                    link={project.link}
                    image={project.image}
                    imagePosition={project.imagePosition}
                    index={idx}
                    onCardClick={() => handleProjectClick(project)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* HARDWARE SECTION */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-foreground/20" />
              <h3 className="text-lg font-tech text-foreground/60 uppercase tracking-wider">
                {t("vault.hardware")}
              </h3>
              <div className="h-px flex-1 bg-foreground/20" />
            </div>
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {hardwareProjects.map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  status={project.status}
                  link={project.link}
                  image={project.image}
                  imagePosition={project.imagePosition}
                  index={idx}
                  onCardClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT DEPLOYMENTS */}
      <section id="deployments" className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dark gradients only */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cl-magenta/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-cl-amber/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("clients.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
              {t("clients.subtitle")}
            </p>
          </div>

          {/* RESTAURANTS & CAFES */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cl-amber" />
              <span className="text-sm font-tech uppercase tracking-widest text-cl-amber">
                {isAr ? "// مطاعم ومقاهي" : "// RESTAURANTS & CAFES"}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {clientProjects.filter(p => ["fzn-dining", "cut-in-half", "darwish-cafe", "variety-coffee", "delhi-darbar"].includes(p.slug)).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  status={project.status}
                  link={project.link}
                  image={project.image}
                  index={idx}
                  onCardClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>

          {/* E-COMMERCE & RETAIL */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cl-purple" />
              <span className="text-sm font-tech uppercase tracking-widest text-cl-purple">
                {isAr ? "// تجارة إلكترونية وتجزئة" : "// E-COMMERCE & RETAIL"}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {clientProjects.filter(p => ["topwatches", "parfum-central", "firstway", "be-healthy"].includes(p.slug)).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  status={project.status}
                  link={project.link}
                  image={project.image}
                  index={idx}
                  onCardClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>

          {/* AUTOMOTIVE & MOBILITY */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cl-cyan" />
              <span className="text-sm font-tech uppercase tracking-widest text-cl-cyan">
                {isAr ? "// سيارات وتنقل" : "// AUTOMOTIVE & MOBILITY"}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {clientProjects.filter(p => ["drive-for-less"].includes(p.slug)).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  status={project.status}
                  link={project.link}
                  image={project.image}
                  index={idx}
                  onCardClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>

          {/* HEALTHCARE */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-cl-green" />
              <span className="text-sm font-tech uppercase tracking-widest text-cl-green">
                {isAr ? "// رعاية صحية" : "// HEALTHCARE"}
              </span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {clientProjects.filter(p => ["gcc-dental"].includes(p.slug)).map((project, idx) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tech={project.tech}
                  status={project.status}
                  link={project.link}
                  image={project.image}
                  index={idx}
                  onCardClick={() => handleProjectClick(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OPERATORS - Team */}
      <section id="operators" className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dot grid + gradient bg */}
        <div className="absolute inset-0 opacity-[0.07] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-cl-magenta/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cl-cyan/4 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("operators.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
              {t("operators.subtitle")}
            </p>
            <p className="text-muted-foreground/70 text-base mt-3 max-w-2xl">
              {t("operators.bilingual")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <TeamMember key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="relative z-10 py-24 border-t-2 border-foreground/10 overflow-hidden">
        {/* Dark gradients only */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-cl-cyan/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-cl-purple/4 rounded-full blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-cl-cyan/30 p-12 space-y-6 text-center relative overflow-hidden bg-card hover:border-cl-cyan/60 transition-colors duration-500">
              <div className="absolute top-4 end-4 text-[10px] font-tech text-white/20">
                {t("contact.encrypted")}
              </div>
              <div className="absolute bottom-4 start-4 text-[10px] font-tech text-white/20">
                {t("contact.secureLine")}
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                {t("contact.title")}
              </h2>
              <p className="text-muted-foreground font-tech text-sm tracking-wide uppercase">
                {t("contact.subtitle")}
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                {t("contact.cta")}
              </p>
              <p className="text-foreground/50 font-tech text-sm tracking-widest uppercase">
                {t("contact.location")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="border-2 border-cl-cyan bg-transparent text-cl-cyan hover:bg-cl-cyan hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => { trigger("medium"); window.location.href = 'mailto:akhmad6093@gmail.com'; }}
                >
                  {t("contact.email")}
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-cl-green bg-transparent text-cl-green hover:bg-cl-green hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => { trigger("medium"); window.open('https://wa.me/971561495656', '_blank'); }}
                >
                  {t("contact.whatsapp")}
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-muted-foreground font-tech space-y-2">
            <p className="uppercase tracking-wider">{t("footer.copyright")}</p>
            <p className="text-[10px] uppercase tracking-wide opacity-60">{t("footer.tagline")}</p>
            <div className="flex items-center justify-center gap-4 pt-2">
              <a href="/privacy" className="text-[10px] uppercase tracking-wide opacity-40 hover:opacity-80 transition-opacity">{t("footer.privacy")}</a>
              <span className="text-[10px] opacity-20">|</span>
              <a href="/terms" className="text-[10px] uppercase tracking-wide opacity-40 hover:opacity-80 transition-opacity">{t("footer.terms")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => { if (!open) { if (modalOpenRef.current) window.history.back(); closeModal(); } }}
      />
    </div>
  );
};

export default Index;
