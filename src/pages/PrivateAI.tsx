import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Server, Lock, Zap, DollarSign, ArrowLeft, Building2, Landmark, Heart, Scale } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const useCases = [
  {
    icon: Building2,
    titleKey: "Healthcare & Pharma",
    titleAr: "الرعاية الصحية والأدوية",
    descKey: "Patient data stays on-site. HIPAA-compliant AI for diagnostics, record analysis, and treatment recommendations.",
    descAr: "بيانات المرضى تبقى في الموقع. ذكاء اصطناعي متوافق مع HIPAA للتشخيص وتحليل السجلات وتوصيات العلاج.",
  },
  {
    icon: Landmark,
    titleKey: "Government & Defense",
    titleAr: "الحكومة والدفاع",
    descKey: "Classified data processed locally. No cloud exposure. Fully air-gapped deployments available.",
    descAr: "بيانات سرية تُعالج محلياً. بدون تعرض للسحابة. عمليات نشر معزولة بالكامل.",
  },
  {
    icon: Scale,
    titleKey: "Legal & Finance",
    titleAr: "القانون والمالية",
    descKey: "Contract analysis, compliance checking, and financial modeling with zero data leakage to external providers.",
    descAr: "تحليل العقود وفحص الامتثال والنمذجة المالية بدون تسرب بيانات للمزودين الخارجيين.",
  },
  {
    icon: Heart,
    titleKey: "Enterprise & SME",
    titleAr: "المؤسسات والشركات الصغيرة",
    descKey: "Internal knowledge bases, document processing, and employee assistants that keep proprietary data in-house.",
    descAr: "قواعد معرفية داخلية ومعالجة مستندات ومساعدين للموظفين يحافظون على البيانات الملكية داخلياً.",
  },
];

const techStack = [
  "Ollama", "vLLM", "LangChain", "RAG Pipelines",
  "Vector Databases", "Fine-tuned LLMs", "GGUF / GGML",
  "NVIDIA CUDA", "Docker", "Kubernetes",
];

const PrivateAI = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page">
      <SEO
        title="Privacy-First Local AI"
        description="Deploy AI models on-premise in Dubai, UAE. Your data never leaves your servers. Custom LLMs, RAG pipelines, and inference engines for compliance-sensitive businesses in the Emirates."
        path="/services/private-ai"
      />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-tech tracking-wider uppercase">{t("project.back")}</span>
          </Link>
          <span className="text-[10px] font-tech text-foreground/40 tracking-wider uppercase">
            CONSTANT_LABS // PRIVATE_AI
          </span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative z-10 min-h-[60vh] flex items-center justify-center pt-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 border-2 border-foreground/40 flex items-center justify-center">
              <Shield className="w-10 h-10 text-foreground/60" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase font-dedsec mb-6">
              {t("privateAI.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              {t("privateAI.hero.subtitle")}
            </p>
            <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest">
              // DUBAI, UAE // {isAr ? "الإمارات العربية المتحدة" : "UNITED ARAB EMIRATES"} //
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Local AI */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 font-tech">
            [{t("privateAI.why.title")}]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Lock, titleKey: "privateAI.why.sovereignty", descKey: "privateAI.why.sovereignty.desc" },
              { icon: Zap, titleKey: "privateAI.why.speed", descKey: "privateAI.why.speed.desc" },
              { icon: DollarSign, titleKey: "privateAI.why.cost", descKey: "privateAI.why.cost.desc" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="border border-foreground/10 border-s-4 border-s-foreground/30 p-6"
              >
                <item.icon className="w-8 h-8 text-foreground/60 mb-4" />
                <h3 className="text-lg font-bold font-tech uppercase tracking-wider mb-3">
                  {t(item.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t(item.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Deploy */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-8 font-tech">
            [TECH_STACK]
          </h2>
          <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest mb-8">
            // {isAr ? "التقنيات التي ننشرها على خوادمك" : "Technologies we deploy on your servers"}
          </p>
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm font-tech text-foreground/70 uppercase tracking-wider border border-foreground/20 px-4 py-2 hover:border-foreground/40 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 font-tech">
            [{t("privateAI.useCases.title")}]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((uc, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="border border-foreground/10 p-6 hover:border-foreground/30 transition-colors relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20 group-hover:border-foreground/40 transition-colors" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20 group-hover:border-foreground/40 transition-colors" />

                <uc.icon className="w-6 h-6 text-foreground/60 mb-3" />
                <h3 className="text-lg font-bold font-tech uppercase tracking-wider mb-2">
                  {isAr ? uc.titleAr : uc.titleKey}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isAr ? uc.descAr : uc.descKey}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="border-2 border-foreground p-12 relative overflow-hidden bg-card">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-foreground/20" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-foreground/20" />

              <Server className="w-12 h-12 mx-auto mb-6 text-foreground/60" />
              <h2 className="text-3xl font-black uppercase font-tech mb-4">
                {t("privateAI.cta")}
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                {isAr
                  ? "أخبرنا عن بنيتك التحتية ومتطلبات الامتثال. سنصمم حلاً مخصصاً."
                  : "Tell us about your infrastructure and compliance requirements. We'll design a custom solution."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold"
                  onClick={() => window.location.href = 'mailto:akhmad6093@gmail.com'}
                >
                  [EMAIL]
                </Button>
                <Button
                  size="lg"
                  className="border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background font-tech tracking-wide font-bold"
                  onClick={() => window.open('https://wa.me/971561495656', '_blank')}
                >
                  [WHATSAPP]
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-foreground/10 py-6 text-center">
        <p className="text-[10px] font-tech text-muted-foreground/40 uppercase tracking-wider">
          CONSTANT LABS // DUBAI, UAE
        </p>
      </div>
    </div>
  );
};

export default PrivateAI;
