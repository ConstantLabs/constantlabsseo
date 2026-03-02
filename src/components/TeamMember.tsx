import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { GlitchText } from "./GlitchText";
import { Github, Linkedin } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  journey: string[];
  avatar?: string;
  github?: string;
  linkedin?: string;
}

export const TeamMember = ({ name, role, journey, avatar, github, linkedin }: TeamMemberProps) => {
  const operatorId = `OP-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  
  return (
    <Card className="group border-2 border-border bg-card/60 backdrop-blur-sm p-6 hover:border-foreground transition-all duration-300 relative overflow-hidden hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
      {/* Corner brackets */}
      <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-foreground/20 group-hover:border-foreground/60 transition-colors" />
      <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-foreground/20 group-hover:border-foreground/60 transition-colors" />
      <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-foreground/20 group-hover:border-foreground/60 transition-colors" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-foreground/20 group-hover:border-foreground/60 transition-colors" />
      
      
      <div className="relative z-10">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex-shrink-0">
            <Avatar className="w-20 h-20 border-2 border-foreground/20 group-hover:border-foreground/60 transition-colors">
              <AvatarImage src={avatar} alt={name} className="object-cover grayscale" />
              <AvatarFallback className="bg-card text-foreground font-tech text-xl">
                {name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="text-[8px] font-tech text-muted-foreground mb-2 tracking-wider">
              [OPERATOR_ID: {operatorId}] [CLEARANCE: MAX]
            </div>
            <GlitchText className="text-2xl font-bold mb-2" animate>
              {name}
            </GlitchText>
            <p className="text-sm text-muted-foreground font-tech tracking-wide mb-3">
              [{role}]
            </p>
            
            {/* Social Links */}
            {(github || linkedin) && (
              <div className="flex items-center gap-2">
                {linkedin && (
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border hover:border-foreground p-2 transition-all duration-300"
                    aria-label={`${name}'s LinkedIn`}
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-border hover:border-foreground p-2 transition-all duration-300"
                    aria-label={`${name}'s GitHub`}
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      
        <div className="space-y-2">
          <p className="text-xs font-bold tracking-wider text-foreground mb-3 font-tech">
            // JOURNEY_LOG //
          </p>
          {journey.map((step, idx) => (
            <div key={idx} className="flex items-start gap-3 group/item hover:translate-x-1 transition-transform">
              <span className="text-muted-foreground font-tech text-[10px] mt-0.5 opacity-60 group-hover/item:opacity-100 transition-opacity">
                [{String(idx + 1).padStart(2, '0')}]
              </span>
              <span className="text-sm text-muted-foreground leading-relaxed">
                {step}
              </span>
            </div>
          ))}
          
          <div className="mt-4 pt-4 border-t border-foreground/10">
            <p className="text-[8px] font-tech text-muted-foreground/40 tracking-wider">
              // NEURAL_INTERFACE_ACTIVE // BIOMETRICS_VERIFIED //
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
