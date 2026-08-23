import type { ReactNode } from "react";
import { DisplayTitle, Eyebrow, Lede } from "./primitives";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  actions?: ReactNode;
  meta?: ReactNode;
}

export function PageHero({ eyebrow, title, lede, actions, meta }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-void text-paper">
      <div aria-hidden="true" className="absolute inset-y-0 end-[8%] w-px bg-signal/25" />
      <div aria-hidden="true" className="absolute end-[calc(8%-3px)] top-32 h-1.5 w-1.5 bg-signal" />

      <div className="relative mx-auto w-full max-w-page px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24">
        <div className="h-px w-14 bg-signal" aria-hidden="true" />
        <Eyebrow className="mt-7 text-signal">{eyebrow}</Eyebrow>
        <DisplayTitle as="h1" className="mt-5 max-w-6xl text-paper">
          {title}
        </DisplayTitle>
        {lede ? <Lede className="mt-7 text-paper/65">{lede}</Lede> : null}
        {meta ? <div className="mt-6 text-sm text-paper/60 [&_svg]:!text-signal">{meta}</div> : null}
        {actions ? (
          <div className="mt-9 flex flex-wrap gap-3 [&>a]:!border-paper/35 [&>a]:!text-paper [&>a:hover]:!border-signal [&>a:hover]:!bg-paper [&>a:hover]:!text-void [&>a.bg-lime]:!border-signal [&>a.bg-lime]:!bg-signal [&>a.bg-lime]:!text-void">
            {actions}
          </div>
        ) : null}
      </div>
    </section>
  );
}
