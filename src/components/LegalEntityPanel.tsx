import { legal } from "@/data/legal";
import { useLanguage } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

/**
 * The registered-entity disclosure.
 *
 * One component, used on About, Privacy and Terms, so the licence number is
 * written once and read three times.
 *
 * Deliberately not an address block: `src/data/legal.ts` explains why the street
 * and P.O. box are not published. What a client, a bank or a payment processor
 * needs is the registered name and the licence number, which they verify with
 * DET rather than by posting a letter.
 */
export const LegalEntityPanel = ({ className }: { className?: string }) => {
  const { isAr } = useLanguage();
  const copy = isAr ? content.ar : content.en;

  const rows: Array<[string, string]> = [
    [copy.registeredName, legal.legalName],
    [copy.tradingAs, `${legal.productName} — ${legal.tradeName}`],
    [copy.legalForm, `${legal.licence.legalForm} · ${legal.licence.type}`],
    [copy.licenceNo, legal.licence.number],
    [copy.registerNo, legal.licence.registerNumber],
    [copy.authority, legal.licence.authority],
    [copy.validUntil, formatDate(legal.licence.expiresOn, isAr)],
    [copy.jurisdiction, `${legal.address.locality}, ${legal.address.country}`],
  ];

  return (
    <div className={cn("border-s-2 border-line ps-5", className)}>
      <h2 className="mb-4 font-heading text-2xl uppercase text-ink">{copy.heading}</h2>
      <p className="mb-6 leading-relaxed text-ink/70">{copy.lede}</p>

      <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="tv-label text-[0.625rem] leading-4 tracking-[0.18em] text-ink/45">
              {label}
            </dt>
            {/* LTR on every value: a licence number inside an Arabic paragraph
                otherwise reorders into a different number. */}
            <dd className="mt-1 text-sm text-ink [unicode-bidi:isolate]" dir="ltr">
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-6 border-t border-line pt-5">
        <p className="tv-label text-[0.625rem] leading-4 tracking-[0.18em] text-ink/45">
          {copy.activities}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-ink/70" dir="ltr">
          {legal.activities.join(" · ")}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 border-t border-line pt-5 text-sm">
        <a
          href={`mailto:${legal.email}`}
          dir="ltr"
          className="text-ink underline underline-offset-4 [unicode-bidi:isolate]"
        >
          {legal.email}
        </a>
        <a
          href={`tel:${legal.phoneE164}`}
          dir="ltr"
          className="text-ink underline underline-offset-4 [unicode-bidi:isolate]"
        >
          {legal.phone}
        </a>
      </div>
    </div>
  );
};

const content = {
  en: {
    heading: "Company details",
    lede:
      "ConstantSEO is a product of Constant Labs, not a separate company. The licence below is held in the Emirate of Dubai and can be verified against its number with the Dubai Department of Economy and Tourism.",
    registeredName: "Registered name",
    tradingAs: "Trading as",
    legalForm: "Legal form",
    licenceNo: "Trade licence no.",
    registerNo: "Commercial register no.",
    authority: "Issuing authority",
    validUntil: "Licence valid until",
    jurisdiction: "Jurisdiction",
    activities: "Licensed activities",
  },
  ar: {
    heading: "بيانات الشركة",
    lede:
      "ConstantSEO هو أحد منتجات Constant Labs وليس شركة منفصلة. الرخصة أدناه صادرة في إمارة دبي ويمكن التحقق منها برقمها لدى دائرة الاقتصاد والسياحة في دبي.",
    registeredName: "الاسم المسجّل",
    tradingAs: "يُتداول باسم",
    legalForm: "الشكل القانوني",
    licenceNo: "رقم الرخصة التجارية",
    registerNo: "رقم السجل التجاري",
    authority: "الجهة المُصدِرة",
    validUntil: "الرخصة سارية حتى",
    jurisdiction: "الاختصاص القضائي",
    activities: "الأنشطة المرخّصة",
  },
} as const;

/* Written out rather than localised through `toLocaleDateString`, which renders
   a different string depending on the visitor's browser locale. A licence expiry
   that reads 09/15/2027 to one person and 15/09/2027 to another is exactly the
   ambiguity a disclosure block exists to remove. */
function formatDate(iso: string, isAr: boolean) {
  const months = isAr
    ? ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
       "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
    : ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"];
  const [year, month, day] = iso.split("-");
  return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
}
