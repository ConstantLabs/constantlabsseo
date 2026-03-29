import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, ArrowRight, Clock } from "lucide-react";

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

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1
            className="text-4xl md:text-5xl font-extrabold"
            style={{ color: "#ffffff" }}
          >
            {t("nav.contact")}
          </h1>
          <p
            className="mt-4 text-lg text-gray-200 max-w-xl mx-auto"
          >
            Ready to dominate search? Get a free AI-powered audit of your website.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Audit</h2>
            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800 text-sm font-medium">
                Opening WhatsApp — we'll reply within a few hours!
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-[#7143E0]/20 focus:border-[#7143E0] transition-all"
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
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-[#7143E0]/20 focus:border-[#7143E0] transition-all"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Website URL</label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-[#7143E0]/20 focus:border-[#7143E0] transition-all"
                  placeholder="https://yoursite.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-slate-900 outline-none focus:ring-2 focus:ring-[#7143E0]/20 focus:border-[#7143E0] transition-all resize-none"
                  placeholder="Tell us about your business and goals..."
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FECD4D] to-[#e5b030] hover:from-[#ffe066] hover:to-[#FECD4D] text-[#2B124C] font-bold rounded-lg px-6 py-3 text-sm shadow-lg"
              >
                Get Free Audit
                <ArrowRight className={`w-4 h-4 ${isAr ? "mr-2 rotate-180" : "ml-2"}`} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            <div className="space-y-4">
              {contactInfo.map((item, i) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-slate-100 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[#F0F0F0] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#7143E0]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-500">{item.label}</p>
                      <p className="text-base font-semibold text-slate-900">{item.value}</p>
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

            <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-[#2B124C] to-[#1a0a30] text-white">
              <h3 className="text-lg font-bold mb-2">Free AI SEO Audit</h3>
              <p className="text-sm text-gray-200 mb-4">
                Every consultation starts with a comprehensive AI-powered audit of your website — at no cost. We'll show you exactly where you stand and what needs to be done.
              </p>
              <div className="flex items-center gap-2 text-[#FECD4D] text-sm font-medium">
                <span>Takes less than 24 hours</span>
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
