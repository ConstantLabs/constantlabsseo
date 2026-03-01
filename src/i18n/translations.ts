export type TranslationMap = Record<string, { en: string; ar: string }>;

export const translations: TranslationMap = {
  // ─── Status Bar ──────────────────────────────────────────────
  "status.online": { en: "SYSTEM ONLINE", ar: "النظام متصل" },
  "status.brand": { en: "CONSTANT_LABS", ar: "CONSTANT_LABS" },
  "status.connection": { en: "// SECURE CONNECTION ESTABLISHED", ar: "// تم إنشاء اتصال آمن" },

  // ─── Hero ────────────────────────────────────────────────────
  "hero.tagline": { en: "BUILD. INTEGRATE. SCALE.", ar: "ابنِ. ادمِج. وسِّع." },
  "hero.viewServices": { en: "[VIEW_SERVICES]", ar: "[عرض_الخدمات]" },
  "hero.contact": { en: "[INITIATE_CONTACT]", ar: "[تواصل_معنا]" },

  // ─── Services ────────────────────────────────────────────────
  "services.title": { en: "[OUR_SERVICES]", ar: "[خدماتنا]" },
  "services.subtitle": { en: "// What we build for our clients", ar: "// ما نبنيه لعملائنا" },

  // E-Commerce
  "service.E_COMMERCE.title": { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  "service.E_COMMERCE.description": {
    en: "Full-stack online stores, payment integrations, and inventory systems that convert visitors into customers.",
    ar: "متاجر إلكترونية متكاملة، تكامل أنظمة الدفع، وإدارة المخزون لتحويل الزوار إلى عملاء."
  },
  "service.E_COMMERCE.oneLiner": { en: "Online stores that convert", ar: "متاجر إلكترونية تحقق النتائج" },

  // Mobile & Web Apps
  "service.MOBILE_WEB_APPS.title": { en: "Mobile & Web Apps", ar: "تطبيقات الجوال والويب" },
  "service.MOBILE_WEB_APPS.description": {
    en: "Native and cross-platform apps for iOS, Android, and the web — built from scratch around your users' needs.",
    ar: "تطبيقات أصلية ومتعددة المنصات لـ iOS وAndroid والويب — مصممة من الصفر حول احتياجات مستخدميك."
  },
  "service.MOBILE_WEB_APPS.oneLiner": { en: "Apps your users actually want", ar: "تطبيقات يريدها مستخدموك فعلاً" },

  // Dashboards & Internal Tools
  "service.DASHBOARDS_INTERNAL_TOOLS.title": { en: "Dashboards & Internal Tools", ar: "لوحات التحكم والأدوات الداخلية" },
  "service.DASHBOARDS_INTERNAL_TOOLS.description": {
    en: "Admin panels, analytics dashboards, and business tools that give your team real-time visibility and control.",
    ar: "لوحات إدارة، تحليلات بيانات، وأدوات أعمال تمنح فريقك الرؤية والتحكم في الوقت الفعلي."
  },
  "service.DASHBOARDS_INTERNAL_TOOLS.oneLiner": { en: "Your data, at a glance", ar: "بياناتك، بنظرة واحدة" },

  // AI Agents & Automation
  "service.AI_AGENTS.title": { en: "AI Agents & Automation", ar: "وكلاء الذكاء الاصطناعي والأتمتة" },
  "service.AI_AGENTS.description": {
    en: "Deploy AI agents that read emails, answer customers, generate reports, and make decisions autonomously — so your team focuses on what humans do best.",
    ar: "انشر وكلاء ذكاء اصطناعي يقرأون البريد، يردون على العملاء، ويولدون التقارير تلقائياً — ليتفرغ فريقك لما يتقنه البشر."
  },
  "service.AI_AGENTS.oneLiner": { en: "AI that works while you sleep", ar: "ذكاء اصطناعي يعمل وأنت نائم" },

  // Custom AI Agents
  "service.CUSTOM_AI_AGENTS.title": { en: "Custom AI Agents", ar: "وكلاء ذكاء اصطناعي مخصصون" },
  "service.CUSTOM_AI_AGENTS.description": {
    en: "Purpose-built AI agents tailored to your workflows. From customer support bots to autonomous data processors, we build agents that understand your business.",
    ar: "وكلاء ذكاء اصطناعي مصممون خصيصاً لسير عملك. من روبوتات خدمة العملاء إلى معالجات البيانات المستقلة، نبني وكلاء يفهمون عملك."
  },
  "service.CUSTOM_AI_AGENTS.oneLiner": { en: "Your business, automated", ar: "عملك، مؤتمت" },

  // Privacy-First Local AI
  "service.PRIVATE_AI.title": { en: "Privacy-First Local AI", ar: "ذكاء اصطناعي محلي وخاص" },
  "service.PRIVATE_AI.description": {
    en: "Deploy AI models on-premise. Your data never leaves your servers. Custom LLMs, RAG pipelines, and inference engines running locally for compliance-sensitive businesses.",
    ar: "انشر نماذج الذكاء الاصطناعي داخل مقر شركتك. بياناتك لا تغادر خوادمك أبداً. نماذج لغوية مخصصة وأنظمة RAG تعمل محلياً للشركات الحساسة للامتثال."
  },
  "service.PRIVATE_AI.oneLiner": { en: "AI that stays in-house", ar: "ذكاء اصطناعي يبقى داخلياً" },

  // System Integration
  "service.SYSTEM_INTEGRATION.title": { en: "System Integration", ar: "تكامل الأنظمة" },
  "service.SYSTEM_INTEGRATION.description": {
    en: "Connect your existing tools and eliminate data silos. We wire your CRM, payments, and third-party services into one unified pipeline.",
    ar: "اربط أدواتك الحالية وتخلص من صوامع البيانات. نوصل نظام CRM والمدفوعات والخدمات الخارجية في مسار موحد."
  },
  "service.SYSTEM_INTEGRATION.oneLiner": { en: "Wire your systems together", ar: "اربط أنظمتك معاً" },

  // B2B/B2C Platforms
  "service.B2B_B2C_PLATFORMS.title": { en: "B2B/B2C Platforms", ar: "منصات B2B/B2C" },
  "service.B2B_B2C_PLATFORMS.description": {
    en: "Multi-sided platforms that serve your business partners and end customers with tailored experiences under one roof.",
    ar: "منصات متعددة الأطراف تخدم شركاءك وعملاءك النهائيين بتجارب مخصصة تحت سقف واحد."
  },
  "service.B2B_B2C_PLATFORMS.oneLiner": { en: "Platforms for every audience", ar: "منصات لكل جمهور" },

  // Digital Presence
  "service.DIGITAL_PRESENCE.title": { en: "Digital Presence", ar: "الحضور الرقمي" },
  "service.DIGITAL_PRESENCE.description": {
    en: "Websites, landing pages, and digital identities that make your brand impossible to ignore.",
    ar: "مواقع ويب، صفحات هبوط، وهويات رقمية تجعل علامتك التجارية مستحيلة التجاهل."
  },
  "service.DIGITAL_PRESENCE.oneLiner": { en: "Brands that stand out online", ar: "علامات تجارية تتألق رقمياً" },

  // IoT & Embedded
  "service.IOT_EMBEDDED.title": { en: "IoT & Embedded Systems", ar: "إنترنت الأشياء والأنظمة المدمجة" },
  "service.IOT_EMBEDDED.description": {
    en: "Connected devices, sensor networks, and embedded firmware — from prototype to deployment in the field.",
    ar: "أجهزة متصلة، شبكات استشعار، وبرمجيات مدمجة — من النموذج الأولي إلى النشر الميداني."
  },
  "service.IOT_EMBEDDED.oneLiner": { en: "Smart devices, real world", ar: "أجهزة ذكية، عالم حقيقي" },

  // ERP Integrations
  "service.ERP_INTEGRATIONS.title": { en: "ERP Integrations", ar: "تكامل أنظمة ERP" },
  "service.ERP_INTEGRATIONS.description": {
    en: "Seamless connections to SAP, Oracle, Odoo and other enterprise systems. Your data, unified.",
    ar: "ربط سلس بأنظمة SAP وOracle وOdoo وأنظمة المؤسسات الأخرى. بياناتك، موحدة."
  },
  "service.ERP_INTEGRATIONS.oneLiner": { en: "Enterprise systems, unified", ar: "أنظمة المؤسسات، موحدة" },

  // ─── Mission ─────────────────────────────────────────────────
  "mission.label": { en: "[WHO_WE_ARE]", ar: "[من_نحن]" },
  "mission.title": { en: "THE MISSION", ar: "المهمة" },
  "mission.line1": {
    en: "We don't just write code — we solve problems.",
    ar: "نحن لا نكتب أكواداً فحسب — نحن نحل مشكلات."
  },
  "mission.line2": {
    en: "Based in Dubai, building for the world. Our goal is to create a new wave of technology—the kind most would call sci-fi. We're here to make it real. To make it achievable. To make it something you can touch, use, and rely on.",
    ar: "من دبي، نبني للعالم. هدفنا هو إنشاء موجة جديدة من التكنولوجيا — من النوع الذي يسميه معظمهم خيالاً علمياً. نحن هنا لنجعله حقيقياً. قابلاً للتحقيق. شيئاً يمكنك لمسه واستخدامه والاعتماد عليه."
  },
  "mission.line3": {
    en: "Hardware and software. No limits. No stopping until it's done.",
    ar: "أجهزة وبرمجيات. بلا حدود. لا توقف حتى يتم الإنجاز."
  },
  "mission.approach": { en: "// OUR APPROACH", ar: "// نهجنا" },
  "mission.diagnose": { en: "Diagnose", ar: "تشخيص" },
  "mission.diagnose.desc": { en: "We start with your challenge, not our tech stack", ar: "نبدأ بتحديك، لا بأدواتنا التقنية" },
  "mission.engineer": { en: "Engineer", ar: "هندسة" },
  "mission.engineer.desc": { en: "We build what works, not what's trending", ar: "نبني ما يعمل، لا ما هو رائج" },
  "mission.deliver": { en: "Deliver", ar: "تسليم" },
  "mission.deliver.desc": { en: "We stay until it runs and your team owns it", ar: "نبقى حتى يعمل النظام ويتملكه فريقك" },
  "mission.hardware": { en: "Hardware", ar: "أجهزة" },
  "mission.software": { en: "Software", ar: "برمجيات" },
  "mission.noLimits": { en: "No Limits", ar: "بلا حدود" },
  "mission.tagline": { en: "// SCI-FI TODAY // REALITY TOMORROW //", ar: "// خيال علمي اليوم // واقع الغد //" },

  // ─── Vault ───────────────────────────────────────────────────
  "vault.title": { en: "[THE_VAULT]", ar: "[الخزنة]" },
  "vault.subtitle": { en: "// Active projects and experiments", ar: "// مشاريع وتجارب نشطة" },
  "vault.software": { en: "// SOFTWARE", ar: "// البرمجيات" },
  "vault.hardware": { en: "// HARDWARE", ar: "// الأجهزة" },

  // ─── Client Deployments ──────────────────────────────────────
  "clients.title": { en: "[CLIENT_DEPLOYMENTS]", ar: "[مشاريع_العملاء]" },
  "clients.subtitle": {
    en: "// Restaurant brands & hospitality experiences built for Dubai's finest",
    ar: "// علامات مطاعم وتجارب ضيافة صُممت لأرقى مطاعم دبي"
  },

  // ─── Operators ───────────────────────────────────────────────
  "operators.title": { en: "[OPERATORS]", ar: "[الفريق]" },
  "operators.subtitle": { en: "// Core team members", ar: "// أعضاء الفريق الأساسي" },
  "operators.journeyLog": { en: "// JOURNEY_LOG //", ar: "// سجل_الرحلة //" },
  "operators.footer": { en: "// NEURAL_INTERFACE_ACTIVE // BIOMETRICS_VERIFIED //", ar: "// الواجهة_العصبية_نشطة // التحقق_البيومتري //" },

  // ─── Contact ─────────────────────────────────────────────────
  "contact.title": { en: "[INITIATE_CONTACT]", ar: "[تواصل_معنا]" },
  "contact.subtitle": { en: "// Secure communications channel active", ar: "// قناة الاتصال الآمنة مفعلة" },
  "contact.cta": {
    en: "Got a project in the UAE? Need a Dubai-based tech team? Let's talk.",
    ar: "لديك مشروع في الإمارات؟ تحتاج فريقاً تقنياً في دبي؟ لنتحدث."
  },
  "contact.email": { en: "[EMAIL]", ar: "[البريد]" },
  "contact.whatsapp": { en: "[WHATSAPP]", ar: "[واتساب]" },
  "contact.encrypted": { en: "[ENCRYPTED_CHANNEL]", ar: "[قناة_مشفرة]" },
  "contact.secureLine": { en: "[SECURE_LINE_OPEN]", ar: "[خط_آمن_مفتوح]" },
  "contact.location": { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة" },

  // ─── Footer ──────────────────────────────────────────────────
  "footer.copyright": { en: "CONSTANT LABS © 2025 — DUBAI, UAE", ar: "CONSTANT LABS © 2025 — دبي، الإمارات" },
  "footer.tagline": { en: "// BUILT WITH PURPOSE // DESIGNED FOR IMPACT //", ar: "// بُني بهدف // صُمم للتأثير //" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "شروط الخدمة" },

  // ─── Project Detail ──────────────────────────────────────────
  "project.viewFullPage": { en: "VIEW FULL PAGE", ar: "عرض الصفحة الكاملة" },
  "project.visitSite": { en: "VISIT SITE", ar: "زيارة الموقع" },
  "project.viewRepo": { en: "VIEW REPOSITORY", ar: "عرض المستودع" },
  "project.techStack": { en: "// TECH STACK", ar: "// التقنيات المستخدمة" },
  "project.features": { en: "// FEATURES", ar: "// المميزات" },
  "project.back": { en: "BACK", ar: "رجوع" },
  "project.viewWork": { en: "// VIEW OUR WORK →", ar: "// شاهد أعمالنا ←" },

  // ─── Service Pages ───────────────────────────────────────────
  "privateAI.hero.title": { en: "Privacy-First Local AI", ar: "ذكاء اصطناعي محلي وخاص" },
  "privateAI.hero.subtitle": {
    en: "Your data never leaves your servers. AI that runs entirely on-premise.",
    ar: "بياناتك لا تغادر خوادمك أبداً. ذكاء اصطناعي يعمل بالكامل داخل مقرك."
  },
  "privateAI.why.title": { en: "WHY LOCAL AI?", ar: "لماذا الذكاء الاصطناعي المحلي؟" },
  "privateAI.why.sovereignty": { en: "Data Sovereignty", ar: "سيادة البيانات" },
  "privateAI.why.sovereignty.desc": {
    en: "Full control over your data. Compliant with UAE data protection regulations, GDPR, and industry-specific mandates.",
    ar: "تحكم كامل ببياناتك. متوافق مع قوانين حماية البيانات في الإمارات وGDPR واللوائح الخاصة بالقطاع."
  },
  "privateAI.why.speed": { en: "Zero Latency", ar: "بدون تأخير" },
  "privateAI.why.speed.desc": {
    en: "No round-trips to cloud APIs. Inference runs on your hardware at maximum speed.",
    ar: "لا رحلات ذهاب وإياب لواجهات السحابة. الاستدلال يعمل على أجهزتك بأقصى سرعة."
  },
  "privateAI.why.cost": { en: "Predictable Costs", ar: "تكاليف متوقعة" },
  "privateAI.why.cost.desc": {
    en: "No per-token billing. Deploy once, run forever. Your hardware, your budget.",
    ar: "بدون فواتير لكل رمز. انشر مرة واحدة، شغّل للأبد. أجهزتك، ميزانيتك."
  },
  "privateAI.useCases.title": { en: "USE CASES", ar: "حالات الاستخدام" },
  "privateAI.cta": { en: "Get a Consultation", ar: "احصل على استشارة" },

  "customAgents.hero.title": { en: "Custom AI Agents", ar: "وكلاء ذكاء اصطناعي مخصصون" },
  "customAgents.hero.subtitle": {
    en: "Purpose-built agents that understand your business and automate your workflows.",
    ar: "وكلاء مصممون خصيصاً يفهمون عملك ويؤتمتون سير عملك."
  },
  "customAgents.what.title": { en: "WHAT WE BUILD", ar: "ما نبنيه" },
  "customAgents.how.title": { en: "HOW IT WORKS", ar: "كيف يعمل" },
  "customAgents.cta": { en: "Discuss Your Agent Needs", ar: "ناقش احتياجاتك" },

  "websites.title": { en: "[WEBSITES_WE_BUILT]", ar: "[مواقع_أنشأناها]" },
  "websites.subtitle": {
    en: "// Digital experiences crafted for Dubai's finest brands",
    ar: "// تجارب رقمية صُنعت لأرقى العلامات التجارية في دبي"
  },
};
