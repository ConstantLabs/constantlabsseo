import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Brain, ArrowLeft, MessageSquare, Database, BarChart3, Workflow, Search, Wrench, Rocket, Monitor } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";

const agentTypes = [
  {
    icon: MessageSquare,
    title: "Customer Support Agents",
    titleAr: "وكلاء خدمة العملاء",
    desc: "AI agents that handle inquiries, resolve tickets, and escalate intelligently — 24/7, in Arabic and English.",
    descAr: "وكلاء ذكاء اصطناعي يتعاملون مع الاستفسارات ويحلون التذاكر ويصعدون بذكاء — على مدار الساعة، بالعربية والإنجليزية.",
  },
  {
    icon: Database,
    title: "Data Processing Agents",
    titleAr: "وكلاء معالجة البيانات",
    desc: "Agents that ingest, clean, transform, and analyze data autonomously. From PDFs to databases, they handle the pipeline.",
    descAr: "وكلاء يستوعبون البيانات وينظفونها ويحولونها ويحللونها تلقائياً. من ملفات PDF إلى قواعد البيانات.",
  },
  {
    icon: BarChart3,
    title: "Research & Reporting Agents",
    titleAr: "وكلاء البحث والتقارير",
    desc: "Agents that monitor markets, compile reports, track competitors, and deliver insights on schedule.",
    descAr: "وكلاء يراقبون الأسواق ويجمعون التقارير ويتتبعون المنافسين ويقدمون رؤى وفق جدول زمني.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation Agents",
    titleAr: "وكلاء أتمتة سير العمل",
    desc: "Chain tasks together: read emails, extract data, update CRM, generate invoices, send notifications — all autonomously.",
    descAr: "سلسل المهام معاً: قراءة البريد، استخراج البيانات، تحديث CRM، إنشاء الفواتير، إرسال الإشعارات — كل ذلك تلقائياً.",
  },
];

const steps = [
  {
    icon: Search,
    title: "Discover",
    titleAr: "اكتشاف",
    desc: "We map your workflows, identify bottlenecks, and find where AI agents deliver the highest ROI.",
    descAr: "نرسم سير عملك، نحدد الاختناقات، ونجد أين يحقق الوكلاء أعلى عائد استثمار.",
  },
  {
    icon: Wrench,
    title: "Design & Build",
    titleAr: "تصميم وبناء",
    desc: "We architect the agent: choose the right model, define tools, set guardrails, and build integrations.",
    descAr: "نصمم الوكيل: نختار النموذج المناسب، نحدد الأدوات، نضع الحواجز، ونبني التكامل.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    titleAr: "نشر",
    desc: "Agents go live in your environment — cloud or on-premise. We monitor, tune, and iterate.",
    descAr: "الوكلاء ينطلقون في بيئتك — سحابة أو محلياً. نراقب ونضبط ونكرر.",
  },
  {
    icon: Monitor,
    title: "Monitor & Evolve",
    titleAr: "مراقبة وتطوير",
    desc: "Real-time dashboards, performance metrics, and continuous improvement. Your agents get smarter over time.",
    descAr: "لوحات تحكم فورية، مقاييس أداء، وتحسين مستمر. وكلاؤك يصبحون أذكى بمرور الوقت.",
  },
];

const CustomAIAgents = () => {
  const { t, lang } = useLanguage();
  const isAr = lang === "ar";

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden chromatic-page">
      <SEO
        title="Custom AI Agents"
        description="Purpose-built AI agents for businesses in Dubai, UAE. Customer support bots, data processors, workflow automation, and research agents tailored to your business."
        path="/services/custom-ai-agents"
      />

      {/* Nav */}
      <div className="fixed top-0 left-0 right-0 z-50 border-b border-foreground/20 bg-background">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-[10px] font-tech tracking-wider uppercase">{t("project.back")}</span>
          </Link>
          <span className="text-[10px] font-tech text-foreground/40 tracking-wider uppercase">
            CONSTANT_LABS // CUSTOM_AI_AGENTS
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
              <Brain className="w-10 h-10 text-foreground/60" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight uppercase font-dedsec mb-6">
              {t("customAgents.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
              {t("customAgents.hero.subtitle")}
            </p>
            <p className="text-xs font-tech text-foreground/40 uppercase tracking-widest">
              // DUBAI, UAE // {isAr ? "الإمارات العربية المتحدة" : "UNITED ARAB EMIRATES"} //
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Build */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 font-tech">
            [{t("customAgents.what.title")}]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agentTypes.map((agent, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="group border border-foreground/10 border-s-4 border-s-foreground/30 hover:border-s-foreground p-6 transition-all"
              >
                <agent.icon className="w-6 h-6 text-foreground/60 mb-3 group-hover:text-foreground transition-colors" />
                <h3 className="text-lg font-bold font-tech uppercase tracking-wider mb-2">
                  {isAr ? agent.titleAr : agent.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {isAr ? agent.descAr : agent.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative z-10 py-24 border-t-2 border-foreground/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight mb-12 font-tech">
            [{t("customAgents.how.title")}]
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.4 }}
                className="text-center border border-foreground/10 p-6 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-foreground/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-foreground/20" />

                <div className="text-[10px] font-tech text-foreground/30 mb-3">[{String(idx + 1).padStart(2, "0")}]</div>
                <div className="w-12 h-12 mx-auto mb-4 border-2 border-foreground/40 flex items-center justify-center">
                  <step.icon className="w-5 h-5 text-foreground/60" />
                </div>
                <h3 className="text-sm font-bold font-tech uppercase tracking-wider mb-2">
                  {isAr ? step.titleAr : step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {isAr ? step.descAr : step.desc}
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

              <Brain className="w-12 h-12 mx-auto mb-6 text-foreground/60" />
              <h2 className="text-3xl font-black uppercase font-tech mb-4">
                {t("customAgents.cta")}
              </h2>
              <p className="text-muted-foreground mb-6 text-sm">
                {isAr
                  ? "أخبرنا عن سير عملك والمهام التي تريد أتمتتها. سنبني الوكيل المثالي."
                  : "Tell us about your workflows and the tasks you want automated. We'll build the perfect agent."}
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

export default CustomAIAgents;
