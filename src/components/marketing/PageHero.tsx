import type { ReactNode } from "react";
import { DisplayTitle, Eyebrow, Lede, RuledGrid, SectionShell } from "./primitives";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  actions?: ReactNode;
  meta?: ReactNode;
}

export function PageHero({ eyebrow, title, lede, actions, meta }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-paper text-ink">
      <SectionShell className="pb-12 pt-28 sm:pb-16 sm:pt-32">
        <div className="mx-auto max-w-6xl">
          <RuledGrid className="px-5 py-10 sm:px-8 sm:py-14">
            <Eyebrow>{eyebrow}</Eyebrow>
            <DisplayTitle as="h1" className="mt-5 max-w-5xl text-ink">
              {title}
            </DisplayTitle>
            {lede ? <Lede className="mt-6 text-ink/70">{lede}</Lede> : null}
            {meta ? <div className="mt-6 text-sm text-ink/60">{meta}</div> : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
          </RuledGrid>
        </div>
      </SectionShell>
    </section>
  );
}
