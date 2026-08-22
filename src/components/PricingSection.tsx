import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Star, MessageCircle, Mail, Send, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PricingTier {
  key: string;
  featured?: boolean;
  features: string[];
}

const tiers: PricingTier[] = [
  {
    key: "starter",
    features: [
      "pricing.starter.f1",
      "pricing.starter.f2",
      "pricing.starter.f3",
      "pricing.starter.f4",
      "pricing.starter.f5",
    ],
  },
  {
    key: "growth",
    featured: true,
    features: [
      "pricing.growth.f1",
      "pricing.growth.f2",
      "pricing.growth.f3",
      "pricing.growth.f4",
      "pricing.growth.f5",
      "pricing.growth.f7",
    ],
  },
  {
    key: "enterprise",
    features: [
      "pricing.enterprise.f1",
      "pricing.enterprise.f2",
      "pricing.enterprise.f3",
      "pricing.enterprise.f4",
      "pricing.enterprise.f5",
      "pricing.enterprise.f7",
    ],
  },
];

export const PricingSection = () => {
  const { t, lang } = useLanguage();
  const [showForm, setShowForm] = useState<"whatsapp" | "email" | null>(null);
  const [sending, setSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <section id="pricing" className="border-y border-line bg-paper py-20 text-ink md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="mx-auto mb-4 h-px w-12 bg-ink" />
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-ink/70">
            {t("pricing.label")}
          </p>
          <h2 className="font-heading text-5xl uppercase leading-[0.88] tracking-[-0.035em] text-ink md:text-6xl">
            {t("pricing.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[17px] text-ink/65">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.key}
              
              
              
              
className={`relative flex flex-col border p-7 !overflow-visible md:p-8 ${
                  tier.featured
                    ? "border-ink bg-ink text-paper"
                    : "border-line bg-paper text-ink"
                }`}
            >
              {/* Tier name */}
              <h3 className={`text-lg font-heading font-bold mb-1 ${tier.featured ? "text-paper" : "text-ink"}`}>
                {t(`pricing.${tier.key}.name`)}
              </h3>
              <p className={`text-sm mb-5 ${tier.featured ? "text-paper" : "text-ink/70"}`}>
                {t(`pricing.${tier.key}.desc`)}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl md:text-4xl font-extrabold ${tier.featured ? "text-paper" : "text-ink"}`}>
                  {t(`pricing.${tier.key}.price`)}
                </span>
                <span className={`ml-2 text-sm font-semibold uppercase tracking-[0.12em] ${tier.featured ? "text-paper/70" : "text-ink/60"}`}>
                  {t("pricing.monthly")}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border ${
                      tier.featured ? "border-paper/40 bg-paper/10" : "border-line bg-lime/20"
                    }`}>
                      <Check className={`h-3 w-3 ${tier.featured ? "text-lime" : "text-ink"}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${tier.featured ? "text-paper" : "text-ink/70"}`}>
                      {t(fKey)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className={`w-full rounded-none py-6 font-bold transition-colors ${
                      tier.featured
                        ? "bg-lime text-ink shadow-none hover:bg-lime/85"
                        : "border-2 border-ink bg-ink text-paper hover:bg-lime hover:text-ink"
                    }`}
                  >
                    {t("pricing.getStarted")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="border border-line bg-paper sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>
                      {lang === "ar" ? "لنبدأ" : "Let's Get Started"}
                    </DialogTitle>
                    <DialogDescription>
                      {lang === "ar" 
                        ? `خطة ${t(`pricing.${tier.key}.name`)} - ${t(`pricing.${tier.key}.price`)}`
                        : `${t(`pricing.${tier.key}.name`)} Plan - ${t(`pricing.${tier.key}.price`)}`}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShowForm("whatsapp")}
                      className={`flex items-center justify-center gap-2 border border-line py-4 font-bold transition-colors ${
                        showForm === "whatsapp" 
                          ? "bg-lime text-ink"
                          : "bg-paper text-ink hover:bg-lime/20"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {lang === "ar" ? "واتساب" : "WhatsApp"}
                    </button>
                    <button
                      onClick={() => setShowForm("email")}
                      className={`flex items-center justify-center gap-2 border border-line py-4 font-bold transition-colors ${
                        showForm === "email"
                          ? "bg-ink text-paper"
                          : "bg-paper text-ink hover:bg-ink hover:text-paper"
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      {lang === "ar" ? "بريد" : "Email"}
                    </button>
                  </div>
                  
                  {showForm && (
<form 
                      className="space-y-4"
                      onSubmit={async (e) => {
                        e.preventDefault();
                        const formData = new FormData(e.currentTarget);
                        const data = {
                          name: formData.get('name'),
                          email: formData.get('email'),
                          phone: formData.get('phone'),
                          website: formData.get('website'),
                          message: formData.get('message'),
                          plan: t(`pricing.${tier.key}.name`),
                          price: t(`pricing.${tier.key}.price`),
                        };
                        
const sendEmail = async () => {
                          setSending(true);
                          setEmailStatus("idle");
                           
                          const subject = encodeURIComponent(`[${data.plan}] ${showForm === "whatsapp" ? "WhatsApp" : "Email"} Lead: ${data.name}`);
                          const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nWebsite: ${data.website}\nPlan: ${data.plan} (${data.price})\n\nMessage:\n${data.message}`);
                           
                          window.location.href = `mailto:akhmad6093@gmail.com?subject=${subject}&body=${body}`;
                           
                          setSending(false);
                        };
                        
                        if (showForm === "whatsapp") {
                          const waMessage = `Hi, I'm interested in the ${data.plan} (${data.price}). %0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AWebsite: ${data.website}%0AMessage: ${data.message}`;
                          
                          setTimeout(() => {
                            window.open(`https://wa.me/971561495656?text=${waMessage}`, '_blank');
                          }, 100);
                        } else {
                          await sendEmail();
                        }
                      }}
                    >
                      <div className="space-y-2">
                        <label htmlFor={`name-${tier.key}`} className="text-sm font-medium">
                          {lang === "ar" ? "الاسم" : "Your Name"}
                        </label>
                        <Input 
                          id={`name-${tier.key}`} 
                          name="name" 
                          placeholder={lang === "ar" ? "أدخل اسمك" : "Enter your name"} 
                          required 
                          className="border border-line bg-paper text-ink placeholder:text-ink/60 focus:border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`email-${tier.key}`} className="text-sm font-medium">
                          {lang === "ar" ? "البريد الإلكتروني" : "Your Email"}
                        </label>
                        <Input 
                          id={`email-${tier.key}`} 
                          name="email" 
                          type="email"
                          placeholder="you@example.com" 
                          required 
                          className="border border-line bg-paper text-ink placeholder:text-ink/60 focus:border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`phone-${tier.key}`} className="text-sm font-medium">
                          {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                        </label>
                        <Input 
                          id={`phone-${tier.key}`} 
                          name="phone" 
                          type="tel"
                          placeholder="+971 55 123 4567" 
                          required 
                          className="border border-line bg-paper text-ink placeholder:text-ink/60 focus:border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`website-${tier.key}`} className="text-sm font-medium">
                          {lang === "ar" ? "الموقع" : "Website"}
                        </label>
                        <Input 
                          id={`website-${tier.key}`} 
                          name="website" 
                          placeholder="https://example.com" 
                          type="url"
                          className="border border-line bg-paper text-ink placeholder:text-ink/60 focus:border-ink"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`message-${tier.key}`} className="text-sm font-medium">
                          {lang === "ar" ? "ماذا تريد أن تحقق؟" : "What do you want to achieve?"}
                        </label>
                        <Textarea 
                          id={`message-${tier.key}`}
                          name="message"
                          placeholder={lang === "ar" ? "أخبرنا عن أهدافك في محرك البحث" : "Tell us about your SEO goals"} 
                          rows={3}
                          className="border border-line bg-paper text-ink placeholder:text-ink/60 focus:border-ink"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        disabled={sending}
                        className={`w-full font-bold ${
                          showForm === "whatsapp" 
                            ? "bg-lime text-ink hover:bg-lime/85"
                            : "bg-ink text-paper hover:bg-ink/85"
                        }`}
                      >
                        {sending ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="w-4 h-4 animate-spin" />
                            {lang === "ar" ? "جارٍ الإرسال..." : "Sending..."}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Mail className="w-4 h-4" />
                            {lang === "ar" ? "فتح البريد" : "Open Email App"}
                          </span>
                        )}
                      </Button>
                      {emailStatus === "success" && (
                        <div className="p-3 bg-green-100 text-green-700 rounded-lg text-center text-sm">
                          {lang === "ar" ? "✓ تم إرسال الرسالة بنجاح!" : "✓ Email sent successfully!"}
                        </div>
                      )}
                      {emailStatus === "error" && (
                        <div className="p-3 bg-red-100 text-red-700 rounded-lg text-center text-sm space-y-2">
                          <p>✗ {lang === "ar" ? "فشل إرسال الرسالة" : "Failed to send email"}</p>
                          <p className="text-xs">
                            {lang === "ar" 
                              ? <span>تواصل معنا على: <a href="mailto:akhmad6093@gmail.com" className="underline">akhmad6093@gmail.com</a> أو <a href="https://wa.me/971561495656" className="underline">واتساب</a></span>
                              : <span>Contact us at: <a href="mailto:akhmad6093@gmail.com" className="underline">akhmad6093@gmail.com</a> or <a href="https://wa.me/971561495656" className="underline">WhatsApp</a></span>}
                          </p>
                        </div>
                      )}
                    </form>
                  )}
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
