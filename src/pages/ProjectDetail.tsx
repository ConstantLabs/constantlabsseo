import { useParams, Navigate, Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { getProjectBySlug } from "@/data/projectsData";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Redirect to dedicated pages for projects that have them
  if (project.internalRoute) {
    return <Navigate to={project.internalRoute} replace />;
  }

  const isExternal = project.link.startsWith("http");

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page">
      <SEO
        title={project.title}
        description={`${project.description} — Built by Constant Labs, Dubai, UAE.`}
        path={`/projects/${project.slug}`}
      />

      {/* Nav Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-tech tracking-wider uppercase">{t("project.back")}</span>
          </Link>
          <span className="text-[10px] font-tech text-foreground/40 tracking-wider uppercase">
            CONSTANT_LABS // {project.title}
          </span>
        </div>
      </div>

      {/* Hero Image */}
      <section className="relative pt-16">
        {project.image && (
          <div className="relative h-64 md:h-96 w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className={`h-full w-full object-cover ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          </div>
        )}
      </section>

      {/* Content */}
      <section className="relative z-10 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Title + Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl md:text-6xl font-black uppercase font-tech tracking-wide">
                {project.title}
              </h1>
              <span className={cn(
                "text-[10px] font-bold tracking-wider px-3 py-1 font-tech border",
                project.status === "live" && "border-emerald-500/50 text-emerald-500",
                project.status === "beta" && "border-amber-500/50 text-amber-500",
                project.status === "development" && "border-blue-500/50 text-blue-500",
                project.status === "repository" && "border-zinc-500/50 text-zinc-400"
              )}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <div className="h-px bg-foreground/20 w-24 mb-6" />
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-12"
          >
            <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest mb-4">
              {t("project.techStack")}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-tech text-foreground/70 uppercase tracking-wider border border-foreground/20 px-3 py-1.5 hover:border-foreground/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mb-12"
            >
              <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest mb-4">
                {t("project.features")}
              </p>
              <div className="border-2 border-foreground/10 p-6 relative">
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-foreground/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-foreground/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20" />

                <ul className="space-y-3">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 group hover:translate-x-1 transition-transform">
                      <span className="text-[10px] font-tech text-foreground/30 mt-1 group-hover:text-foreground/60 transition-colors">
                        [{String(idx + 1).padStart(2, "0")}]
                      </span>
                      <span className="text-sm text-muted-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            {isExternal && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide"
                >
                  <ExternalLink className="w-4 h-4 me-2" />
                  {project.status === "repository" ? t("project.viewRepo") : t("project.visitSite")}
                </Button>
              </a>
            )}
            <Link to="/">
              <Button
                size="lg"
                variant="ghost"
                className="border-2 border-border text-foreground hover:border-foreground hover:bg-transparent font-tech tracking-wide"
              >
                <ArrowLeft className="w-4 h-4 me-2" />
                {t("project.back")}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className="border-t border-foreground/10 py-6 text-center">
        <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
          CONSTANT LABS // DUBAI, UAE
        </p>
      </div>
    </div>
  );
};

export default ProjectDetail;
