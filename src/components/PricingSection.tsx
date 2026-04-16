import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Check, Star, MessageCircle, Mail, Send } from "lucide-react";
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
      "pricing.growth.f6",
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
      "pricing.enterprise.f6",
      "pricing.enterprise.f7",
    ],
  },
];

export const PricingSection = () => {
  const { t, lang } = useLanguage();
  const [showForm, setShowForm] = useState<"whatsapp" | "email" | null>(null);

  return (
    <section id="pricing" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div
          
          
          
          
          className="text-center mb-14"
        >
          <div className="w-12 h-1 bg-[#7143E0] mx-auto mb-4" />
          <p className="text-sm font-semibold text-[#7143E0] uppercase tracking-wider mb-2">
            {t("pricing.label")}
          </p>
          <h2 className="text-3xl md:text-[42px] md:leading-tight font-heading font-black text-slate-900">
            {t("pricing.title")}
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-[17px]">
            {t("pricing.subtitle")}
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {tiers.map((tier, i) => (
            <div
              key={tier.key}
              
              
              
              
className={`relative rounded-[20px] p-7 md:p-8 flex flex-col !overflow-visible ${
                  tier.featured
                    ? "bg-[#2B124C] text-white shadow-2xl"
                    : "bg-white border border-slate-200 text-slate-900"
                }`}
            >
              {/* Tier name */}
              <h3 className={`text-lg font-heading font-bold mb-1 ${tier.featured ? "text-white" : "text-slate-900"}`}>
                {t(`pricing.${tier.key}.name`)}
              </h3>
              <p className={`text-sm mb-5 ${tier.featured ? "text-slate-300" : "text-slate-500"}`}>
                {t(`pricing.${tier.key}.desc`)}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl md:text-4xl font-extrabold ${tier.featured ? "text-white" : "text-slate-900"}`}>
                  {t(`pricing.${tier.key}.price`)}
                </span>
                {tier.key !== "enterprise" && (
                  <span className={`text-sm ${tier.featured ? "text-slate-300" : "text-slate-500"}`}>
                    {" "}{t("pricing.monthly")}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-1">
                {tier.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-2.5">
                    <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                      tier.featured ? "bg-[#7143E0]/30" : "bg-[#7143E0]/10"
                    }`}>
                      <Check className={`w-3 h-3 ${tier.featured ? "text-[#FECD4D]" : "text-[#7143E0]"}`} />
                    </div>
                    <span className={`text-sm leading-relaxed ${tier.featured ? "text-slate-300" : "text-slate-600"}`}>
                      {t(fKey)}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className={`w-full font-bold rounded-full py-6 shadow-lg transition-all ${
                      tier.featured
                        ? "bg-[#FECD4D] hover:bg-[#fdd85e] text-[#2B124C] shadow-none"
                        : "border-[#7143E0] hover:bg-[#7143E0] text-white border-2"
                    }`}
                  >
                    {t("pricing.getStarted")}
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md border-none shadow-2xl">
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
                      className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                        showForm === "whatsapp" 
                          ? "bg-[#25D366] text-white"
                          : "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white"
                      }`}
                    >
                      <MessageCircle className="w-5 h-5" />
                      {lang === "ar" ? "واتساب" : "WhatsApp"}
                    </button>
                    <button
                      onClick={() => setShowForm("email")}
                      className={`flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
                        showForm === "email"
                          ? "bg-[#7143E0] text-white"
                          : "bg-[#7143E0]/10 text-[#7143E0] hover:bg-[#7143E0] hover:text-white"
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
                            try {
                              const response = await fetch('https://corsproxy.io/?https://api.resend.com/emails', {
                                method: 'POST',
                                headers: {
                                  'Content-Type': 'application/json',
                                  'Authorization': 'Bearer re_2FVx7Buu_DurtfA9P9xRaSdQwrYh5J6bV',
                                  'Access-Control-Allow-Origin': '*',
                                },
                                body: JSON.stringify({
                                  from: 'ConstantSEO <onboarding@resend.dev>',
                                  to: 'akhmad6093@gmail.com',
                                  subject: `[${data.plan}] WhatsApp Lead: ${data.name}`,
                                  html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Phone:</strong> ${data.phone}</p><p><strong>Website:</strong> ${data.website}</p><p><strong>Plan:</strong> ${data.plan} (${data.price})</p><p><strong>Message:</strong> ${data.message}</p>`,
                                }),
                              });
                              const result = await response.json();
                              console.log('Email result:', result);
                            } catch (err) {
                              console.error('Email failed:', err);
                            }
                          };
                        
                        if (showForm === "whatsapp") {
                          const waMessage = `Hi, I'm interested in the ${data.plan} (${data.price}). %0A%0AName: ${data.name}%0AEmail: ${data.email}%0APhone: ${data.phone}%0AWebsite: ${data.website}%0AMessage: ${data.message}`;
                          
                          sendEmail();
                          setTimeout(() => {
                            window.open(`https://wa.me/971561495656?text=${waMessage}`, '_blank');
                          }, 500);
                        } else {
                          try {
                            await fetch('https://api.resend.com/emails', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer re_2FVx7Buu_DurtfA9P9xRaSdQwrYh5J6bV',
                              },
                              body: JSON.stringify({
                                from: 'ConstantSEO <onboarding@resend.dev>',
                                to: 'akhmad6093@gmail.com',
                                subject: `New Inquiry: ${data.plan} - ${data.name}`,
                                text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nWebsite: ${data.website}\nPlan: ${data.plan} (${data.price})\n\nMessage:\n${data.message}`,
                              }),
                            });
                          } catch (err) {
                            console.error('Email send failed:', err);
                          }
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
                          className="border-0 bg-[#E8E0F0] focus:bg-[#DDD4EC] text-slate-900 placeholder:text-slate-500"
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
                          className="border-0 bg-[#E8E0F0] focus:bg-[#DDD4EC] text-slate-900 placeholder:text-slate-500"
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
                          className="border-0 bg-[#E8E0F0] focus:bg-[#DDD4EC] text-slate-900 placeholder:text-slate-500"
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
                          className="border-0 bg-[#E8E0F0] focus:bg-[#DDD4EC] text-slate-900 placeholder:text-slate-500"
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
                          className="border-0 bg-slate-100 focus:bg-slate-200 text-slate-900 placeholder:text-slate-400"
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className={`w-full font-bold ${
                          showForm === "whatsapp" 
                            ? "bg-[#25D366] hover:bg-[#20bd5a] text-white"
                            : "bg-[#7143E0] hover:bg-[#5a35c9] text-white"
                        }`}
                      >
                        <Send className="w-4 h-4 mr-2" />
                        {showForm === "whatsapp" 
                          ? (lang === "ar" ? "تواصل على واتساب" : "Send via WhatsApp")
                          : (lang === "ar" ? "أرسل" : "Send Email")}
                      </Button>
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
