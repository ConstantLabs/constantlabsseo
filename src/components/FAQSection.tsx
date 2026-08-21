import { Helmet } from 'react-helmet-async';
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="mx-auto mb-4 h-1 w-12 bg-lime" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-lime">
            {t("faq.label")}
          </p>
          <h2 className="font-heading text-5xl uppercase leading-[0.88] tracking-[-0.035em] text-paper md:text-6xl">
            {t("faq.title")}
          </h2>
        </div>

        {/* Accordion */}
        <div
          
          
          
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((fk, i) => (
              <AccordionItem
                key={fk}
                value={fk}
                className="border border-paper/25 bg-ink px-6 data-[state=open]:bg-paper data-[state=open]:text-ink"
              >
                <AccordionTrigger className="py-5 text-left text-base font-semibold text-paper hover:no-underline data-[state=open]:text-ink">
                  {t(`${fk}.q`)}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-paper/65 data-[state=open]:text-ink/70">
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
