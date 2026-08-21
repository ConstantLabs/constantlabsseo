import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/marketing/PageHero";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Search,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Loader2,
  Send,
} from "lucide-react";

/* ── Types ─────────────────────────────────────────────────── */

interface AuditItem {
  id: string;
  title: string;
  description: string;
  score: number | null;
}

interface ScanResult {
  seoScore: number;
  perfScore: number;
  audits: AuditItem[];
}

/* ── Score Gauge ───────────────────────────────────────────── */

const ScoreGauge = ({
  score,
  label,
  size = "lg",
}: {
  score: number;
  label: string;
  size?: "lg" | "sm";
}) => {
  const radius = size === "lg" ? 54 : 38;
  const stroke = size === "lg" ? 8 : 6;
  const center = radius + stroke;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color = score >= 90 ? "#22c55e" : score >= 50 ? "#f59e0b" : "#ef4444";

  return (
    <div className="flex flex-col items-center gap-2">
      <svg
        width={center * 2}
        height={center * 2}
        className="transform -rotate-90"
      >
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth={stroke}
          className="text-paper/20"
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <text
          x={center}
          y={center}
          textAnchor="middle"
          dominantBaseline="central"
          className="fill-paper font-bold"
          fontSize={size === "lg" ? 28 : 20}
          transform={`rotate(90 ${center} ${center})`}
        >
          {score}
        </text>
      </svg>
      <span
        className={`font-medium text-paper ${size === "lg" ? "text-sm" : "text-xs"}`}
      >
        {label}
      </span>
    </div>
  );
};

/* ── Loading Messages ──────────────────────────────────────── */

const LOADING_KEYS = [
  "audit.loading.meta",
  "audit.loading.performance",
  "audit.loading.accessibility",
  "audit.loading.seo",
  "audit.loading.final",
] as const;

/* ── Helpers ───────────────────────────────────────────────── */

function normalizeUrl(raw: string): string {
  let url = raw.trim();
  if (!url) return "";
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  return url;
}

async function fetchPageSpeedData(url: string): Promise<ScanResult> {
  const key = import.meta.env.VITE_PSI_API_KEY;
  const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=seo&category=performance${key ? `&key=${key}` : ""}`;
  const res = await fetch(apiUrl);
  if (!res.ok) throw new Error(`API returned ${res.status}`);
  const data = await res.json();

  if (data.error) {
    throw new Error(data.error.message || "PageSpeed API error");
  }

  const lh = data.lighthouseResult;
  const seoScore = Math.round((lh.categories?.seo?.score ?? 0) * 100);
  const perfScore = Math.round(
    (lh.categories?.performance?.score ?? 0) * 100,
  );

  const seoAuditRefs: string[] = (
    lh.categories?.seo?.auditRefs ?? []
  ).map((r: { id: string }) => r.id);

  const audits: AuditItem[] = seoAuditRefs
    .map((id: string) => {
      const a = lh.audits?.[id];
      if (!a || a.scoreDisplayMode === "notApplicable") return null;
      return {
        id,
        title: a.title ?? id,
        description: (a.description ?? "").replace(/\[.*?\]\(.*?\)/g, "").trim(),
        score: typeof a.score === "number" ? a.score : null,
      };
    })
    .filter(Boolean) as AuditItem[];

  return { seoScore, perfScore, audits };
}

/* ── Main Component ────────────────────────────────────────── */

const Audit = () => {
  const { t, isAr } = useLanguage();
  const [searchParams] = useSearchParams();
  const resultsRef = useRef<HTMLDivElement>(null);

  const [url, setUrl] = useState(() => searchParams.get("url") || "");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState(false);
  const [loadingMsgIdx, setLoadingMsgIdx] = useState(0);
  const hasAutoScanned = useRef(false);

  const [form, setForm] = useState({ name: "", email: "", website: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (!scanning) return;
    const interval = setInterval(() => {
      setLoadingMsgIdx((prev) => (prev + 1) % LOADING_KEYS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [scanning]);

  const handleScan = async () => {
    const normalized = normalizeUrl(url);
    if (!normalized) return;

    setScanning(true);
    setResult(null);
    setError(false);
    setLoadingMsgIdx(0);

    try {
      const data = await fetchPageSpeedData(normalized);
      setResult(data);
      setForm((prev) => ({ ...prev, website: normalized }));
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 200);
    } catch {
      setError(true);
    } finally {
      setScanning(false);
    }
  };

  const handleDeepAudit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("[Deep Audit Request]", {
      name: form.name,
      email: form.email,
      website: form.website,
      timestamp: new Date().toISOString(),
    });
    setFormSubmitted(true);
  };

  // Auto-scan when URL is pre-filled from query param
  useEffect(() => {
    if (url && !hasAutoScanned.current) {
      hasAutoScanned.current = true;
      handleScan();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={t("audit.seo.title")}
        description={t("audit.seo.description")}
        path="/audit"
        breadcrumbs={[{ name: t("audit.hero.title"), path: "/audit" }]}
      />
      <Navbar />

      {/* ── Hero + Quick Scan ──────────────────────────────── */}
      <PageHero
        eyebrow={isAr ? "فحص الموقع" : "Website scan"}
        title={t("audit.hero.title")}
        lede={t("audit.hero.subtitle")}
        actions={<div className="w-full max-w-xl">
          {/* URL Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-0 sm:border sm:border-line sm:bg-paper sm:p-1.5">
              <div className="relative flex-1">
                <Search
                  className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-ink/60 ${isAr ? "right-4" : "left-4"}`}
                />
                <input
                  id="audit-url"
                  type="text"
                  aria-label={t("audit.input.placeholder")}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && !scanning && handleScan()}
                  placeholder={t("audit.input.placeholder")}
                  disabled={scanning}
                  className={`w-full border border-line bg-paper py-3.5 text-ink placeholder:text-ink/45 outline-none sm:border-none sm:bg-transparent sm:py-2.5 text-sm disabled:opacity-50 ${isAr ? "pr-12 pl-4" : "pl-12 pr-4"}`}
                />
              </div>
              <Button
                onClick={handleScan}
                disabled={scanning || !url.trim()}
                className="border border-ink bg-lime px-7 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition-all hover:bg-lime/80 sm:py-2.5 whitespace-nowrap disabled:opacity-50"
              >
                {scanning ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    {t("audit.input.button")}
                    <ArrowRight
                      className={`w-4 h-4 ${isAr ? "mr-1.5 rotate-180" : "ml-1.5"}`}
                    />
                  </>
                )}
              </Button>
            </div>
          </motion.div>

          {/* Loading State */}
          {scanning && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-8"
            >
              <Loader2 className="mx-auto h-8 w-8 animate-spin text-ink" />
              <p className="mt-3 text-sm text-ink/70 animate-pulse">
                {t(LOADING_KEYS[loadingMsgIdx])}
              </p>
            </motion.div>
          )}

          {/* Error State */}
          {error && !scanning && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto mt-8 max-w-lg border border-red-500/40 bg-red-500/10 p-6"
            >
              <h3 className="font-bold text-red-400">{t("audit.error.title")}</h3>
              <p className="mt-2 text-sm text-ink/70">
                {t("audit.error.message")}
              </p>
              <Button
                onClick={() => {
                  setError(false);
                  handleScan();
                }}
                className="mt-4 border border-ink bg-paper px-6 py-2 text-sm text-ink hover:bg-lime/20"
              >
                {t("audit.error.retry")}
              </Button>
            </motion.div>
          )}
        </div>}
      />

        {/* Results */}
        {result && !scanning && (
          <section className="border-b border-line bg-ink py-10 text-paper">
          <motion.div
            ref={resultsRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto px-4 mt-10"
          >
            {/* Scores */}
            <div className="flex justify-center gap-8 sm:gap-16">
              <ScoreGauge
                score={result.seoScore}
                label={t("audit.result.seoScore")}
                size="lg"
              />
              <ScoreGauge
                score={result.perfScore}
                label={t("audit.result.perfScore")}
                size="sm"
              />
            </div>

            {/* Findings */}
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-paper">
                {t("audit.result.findings")}
              </h3>
              <div className="space-y-2">
                {result.audits.map((a) => (
                  <div
                    key={a.id}
                    className={`flex items-start gap-3 border border-paper/20 p-3 ${
                      a.score === 1
                        ? "bg-green-500/10"
                        : a.score === 0
                          ? "bg-red-500/10"
                          : "bg-paper/5"
                    }`}
                  >
                    {a.score === 1 ? (
                      <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-medium text-paper">
                        {a.title}
                      </p>
                      {a.description && (
                        <p className="mt-0.5 text-xs text-paper">
                          {a.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          </section>
        )}

      {/* ── Deep Audit CTA ─────────────────────────────────── */}
      <section className="bg-paper py-20">
        <div className="max-w-2xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-heading text-4xl uppercase text-ink md:text-5xl">
              {t("audit.deep.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-ink/70">
              {t("audit.deep.subtitle")}
            </p>
          </div>

          {formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              role="status"
              aria-live="polite"
              className="border border-line bg-lime/20 p-6 text-center"
            >
              <CheckCircle2 className="mx-auto h-10 w-10 text-ink" />
              <p className="mt-3 font-medium text-ink">
                {t("audit.deep.success")}
              </p>
              <div className="mt-5 flex flex-wrap justify-center gap-3">
                <a href="https://wa.me/971561495656" target="_blank" rel="noreferrer" className="border border-ink bg-ink px-4 py-2 text-sm font-bold text-paper hover:bg-lime hover:text-ink">{t("zcal.whatsapp")}</a>
                <a href="mailto:akhmad@constantlabs.ai" className="border border-ink px-4 py-2 text-sm font-bold text-ink hover:bg-ink hover:text-paper">{t("zcal.email")}</a>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleDeepAudit} className="space-y-5">
              <div>
                <label htmlFor="deep-audit-name" className="mb-1.5 block text-sm font-medium text-ink/80">
                  {t("audit.deep.name")}
                </label>
                <input
                  id="deep-audit-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-lime focus:ring-2 focus:ring-lime/30"
                  placeholder={t("audit.deep.namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="deep-audit-email" className="mb-1.5 block text-sm font-medium text-ink/80">
                  {t("audit.deep.email")}
                </label>
                <input
                  id="deep-audit-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-lime focus:ring-2 focus:ring-lime/30"
                  placeholder={t("audit.deep.emailPlaceholder")}
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="deep-audit-website" className="mb-1.5 block text-sm font-medium text-ink/80">
                  {t("audit.deep.website")}
                </label>
                <input
                  id="deep-audit-website"
                  name="website"
                  type="url"
                  required
                  value={form.website}
                  onChange={(e) =>
                    setForm({ ...form, website: e.target.value })
                  }
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:border-lime focus:ring-2 focus:ring-lime/30"
                  placeholder={t("audit.deep.websitePlaceholder")}
                  dir="ltr"
                />
              </div>
              <Button
                type="submit"
                className="w-full border border-ink bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime/80"
              >
                <Send className={`w-4 h-4 ${isAr ? "ml-2 rotate-180" : "mr-2"}`} />
                {t("audit.deep.submit")}
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Audit;
