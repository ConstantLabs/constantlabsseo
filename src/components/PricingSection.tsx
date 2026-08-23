import { useLanguage } from "@/i18n/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowUpRight, Check, MessageCircle, Mail, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BandHead, BandInner, Display, Tag } from "@/components/marketing/editorial";
import { cn } from "@/lib/utils";

interface PricingTier {
  key: string;
  featured?: boolean;
  features: string[];
  /** Set on the tier that bundles a website build — links out to the studio that builds it. */
  studioHref?: string;
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
  /*
    The top tier bundles the website itself, built by the sister studio. It carries a
    link out to websites.constantlabs.ai — the one outbound link in this band, and the
    reason this tier is priced where it is.
  */
  {
    key: "dominance",
    studioHref: "https://websites.constantlabs.ai",
    features: [
      "pricing.dominance.f1",
      "pricing.dominance.f2",
      "pricing.dominance.f3",
      "pricing.dominance.f4",
      "pricing.dominance.f5",
      "pricing.dominance.f6",
    ],
  },
];

export const PricingSection = () => {
  const { t, lang } = useLanguage();
  const [showForm, setShowForm] = useState<"whatsapp" | "email" | null>(null);
  const [sending, setSending] = useState(false);
  const [emailStatus, setEmailStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    /* Padding lives on BandInner only. Setting it here as well double-padded the
       band: twMerge cannot strip `sm:`/`lg:`-prefixed classes when the override is
       unprefixed, so BandInner's `sm:py-20 lg:py-24` survived a bare `py-0` and
       stacked on top of the section's own, leaving ~290px of dead space above the
       heading. */
    <section id="pricing" className="bg-void">
      <BandInner>
        <BandHead
          align="split"
          label={t("pricing.label")}
          title={t("pricing.title")}
          lede={t("pricing.subtitle")}
        />

        {/* Cards */}
        {/* Four tiers: 2x2 on a tablet, one row on a wide screen. */}
        <div className="mt-12 grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {tiers.map((tier) => (
            /*
              The featured tier is marked with an accent HAIRLINE and an accent badge,
              not an accent fill. A ~370x500 solid accent block dominated the whole page
              and made its hairline siblings look unfinished rather than secondary. The
              fill is reserved for one element: this tier's CTA.
            */
            <div
              key={tier.key}
              className={cn(
                "relative flex flex-col border bg-ink p-7 text-paper !overflow-visible md:p-8",
                tier.featured ? "border-signal" : "border-line",
              )}
            >
              {tier.featured && (
                <Tag className="absolute -top-3 start-7 md:start-8">{t("pricing.featured")}</Tag>
              )}

              <Display as="h3" size="md" className="mb-2">
                {t(`pricing.${tier.key}.name`)}
              </Display>
              <p className="tv-body mb-6 text-sm leading-relaxed text-paper/70">
                {t(`pricing.${tier.key}.desc`)}
              </p>

              {/* Price. Nowrap and stacked, not inline: at four columns each card is
                  ~280px, and "3,000 AED" plus an inline "/ month" broke across two
                  lines with the qualifier stranded beside the wrap. */}
              <div className="mb-7">
                <p className="tv-display whitespace-nowrap text-4xl text-signal">
                  {t(`pricing.${tier.key}.price`)}
                </p>
                <p className="tv-label mt-1 text-[0.625rem] leading-4 tracking-[0.16em] text-muted">
                  {t("pricing.monthly")}
                </p>
              </div>

              {/* Features. The marks are small and quiet — boxed icons at body size read
                  heavier than the feature text they annotate. */}
              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((fKey) => (
                  <li key={fKey} className="flex items-start gap-3">
                    <Check className="mt-1 h-3 w-3 shrink-0 text-signal" aria-hidden="true" />
                    <span className="tv-body text-sm leading-relaxed text-paper/70">{t(fKey)}</span>
                  </li>
                ))}
              </ul>

              {tier.studioHref && (
                <div className="mb-7 border-t border-line pt-5">
                  <p className="tv-label text-[0.625rem] leading-4 tracking-[0.16em] text-muted">
                    {t("pricing.dominance.studioNote")}
                  </p>
                  <a
                    href={tier.studioHref}
                    target="_blank"
                    rel="noreferrer"
                    className="tv-label mt-2 inline-flex items-center gap-2 text-[0.625rem] leading-4 tracking-[0.16em] text-signal transition-opacity hover:opacity-70"
                  >
                    {t("pricing.dominance.studioLink")}
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              )}

              {/* CTA */}
              <Dialog>
                <DialogTrigger asChild>
                  {/* Mono uppercase with the arrow pinned to the end edge, so these
                      match every other action on the page. Accent fill on the featured
                      tier only; the others are outlined. */}
                  <Button
                    className={cn(
                      "tv-label flex w-full items-center justify-between gap-4 rounded-none px-6 py-6 text-xs tracking-[0.16em] transition-colors",
                      tier.featured
                        ? "border border-signal bg-signal text-void hover:border-paper hover:bg-paper"
                        : "border border-line bg-transparent text-paper hover:border-signal hover:text-signal",
                    )}
                  >
                    {t("pricing.getStarted")}
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="border border-line bg-ink text-paper sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-paper">
                      {lang === "ar" ? "لنبدأ" : "Let's Get Started"}
                    </DialogTitle>
                    <DialogDescription className="text-paper/70">
                      {lang === "ar"
                        ? `خطة ${t(`pricing.${tier.key}.name`)} - ${t(`pricing.${tier.key}.price`)}`
                        : `${t(`pricing.${tier.key}.name`)} Plan - ${t(`pricing.${tier.key}.price`)}`}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setShowForm("whatsapp")}
                      className={cn(
                        "flex items-center justify-center gap-2 border border-line py-4 font-bold transition-colors",
                        showForm === "whatsapp" ? "bg-signal text-void" : "bg-void text-paper hover:border-signal hover:text-signal",
                      )}
                    >
                      <MessageCircle className="h-5 w-5" />
                      {lang === "ar" ? "واتساب" : "WhatsApp"}
                    </button>
                    <button
                      onClick={() => setShowForm("email")}
                      className={cn(
                        "flex items-center justify-center gap-2 border border-line py-4 font-bold transition-colors",
                        showForm === "email" ? "bg-signal text-void" : "bg-void text-paper hover:border-signal hover:text-signal",
                      )}
                    >
                      <Mail className="h-5 w-5" />
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
                          name: formData.get("name"),
                          email: formData.get("email"),
                          phone: formData.get("phone"),
                          website: formData.get("website"),
                          message: formData.get("message"),
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
                            window.open(`https://wa.me/971561495656?text=${waMessage}`, "_blank");
                          }, 100);
                        } else {
                          await sendEmail();
                        }
                      }}
                    >
                      <div className="space-y-2">
                        <label htmlFor={`name-${tier.key}`} className="text-sm font-medium text-paper">
                          {lang === "ar" ? "الاسم" : "Your Name"}
                        </label>
                        <Input
                          id={`name-${tier.key}`}
                          name="name"
                          placeholder={lang === "ar" ? "أدخل اسمك" : "Enter your name"}
                          required
                          className="border border-line bg-void text-paper placeholder:text-paper/50 focus:border-signal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`email-${tier.key}`} className="text-sm font-medium text-paper">
                          {lang === "ar" ? "البريد الإلكتروني" : "Your Email"}
                        </label>
                        <Input
                          id={`email-${tier.key}`}
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          required
                          className="border border-line bg-void text-paper placeholder:text-paper/50 focus:border-signal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`phone-${tier.key}`} className="text-sm font-medium text-paper">
                          {lang === "ar" ? "رقم الهاتف" : "Phone Number"}
                        </label>
                        <Input
                          id={`phone-${tier.key}`}
                          name="phone"
                          type="tel"
                          placeholder="+971 55 123 4567"
                          required
                          className="border border-line bg-void text-paper placeholder:text-paper/50 focus:border-signal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`website-${tier.key}`} className="text-sm font-medium text-paper">
                          {lang === "ar" ? "الموقع" : "Website"}
                        </label>
                        <Input
                          id={`website-${tier.key}`}
                          name="website"
                          placeholder="https://example.com"
                          type="url"
                          className="border border-line bg-void text-paper placeholder:text-paper/50 focus:border-signal"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor={`message-${tier.key}`} className="text-sm font-medium text-paper">
                          {lang === "ar" ? "ماذا تريد أن تحقق؟" : "What do you want to achieve?"}
                        </label>
                        <Textarea
                          id={`message-${tier.key}`}
                          name="message"
                          placeholder={lang === "ar" ? "أخبرنا عن أهدافك في محرك البحث" : "Tell us about your SEO goals"}
                          rows={3}
                          className="border border-line bg-void text-paper placeholder:text-paper/50 focus:border-signal"
                        />
                      </div>
                      <Button
                        type="submit"
                        disabled={sending}
                        className="w-full bg-signal font-bold text-void hover:bg-signal/85"
                      >
                        {sending ? (
                          <span className="flex items-center justify-center gap-2">
                            <Loader2 className="h-4 w-4 animate-spin" />
                            {lang === "ar" ? "جارٍ الإرسال..." : "Sending..."}
                          </span>
                        ) : (
                          <span className="flex items-center justify-center gap-2">
                            <Mail className="h-4 w-4" />
                            {lang === "ar" ? "فتح البريد" : "Open Email App"}
                          </span>
                        )}
                      </Button>
                      {emailStatus === "success" && (
                        <div className="border border-signal/40 bg-signal/15 p-3 text-center text-sm text-signal">
                          {lang === "ar" ? "✓ تم إرسال الرسالة بنجاح!" : "✓ Email sent successfully!"}
                        </div>
                      )}
                      {emailStatus === "error" && (
                        <div className="space-y-2 border border-line bg-void p-3 text-center text-sm text-paper">
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

        <aside
          role="note"
          aria-label={t("pricing.timeline.aria")}
          className="mt-10 grid border-y border-signal/45 md:grid-cols-[11rem_1fr]"
        >
          <div className="flex items-end justify-between bg-signal px-6 py-5 text-void md:block md:px-7 md:py-6">
            <span className="tv-display text-6xl leading-none md:text-7xl">03+</span>
            <span className="tv-label text-[0.625rem] tracking-[0.18em] md:mt-2 md:block">
              {t("pricing.timeline.unit")}
            </span>
          </div>
          <div className="grid gap-4 bg-ink px-6 py-6 sm:px-8 md:grid-cols-[minmax(13rem,0.65fr)_1fr] md:items-center md:gap-10">
            <div>
              <p className="tv-label text-[0.625rem] tracking-[0.18em] text-signal">{t("pricing.timeline.label")}</p>
              <h3 className="tv-display mt-2 text-2xl uppercase leading-tight text-paper sm:text-3xl">
                {t("pricing.timeline.title")}
              </h3>
            </div>
            <p className="tv-body text-sm leading-relaxed text-paper/75 sm:text-base">
              {t("pricing.timeline.copy")}
            </p>
          </div>
        </aside>
      </BandInner>
    </section>
  );
};
