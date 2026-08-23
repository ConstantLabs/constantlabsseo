import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n/LanguageContext";
import { buildSignalSeries } from "./searchSignalModel";

interface SearchSignalFieldProps {
  className?: string;
}

const WIDTH = 720;
const HEIGHT = 360;
const PADDING = { top: 34, right: 22, bottom: 46, left: 46 };

function toPolyline(points: ReturnType<typeof buildSignalSeries>, key: "clicks" | "impressions") {
  const drawableWidth = WIDTH - PADDING.left - PADDING.right;
  const drawableHeight = HEIGHT - PADDING.top - PADDING.bottom;

  return points.map((point) => {
    const x = PADDING.left + point.x * drawableWidth;
    const y = PADDING.top + (1 - point[key]) * drawableHeight;
    return `${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
}

export function SearchSignalField({ className }: SearchSignalFieldProps) {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const points = buildSignalSeries();
  const impressions = toPolyline(points, "impressions");
  const clicks = toPolyline(points, "clicks");
  const transition = { duration: 1.1, ease: "easeOut" as const };

  return (
    <div className={cn("relative overflow-hidden border border-line bg-ink p-3 text-paper sm:p-5", className)}>
      <div className="mb-4 flex items-start justify-between gap-3 font-sans text-[10px] font-bold uppercase tracking-[0.16em] text-paper">
        <div><span className="text-lime">{t("signalField.label")}</span><span className="mx-2 text-paper/60">/</span>{t("signalField.discovery")}</div>
        <div className="text-end text-paper">{t("signalField.conceptual")}</div>
      </div>
      <svg className="block h-auto w-full" viewBox={`0 0 ${WIDTH} ${HEIGHT}`} role="img" aria-labelledby="search-signal-title" aria-describedby="search-signal-description">
        <title id="search-signal-title">{t("signalField.title")}</title>
        <desc id="search-signal-description">{t("signalField.description")}</desc>
        <g stroke="currentColor" className="text-paper/25" strokeWidth="1">
          {[0, 1, 2, 3, 4].map((line) => <line key={`h-${line}`} x1={PADDING.left} x2={WIDTH - PADDING.right} y1={PADDING.top + line * 70} y2={PADDING.top + line * 70} />)}
          {[0, 1, 2, 3, 4, 5].map((line) => <line key={`v-${line}`} y1={PADDING.top} y2={HEIGHT - PADDING.bottom} x1={PADDING.left + line * 130} x2={PADDING.left + line * 130} />)}
        </g>
        <g className="font-sans text-[10px] font-bold uppercase tracking-[0.12em] fill-paper">
          <text x={PADDING.left} y={HEIGHT - 14}>{t("signalField.start")}</text>
          <text x={WIDTH - PADDING.right} y={HEIGHT - 14} textAnchor="end">{t("signalField.end")}</text>
          <text x="8" y={PADDING.top + 4}>100</text>
          <text x="16" y={HEIGHT - PADDING.bottom}>0</text>
        </g>
        <motion.polyline fill="none" points={impressions} stroke="#988B7A" strokeWidth="2" strokeDasharray="5 8" vectorEffect="non-scaling-stroke" initial={reducedMotion ? false : { pathLength: 0 }} animate={reducedMotion ? undefined : { pathLength: 1 }} transition={transition} />
        <motion.polyline fill="none" points={clicks} stroke="#FFB35C" strokeWidth="3" vectorEffect="non-scaling-stroke" initial={reducedMotion ? false : { pathLength: 0 }} animate={reducedMotion ? undefined : { pathLength: 1 }} transition={{ ...transition, delay: reducedMotion ? 0 : 0.14 }} />
        {points.filter((_, index) => index % 8 === 3).map((point, index) => {
          const x = PADDING.left + point.x * (WIDTH - PADDING.left - PADDING.right);
          const y = PADDING.top + (1 - point.clicks) * (HEIGHT - PADDING.top - PADDING.bottom);
          return <g key={point.x}><circle cx={x} cy={y} r="4" fill="#FFB35C" /><text x={x} y={y - 12} textAnchor="middle" className="fill-paper font-sans text-[9px] font-bold uppercase tracking-[0.1em]">{t("signalField.query")} {index + 1}</text></g>;
        })}
        <g className="font-sans text-[10px] font-bold uppercase tracking-[0.12em]">
          <circle cx={PADDING.left} cy="18" r="4" fill="#988B7A" /><text x={PADDING.left + 10} y="22" className="fill-paper">{t("signalField.scattered")}</text>
          <circle cx={PADDING.left + 174} cy="18" r="4" fill="#FFB35C" /><text x={PADDING.left + 184} y="22" className="fill-paper">{t("signalField.trajectory")}</text>
        </g>
      </svg>
      <div className="mt-3 flex justify-between border-t border-paper/25 pt-3 font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-paper"><span>{t("signalField.presentation")}</span><span>{t("signalField.disclaimer")}</span></div>
    </div>
  );
}
