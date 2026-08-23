import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RichText } from "@/components/marketing/RichText";
import { cn } from "@/lib/utils";

/*
  The dark editorial kit.

  `primitives.tsx` was written for light sections and defaults to `text-ink`.
  Everything here defaults the other way — paper type on void ground, lime for
  the one thing in the block that matters — so a section built out of these needs
  no per-element colour overrides. Both files coexist on purpose: pages that are
  still light keep using primitives.

  Three rules the reference layout runs on, worth stating because they are what
  make it read as one system rather than as boxes:
    - Labels are 10px uppercase with wide tracking. Never sentence case.
    - Radius is zero everywhere. The theme sets --radius: 0; do not reintroduce it.
    - One lime accent per block. Lime on lime stops being an accent.
*/

type ElementProps<T extends ElementType> = ComponentPropsWithoutRef<T>;

/* ------------------------------------------------------------------ labels */

/** 10px uppercase mono-ish label. The connective tissue of every band. */
export function MonoLabel({ className, ...props }: ElementProps<"p">) {
  return (
    <p
      className={cn("tv-label text-[0.625rem] leading-4 tracking-[0.18em] text-signal", className)}
      {...props}
    />
  );
}

/** A label with the short rule in front of it — `— WE BUILD` in the reference hero. */
export function RuledLabel({ className, children, ...props }: ElementProps<"p">) {
  return (
    <p
      className={cn("tv-label flex items-center gap-3 text-[0.625rem] leading-4 tracking-[0.18em] text-signal", className)}
      {...props}
    >
      <span aria-hidden="true" className="h-px w-8 bg-signal" />
      {children}
    </p>
  );
}

/** Solid lime plate with void type. Use for the one word naming the block. */
export function Tag({ className, ...props }: ElementProps<"span">) {
  return (
    <span
      className={cn(
        "tv-label inline-flex items-center bg-signal px-3 py-1.5 text-[0.625rem] leading-4 tracking-[0.16em] text-void",
        className,
      )}
      {...props}
    />
  );
}

/** Outlined counterpart to `Tag`, for the secondary item in a pair. */
export function OutlineTag({ className, ...props }: ElementProps<"span">) {
  return (
    <span
      className={cn(
        "tv-label inline-flex items-center border border-signal/60 px-3 py-1.5 text-[0.625rem] leading-4 tracking-[0.16em] text-signal",
        className,
      )}
      {...props}
    />
  );
}

/**
 * `■ CONVERSION-BUILT DESIGN` — a marker plus a label on its own dark plate.
 * The plate is what keeps these readable where they overlap a live field.
 */
export function MarkerChip({ className, children, ...props }: ElementProps<"li">) {
  return (
    <li
      className={cn(
        "tv-label inline-flex w-fit items-center gap-2.5 bg-void/85 px-2.5 py-1.5 text-[0.625rem] leading-4 tracking-[0.16em] text-paper backdrop-blur-[2px]",
        className,
      )}
      {...props}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 bg-signal" />
      {children}
    </li>
  );
}

/* -------------------------------------------------------------------- type */

/**
 * The big condensed display. `size` is the only dial:
 *   `xl`  — a hero wordmark, meant to be the largest thing on the page
 *   `lg`  — a section headline
 *   `md`  — a card headline
 */
export function Display({
  as: Tag = "h2",
  size = "lg",
  className,
  ...props
}: ElementProps<"h2"> & { as?: "h1" | "h2" | "h3" | "p" | "span"; size?: "xl" | "lg" | "md" }) {
  /*
    Tracking caps out at -0.01em. Anton's natural tracking is already tight, and the
    -0.03em an Inter-era headline wanted comes out visibly cramped on it.

    Leading is set above Anton's cap height, not below it. Sub-0.9 leading is the
    stock "tight display type" instinct and it is wrong for this face: Anton's caps
    are unusually tall relative to its em box, so at 0.86 a two-line headline has its
    lines literally touching — and any comma or period on the upper line collides
    with the caps below it. These values leave a visible channel between lines while
    still reading as tightly set.
  */
  const scale = {
    xl: "text-[clamp(4rem,13vw,11rem)] leading-[0.92] tracking-[-0.01em]",
    lg: "text-[clamp(2.5rem,5.5vw,5rem)] leading-[0.96] tracking-[-0.01em]",
    md: "text-[clamp(1.75rem,2.6vw,2.5rem)] leading-[1] tracking-[-0.005em]",
  }[size];

  /*
    A string child goes through RichText, so `*serif italic*` and `[[accent]]`
    markers written into the translation string just work. A ReactNode child is
    passed through untouched, for the call sites that compose their own spans.
  */
  const { children, ...rest } = props;
  return (
    <Tag className={cn("tv-display uppercase text-paper", scale, className)} {...rest}>
      {typeof children === "string" ? <RichText text={children} /> : children}
    </Tag>
  );
}

/** Body copy on a dark ground. */
export function Body({ className, ...props }: ElementProps<"p">) {
  return (
    <p className={cn("tv-body text-base leading-[1.55] text-paper/70 sm:text-lg", className)} {...props} />
  );
}

/* ----------------------------------------------------------------- surfaces */

/** The lime hairline frame that wraps a whole band in the reference layout. */
export function Frame({ className, ...props }: ElementProps<"div">) {
  return <div className={cn("relative border border-signal/45", className)} {...props} />;
}

/** A plain panel: hairline border, raised ground, zero radius. */
export function Panel({ className, ...props }: ElementProps<"div">) {
  return <div className={cn("relative border border-line bg-ink", className)} {...props} />;
}

/** Bordered aside with a labelled head — the guarantee box in the reference footer. */
export function NoteBox({
  label,
  icon,
  className,
  children,
  ...props
}: ElementProps<"div"> & { label: string; icon?: ReactNode }) {
  return (
    <div className={cn("border border-signal/35 bg-void/55 p-5 backdrop-blur-[2px] sm:p-6", className)} {...props}>
      <p className="tv-label flex items-center gap-2 text-[0.625rem] leading-4 tracking-[0.18em] text-signal">
        {icon}
        {label}
      </p>
      <div className="tv-body mt-3 text-sm leading-[1.6] text-paper/80">{children}</div>
    </div>
  );
}

/**
 * `01 — A straight answer …` rows, hairline-separated.
 * Numbering is generated, so call sites pass copy only.
 */
export function RailList({ items, className }: { items: ReactNode[]; className?: string }) {
  return (
    <ol className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item, index) => (
        <li key={index} className="flex items-baseline gap-5 py-4">
          <span className="tv-label shrink-0 text-[0.625rem] leading-4 tracking-[0.16em] text-signal">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="tv-body text-sm leading-[1.5] text-paper/85 sm:text-base">{item}</span>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------ actions */

type ActionProps = {
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: "solid" | "outline" | "ghost";
  icon?: ReactNode;
  /** Fill the row. The reference hero stacks full-width actions; bands sit them inline. */
  block?: boolean;
  className?: string;
  children: ReactNode;
};

const ACTION_VARIANTS = {
  solid: "border border-signal bg-signal text-void hover:bg-paper hover:border-paper",
  outline: "border border-line bg-void/50 text-paper hover:border-signal hover:text-signal",
  ghost: "border border-transparent bg-transparent text-muted hover:text-signal",
} as const;

/**
 * The uppercase action row: label left, arrow right.
 *
 * The arrow is pinned to the far edge rather than trailing the label, which is
 * what makes a stack of these read as a list of doors instead of as three
 * differently-sized buttons.
 */
export function Action({
  href,
  to,
  onClick,
  variant = "solid",
  icon,
  block = false,
  className,
  children,
}: ActionProps) {
  const shell = cn(
    "tv-label group inline-flex items-center gap-3 px-5 py-3.5 text-[0.625rem] leading-4 tracking-[0.16em] transition-colors",
    block ? "w-full justify-between" : "justify-center",
    ACTION_VARIANTS[variant],
    className,
  );

  const body = (
    <>
      <span className="inline-flex items-center gap-2.5">
        {icon}
        {children}
      </span>
      <ArrowUpRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
    </>
  );

  if (to) {
    return (
      <Link to={to} className={shell}>
        {body}
      </Link>
    );
  }
  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return (
      <a
        href={href}
        className={shell}
        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      >
        {body}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={shell}>
      {body}
    </button>
  );
}

/* ------------------------------------------------------------------ layout */

/** Standard band padding and max width. Every section on the page shares it. */
export function BandInner({ className, ...props }: ElementProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-page px-4 py-16 sm:px-8 sm:py-20 lg:py-24", className)}
      {...props}
    />
  );
}

/** Section head: label, display title, optional lede — in the reference proportions. */
export function BandHead({
  label,
  title,
  lede,
  className,
  align = "start",
}: {
  label?: ReactNode;
  title: ReactNode;
  lede?: ReactNode;
  className?: string;
  align?: "start" | "split";
}) {
  if (align === "split") {
    return (
      <div className={cn("flex flex-col gap-6 border-b border-line pb-8 lg:flex-row lg:items-end lg:justify-between", className)}>
        <div>
          {label ? <MonoLabel className="mb-4">{label}</MonoLabel> : null}
          <Display>{title}</Display>
        </div>
        {lede ? <Body className="max-w-md lg:text-right">{lede}</Body> : null}
      </div>
    );
  }

  return (
    <div className={className}>
      {label ? <MonoLabel className="mb-4">{label}</MonoLabel> : null}
      <Display>{title}</Display>
      {lede ? <Body className="mt-5 max-w-2xl">{lede}</Body> : null}
    </div>
  );
}
