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
  { icon: Mail, label: "Email", value: "akhmad@constantlabs.ai", href: "mailto:akhmad@constantlabs.ai" },
  { icon: Phone, label: "Phone", value: "+971 56 149 5656", href: "tel:+971561495656" },
  { icon: MapPin, label: "Location", value: "Dubai, Al Awir, UAE", href: null },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with us", href: "https://wa.me/971561495656" },
  { icon: Clock, label: "Hours", value: "Sun–Thu: 9AM–6PM GST", href: null },
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
    const text = encodeURIComponent(
      `Hi ConstantSEO! I'd like a free SEO audit.\n\nName: ${formData.name}\nEmail: ${formData.email}${formData.website ? `\nWebsite: ${formData.website}` : ""}${formData.message ? `\n\n${formData.message}` : ""}`
    );
    window.open(`https://wa.me/971561495656?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Contact Us — ConstantSEO"
        description="Get in touch with ConstantSEO by Constant Labs for a free AI-powered SEO audit. Based in Dubai, serving the entire GCC region."
        path="/contact"
      />
      <Navbar />

      <PageHero eyebrow={t("nav.contact")} title={t("nav.contact")} lede={t("inner.contact.lede")} />

      {/* Content */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="border border-line bg-paper p-6 sm:p-8">
            <h2 className="mb-6 font-heading text-3xl uppercase text-ink">Get Your Free Audit</h2>
            {submitted && (
              <div className="mb-6 border border-line bg-lime/20 p-4 text-sm font-medium text-ink">
                Opening WhatsApp with your request.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Website URL</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder="https://yoursite.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full resize-none border border-line bg-paper px-4 py-3 text-ink outline-none focus:ring-2 focus:ring-lime transition-all"
                  placeholder="Tell us about your business and goals..."
                />
              </div>
              <Button
                type="submit"
                className="w-full border border-ink bg-lime px-6 py-3 text-sm font-bold text-ink hover:bg-lime/80"
              >
                Get Free Audit
                <ArrowRight className={`w-4 h-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="mb-6 font-heading text-3xl uppercase text-ink">Get in Touch</h2>
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 border border-line bg-paper p-4 hover:bg-lime/20 transition-colors">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-line bg-ink">
                      <Icon className="h-5 w-5 text-lime" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink/60">{item.label}</p>
                      <p className="text-base font-semibold text-ink">{item.value}</p>
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
              <h3 className="text-lg font-bold mb-2">Free AI SEO Audit</h3>
              <p className="text-sm text-gray-200 mb-4">
                Every consultation starts with a review of your website. We will outline the available next steps.
              </p>
              <div className="flex items-center gap-2 text-lime text-sm font-medium">
                <span>Response timing depends on request volume.</span>
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
