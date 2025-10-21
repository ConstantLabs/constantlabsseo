import { Card } from "@/components/ui/card";
import { GlitchText } from "./GlitchText";

interface TeamMemberProps {
  name: string;
  role: string;
  journey: string[];
}

export const TeamMember = ({ name, role, journey }: TeamMemberProps) => {
  return (
    <Card className="border-2 border-border bg-card p-6 hover:border-foreground transition-all duration-300">
      <div className="mb-4">
        <GlitchText className="text-2xl font-bold mb-2" animate>
          {name}
        </GlitchText>
        <p className="text-sm text-muted-foreground font-mono tracking-wide">
          [{role}]
        </p>
      </div>
      
      <div className="space-y-2">
        <p className="text-xs font-bold tracking-wider text-foreground mb-3">
          JOURNEY LOG:
        </p>
        {journey.map((step, idx) => (
          <div key={idx} className="flex items-start gap-2">
            <span className="text-muted-foreground font-mono text-xs mt-0.5">
              {String(idx + 1).padStart(2, '0')}
            </span>
            <span className="text-sm text-muted-foreground leading-relaxed">
              {step}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};
