import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { clientProjects } from "@/data/projectsData";

const WebsitesShowcase = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page">
      <SEO
        title="Websites We Built"
        description="Concept builds by Constant Labs, Dubai. Restaurant websites, hospitality brands, and digital experiences showcasing our design and development capabilities."
        path="/services/websites"
      />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-tech tracking-wider uppercase">{t("project.back")}</span>
          </Link>
          <span className="text-[10px] font-tech text-foreground/40 tracking-wider uppercase">
            CONSTANT_LABS // WEBSITES
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 py-32 pt-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase mb-4">
              {t("websites.title")}
            </h1>
            <p className="text-muted-foreground font-tech text-xs tracking-wide uppercase mb-2">
              {t("websites.subtitle")}
            </p>
            <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest">
              // DUBAI, UAE //
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="relative z-10 pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {clientProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="border-2 border-foreground/10 overflow-hidden relative group hover:border-foreground/30 transition-colors"
              >
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 group-hover:border-foreground/40 transition-colors z-20" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 group-hover:border-foreground/40 transition-colors z-20" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 group-hover:border-foreground/40 transition-colors z-20" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 group-hover:border-foreground/40 transition-colors z-20" />

                {/* Image */}
                <div className="relative h-64 md:h-96 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-[10px] font-tech text-foreground/40 tracking-widest">
                      [PROJECT_{String(idx + 1).padStart(2, "0")}]
                    </div>
                    <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 font-tech border border-emerald-500/50 text-emerald-500">
                      LIVE
                    </span>
                  </div>

                  <h2 className="text-3xl font-black uppercase font-tech tracking-wide mb-4">
                    {project.title}
                  </h2>

                  <div className="h-px bg-foreground/20 w-24 mb-6" />

                  <p className="text-base text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                    {project.longDescription || project.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-tech text-foreground/60 uppercase tracking-wider border border-foreground/10 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Features */}
                  {project.features && project.features.length > 0 && (
                    <div className="mb-6">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-[10px] font-tech text-foreground/30 mt-1">[{String(fIdx + 1).padStart(2, "0")}]</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide">
                        <ExternalLink className="w-4 h-4 me-2" />
                        {isAr ? "زيارة الموقع" : "VISIT LIVE SITE"}
                      </Button>
                    </a>
                    <Link to={`/projects/${project.slug}`}>
                      <Button
                        variant="ghost"
                        className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-tech tracking-wide"
                      >
                        {isAr ? "تفاصيل المشروع" : "PROJECT DETAILS"}
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="border-2 border-foreground p-12 relative overflow-hidden bg-card">
              <h2 className="text-3xl font-black uppercase font-tech mb-4">
                {isAr ? "هل تحتاج موقعاً لعملك؟" : "NEED A WEBSITE FOR YOUR BUSINESS?"}
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                {isAr
                  ? "نصمم ونبني مواقع ويب تحقق النتائج. من المطاعم إلى الشركات في دبي."
                  : "We design and build websites that deliver results. From restaurants to enterprises across Dubai."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold"
                  onClick={() => window.location.href = 'mailto:akhmad6093@gmail.com'}
                >
                  [EMAIL]
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold"
                  onClick={() => window.open('https://wa.me/971561495656', '_blank')}
                >
                  [WHATSAPP]
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10 py-6 text-center">
        <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
          CONSTANT LABS // DUBAI, UAE
        </p>
      </div>
    </div>
  );
};

export default WebsitesShowcase;
