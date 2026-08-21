import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowRight,
  BadgeHelp,
  Bot,
  Calculator,
  CheckCircle2,
  Gauge,
  Heading1,
  Map as MapIcon,
  SearchCheck,
  Share2,
  Tags,
  Trash2,
  Youtube,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  freeTools,
  getLocalizedText,
  getToolBySlug,
  toolUiCopy,
} from "@/data/freeToolsData";
import { PageHero } from "@/components/marketing/PageHero";

const BASE_URL = "https://seo.constantlabs.ai";

const iconMap = {
  BadgeHelp,
  Bot,
  Calculator,
  Gauge,
  Heading1,
  Map: MapIcon,
  SearchCheck,
  Share2,
  Tags,
  Youtube,
};

function tx(isAr: boolean, en: string, ar: string) {
  return isAr ? ar : en;
}

function cleanCell(value: string | undefined) {
  return (value || "").trim().replace(/^["']|["']$/g, "");
}

function parseHtml(html: string) {
  if (!html.trim() || typeof DOMParser === "undefined") return null;
  return new DOMParser().parseFromString(html, "text/html");
}

function getMeta(doc: Document | null, selector: string) {
  return doc?.querySelector(selector)?.getAttribute("content")?.trim() || "";
}

function getLink(doc: Document | null, rel: string) {
  return doc?.querySelector(`link[rel="${rel}"]`)?.getAttribute("href")?.trim() || "";
}

function getHostname(value: string) {
  try {
    return new URL(value).hostname;
  } catch {
    return "";
  }
}

const sampleHtml = `<html lang="en">
<head>
  <title>SEO Agency Dubai - ConstantSEO</title>
  <meta name="description" content="AI-powered SEO agency in Dubai for GCC businesses that need technical SEO, Arabic content, and local search growth.">
  <link rel="canonical" href="https://seo.constantlabs.ai/seo-agency-dubai">
  <meta name="robots" content="index, follow">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta property="og:title" content="SEO Agency Dubai - ConstantSEO">
  <meta property="og:description" content="Rank higher across Google and AI search in Dubai.">
  <meta property="og:image" content="https://seo.constantlabs.ai/og-image.png">
  <meta property="og:url" content="https://seo.constantlabs.ai/seo-agency-dubai">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
</head>
<body>
  <h1>SEO Agency Dubai</h1>
  <h2>What Does an SEO Agency in Dubai Do?</h2>
  <h2>How Much Does SEO Cost in Dubai?</h2>
  <h3>Technical SEO</h3>
</body>
</html>`;

const sampleMetaRows = `https://example.com/\tSEO Agency Dubai | Example\tAI-powered SEO agency in Dubai for local businesses that need more qualified organic leads.
https://example.com/services\tSEO Services Dubai | Example\tTechnical SEO, local SEO, Arabic content, and AI search optimization for UAE companies.
https://example.com/about\tAbout Example\t`;

const sampleSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://example.com/</loc></url>
  <url><loc>https://example.com/services</loc></url>
  <url><loc>https://example.com/seo-agency-dubai</loc></url>
  <url><loc>https://example.com/blog/local-seo-checklist-uae</loc></url>
</urlset>`;

type BadgeTone = "good" | "warning" | "missing";

function StatusBadge({ tone, children }: { tone: BadgeTone; children: string }) {
  const classes = {
    good: "bg-green-50 text-green-700 border-green-200",
    warning: "bg-amber-50 text-amber-700 border-amber-200",
    missing: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <span className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${classes[tone]}`}>
      {children}
    </span>
  );
}

function CopyButton({ text, isAr }: { text: string; isAr: boolean }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <Button
      type="button"
      onClick={handleCopy}
      className="bg-[#7143E0] hover:bg-[#5d35bd] text-white rounded-full px-5"
      disabled={!text}
    >
      {copied ? getLocalizedText(toolUiCopy.copied, isAr) : getLocalizedText(toolUiCopy.copy, isAr)}
    </Button>
  );
}

function FieldLabel({ children }: { children: string }) {
  return <label className="block text-sm font-bold text-slate-800 mb-2">{children}</label>;
}

function ToolShell({
  isAr,
  children,
  output,
}: {
  isAr: boolean;
  children: React.ReactNode;
  output: React.ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-6">
      <div className="rounded-xl border border-slate-200 bg-white p-5 md:p-6 overflow-visible">
        <h2 className="text-xl font-extrabold text-slate-900 mb-5">
          {getLocalizedText(toolUiCopy.input, isAr)}
        </h2>
        {children}
      </div>
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 md:p-6 overflow-visible">
        <h2 className="text-xl font-extrabold text-slate-900 mb-5">
          {getLocalizedText(toolUiCopy.results, isAr)}
        </h2>
        {output}
      </div>
    </div>
  );
}

function BulkMetaChecker({ isAr }: { isAr: boolean }) {
  const [input, setInput] = useState(sampleMetaRows);

  const rows = useMemo(() => {
    const parsed = input
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        const delimiter = line.includes("\t") ? "\t" : line.includes("|") ? "|" : ",";
        const parts = line.split(delimiter);
        const url = cleanCell(parts[0]);
        const title = cleanCell(parts[1]);
        const description = cleanCell(parts.slice(2).join(delimiter));
        return { url, title, description };
      });

    const titleCounts = new Map<string, number>();
    const descriptionCounts = new Map<string, number>();
    parsed.forEach((row) => {
      if (row.title) titleCounts.set(row.title, (titleCounts.get(row.title) || 0) + 1);
      if (row.description) {
        descriptionCounts.set(row.description, (descriptionCounts.get(row.description) || 0) + 1);
      }
    });

    return parsed.map((row) => {
      const titleLength = row.title.length;
      const descriptionLength = row.description.length;
      const titleIssue = !row.title
        ? "missing"
        : titleLength < 30
          ? "short"
          : titleLength > 60
            ? "long"
            : "good";
      const descriptionIssue = !row.description
        ? "missing"
        : descriptionLength < 70
          ? "short"
          : descriptionLength > 160
            ? "long"
            : "good";

      return {
        ...row,
        titleLength,
        descriptionLength,
        titleIssue,
        descriptionIssue,
        duplicateTitle: row.title ? (titleCounts.get(row.title) || 0) > 1 : false,
        duplicateDescription: row.description ? (descriptionCounts.get(row.description) || 0) > 1 : false,
      };
    });
  }, [input]);

  const issueCount = rows.filter(
    (row) =>
      row.titleIssue !== "good" ||
      row.descriptionIssue !== "good" ||
      row.duplicateTitle ||
      row.duplicateDescription,
  ).length;

  const csv = [
    "url,title,title_length,title_status,description,description_length,description_status,duplicate_title,duplicate_description",
    ...rows.map((row) =>
      [
        row.url,
        row.title,
        row.titleLength,
        row.titleIssue,
        row.description,
        row.descriptionLength,
        row.descriptionIssue,
        row.duplicateTitle ? "yes" : "no",
        row.duplicateDescription ? "yes" : "no",
      ]
        .map((cell) => `"${String(cell).replace(/"/g, '""')}"`)
        .join(","),
    ),
  ].join("\n");

  return (
    <ToolShell
      isAr={isAr}
      output={
        rows.length ? (
          <div className="space-y-5 overflow-visible">
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-lg bg-white border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {tx(isAr, "Pages checked", "الصفحات المفحوصة")}
                </p>
                <p className="mt-2 text-3xl font-extrabold text-slate-900">{rows.length}</p>
              </div>
              <div className="rounded-lg bg-white border border-slate-200 p-4">
                <p className="text-xs font-semibold uppercase text-slate-500">
                  {tx(isAr, "Pages with issues", "صفحات بها مشاكل")}
                </p>
                <p className="mt-2 text-3xl font-extrabold text-amber-600">{issueCount}</p>
              </div>
            </div>
            <div className="space-y-3">
              {rows.map((row, index) => (
                <div key={`${row.url}-${index}`} className="rounded-lg bg-white border border-slate-200 p-4">
                  <p className="text-sm font-bold text-slate-900 break-words" dir="ltr">
                    {row.url || tx(isAr, "No URL", "لا يوجد رابط")}
                  </p>
                  <div className="mt-3 grid sm:grid-cols-2 gap-3">
                    <div>
                      <p className="text-xs font-semibold text-slate-500">{tx(isAr, "Title", "العنوان")}</p>
                      <p className="mt-1 text-sm text-slate-700 break-words">{row.title || "-"}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <StatusBadge tone={row.titleIssue === "good" && !row.duplicateTitle ? "good" : row.titleIssue === "missing" ? "missing" : "warning"}>
                          {row.titleIssue === "good" && !row.duplicateTitle
                            ? getLocalizedText(toolUiCopy.good, isAr)
                            : row.titleIssue === "missing"
                              ? getLocalizedText(toolUiCopy.missing, isAr)
                              : getLocalizedText(toolUiCopy.warning, isAr)}
                        </StatusBadge>
                        <span className="text-xs text-slate-500">{row.titleLength} {tx(isAr, "chars", "حرف")}</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-500">{tx(isAr, "Description", "الوصف")}</p>
                      <p className="mt-1 text-sm text-slate-700 break-words">{row.description || "-"}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <StatusBadge tone={row.descriptionIssue === "good" && !row.duplicateDescription ? "good" : row.descriptionIssue === "missing" ? "missing" : "warning"}>
                          {row.descriptionIssue === "good" && !row.duplicateDescription
                            ? getLocalizedText(toolUiCopy.good, isAr)
                            : row.descriptionIssue === "missing"
                              ? getLocalizedText(toolUiCopy.missing, isAr)
                              : getLocalizedText(toolUiCopy.warning, isAr)}
                        </StatusBadge>
                        <span className="text-xs text-slate-500">{row.descriptionLength} {tx(isAr, "chars", "حرف")}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end">
              <CopyButton text={csv} isAr={isAr} />
            </div>
          </div>
        ) : (
          <p className="text-slate-600">{getLocalizedText(toolUiCopy.noData, isAr)}</p>
        )
      }
    >
      <FieldLabel>{tx(isAr, "Paste rows as URL, title, description", "الصق الصفوف كرابط، عنوان، وصف")}</FieldLabel>
      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        className="w-full min-h-[260px] rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
        dir="ltr"
      />
      <p className="mt-3 text-xs text-slate-500">
        {tx(isAr, "Supports tab, pipe, or comma separated rows.", "يدعم الصفوف المفصولة بتاب أو | أو فاصلة.")}
      </p>
    </ToolShell>
  );
}

function MetaTagAnalyzer({ isAr }: { isAr: boolean }) {
  const [html, setHtml] = useState(sampleHtml);
  const doc = useMemo(() => parseHtml(html), [html]);

  const checks = useMemo(() => {
    const title = doc?.querySelector("title")?.textContent?.trim() || "";
    const description = getMeta(doc, 'meta[name="description"]');
    const canonical = getLink(doc, "canonical");
    const robots = getMeta(doc, 'meta[name="robots"]');
    const viewport = getMeta(doc, 'meta[name="viewport"]');
    const lang = doc?.documentElement?.getAttribute("lang") || "";
    const ogTitle = getMeta(doc, 'meta[property="og:title"]');
    const ogDescription = getMeta(doc, 'meta[property="og:description"]');
    const ogImage = getMeta(doc, 'meta[property="og:image"]');
    const twitterCard = getMeta(doc, 'meta[name="twitter:card"]');

    return [
      { label: tx(isAr, "Title tag", "وسم العنوان"), value: title, good: title.length >= 30 && title.length <= 60 },
      { label: tx(isAr, "Meta description", "وصف الميتا"), value: description, good: description.length >= 70 && description.length <= 160 },
      { label: tx(isAr, "Canonical URL", "رابط كانونيكال"), value: canonical, good: Boolean(canonical) },
      { label: tx(isAr, "Robots directive", "تعليمات الروبوتس"), value: robots || tx(isAr, "Default index/follow", "الفهرسة والزحف افتراضياً"), good: !/noindex/i.test(robots) },
      { label: tx(isAr, "Viewport", "Viewport"), value: viewport, good: viewport.includes("width=device-width") },
      { label: tx(isAr, "HTML language", "لغة HTML"), value: lang, good: Boolean(lang) },
      { label: tx(isAr, "Open Graph title", "عنوان Open Graph"), value: ogTitle, good: Boolean(ogTitle) },
      { label: tx(isAr, "Open Graph description", "وصف Open Graph"), value: ogDescription, good: Boolean(ogDescription) },
      { label: tx(isAr, "Open Graph image", "صورة Open Graph"), value: ogImage, good: Boolean(ogImage) },
      { label: tx(isAr, "Twitter card", "Twitter Card"), value: twitterCard, good: Boolean(twitterCard) },
    ];
  }, [doc, isAr]);

  const score = Math.round((checks.filter((check) => check.good).length / checks.length) * 100);

  return (
    <ToolShell
      isAr={isAr}
      output={
        html.trim() ? (
          <div className="space-y-5">
            <div className="rounded-lg bg-white border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-500">{tx(isAr, "Metadata score", "تقييم بيانات الميتا")}</p>
              <p className="mt-2 text-5xl font-extrabold text-[#7143E0]">{score}</p>
            </div>
            <div className="space-y-3">
              {checks.map((check) => (
                <div key={check.label} className="rounded-lg bg-white border border-slate-200 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-bold text-slate-900">{check.label}</p>
                      <p className="mt-1 text-sm text-slate-600 break-words" dir="auto">
                        {check.value || "-"}
                      </p>
                    </div>
                    <StatusBadge tone={check.good ? "good" : "warning"}>
                      {check.good ? getLocalizedText(toolUiCopy.good, isAr) : getLocalizedText(toolUiCopy.warning, isAr)}
                    </StatusBadge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p className="text-slate-600">{getLocalizedText(toolUiCopy.noData, isAr)}</p>
        )
      }
    >
      <FieldLabel>{tx(isAr, "Paste page HTML", "الصق HTML الصفحة")}</FieldLabel>
      <textarea
        value={html}
        onChange={(event) => setHtml(event.target.value)}
        className="w-full min-h-[360px] rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
        dir="ltr"
      />
      <div className="mt-3 flex justify-end">
        <Button type="button" variant="outline" onClick={() => setHtml(sampleHtml)} className="rounded-full">
          {getLocalizedText(toolUiCopy.sample, isAr)}
        </Button>
      </div>
    </ToolShell>
  );
}

function HeadingChecker({ isAr }: { isAr: boolean }) {
  const [html, setHtml] = useState(sampleHtml);
  const doc = useMemo(() => parseHtml(html), [html]);

  const report = useMemo(() => {
    const headings = Array.from(doc?.querySelectorAll("h1,h2,h3,h4,h5,h6") || []).map((heading, index) => ({
      index,
      level: Number(heading.tagName.slice(1)),
      text: heading.textContent?.replace(/\s+/g, " ").trim() || "",
    }));
    const counts = [1, 2, 3, 4, 5, 6].map((level) => ({
      level,
      count: headings.filter((heading) => heading.level === level).length,
    }));
    const issues: string[] = [];
    const h1Count = counts[0].count;
    if (h1Count === 0) issues.push(tx(isAr, "Missing H1 tag.", "وسم H1 مفقود."));
    if (h1Count > 1) issues.push(tx(isAr, "Multiple H1 tags found.", "تم العثور على أكثر من H1."));
    headings.forEach((heading, index) => {
      const previous = headings[index - 1];
      if (previous && heading.level > previous.level + 1) {
        issues.push(
          tx(
            isAr,
            `Skipped from H${previous.level} to H${heading.level}: ${heading.text || "empty heading"}`,
            `تم التخطي من H${previous.level} إلى H${heading.level}: ${heading.text || "عنوان فارغ"}`,
          ),
        );
      }
      if (!heading.text) issues.push(tx(isAr, `Empty H${heading.level} heading.`, `عنوان H${heading.level} فارغ.`));
      if (heading.text.length > 80) {
        issues.push(tx(isAr, `Long H${heading.level} heading: ${heading.text}`, `عنوان H${heading.level} طويل: ${heading.text}`));
      }
    });

    return { headings, counts, issues };
  }, [doc, isAr]);

  return (
    <ToolShell
      isAr={isAr}
      output={
        html.trim() ? (
          <div className="space-y-5">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
              {report.counts.map((item) => (
                <div key={item.level} className="rounded-lg bg-white border border-slate-200 p-3 text-center">
                  <p className="text-xs font-semibold text-slate-500">H{item.level}</p>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">{item.count}</p>
                </div>
              ))}
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-3">{tx(isAr, "Issues", "المشاكل")}</h3>
              {report.issues.length ? (
                <ul className="space-y-2">
                  {report.issues.map((issue) => (
                    <li key={issue} className="text-sm text-amber-700">{issue}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-green-700">{tx(isAr, "No major heading issues found.", "لم يتم العثور على مشاكل كبيرة في العناوين.")}</p>
              )}
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-3">{tx(isAr, "Heading outline", "هيكل العناوين")}</h3>
              <div className="space-y-2">
                {report.headings.map((heading) => (
                  <div key={`${heading.index}-${heading.text}`} className="text-sm text-slate-700" style={{ paddingInlineStart: `${Math.max(0, heading.level - 1) * 14}px` }}>
                    <span className="font-bold text-[#7143E0]">H{heading.level}</span> {heading.text || "-"}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-slate-600">{getLocalizedText(toolUiCopy.noData, isAr)}</p>
        )
      }
    >
      <FieldLabel>{tx(isAr, "Paste page HTML", "الصق HTML الصفحة")}</FieldLabel>
      <textarea
        value={html}
        onChange={(event) => setHtml(event.target.value)}
        className="w-full min-h-[360px] rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
        dir="ltr"
      />
    </ToolShell>
  );
}

function SitemapExtractor({ isAr }: { isAr: boolean }) {
  const [xml, setXml] = useState(sampleSitemap);
  const urls = useMemo(() => {
    const matches = Array.from(xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/gi)).map((match) => match[1].trim());
    return Array.from(new Set(matches));
  }, [xml]);

  const hostSummary = useMemo(() => {
    const counts = new Map<string, number>();
    urls.forEach((url) => {
      const host = getHostname(url) || tx(isAr, "Invalid URL", "رابط غير صالح");
      counts.set(host, (counts.get(host) || 0) + 1);
    });
    return Array.from(counts.entries());
  }, [urls, isAr]);

  const output = urls.join("\n");

  return (
    <ToolShell
      isAr={isAr}
      output={
        urls.length ? (
          <div className="space-y-5">
            <div className="rounded-lg bg-white border border-slate-200 p-5">
              <p className="text-sm font-semibold text-slate-500">{tx(isAr, "URLs extracted", "روابط مستخرجة")}</p>
              <p className="mt-2 text-5xl font-extrabold text-[#7143E0]">{urls.length}</p>
            </div>
            <div className="rounded-lg bg-white border border-slate-200 p-4">
              <h3 className="font-bold text-slate-900 mb-3">{tx(isAr, "Hostnames", "النطاقات")}</h3>
              <div className="space-y-2">
                {hostSummary.map(([host, count]) => (
                  <div key={host} className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-700 break-words" dir="ltr">{host}</span>
                    <span className="font-bold text-slate-900">{count}</span>
                  </div>
                ))}
              </div>
            </div>
            <textarea
              readOnly
              value={output}
              className="w-full min-h-[220px] rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-900 overflow-auto"
              dir="ltr"
            />
            <div className="flex justify-end">
              <CopyButton text={output} isAr={isAr} />
            </div>
          </div>
        ) : (
          <p className="text-slate-600">{getLocalizedText(toolUiCopy.noData, isAr)}</p>
        )
      }
    >
      <FieldLabel>{tx(isAr, "Paste XML sitemap", "الصق خريطة الموقع XML")}</FieldLabel>
      <textarea
        value={xml}
        onChange={(event) => setXml(event.target.value)}
        className="w-full min-h-[360px] rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
        dir="ltr"
      />
    </ToolShell>
  );
}

function FaqSchemaGenerator({ isAr }: { isAr: boolean }) {
  const [items, setItems] = useState([
    {
      question: "How long does SEO take in Dubai?",
      answer: "Most Dubai SEO campaigns need 3 to 6 months for meaningful organic growth, depending on competition, site health, content quality, and local authority.",
    },
    {
      question: "Do I need Arabic SEO content?",
      answer: "If your customers search in Arabic, yes. Arabic SEO can unlock local demand that English-only competitors miss across the UAE, Saudi Arabia, and Oman.",
    },
  ]);

  const schema = useMemo(
    () =>
      JSON.stringify(
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items
            .filter((item) => item.question.trim() && item.answer.trim())
            .map((item) => ({
              "@type": "Question",
              name: item.question.trim(),
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer.trim(),
              },
            })),
        },
        null,
        2,
      ),
    [items],
  );

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-4">
          <pre className="max-h-[520px] rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-900 whitespace-pre-wrap break-words overflow-auto" dir="ltr">
            {schema}
          </pre>
          <div className="flex justify-end">
            <CopyButton text={schema} isAr={isAr} />
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="rounded-lg border border-slate-200 p-4 overflow-visible">
            <div className="flex items-center justify-between gap-4 mb-3">
              <p className="font-bold text-slate-900">{tx(isAr, "FAQ", "سؤال")} {index + 1}</p>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => setItems((current) => current.filter((_, itemIndex) => itemIndex !== index))}
                  className="text-slate-400 hover:text-red-500 transition-colors"
                  aria-label={tx(isAr, "Remove FAQ", "حذف السؤال")}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
            <FieldLabel>{tx(isAr, "Question", "السؤال")}</FieldLabel>
            <input
              value={item.question}
              onChange={(event) =>
                setItems((current) =>
                  current.map((entry, itemIndex) =>
                    itemIndex === index ? { ...entry, question: event.target.value } : entry,
                  ),
                )
              }
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
            />
            <div className="mt-3">
              <FieldLabel>{tx(isAr, "Answer", "الإجابة")}</FieldLabel>
              <textarea
                value={item.answer}
                onChange={(event) =>
                  setItems((current) =>
                    current.map((entry, itemIndex) =>
                      itemIndex === index ? { ...entry, answer: event.target.value } : entry,
                    ),
                  )
                }
                className="w-full min-h-[110px] rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        type="button"
        onClick={() => setItems((current) => [...current, { question: "", answer: "" }])}
        className="mt-4 rounded-full bg-[#7143E0] hover:bg-[#5d35bd] text-white"
      >
        {tx(isAr, "Add FAQ", "أضف سؤالاً")}
      </Button>
    </ToolShell>
  );
}

function RobotsGenerator({ isAr }: { isAr: boolean }) {
  const [siteUrl, setSiteUrl] = useState("https://example.com");
  const [mode, setMode] = useState("public");
  const [crawlDelay, setCrawlDelay] = useState("1");
  const [allowAi, setAllowAi] = useState(true);

  const sitemapUrl = `${siteUrl.replace(/\/$/, "")}/sitemap.xml`;
  const robots = useMemo(() => {
    const lines = ["User-agent: *"];
    if (mode === "blocked") {
      lines.push("Disallow: /");
    } else {
      lines.push("Allow: /");
      if (mode === "private") {
        lines.push("Disallow: /admin/");
        lines.push("Disallow: /login/");
        lines.push("Disallow: /search");
        lines.push("Disallow: /*?*");
      }
    }
    if (crawlDelay.trim()) lines.push(`Crawl-delay: ${crawlDelay.trim()}`);
    lines.push("");

    if (allowAi) {
      ["GPTBot", "ClaudeBot", "PerplexityBot", "Google-Extended", "Applebot-Extended"].forEach((bot) => {
        lines.push(`User-agent: ${bot}`);
        lines.push("Allow: /");
        lines.push("");
      });
    }

    lines.push(`Sitemap: ${sitemapUrl}`);
    return lines.join("\n");
  }, [allowAi, crawlDelay, mode, sitemapUrl]);

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-4">
          <pre className="rounded-lg border border-slate-200 bg-white p-4 text-xs text-slate-900 whitespace-pre-wrap break-words overflow-auto" dir="ltr">
            {robots}
          </pre>
          <div className="flex justify-end">
            <CopyButton text={robots} isAr={isAr} />
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <FieldLabel>{tx(isAr, "Site URL", "رابط الموقع")}</FieldLabel>
          <input
            value={siteUrl}
            onChange={(event) => setSiteUrl(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
            dir="ltr"
          />
        </div>
        <div>
          <FieldLabel>{tx(isAr, "Crawler mode", "وضع الزحف")}</FieldLabel>
          <select
            value={mode}
            onChange={(event) => setMode(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
          >
            <option value="public">{tx(isAr, "Public site, allow important pages", "موقع عام، اسمح بالصفحات المهمة")}</option>
            <option value="private">{tx(isAr, "Block private and noisy paths", "احجب المسارات الخاصة والمزعجة")}</option>
            <option value="blocked">{tx(isAr, "Block all crawling", "احجب كل الزحف")}</option>
          </select>
        </div>
        <div>
          <FieldLabel>{tx(isAr, "Crawl delay", "تأخير الزحف")}</FieldLabel>
          <input
            value={crawlDelay}
            onChange={(event) => setCrawlDelay(event.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
            dir="ltr"
          />
        </div>
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm font-semibold text-slate-800">
          <input
            type="checkbox"
            checked={allowAi}
            onChange={(event) => setAllowAi(event.target.checked)}
            className="h-4 w-4 accent-[#7143E0]"
          />
          {tx(isAr, "Allow reputable AI crawlers for GEO/AEO visibility", "السماح بزواحف الذكاء الاصطناعي الموثوقة لدعم GEO/AEO")}
        </label>
      </div>
    </ToolShell>
  );
}

function OpenGraphChecker({ isAr }: { isAr: boolean }) {
  const [html, setHtml] = useState(sampleHtml);
  const doc = useMemo(() => parseHtml(html), [html]);
  const tags = useMemo(
    () => ({
      title: getMeta(doc, 'meta[property="og:title"]'),
      description: getMeta(doc, 'meta[property="og:description"]'),
      image: getMeta(doc, 'meta[property="og:image"]'),
      url: getMeta(doc, 'meta[property="og:url"]'),
      type: getMeta(doc, 'meta[property="og:type"]'),
      twitter: getMeta(doc, 'meta[name="twitter:card"]'),
    }),
    [doc],
  );

  const required = [
    { key: "title", label: "og:title" },
    { key: "description", label: "og:description" },
    { key: "image", label: "og:image" },
    { key: "url", label: "og:url" },
    { key: "type", label: "og:type" },
    { key: "twitter", label: "twitter:card" },
  ] as const;

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-5">
          <div className="rounded-xl bg-white border border-slate-200 overflow-hidden">
            <div className="h-40 bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
              {tags.image ? <span className="break-all px-4" dir="ltr">{tags.image}</span> : tx(isAr, "No image found", "لا توجد صورة")}
            </div>
            <div className="p-4">
              <p className="text-xs uppercase text-slate-400" dir="ltr">{getHostname(tags.url) || "seo.constantlabs.ai"}</p>
              <h3 className="mt-1 font-bold text-slate-900">{tags.title || tx(isAr, "No social title", "لا يوجد عنوان سوشيال")}</h3>
              <p className="mt-2 text-sm text-slate-600">{tags.description || tx(isAr, "No social description", "لا يوجد وصف سوشيال")}</p>
            </div>
          </div>
          <div className="space-y-3">
            {required.map((item) => {
              const value = tags[item.key];
              return (
                <div key={item.key} className="flex items-start justify-between gap-4 rounded-lg bg-white border border-slate-200 p-4">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-600 break-words" dir="auto">{value || "-"}</p>
                  </div>
                  <StatusBadge tone={value ? "good" : "missing"}>
                    {value ? getLocalizedText(toolUiCopy.good, isAr) : getLocalizedText(toolUiCopy.missing, isAr)}
                  </StatusBadge>
                </div>
              );
            })}
          </div>
        </div>
      }
    >
      <FieldLabel>{tx(isAr, "Paste page HTML", "الصق HTML الصفحة")}</FieldLabel>
      <textarea
        value={html}
        onChange={(event) => setHtml(event.target.value)}
        className="w-full min-h-[360px] rounded-lg border border-slate-200 bg-white p-4 font-mono text-xs text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto"
        dir="ltr"
      />
    </ToolShell>
  );
}

function BandwidthCalculator({ isAr }: { isAr: boolean }) {
  const [visits, setVisits] = useState(25000);
  const [views, setViews] = useState(2.4);
  const [pageSize, setPageSize] = useState(2.2);
  const [cacheHit, setCacheHit] = useState(45);
  const monthlyGb = Math.max(0, (visits * views * pageSize * (1 - cacheHit / 100)) / 1024);
  const annualTb = (monthlyGb * 12) / 1024;
  const tier = monthlyGb < 50 ? "starter" : monthlyGb < 500 ? "growth" : "scale";

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-5">
          <div className="rounded-lg bg-white border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-500">{tx(isAr, "Estimated monthly bandwidth", "الاستهلاك الشهري المتوقع")}</p>
            <p className="mt-2 text-5xl font-extrabold text-[#7143E0]">{monthlyGb.toFixed(1)} GB</p>
            <p className="mt-2 text-sm text-slate-600">{annualTb.toFixed(2)} TB {tx(isAr, "per year", "سنوياً")}</p>
          </div>
          <div className="rounded-lg bg-white border border-slate-200 p-5">
            <p className="text-sm font-bold text-slate-900">{tx(isAr, "Hosting recommendation", "توصية الاستضافة")}</p>
            <p className="mt-2 text-slate-700">
              {tier === "starter"
                ? tx(isAr, "A standard managed hosting plan or Vercel-style deployment should be enough if assets are optimized.", "خطة استضافة مُدارة عادية أو نشر شبيه بـ Vercel يكفي إذا كانت الملفات محسنة.")
                : tier === "growth"
                  ? tx(isAr, "Use CDN caching, image compression, and bandwidth monitoring before scaling content campaigns.", "استخدم CDN وضغط الصور ومراقبة البيانات قبل توسيع حملات المحتوى.")
                  : tx(isAr, "Plan for strong CDN coverage, image optimization, and traffic alerts before major SEO growth pushes.", "خطط لتغطية CDN قوية وتحسين الصور وتنبيهات الزيارات قبل دفعات SEO كبيرة.")}
            </p>
          </div>
        </div>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: tx(isAr, "Monthly visits", "الزيارات الشهرية"), value: visits, setter: setVisits },
          { label: tx(isAr, "Page views per visit", "مشاهدات الصفحة لكل زيارة"), value: views, setter: setViews },
          { label: tx(isAr, "Average page size MB", "متوسط حجم الصفحة MB"), value: pageSize, setter: setPageSize },
          { label: tx(isAr, "Cache hit rate percent", "نسبة التخزين المؤقت"), value: cacheHit, setter: setCacheHit },
        ].map((field) => (
          <div key={field.label}>
            <FieldLabel>{field.label}</FieldLabel>
            <input
              type="number"
              value={field.value}
              onChange={(event) => field.setter(Number(event.target.value))}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
              dir="ltr"
            />
          </div>
        ))}
      </div>
    </ToolShell>
  );
}

function CostCalculator({ isAr }: { isAr: boolean }) {
  const [pages, setPages] = useState(8);
  const [seoPages, setSeoPages] = useState(20);
  const [languages, setLanguages] = useState(2);
  const [ecommerce, setEcommerce] = useState(false);
  const [booking, setBooking] = useState(true);

  const base = 2500;
  const estimate = base + pages * 350 + seoPages * 180 + Math.max(0, languages - 1) * (pages + seoPages) * 120 + (ecommerce ? 4500 : 0) + (booking ? 1500 : 0);
  const low = Math.round(estimate * 0.85 / 100) * 100;
  const high = Math.round(estimate * 1.25 / 100) * 100;

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-5">
          <div className="rounded-lg bg-white border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-500">{tx(isAr, "Planning range", "النطاق التخطيطي")}</p>
            <p className="mt-2 text-4xl font-extrabold text-[#7143E0]" dir="ltr">
              AED {low.toLocaleString()} - {high.toLocaleString()}
            </p>
            <p className="mt-3 text-sm text-slate-600">
              {tx(isAr, "This is a planning estimate for scope discussion, not a final quote.", "هذا تقدير تخطيطي للنقاش حول النطاق وليس عرض سعر نهائياً.")}
            </p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-[#7143E0] hover:underline">
            {getLocalizedText(toolUiCopy.freeAudit, isAr)}
            <ArrowRight className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
          </Link>
        </div>
      }
    >
      <div className="grid sm:grid-cols-2 gap-4">
        {[
          { label: tx(isAr, "Core pages", "الصفحات الأساسية"), value: pages, setter: setPages },
          { label: tx(isAr, "SEO landing pages", "صفحات هبوط SEO"), value: seoPages, setter: setSeoPages },
          { label: tx(isAr, "Languages", "اللغات"), value: languages, setter: setLanguages },
        ].map((field) => (
          <div key={field.label}>
            <FieldLabel>{field.label}</FieldLabel>
            <input
              type="number"
              value={field.value}
              min={0}
              onChange={(event) => field.setter(Number(event.target.value))}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15"
              dir="ltr"
            />
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-3">
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm font-semibold text-slate-800">
          <input type="checkbox" checked={booking} onChange={(event) => setBooking(event.target.checked)} className="h-4 w-4 accent-[#7143E0]" />
          {tx(isAr, "Booking or lead form integration", "تكامل الحجز أو نموذج العملاء المحتملين")}
        </label>
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm font-semibold text-slate-800">
          <input type="checkbox" checked={ecommerce} onChange={(event) => setEcommerce(event.target.checked)} className="h-4 w-4 accent-[#7143E0]" />
          {tx(isAr, "Ecommerce or checkout", "تجارة إلكترونية أو دفع")}
        </label>
      </div>
    </ToolShell>
  );
}

function YouTubeSeoChecker({ isAr }: { isAr: boolean }) {
  const [keyword, setKeyword] = useState("seo dubai");
  const [title, setTitle] = useState("SEO Dubai: How to Rank Your Business in 2026");
  const [description, setDescription] = useState("Learn how Dubai businesses can improve Google rankings with technical SEO, Arabic content, local SEO, and AI search optimization. Book a free audit with ConstantSEO.");
  const [tags, setTags] = useState("seo dubai, local seo uae, arabic seo, google rankings");
  const [hasChapters, setHasChapters] = useState(true);

  const checks = [
    {
      label: tx(isAr, "Keyword in title", "الكلمة في العنوان"),
      good: title.toLowerCase().includes(keyword.toLowerCase()),
    },
    {
      label: tx(isAr, "Title length 35-70 characters", "طول العنوان 35-70 حرفاً"),
      good: title.length >= 35 && title.length <= 70,
    },
    {
      label: tx(isAr, "Description has useful context", "الوصف يحتوي على سياق مفيد"),
      good: description.length >= 120,
    },
    {
      label: tx(isAr, "Description includes call to action", "الوصف يتضمن نداء إجراء"),
      good: /(book|call|audit|subscribe|visit|contact|احجز|تواصل|اشترك)/i.test(description),
    },
    {
      label: tx(isAr, "At least 4 tags", "أربع وسوم على الأقل"),
      good: tags.split(",").map((tag) => tag.trim()).filter(Boolean).length >= 4,
    },
    {
      label: tx(isAr, "Chapters included", "الفصول موجودة"),
      good: hasChapters,
    },
  ];
  const score = Math.round((checks.filter((check) => check.good).length / checks.length) * 100);

  return (
    <ToolShell
      isAr={isAr}
      output={
        <div className="space-y-5">
          <div className="rounded-lg bg-white border border-slate-200 p-5">
            <p className="text-sm font-semibold text-slate-500">{tx(isAr, "Video SEO score", "تقييم SEO للفيديو")}</p>
            <p className="mt-2 text-5xl font-extrabold text-[#7143E0]">{score}</p>
          </div>
          <div className="space-y-3">
            {checks.map((check) => (
              <div key={check.label} className="flex items-center justify-between gap-4 rounded-lg bg-white border border-slate-200 p-4">
                <p className="text-sm font-bold text-slate-900">{check.label}</p>
                <StatusBadge tone={check.good ? "good" : "warning"}>
                  {check.good ? getLocalizedText(toolUiCopy.good, isAr) : getLocalizedText(toolUiCopy.warning, isAr)}
                </StatusBadge>
              </div>
            ))}
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        <div>
          <FieldLabel>{tx(isAr, "Target keyword", "الكلمة المستهدفة")}</FieldLabel>
          <input value={keyword} onChange={(event) => setKeyword(event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15" />
        </div>
        <div>
          <FieldLabel>{tx(isAr, "Video title", "عنوان الفيديو")}</FieldLabel>
          <input value={title} onChange={(event) => setTitle(event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15" />
        </div>
        <div>
          <FieldLabel>{tx(isAr, "Description", "الوصف")}</FieldLabel>
          <textarea value={description} onChange={(event) => setDescription(event.target.value)} className="w-full min-h-[130px] rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15 overflow-auto" />
        </div>
        <div>
          <FieldLabel>{tx(isAr, "Tags separated by commas", "وسوم مفصولة بفواصل")}</FieldLabel>
          <input value={tags} onChange={(event) => setTags(event.target.value)} className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#7143E0] focus:ring-2 focus:ring-[#7143E0]/15" />
        </div>
        <label className="flex items-center gap-3 rounded-lg border border-slate-200 p-4 text-sm font-semibold text-slate-800">
          <input type="checkbox" checked={hasChapters} onChange={(event) => setHasChapters(event.target.checked)} className="h-4 w-4 accent-[#7143E0]" />
          {tx(isAr, "Video includes chapters or timestamps", "الفيديو يحتوي على فصول أو طوابع زمنية")}
        </label>
      </div>
    </ToolShell>
  );
}

function ToolWorkspace({ slug, isAr }: { slug: string; isAr: boolean }) {
  switch (slug) {
    case "bulk-meta-title-description-checker":
      return <BulkMetaChecker isAr={isAr} />;
    case "meta-tag-analyzer":
      return <MetaTagAnalyzer isAr={isAr} />;
    case "heading-tag-checker":
      return <HeadingChecker isAr={isAr} />;
    case "sitemap-url-extractor":
      return <SitemapExtractor isAr={isAr} />;
    case "faq-schema-generator":
      return <FaqSchemaGenerator isAr={isAr} />;
    case "robots-txt-generator":
      return <RobotsGenerator isAr={isAr} />;
    case "open-graph-checker":
      return <OpenGraphChecker isAr={isAr} />;
    case "website-bandwidth-calculator":
      return <BandwidthCalculator isAr={isAr} />;
    case "website-cost-calculator":
      return <CostCalculator isAr={isAr} />;
    case "youtube-video-seo-checker":
      return <YouTubeSeoChecker isAr={isAr} />;
    default:
      return null;
  }
}

const ToolDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isAr } = useLanguage();
  const tool = getToolBySlug(slug);

  if (!tool) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <div className="max-w-3xl mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900">
            {tx(isAr, "Tool Not Found", "الأداة غير موجودة")}
          </h1>
          <p className="mt-4 text-slate-600">
            {tx(isAr, "The free SEO tool you are looking for does not exist.", "أداة SEO المجانية التي تبحث عنها غير موجودة.")}
          </p>
          <Link to="/tools" className="mt-8 inline-flex items-center gap-2 font-bold text-[#7143E0] hover:underline">
            {getLocalizedText(toolUiCopy.allTools, isAr)}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = iconMap[tool.icon as keyof typeof iconMap] || SearchCheck;
  const title = getLocalizedText(tool.title, isAr);
  const metaTitle = getLocalizedText(tool.metaTitle, isAr);
  const metaDescription = getLocalizedText(tool.metaDescription, isAr);
  const relatedTools = freeTools
    .filter((item) => item.slug !== tool.slug && item.category === tool.category)
    .slice(0, 3);

  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.title.en,
    url: `${BASE_URL}/tools/${tool.slug}`,
    applicationCategory: "SEOApplication",
    operatingSystem: "Web",
    description: tool.metaDescription.en,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AED",
    },
    provider: {
      "@type": "Organization",
      name: "ConstantSEO",
      url: BASE_URL,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question.en,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer.en,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={metaTitle}
        description={metaDescription}
        path={`/tools/${tool.slug}`}
        breadcrumbs={[
          { name: "Free SEO Tools", path: "/tools" },
          { name: tool.title.en, path: `/tools/${tool.slug}` },
        ]}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(appSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Navbar />

      <PageHero
        eyebrow={getLocalizedText(toolUiCopy.allTools, isAr)}
        title={title}
        lede={getLocalizedText(tool.shortDescription, isAr)}
        meta={<Icon className="h-6 w-6 text-evidence-blue" aria-hidden="true" />}
        actions={<Link to="/tools" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{getLocalizedText(toolUiCopy.allTools, isAr)}</Link>}
      />

      <section className="border-b border-line bg-paper/70 py-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="border border-line bg-paper p-6 md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-evidence-blue">
              {getLocalizedText(toolUiCopy.quickAnswer, isAr)}
            </p>
            <p className="text-lg leading-relaxed text-ink/70">
              {getLocalizedText(tool.quickAnswer, isAr)}
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-paper py-14 md:py-16">
        <div className="max-w-6xl mx-auto px-4 overflow-visible">
          <ToolWorkspace slug={tool.slug} isAr={isAr} />
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-10">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {getLocalizedText(toolUiCopy.useCases, isAr)}
              </h2>
              <div className="mt-6 space-y-3">
                {tool.useCases.map((item) => (
                  <div key={item.en} className="flex items-start gap-3 rounded-lg bg-white border border-slate-200 p-4">
                    <CheckCircle2 className="w-5 h-5 text-[#7143E0] shrink-0 mt-0.5" />
                    <p className="text-slate-700">{getLocalizedText(item, isAr)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">
                {getLocalizedText(toolUiCopy.faqTitle, isAr)}
              </h2>
              <div className="mt-6 space-y-4">
                {tool.faqs.map((faq) => (
                  <div key={faq.question.en} className="rounded-lg bg-white border border-slate-200 p-5">
                    <h3 className="font-bold text-slate-900">
                      {getLocalizedText(faq.question, isAr)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {getLocalizedText(faq.answer, isAr)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {relatedTools.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">
                {getLocalizedText(toolUiCopy.relatedTools, isAr)}
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedTools.map((item) => {
                  const RelatedIcon = iconMap[item.icon as keyof typeof iconMap] || SearchCheck;
                  return (
                    <Link
                      key={item.slug}
                      to={`/tools/${item.slug}`}
                      className="group rounded-lg bg-white border border-slate-200 p-5 hover:shadow-md transition-all"
                    >
                      <RelatedIcon className="w-5 h-5 text-[#7143E0] mb-3" />
                      <h3 className="font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors">
                        {getLocalizedText(item.title, isAr)}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">
                        {getLocalizedText(item.shortDescription, isAr)}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ToolDetail;
