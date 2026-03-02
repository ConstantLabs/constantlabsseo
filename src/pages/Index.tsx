import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

import tamerAvatar from "@/assets/tamer-avatar.webp";
import ahmadAvatar from "@/assets/ahmad-avatar.webp";
import tjAvatar from "@/assets/tj-avatar.webp";
import wahabAvatar from "@/assets/wahab-avatar.webp";

// Lazy load HackerBackground for better performance
const HackerBackground = lazy(() => import("@/components/HackerBackground").then(module => ({ default: module.HackerBackground })));

const Index = () => {
  const { t, lang, toggleLang, isTransitioning } = useLanguage();
  const isAr = lang === "ar";

  const [shouldLoadBackground, setShouldLoadBackground] = useState(false);
  const [currentService, setCurrentService] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
      name: "AHMAD HASAN",
      role: isAr ? "مؤسس مشارك / مهندس معماري" : "CO-FOUNDER / ARCHITECT",
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
      name: "MOHAMAD TAMER",
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
      name: "MOHAMMAD TIJANI",
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
      name: "MOHAMED ABDELWAHAB",
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
              <div className="w-2 h-2 bg-foreground animate-pulse rounded-full" />
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
      <section className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="container mx-auto px-4 text-center">
          {/* Main title */}
          <h1 className="relative text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-black tracking-tight uppercase transform -rotate-3 font-dedsec mb-4">
            <GlitchTextFramer>CONSTANT LABS</GlitchTextFramer>
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
              className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide transition-all focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to services section"
            >
              {t("hero.viewServices")}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-tech tracking-wide transition-all focus:ring-2 focus:ring-foreground focus:ring-offset-2 focus:ring-offset-background"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Navigate to contact section"
            >
              {t("hero.contact")}
            </Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("services.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.4 }}
                  className="group border border-foreground/10 border-s-4 border-s-foreground/30 hover:border-s-foreground bg-foreground/[0.02] hover:bg-foreground/[0.05] p-6 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-foreground transition-colors" />
                    <h3 className="text-lg font-bold font-tech uppercase tracking-wider text-foreground">
                      {t(`service.${service.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {t(`service.${service.id}.description`)}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-tech text-foreground/40 uppercase tracking-wider">
                        // {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHO WE ARE — Mission + Approach */}
      <section id="mission" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative border-2 border-foreground/20 bg-background p-12 overflow-hidden group hover:shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all">
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-foreground/20" />
              <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-foreground/20" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-foreground/20" />

              {/* Halftone background */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(circle, currentColor 2px, transparent 2px)',
                  backgroundSize: '16px 16px'
                }}
              />

              <div className="relative z-10 text-center">
                <div className="text-[10px] font-tech text-foreground/40 mb-6 tracking-widest">
                  {t("mission.label")}
                </div>

                <div className="flex items-center justify-center gap-3 mb-8">
                  <div className="h-px w-16 bg-foreground/40" />
                  <h2 className="text-3xl md:text-4xl font-black text-foreground uppercase tracking-wider font-tech">
                    {t("mission.title")}
                  </h2>
                  <div className="h-px w-16 bg-foreground/40" />
                </div>

                <div className="space-y-6">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    {t("mission.line1")}
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {t("mission.line2")}
                  </p>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    {t("mission.line3")}
                  </p>
                </div>

                {/* How we work — Diagnose / Engineer / Deliver */}
                <div className="mt-10 pt-8 border-t border-foreground/10">
                  <p className="text-[10px] font-tech text-foreground/40 mb-6 tracking-widest">{t("mission.approach")}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-foreground/40 flex items-center justify-center">
                        <Search className="w-5 h-5 text-foreground/60" />
                      </div>
                      <h3 className="text-sm font-tech font-bold uppercase tracking-wider mb-2">{t("mission.diagnose")}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t("mission.diagnose.desc")}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-foreground/40 flex items-center justify-center">
                        <Wrench className="w-5 h-5 text-foreground/60" />
                      </div>
                      <h3 className="text-sm font-tech font-bold uppercase tracking-wider mb-2">{t("mission.engineer")}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t("mission.engineer.desc")}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 border-2 border-foreground/40 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-foreground/60" />
                      </div>
                      <h3 className="text-sm font-tech font-bold uppercase tracking-wider mb-2">{t("mission.deliver")}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {t("mission.deliver.desc")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-foreground/20">
                  <div className="flex flex-wrap items-center justify-center gap-8 mb-6">
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground/40 flex items-center justify-center">
                        <span className="text-foreground/60 font-tech text-lg">H</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">{t("mission.hardware")}</p>
                    </div>
                    <div className="text-[10px] font-tech text-foreground/40">+</div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground/40 flex items-center justify-center">
                        <span className="text-foreground/60 font-tech text-lg">S</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">{t("mission.software")}</p>
                    </div>
                    <div className="text-[10px] font-tech text-foreground/40">=</div>
                    <div className="text-center">
                      <div className="w-10 h-10 mx-auto mb-2 border-2 border-foreground flex items-center justify-center">
                        <span className="text-foreground font-tech text-lg">∞</span>
                      </div>
                      <p className="text-[10px] font-tech text-muted-foreground uppercase">{t("mission.noLimits")}</p>
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
      <section id="vault" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("vault.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareProjects.map((project, idx) => (
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
                  onCardClick={() => setSelectedProject(project)}
                />
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  onCardClick={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT DEPLOYMENTS */}
      <section id="deployments" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("clients.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              {t("clients.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientProjects.map((project, idx) => (
              <ProjectCard
                key={project.slug}
                title={project.title}
                description={project.description}
                tech={project.tech}
                status={project.status}
                link={project.link}
                image={project.image}
                index={idx}
                onCardClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* OPERATORS - Team */}
      <section id="operators" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase mb-4">
              {t("operators.title")}
            </h2>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
              {t("operators.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <TeamMember key={idx} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* INITIATE CONTACT */}
      <section id="contact" className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="border-2 border-foreground p-12 space-y-6 text-center relative overflow-hidden bg-card">
              <div className="absolute top-4 end-4 text-[10px] font-tech text-white/20">
                {t("contact.encrypted")}
              </div>
              <div className="absolute bottom-4 start-4 text-[10px] font-tech text-white/20">
                {t("contact.secureLine")}
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
                {t("contact.title")}
              </h2>
              <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase">
                {t("contact.subtitle")}
              </p>
              <p className="text-muted-foreground/60 font-tech text-[10px] tracking-wide">
                {t("contact.cta")}
              </p>
              <p className="text-foreground/40 font-tech text-[10px] tracking-widest uppercase">
                {t("contact.location")}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => window.location.href = 'mailto:akhmad6093@gmail.com'}
                >
                  {t("contact.email")}
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold transition-all duration-300"
                  onClick={() => window.open('https://wa.me/971561495656', '_blank')}
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
        onOpenChange={(open) => { if (!open) setSelectedProject(null); }}
      />
    </div>
  );
};

export default Index;
