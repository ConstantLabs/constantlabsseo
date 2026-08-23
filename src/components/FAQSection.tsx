import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/i18n/LanguageContext";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Display, MonoLabel } from "@/components/marketing/editorial";

const faqKeys = ["faq1", "faq2", "faq3", "faq4", "faq5", "faq6", "faq7", "faq8"];

export const FAQSection = () => {
  const { t } = useLanguage();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqKeys.map((fk) => ({
      "@type": "Question",
      "name": t(`${fk}.q`),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t(`${fk}.a`),
      },
    })),
  };

  return (
    <section id="faq" className="border-y border-line bg-void py-20 text-paper md:py-28">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="mx-auto mb-4 h-px w-12 bg-signal" />
          <MonoLabel className="mb-2 text-center">{t("faq.label")}</MonoLabel>
          <Display size="md" className="mx-auto text-center">
            {t("faq.title")}
          </Display>
        </div>

        {/* Accordion */}
        <div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((fk) => (
              <AccordionItem
                key={fk}
                value={fk}
                className="border border-line bg-ink px-6 transition-colors data-[state=open]:border-signal/60"
              >
                <AccordionTrigger className="py-5 text-start text-base font-semibold text-paper hover:no-underline data-[state=open]:text-signal">
                  {t(`${fk}.q`)}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-paper/65">
                  {t(`${fk}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
