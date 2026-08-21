import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

const contactInfo = [
  { icon: Mail, key: "email", value: "akhmad@constantlabs.ai", href: "mailto:akhmad@constantlabs.ai", isolate: true },
  { icon: Phone, key: "phone", value: "+971 56 149 5656", href: "tel:+971561495656", isolate: true },
  { icon: MapPin, key: "location", href: null },
  { icon: MessageCircle, key: "whatsapp", href: "https://wa.me/971561495656" },
  { icon: Clock, key: "hours", href: null },
];

const Contact = () => {
  const { t, isAr } = useLanguage();
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({ name: "", email: "", website: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const websiteParam = searchParams.get("website");
    if (websiteParam) {
      setFormData((prev) => ({ ...prev, website: websiteParam }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(isAr
      ? `مرحباً ConstantSEO، أود طلب مراجعة SEO.\n\nالاسم: ${formData.name}\nالبريد: ${formData.email}${formData.website ? `\nالموقع: ${formData.website}` : ""}${formData.message ? `\n\n${formData.message}` : ""}`
      : `Hi ConstantSEO! I'd like an SEO review.\n\nName: ${formData.name}\nEmail: ${formData.email}${formData.website ? `\nWebsite: ${formData.website}` : ""}${formData.message ? `\n\n${formData.message}` : ""}`
    );
    window.open(`https://wa.me/971561495656?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      <SEO
        title={t("contactPage.seo.title")}
        description={t("contactPage.seo.description")}
        path="/contact"
      />
      <Navbar />

      <PageHero eyebrow={t("nav.contact")} title={t("nav.contact")} lede={t("inner.contact.lede")} />

      {/* Content */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h2 className="mb-6 font-heading text-3xl uppercase text-ink">{t("contactPage.form.title")}</h2>
            {submitted && (
              <div role="status" aria-live="polite" className="mb-6 border border-line bg-lime/20 p-4 text-sm font-medium text-ink">
                {t("contactPage.form.status")}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink/80">{t("contactPage.form.name")}</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder={t("contactPage.form.namePlaceholder")}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink/80">{t("contactPage.form.email")}</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder={t("contactPage.form.emailPlaceholder")}
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="contact-website" className="mb-1.5 block text-sm font-medium text-ink/80">{t("contactPage.form.website")}</label>
                <input
                  id="contact-website"
                  name="website"
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder={t("contactPage.form.websitePlaceholder")}
                  dir="ltr"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink/80">{t("contactPage.form.message")}</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder={t("contactPage.form.messagePlaceholder")}
                />
              </div>
              <Button
                type="submit"
                className="w-full border border-ink bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime/80"
              >
                {t("contactPage.form.submit")}
                <ArrowRight className={`w-4 h-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 font-heading text-3xl uppercase text-ink">{t("contactPage.info.title")}</h2>
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 border border-line bg-paper p-4 hover:bg-lime/20 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink">
                      <Icon className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink/70">{t(`contactPage.info.${item.key}.label`)}</p>
                      <p dir={item.isolate ? "ltr" : undefined} className={`text-base font-semibold text-ink ${item.isolate ? "[unicode-bidi:isolate]" : ""}`}>{item.value ?? t(`contactPage.info.${item.key}.value`)}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a key={i} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={i}>{content}</div>
                );
              })}
            </div>

            <div className="mt-8 border border-line bg-ink p-6 text-paper">
              <h3 className="mb-2 text-lg font-bold">{t("contactPage.info.panelTitle")}</h3>
              <p className="mb-4 text-sm text-paper">{t("contactPage.info.panelCopy")}</p>
              <div className="flex items-center gap-2 text-lime text-sm font-medium">
                <span>{t("contactPage.info.response")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
