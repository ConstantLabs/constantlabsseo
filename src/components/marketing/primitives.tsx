import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ElementProps<T extends ElementType> = ComponentPropsWithoutRef<T>;

export function SectionShell({ className, ...props }: ElementProps<"section">) {
  return <section className={cn("relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24 lg:px-12", className)} {...props} />;
}

export function Eyebrow({ className, ...props }: ElementProps<"p">) {
  return <p className={cn("font-sans text-xs font-bold uppercase tracking-[0.2em] text-signal", className)} {...props} />;
}

export function DisplayTitle({ as: Tag = "h2", className, ...props }: ElementProps<"h2"> & { as?: "h1" | "h2" | "h3" }) {
  return <Tag className={cn("font-heading text-5xl uppercase leading-[0.88] tracking-[-0.035em] text-ink sm:text-7xl", className)} {...props} />;
}

export function Lede({ className, ...props }: ElementProps<"p">) {
  return <p className={cn("max-w-2xl text-lg leading-relaxed text-ink/70 sm:text-xl", className)} {...props} />;
}

export function RuledGrid({ className, children, ...props }: ElementProps<"div"> & { children: ReactNode }) {
  return <div className={cn("relative border-y border-ink/15 bg-[linear-gradient(to_right,transparent_0,transparent_calc(100%-1px),rgb(16_20_20_/_0.08)_calc(100%-1px))] bg-[length:4rem_100%]", className)} {...props}>{children}</div>;
}

export function SignalPanel({ className, ...props }: ElementProps<"div">) {
  return <div className={cn("relative border border-ink/20 bg-ink p-4 text-paper shadow-[8px_8px_0_#D9FF4A] sm:p-6", className)} {...props} />;
}

export function CornerTicks({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={cn("pointer-events-none absolute inset-2 border border-dashed border-current/35", className)} />
  );
}

export function PrimaryCTA({ className, ...props }: ElementProps<"a">) {
  return <a className={cn("inline-flex items-center justify-center gap-2 border border-ink bg-acid px-5 py-3 font-sans text-sm font-bold uppercase tracking-[0.08em] text-ink transition-transform hover:-translate-y-0.5", className)} {...props} />;
}

export function SecondaryCTA({ className, ...props }: ElementProps<"a">) {
  return <a className={cn("inline-flex items-center justify-center gap-2 border border-current px-5 py-3 font-sans text-sm font-bold uppercase tracking-[0.08em] transition-colors hover:bg-ink hover:text-paper", className)} {...props} />;
}
