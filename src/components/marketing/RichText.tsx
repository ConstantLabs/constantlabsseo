import { Fragment } from "react";

/**
 * Inline emphasis inside a headline or a line of copy, marked up in the string
 * itself. Ported from constantlabs-websites.
 *
 *   `*asterisks*`   a serif italic (`.tv-em`). Points at a phrase without raising
 *                   the volume, and turns one flat headline into a two-part
 *                   statement. Pushing WEIGHT on the display face was the earlier
 *                   attempt at this and failed twice over: Anton has a single
 *                   weight so the browser fakes the rest by smearing glyphs, and a
 *                   bolder run shouts over the sentence it sits in. A different
 *                   face whispers instead.
 *   `[[brackets]]`  the accent colour. For the words that ARE the offer — above
 *                   all "free". One per headline; two stop being an accent.
 *
 * Keeping the markers inside the string is the point: the emphasis travels with
 * the copy into `translations.ts`, so the Arabic version can place its own
 * emphasis where that sentence actually needs it rather than inheriting a span
 * position that only made sense in English.
 */
const PATTERN = /(\*[^*]+\*|\[\[[^\]]+\]\])/g;

export function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(PATTERN).map((part, index) => {
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return (
            <span key={index} className="text-signal">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2) {
          return (
            <em key={index} className="tv-em">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={index}>{part}</Fragment>;
      })}
    </>
  );
}
