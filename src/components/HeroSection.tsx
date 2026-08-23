import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, MessageCircle, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/i18n/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ShowcaseDitherField, useNarrowViewport } from "@/components/field";
import { RichText } from "@/components/marketing/RichText";

/*
  The hero, ported from constantlabs-showcase's HomeHero rather than re-derived.

  The corrections that matter, kept from the original so they do not regress:

  - The field lives on the HEADER, not inside a padded grid cell. Inside the cell
    it started below the top padding, which left a black strip across the top and
    made the nav plate read as a bar laid over the artwork rather than sitting on it.
  - The wordmark is vertically SCALED, not just enlarged. AC Compacta's natural cap
    height is about 2.1x a character's width; the reference lockup runs about 3.4.
    At that cap height the word would need ~1400px of width, which does not fit a
    1440px frame, so the extra height has to come from a transform. Font size alone
    cannot get there.
  - The two lines do not touch. The gap is explicit.
  - The wordmark's size is bounded by the CONTAINER's width and the VIEWPORT's
    height at once. min() of the two is what stops a short wide screen from pushing
    two stretched lines past the fold.
  - No dot pattern anywhere.

  What is deliberately different from the showcase: its message column ends in a
  dithered photograph, ours ends in the domain-input audit flow, which is this
  site's actual conversion path. Same slot, same metrics.
*/

const WHATSAPP_HREF = "https://wa.me/971561495656";

function GoogleBrandedHeadline({ text }: { text: string }) {
  const withBoldAi = (value: string) => value.split(/\b(AI)\b/g).map((part, index) => (
    part === "AI"
      ? <strong key={`${part}-${index}`} className="font-extrabold text-paper">AI</strong>
      : <RichText key={`${part}-${index}`} text={part} />
  ));
  const marker = "Google";
  const markerAt = text.indexOf(marker);
  if (markerAt < 0) return <>{withBoldAi(text)}</>;

  return (
    <>
      {withBoldAi(text.slice(0, markerAt))}
      <span aria-label="Google" className="inline-flex whitespace-nowrap font-sans font-bold tracking-[-0.055em]" dir="ltr">
        <span aria-hidden="true" className="text-[#4285F4]">G</span>
        <span aria-hidden="true" className="text-[#EA4335]">o</span>
        <span aria-hidden="true" className="text-[#FBBC05]">o</span>
        <span aria-hidden="true" className="text-[#4285F4]">g</span>
        <span aria-hidden="true" className="text-[#34A853]">l</span>
        <span aria-hidden="true" className="text-[#EA4335]">e</span>
      </span>
      {withBoldAi(text.slice(markerAt + marker.length))}
    </>
  );
}

/** Gap left between the wordmark and the start edge of the frame, in px. */
const WORDMARK_GUTTER = 40;

/*
  How far the wordmark has to pull toward the edge to sit on the viewport's edge.

  The page's container caps at a fixed max-width, so on a wide screen its start
  content edge is a long way in — which leaves dead space beside a lockup that is
  supposed to be flush to the FRAME.

  This is measured rather than expressed in CSS, and the reason is worth keeping.
  The obvious form, `calc(50% - 50vw)` on the grid item, is wrong: a grid item's
  containing block is its GRID AREA, so the 50% resolves against the track and the
  wordmark shoots off screen. The same expression on the grid itself resolves
  against the section, which is the full viewport, so it evaluates to zero. There
  is no percentage basis in the right place, and the alternative is hardcoding the
  container's max-width here, which silently breaks the hero the day that changes.

  Reading the container's own inset costs one rect per resize and cannot disagree
  with the config. There is no feedback loop: the grid's width comes from its
  max-width class and its tracks from an explicit gridTemplateColumns, so a child's
  negative margin cannot change what is being measured.
*/
function useContainerBleed(ref: React.RefObject<HTMLElement>, enabled: boolean) {
  const [bleed, setBleed] = useState(0);

  useEffect(() => {
    const grid = ref.current;
    if (!grid || !enabled) {
      setBleed(0);
      return;
    }

    const measure = () => {
      const style = getComputedStyle(grid);
      const rect = grid.getBoundingClientRect();
      const pad = Number.parseFloat(style.paddingInlineStart) || 0;
      /* In Arabic the wordmark's start edge is the RIGHT one. */
      const outer = style.direction === "rtl" ? window.innerWidth - rect.right : rect.left;
      setBleed(Math.max(0, outer + pad - WORDMARK_GUTTER));
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(grid);
    return () => observer.disconnect();
  }, [ref, enabled]);

  return bleed;
}

/*
  Wordmark geometry, in units that cannot break when the aspect ratio changes.

  - `sizeCqw` sizes the type against the CONTAINER, so only the column's width
    matters and the viewport's shape does not.
  - `capVh` is a ceiling on that size, so a short viewport shrinks the type rather
    than overflowing. min() of the two is the whole fix.
  - `boxEm` and `gapEm` are relative to the font size, so they track it
    automatically at every breakpoint and need no second mobile profile.

  One profile covers every screen.
*/
const TEXT = {
  /** Font size as a percentage of the container's width. */
  sizeCqw: 31,
  /** Ceiling on the font size, as a percentage of viewport height. */
  capVh: 33,
  scaleY: 1.37,
  /** Line box height, in em. Must exceed scaleY x cap height or the lines collide. */
  boxEm: 1.02,
  /** Gap between the lines, in em. */
  gapEm: 0.23,
  /** Vertical nudge, in em. */
  offsetEm: 0.05,
  tracking: 0.003,
};

export const HeroSection = () => {
  const { t, isAr } = useLanguage();
  const navigate = useNavigate();
  const [domain, setDomain] = useState("");
  const narrow = useNarrowViewport(1023);
  const gridRef = useRef<HTMLDivElement>(null);
  const bleed = useContainerBleed(gridRef, !narrow);

  const handleAudit = () => {
    navigate(domain.trim() ? `/audit?url=${encodeURIComponent(domain.trim())}` : "/audit");
  };

  return (
    <header className="relative isolate min-h-[100svh] overflow-hidden border-b border-line bg-void text-paper">
      <ShowcaseDitherField
        className="absolute inset-y-0"
        section="hero"
        variant={narrow ? "mobile" : "desktop"}
        style={{
          insetInlineStart: narrow ? "0%" : "-5%",
          insetInlineEnd: narrow ? "0%" : "-1%",
        }}
        background="#020101"
      />

      <Navbar heroOnly />

      <div
        ref={gridRef}
        /* pt-24 on mobile, not pt-14: the wordmark's cap height reaches above the nav
           and the EN/AR control's rectangle sat on top of the letters. The single
           column has the vertical room to give way; the two-column layout does not
           need to. */
        className="relative z-10 mx-auto grid min-h-[100svh] max-w-page grid-cols-1 gap-8 px-4 pb-10 pt-24 lg:gap-12 lg:px-8 lg:pb-12 lg:pt-16"
        style={{
          /*
            A floor on the end track, and min-width zero on the start one.

            With two plain fr tracks the wordmark's min-content width forces the
            start track wider and the message column gets crushed. The floor stops
            that: the start track gives way and the wordmark simply overflows, which
            is what a poster lockup should do anyway.
          */
          gridTemplateColumns: narrow ? undefined : "minmax(0, 1.68fr) minmax(23rem, 0.88fr)",
        }}
      >
        {/* Column, not a row: the attribution has to sit UNDER the lockup, and as a
            flex sibling in a row it landed beside it. `justify-center` keeps the
            lockup vertically centred the way the reference plate has it. */}
        <div
          className="relative flex min-w-0 flex-col items-start justify-center"
          style={{
            /* Without this, cqw resolves against the small-viewport fallback and the
               type stops tracking the column at all. */
            containerType: "inline-size",
            /* Grows the box toward the viewport's edge while its end edge stays on
               the grid track. containerType is on this same element, so the type
               scales with the wider box automatically. */
            marginInlineStart: `-${bleed}px`,
          }}
        >
          {/*
            Each line gets its own fixed-height box, with the glyphs scaled vertically
            about the start edge. A transform does not change the layout box, so the
            boxes carry the height and the gap while the scale supplies the stretch.
            Doing this with line-height instead makes the two lines collide.
          */}
          {/* aria-label, because the lockup's parts are separate flex children and
              their text content concatenates without separators — the accessible name
              would otherwise be read as "ConstantSEOby Constant Labs". */}
          <h1
            aria-label={`ConstantSEO ${t("home.hero.parentBrand")}`}
            className="tv-wordmark relative select-none uppercase text-paper"
            style={{
              letterSpacing: `${TEXT.tracking}em`,
              marginTop: `${TEXT.offsetEm}em`,
              fontSize: `min(${TEXT.sizeCqw}cqw, ${TEXT.capVh}vh)`,
            }}
          >
            {["Constant", "SEO"].map((word, index) => (
              <span
                key={word}
                className="flex items-center gap-[0.09em]"
                style={{ height: `${TEXT.boxEm}em`, marginTop: index === 0 ? 0 : `${TEXT.gapEm}em` }}
              >
                <span className="block origin-left leading-none" style={{ transform: `scaleY(${TEXT.scaleY})` }}>
                  {word}
                </span>
              </span>
            ))}
          </h1>

          {/*
            The parent-brand attribution sits UNDER the lockup and stays small.

            It was briefly set inline beside SEO at 0.13em of the wordmark, which read
            as part of the lockup — a co-equal second name rather than an attribution.
            Under it, quiet, is both the correct hierarchy and the safer claim: this is
            a statement of ownership, not a second brand. Sized in `em` of the wordmark
            so it still tracks the lockup at every breakpoint.
          */}
          <a
            href="https://constantlabs.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="tv-body relative z-30 mt-4 inline-flex min-h-10 translate-x-2 cursor-pointer items-center whitespace-nowrap px-1 text-sm font-normal italic uppercase leading-5 tracking-[0.08em] text-paper/70 no-underline transition-colors hover:text-signal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal sm:text-base"
          >
            {t("home.hero.parentBrand")}
          </a>
        </div>

        {/* The message column sits low, the way it does on the reference plate. Its
            gutter matches the nav plate's so the two read as aligned. */}
        <div className="flex flex-col justify-end pb-2 lg:pb-24">
          <p className="tv-body flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-signal">
            <span aria-hidden="true" className="h-px w-7 bg-signal" />
            {t("home.hero.eyebrow")}
          </p>

          {/*
            Rajdhani rather than the mono, at full contrast, and NOT the display face.
            The reference sets this line in the body face at semibold — paper on this
            ground is a much harder edge than a dimmed cream, and the display face is
            reserved for the wordmark so the two do not compete.
          */}
          <h2 className="tv-body mt-5 max-w-md text-2xl font-semibold leading-[1.35] text-paper sm:text-3xl">
            <GoogleBrandedHeadline text={t("home.hero.title")} />
          </h2>

          {/* This line is what gives the button its meaning, so it cannot be 10px dim
              mono over a field. Sentence case, larger, and bright. */}
          <p className="tv-body mt-4 max-w-md text-base font-semibold leading-snug text-paper/85 sm:text-lg">
            <GoogleBrandedHeadline text={t("home.hero.support")} />
          </p>

          {/* The separator on the reference plate is a plus, then a straight line. It
              is gated with the panel it introduces, so it is never an orphan rule
              floating above the buttons on a phone. */}
          <div aria-hidden="true" className="mt-7 hidden items-center gap-3 lg:flex">
            <span className="text-base leading-none text-paper/35">+</span>
            <span className="h-px flex-1 bg-paper/15" />
          </div>

          {/* Where the reference puts a dithered photograph, this site puts the thing
              a visitor actually came to do. */}
          {/* Stacked, not side by side: the action label wraps to two lines in a
              shared row, and every other action in this column is full width. */}
          <div className="mt-5 grid max-w-md gap-2">
            <label className="sr-only" htmlFor="hero-domain">{t("home.hero.inputLabel")}</label>
            <div className="flex items-center border border-paper/[0.07] bg-paper/[0.025] px-3 backdrop-blur-md focus-within:border-signal">
              <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
              <input
                id="hero-domain"
                value={domain}
                onChange={(event) => setDomain(event.target.value)}
                onKeyDown={(event) => event.key === "Enter" && handleAudit()}
                placeholder={t("hero.inputPlaceholder")}
                className="tv-body min-w-0 flex-1 bg-transparent px-3 py-3.5 text-sm text-paper outline-none placeholder:text-muted"
              />
            </div>
            <button
              type="button"
              onClick={handleAudit}
              className="tv-label flex items-center justify-between gap-4 border border-signal bg-signal px-6 py-4 text-xs tracking-[0.16em] text-void transition-colors hover:border-paper hover:bg-paper"
            >
              {t("hero.cta")}
              <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>
          </div>

          {/* The solid "Inspect the evidence" action used to sit here, also pointing
              at #proof. Once the ghost action below became "See proof of our work"
              the two were the same link with two labels, so the duplicate went and
              the audit button above keeps the solid weight. */}
          <div className="mt-3 grid max-w-md gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="tv-label flex items-center justify-between gap-4 border border-paper/[0.07] bg-paper/[0.025] px-6 py-4 text-xs tracking-[0.16em] text-paper backdrop-blur-md transition-colors hover:border-signal hover:text-signal"
            >
              <span className="inline-flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                {t("zcal.whatsapp")}
              </span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <a
            href="#proof"
            className="tv-label mt-4 inline-flex items-center gap-2 self-start border border-paper/[0.07] bg-paper/[0.025] px-3 py-1.5 text-[10px] tracking-[0.16em] text-paper/70 backdrop-blur-md transition-colors hover:text-signal"
          >
            {t("home.hero.methodCta")}
            <span aria-hidden="true">{isAr ? "↓" : "↓"}</span>
          </a>
        </div>
      </div>
    </header>
  );
};
