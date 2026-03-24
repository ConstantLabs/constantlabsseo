export type TranslationMap = Record<string, { en: string; ar: string }>;

export const translations: TranslationMap = {
  // ─── Status Bar ──────────────────────────────────────────────
  "status.online": { en: "SYSTEM ONLINE", ar: "SYSTEM ONLINE" },
  "status.brand": { en: "CONSTANT_LABS", ar: "CONSTANT_LABS" },
  "status.connection": { en: "// SECURE CONNECTION ESTABLISHED", ar: "// SECURE CONNECTION ESTABLISHED" },

  // ─── Hero ────────────────────────────────────────────────────
  "hero.tagline": { en: "FROM IDEA TO REALITY.", ar: "من الفكرة إلى الواقع." },
  "hero.freeConsultation": { en: "Free 30-min consultation — book now", ar: "استشارة مجانية 30 دقيقة — احجز الآن" },
  "hero.viewServices": { en: "[VIEW_SERVICES]", ar: "[الخدمات]" },
  "hero.contact": { en: "[INITIATE_CONTACT]", ar: "[تواصل معنا]" },

  // ─── Services ────────────────────────────────────────────────
  "services.title": { en: "[OUR_SERVICES]", ar: "[خدماتنا]" },
  "services.subtitle": { en: "// What we build for our clients", ar: "// ما نقدّمه لعملائنا" },

  // E-Commerce
  "service.E_COMMERCE.title": { en: "E-Commerce", ar: "التجارة الإلكترونية" },
  "service.E_COMMERCE.description": {
    en: "Full-stack online stores, payment integrations, and inventory systems that convert visitors into customers.",
    ar: "متاجر إلكترونية متكاملة مع بوابات الدفع وأنظمة إدارة المخزون."
  },
  "service.E_COMMERCE.oneLiner": { en: "Online stores that convert", ar: "متاجر تحوّل الزائر إلى عميل" },

  // Mobile & Web Apps
  "service.MOBILE_WEB_APPS.title": { en: "Mobile & Web Apps", ar: "تطبيقات الموبايل والويب" },
  "service.MOBILE_WEB_APPS.description": {
    en: "Native and cross-platform apps for iOS, Android, and the web — built from scratch around your users' needs.",
    ar: "تطبيقات iOS وAndroid وويب مبنية من الصفر حسب متطلبات مشروعك."
  },
  "service.MOBILE_WEB_APPS.oneLiner": { en: "Apps your users actually want", ar: "تطبيقات مصممة لمستخدميك" },

  // Dashboards & Internal Tools
  "service.DASHBOARDS_INTERNAL_TOOLS.title": { en: "Dashboards & Internal Tools", ar: "لوحات تحكم وأدوات داخلية" },
  "service.DASHBOARDS_INTERNAL_TOOLS.description": {
    en: "Admin panels, analytics dashboards, and business tools that give your team real-time visibility and control.",
    ar: "لوحات إدارة وتحليل بيانات تعطي فريقك رؤية كاملة وتحكم لحظي."
  },
  "service.DASHBOARDS_INTERNAL_TOOLS.oneLiner": { en: "Your data, at a glance", ar: "بياناتك، بلمحة" },

  // AI Agents & Automation
  "service.AI_AGENTS.title": { en: "AI Agents & Automation", ar: "أتمتة بالذكاء الاصطناعي" },
  "service.AI_AGENTS.description": {
    en: "Deploy AI agents that read emails, answer customers, generate reports, and make decisions autonomously — so your team focuses on what humans do best.",
    ar: "أنظمة AI تقرأ الإيميلات، ترد على العملاء، وتنشئ التقارير تلقائياً — فريقك يركّز على الأهم."
  },
  "service.AI_AGENTS.oneLiner": { en: "AI that works while you sleep", ar: "AI يشتغل وانت نايم" },

  // Custom AI Agents
  "service.CUSTOM_AI_AGENTS.title": { en: "Custom AI Agents", ar: "أنظمة AI مخصصة" },
  "service.CUSTOM_AI_AGENTS.description": {
    en: "Purpose-built AI agents tailored to your workflows. From customer support bots to autonomous data processors, we build agents that understand your business.",
    ar: "بوتات وأنظمة ذكاء اصطناعي مصممة خصيصاً لعملك — من خدمة العملاء إلى معالجة البيانات."
  },
  "service.CUSTOM_AI_AGENTS.oneLiner": { en: "Your business, automated", ar: "أتمتة مخصصة لعملك" },

  // Privacy-First Local AI
  "service.PRIVATE_AI.title": { en: "Privacy-First Local AI", ar: "AI محلي وآمن" },
  "service.PRIVATE_AI.description": {
    en: "Deploy AI models on-premise. Your data never leaves your servers. Custom LLMs, RAG pipelines, and inference engines running locally for compliance-sensitive businesses.",
    ar: "نماذج AI تعمل على سيرفراتك. بياناتك ما تطلع بره. حلول LLM محلية للشركات اللي تحتاج خصوصية عالية."
  },
  "service.PRIVATE_AI.oneLiner": { en: "AI that stays in-house", ar: "AI يبقى عندك" },

  // System Integration
  "service.SYSTEM_INTEGRATION.title": { en: "System Integration", ar: "ربط الأنظمة" },
  "service.SYSTEM_INTEGRATION.description": {
    en: "Connect your existing tools and eliminate data silos. We wire your CRM, payments, and third-party services into one unified pipeline.",
    ar: "نربط أنظمتك الحالية مع بعض — CRM، بوابات الدفع، وخدمات الطرف الثالث في مسار واحد."
  },
  "service.SYSTEM_INTEGRATION.oneLiner": { en: "Wire your systems together", ar: "نربط أنظمتك ببعض" },

  // B2B/B2C Platforms
  "service.B2B_B2C_PLATFORMS.title": { en: "B2B/B2C Platforms", ar: "منصات B2B/B2C" },
  "service.B2B_B2C_PLATFORMS.description": {
    en: "Multi-sided platforms that serve your business partners and end customers with tailored experiences under one roof.",
    ar: "منصات تخدم شركاءك وعملاءك بتجربة مخصصة لكل طرف تحت سقف واحد."
  },
  "service.B2B_B2C_PLATFORMS.oneLiner": { en: "Platforms for every audience", ar: "منصة لكل جمهور" },

  // Digital Presence
  "service.DIGITAL_PRESENCE.title": { en: "Digital Presence", ar: "الهوية الرقمية" },
  "service.DIGITAL_PRESENCE.description": {
    en: "Websites, landing pages, and digital identities that make your brand impossible to ignore.",
    ar: "مواقع ويب وصفحات هبوط وهوية رقمية تخلي علامتك التجارية ما تنتسى."
  },
  "service.DIGITAL_PRESENCE.oneLiner": { en: "Brands that stand out online", ar: "علامات تجارية تبرز رقمياً" },

  // Digital Marketing
  "service.DIGITAL_MARKETING.title": { en: "Digital Marketing", ar: "تسويق رقمي" },
  "service.DIGITAL_MARKETING.description": {
    en: "SEO, paid ads, social media management, and content strategy that drive real traffic and measurable ROI.",
    ar: "SEO، إعلانات مدفوعة، إدارة سوشال ميديا، واستراتيجية محتوى تجيب زيارات حقيقية ونتائج تنقاس."
  },
  "service.DIGITAL_MARKETING.oneLiner": { en: "Growth you can measure", ar: "نمو تقدر تقيسه" },

  // IoT & Embedded
  "service.IOT_EMBEDDED.title": { en: "IoT & Embedded Systems", ar: "IoT وأنظمة مدمجة" },
  "service.IOT_EMBEDDED.description": {
    en: "Connected devices, sensor networks, and embedded firmware — from prototype to deployment in the field.",
    ar: "أجهزة متصلة وشبكات حساسات وبرمجيات مدمجة — من النموذج الأولي للتشغيل الميداني."
  },
  "service.IOT_EMBEDDED.oneLiner": { en: "Smart devices, real world", ar: "أجهزة ذكية، تطبيق حقيقي" },

  // ERP Integrations
  "service.ERP_INTEGRATIONS.title": { en: "ERP Integrations", ar: "ربط أنظمة ERP" },
  "service.ERP_INTEGRATIONS.description": {
    en: "Seamless connections to SAP, Oracle, Odoo and other enterprise systems. Your data, unified.",
    ar: "ربط سلس مع SAP وOracle وOdoo وغيرها. بياناتك في مكان واحد."
  },
  "service.ERP_INTEGRATIONS.oneLiner": { en: "Enterprise systems, unified", ar: "أنظمتك، موحدة" },

  // ─── Mission ─────────────────────────────────────────────────
  "mission.label": { en: "[WHO_WE_ARE]", ar: "[من نحن]" },
  "mission.title": { en: "THE MISSION", ar: "رسالتنا" },
  "mission.line1": {
    en: "We don't just write code — we solve problems.",
    ar: "ما نكتب كود وبس — نحل مشاكل."
  },
  "mission.line2": {
    en: "Based in Dubai, building for the world. Our goal is to create a new wave of technology—the kind most would call sci-fi. We're here to make it real. To make it achievable. To make it something you can touch, use, and rely on.",
    ar: "من دبي، نبني للعالم. هدفنا نصنع موجة تقنية جديدة — اللي يسمونها خيال علمي. نحن هنا نحوّلها واقع. شي تقدر تلمسه وتستخدمه وتعتمد عليه."
  },
  "mission.line3": {
    en: "Hardware and software. No limits. No stopping until it's done.",
    ar: "هاردوير وسوفتوير. بلا حدود. ما نوقف إلا لما يخلص."
  },
  "mission.approach": { en: "// OUR APPROACH", ar: "// طريقتنا" },
  "mission.diagnose": { en: "Diagnose", ar: "تحليل" },
  "mission.diagnose.desc": { en: "We start with your challenge, not our tech stack", ar: "نبدأ من مشكلتك، مو من أدواتنا" },
  "mission.engineer": { en: "Engineer", ar: "بناء" },
  "mission.engineer.desc": { en: "We build what works, not what's trending", ar: "نبني اللي يشتغل، مو اللي ترند" },
  "mission.deliver": { en: "Deliver", ar: "تسليم" },
  "mission.deliver.desc": { en: "We stay until it runs and your team owns it", ar: "نبقى لين يشتغل النظام وفريقك يتملكه" },
  "mission.hardware": { en: "Hardware", ar: "هاردوير" },
  "mission.software": { en: "Software", ar: "سوفتوير" },
  "mission.noLimits": { en: "No Limits", ar: "بلا حدود" },
  "mission.tagline": { en: "// SCI-FI TODAY // REALITY TOMORROW //", ar: "// خيال علمي اليوم // واقع بكرة //" },

  // ─── Calendly / Booking ────────────────────────────────────────
  "calendly.title": { en: "[BOOK_A_CALL]", ar: "[احجز مكالمة]" },
  "calendly.subtitle": {
    en: "// Schedule a free 30-minute call to discuss your project.",
    ar: "// احجز مكالمة مجانية لمدة 30 دقيقة لمناقشة مشروعك."
  },
  "calendly.free": { en: "100% FREE", ar: "مجانية 100%" },

  // ─── Featured Work ─────────────────────────────────────────────
  "featured.title": { en: "[FEATURED_WORK]", ar: "[أعمال مميزة]" },
  "featured.subtitle": { en: "// Our best projects and client work", ar: "// أفضل مشاريعنا وأعمال عملائنا" },

  // ─── Vault ───────────────────────────────────────────────────
  "vault.title": { en: "[THE_VAULT]", ar: "[المشاريع]" },
  "vault.subtitle": { en: "// Active projects and experiments", ar: "// مشاريع وتجارب حالية" },
  "vault.software": { en: "// SOFTWARE", ar: "// سوفتوير" },
  "vault.hardware": { en: "// HARDWARE", ar: "// هاردوير" },
  "vault.viewAll": { en: "[VIEW_ALL_PROJECTS]", ar: "[عرض جميع المشاريع]" },
  "vault.hide": { en: "[HIDE_PROJECTS]", ar: "[إخفاء المشاريع]" },

  // ─── Concept Builds ──────────────────────────────────────────
  "clients.title": { en: "[CONCEPT_BUILDS]", ar: "[نماذج تجريبية]" },
  "clients.subtitle": {
    en: "// Concept builds showcasing our design and development capabilities",
    ar: "// نماذج تجريبية تعرض قدراتنا في التصميم والتطوير"
  },

  // ─── Operators ───────────────────────────────────────────────
  "operators.title": { en: "[OPERATORS]", ar: "[الفريق]" },
  "operators.subtitle": { en: "// Core team members", ar: "// أعضاء الفريق" },
  "operators.bilingual": {
    en: "A bilingual Arabic-English team on a mission to bring the world's best tools to the Arabic market.",
    ar: "فريق ثنائي اللغة عربي-إنجليزي، هدفنا نجيب أفضل الأدوات العالمية للسوق العربي."
  },
  "operators.journeyLog": { en: "// JOURNEY_LOG //", ar: "// JOURNEY_LOG //" },
  "operators.footer": { en: "// NEURAL_INTERFACE_ACTIVE // BIOMETRICS_VERIFIED //", ar: "// NEURAL_INTERFACE_ACTIVE // BIOMETRICS_VERIFIED //" },

  // ─── Contact ─────────────────────────────────────────────────
  "contact.title": { en: "[INITIATE_CONTACT]", ar: "[تواصل معنا]" },
  "contact.subtitle": { en: "// Secure communications channel active", ar: "// قناة اتصال آمنة" },
  "contact.cta": {
    en: "Got a project in the UAE? Need a Dubai-based tech team? Let's talk.",
    ar: "عندك مشروع في الإمارات؟ تحتاج فريق تقني في دبي؟ كلّمنا."
  },
  "contact.email": { en: "[EMAIL]", ar: "[إيميل]" },
  "contact.whatsapp": { en: "[WHATSAPP]", ar: "[واتساب]" },
  "contact.encrypted": { en: "[ENCRYPTED_CHANNEL]", ar: "[ENCRYPTED_CHANNEL]" },
  "contact.secureLine": { en: "[SECURE_LINE_OPEN]", ar: "[SECURE_LINE_OPEN]" },
  "contact.location": { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة" },

  // ─── Footer ──────────────────────────────────────────────────
  "footer.copyright": { en: "CONSTANT LABS © 2025 — DUBAI, UAE", ar: "CONSTANT LABS © 2025 — دبي، الإمارات" },
  "footer.tagline": { en: "// BUILT WITH PURPOSE // DESIGNED FOR IMPACT //", ar: "// بُني بهدف // صُمم للأثر //" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "الشروط والأحكام" },

  // ─── Project Detail ──────────────────────────────────────────
  "project.viewFullPage": { en: "VIEW FULL PAGE", ar: "عرض الصفحة" },
  "project.visitSite": { en: "VISIT SITE", ar: "زيارة الموقع" },
  "project.viewRepo": { en: "VIEW REPOSITORY", ar: "عرض الكود" },
  "project.techStack": { en: "// TECH STACK", ar: "// التقنيات" },
  "project.features": { en: "// FEATURES", ar: "// المميزات" },
  "project.back": { en: "BACK", ar: "رجوع" },
  "project.viewWork": { en: "// VIEW OUR WORK →", ar: "// شاهد أعمالنا ←" },

  // ─── Service Pages ───────────────────────────────────────────
  "privateAI.hero.title": { en: "Privacy-First Local AI", ar: "AI محلي وآمن" },
  "privateAI.hero.subtitle": {
    en: "Your data never leaves your servers. AI that runs entirely on-premise.",
    ar: "بياناتك ما تطلع من سيرفراتك. AI يشتغل بالكامل عندك."
  },
  "privateAI.why.title": { en: "WHY LOCAL AI?", ar: "ليش AI محلي؟" },
  "privateAI.why.sovereignty": { en: "Data Sovereignty", ar: "سيادة البيانات" },
  "privateAI.why.sovereignty.desc": {
    en: "Full control over your data. Compliant with UAE data protection regulations, GDPR, and industry-specific mandates.",
    ar: "تحكم كامل ببياناتك. متوافق مع قوانين حماية البيانات في الإمارات وGDPR."
  },
  "privateAI.why.speed": { en: "Zero Latency", ar: "بدون تأخير" },
  "privateAI.why.speed.desc": {
    en: "No round-trips to cloud APIs. Inference runs on your hardware at maximum speed.",
    ar: "بدون اتصال بالكلاود. المعالجة تتم على أجهزتك بأقصى سرعة."
  },
  "privateAI.why.cost": { en: "Predictable Costs", ar: "تكاليف ثابتة" },
  "privateAI.why.cost.desc": {
    en: "No per-token billing. Deploy once, run forever. Your hardware, your budget.",
    ar: "بدون فواتير لكل طلب. شغّل مرة، يشتغل دائماً. أجهزتك، ميزانيتك."
  },
  "privateAI.useCases.title": { en: "USE CASES", ar: "أمثلة تطبيقية" },
  "privateAI.cta": { en: "Get a Consultation", ar: "احجز استشارة" },

  "customAgents.hero.title": { en: "Custom AI Agents", ar: "أنظمة AI مخصصة" },
  "customAgents.hero.subtitle": {
    en: "Purpose-built agents that understand your business and automate your workflows.",
    ar: "بوتات وأنظمة مصممة لعملك تفهم احتياجاتك وتأتمت سير العمل."
  },
  "customAgents.what.title": { en: "WHAT WE BUILD", ar: "وش نبني" },
  "customAgents.how.title": { en: "HOW IT WORKS", ar: "كيف نشتغل" },
  "customAgents.cta": { en: "Discuss Your Agent Needs", ar: "كلّمنا عن مشروعك" },

  "websites.title": { en: "[CONCEPT_BUILDS]", ar: "[نماذج تجريبية]" },
  "websites.subtitle": {
    en: "// Concept builds demonstrating what we can deliver",
    ar: "// نماذج تجريبية توضّح اللي نقدر نسوّيه"
  },
};
