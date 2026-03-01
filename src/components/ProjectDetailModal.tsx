import { Link } from "react-router-dom";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Project } from "@/data/projectsData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ProjectDetailModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectDetailModal = ({ project, open, onOpenChange }: ProjectDetailModalProps) => {
  const { t } = useLanguage();

  if (!project) return null;

  const isExternal = project.link.startsWith("http");
  const detailPath = project.internalRoute || `/projects/${project.slug}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-foreground/20 bg-background p-0">
        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 z-30 pointer-events-none" />
        <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 z-30 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 z-30 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 z-30 pointer-events-none" />

        {/* Hero Image */}
        {project.image && (
          <div className="relative h-56 w-full overflow-hidden border-b border-foreground/10">
            <img
              src={project.image}
              alt={project.title}
              className={`h-full w-full object-cover ${project.imagePosition === "top" ? "object-top" : "object-center"}`}
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] opacity-20 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 pt-4">
          <DialogHeader className="text-start mb-4">
            <div className="flex items-center justify-between mb-2">
              <DialogTitle className="text-2xl font-bold uppercase font-tech tracking-wide">
                {project.title}
              </DialogTitle>
              <span className={cn(
                "text-[10px] font-bold tracking-wider px-2 py-0.5 font-tech border",
                project.status === "live" && "border-emerald-500/50 text-emerald-500",
                project.status === "beta" && "border-amber-500/50 text-amber-500",
                project.status === "development" && "border-blue-500/50 text-blue-500",
                project.status === "repository" && "border-zinc-500/50 text-zinc-400"
              )}>
                {project.status.toUpperCase()}
              </span>
            </div>
            <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
              {project.longDescription || project.description}
            </DialogDescription>
          </DialogHeader>

          {/* Tech Stack */}
          <div className="mb-4">
            <p className="text-[10px] font-tech text-foreground/40 uppercase tracking-widest mb-2">
              {t("project.techStack")}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-tech text-foreground/60 uppercase tracking-wider border border-foreground/10 px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <div className="mb-6">
              <p className="text-[10px] font-tech text-foreground/40 uppercase tracking-widest mb-2">
                {t("project.features")}
              </p>
              <ul className="space-y-1.5">
                {project.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-[10px] font-tech text-foreground/30 mt-1">[{String(idx + 1).padStart(2, "0")}]</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to={detailPath}
              onClick={() => onOpenChange(false)}
              className="flex-1"
            >
              <Button
                className="w-full border-2 border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide"
              >
                <ArrowRight className="w-4 h-4 me-2" />
                {t("project.viewFullPage")}
              </Button>
            </Link>

            {isExternal && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button
                  className="w-full border-2 border-foreground/40 bg-transparent text-foreground/80 hover:bg-foreground hover:text-background font-tech tracking-wide"
                >
                  <ExternalLink className="w-4 h-4 me-2" />
                  {project.status === "repository" ? t("project.viewRepo") : t("project.visitSite")}
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
