import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export const ZCalBookingSection = () => {
  const { t, isAr } = useLanguage();
  const [showZCal, setShowZCal] = useState(false);

  const openWhatsApp = () => {
    window.open("https://wa.me/971561495656", "_blank");
  };

  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#1a0f2e] to-[#2B124C] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(113,67,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#7143E0]/15 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-4">
            {t("zcal.title")}
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            {t("zcal.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {!showZCal ? (
            <>
              <Button
                onClick={() => setShowZCal(true)}
                className="bg-[#FECD4D] hover:bg-[#fee580] text-[#2B124C] font-bold rounded-full px-8 py-4 text-lg transition-all w-full sm:w-auto"
              >
                <Calendar className={`w-5 h-5 ${isAr ? "ml-2" : "mr-2"}`} />
                {t("zcal.bookNow")}
              </Button>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={openWhatsApp}
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  {t("zcal.whatsapp")}
                </button>

                <span className="hidden sm:inline text-gray-500">|</span>

                <button
                  onClick={() => {
                    const subject = encodeURIComponent(t("zcal.emailSubject"));
                    window.location.href = `mailto:akhmad@constantlabs.ai?subject=${subject}`;
                  }}
                  className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {t("zcal.email")}
                </button>
              </div>
            </>
          ) : (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
              <div className="w-full h-[900px] rounded-lg overflow-hidden">
                <iframe
                  src="https://zcal.co/i/v5bi9xYQ?embed"
                  className="w-full h-full border-0"
                  title="Book a consultation"
                />
              </div>
              <button
                onClick={() => setShowZCal(false)}
                className="mt-4 text-sm text-gray-400 hover:text-white transition-colors"
              >
                ← {t("zcal.back")}
              </button>
            </div>
          )}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-500 text-sm mt-6"
        >
          {t("zcal.note")}
        </motion.p>
      </div>
    </section>
  );
};