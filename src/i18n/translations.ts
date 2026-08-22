export type TranslationMap = Record<string, { en: string; ar: string }>;

export const translations: TranslationMap = {
  // ─── Announcement Bar ───────────────────────────────────────
  "announcement.text": {
    en: "NEW: AI Search Optimization for ChatGPT & Gemini",
    ar: "جديد: تحسين البحث بالذكاء الاصطناعي لـ ChatGPT و Gemini"
  },
  "announcement.cta": { en: "Learn More", ar: "اعرف أكثر" },

  // ─── Status Bar ──────────────────────────────────────────────
  "status.online": { en: "SYSTEM ONLINE", ar: "SYSTEM ONLINE" },
  "status.brand": { en: "CONSTANTSEO", ar: "CONSTANTSEO" },
  "status.connection": { en: "// AI-POWERED SEO AGENCY", ar: "// وكالة SEO بالذكاء الاصطناعي" },

  // ─── Navbar ─────────────────────────────────────────────────
  "nav.home": { en: "Home", ar: "الرئيسية" },
  "nav.services": { en: "Services", ar: "الخدمات" },
  "nav.caseStudies": { en: "Case Studies", ar: "دراسات حالة" },
  "nav.pricing": { en: "Pricing", ar: "الأسعار" },
  "nav.about": { en: "About", ar: "من نحن" },
  "nav.blog": { en: "Blog", ar: "المدونة" },
  "nav.tools": { en: "Tools", ar: "الأدوات" },
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "nav.audit": { en: "Get Free Audit", ar: "تدقيق مجاني" },

  // ─── Audit Page ─────────────────────────────────────────────
  "audit.seo.title": { en: "Free SEO Audit, ConstantSEO", ar: "تدقيق SEO مجاني، ConstantSEO" },
  "audit.seo.description": {
    en: "Review selected technical, metadata, and search signals for your website with ConstantSEO.",
    ar: "راجع مجموعة من الإشارات التقنية وبيانات الميتا وإشارات البحث لموقعك مع ConstantSEO."
  },
  "audit.hero.title": { en: "Free SEO Audit", ar: "تدقيق SEO مجاني" },
  "audit.hero.subtitle": {
    en: "Get your SEO score in seconds. Enter your website below.",
    ar: "احصل على تقييم SEO خلال ثوانٍ. أدخل موقعك أدناه."
  },
  "audit.input.placeholder": { en: "Enter your website URL...", ar: "أدخل رابط موقعك..." },
  "audit.input.button": { en: "Analyze", ar: "حلّل" },
  "audit.loading.meta": { en: "Checking meta tags...", ar: "فحص العلامات الوصفية..." },
  "audit.loading.performance": { en: "Analyzing performance...", ar: "تحليل الأداء..." },
  "audit.loading.accessibility": { en: "Reviewing accessibility...", ar: "مراجعة إمكانية الوصول..." },
  "audit.loading.seo": { en: "Evaluating SEO...", ar: "تقييم SEO..." },
  "audit.loading.final": { en: "Generating report...", ar: "إنشاء التقرير..." },
  "audit.result.seoScore": { en: "SEO Score", ar: "تقييم SEO" },
  "audit.result.perfScore": { en: "Performance", ar: "الأداء" },
  "audit.result.findings": { en: "Key Findings", ar: "النتائج الرئيسية" },
  "audit.result.passed": { en: "Passed", ar: "ناجح" },
  "audit.result.failed": { en: "Needs Work", ar: "يحتاج تحسين" },
  "audit.error.title": { en: "Analysis Failed", ar: "فشل التحليل" },
  "audit.error.message": {
    en: "Couldn't analyze this URL. Make sure it's publicly accessible and try again.",
    ar: "تعذر تحليل هذا الرابط. تأكد من أنه متاح للعامة وحاول مرة أخرى."
  },
  "audit.error.retry": { en: "Try Again", ar: "حاول مرة أخرى" },
  "audit.deep.title": { en: "Want the Full Picture?", ar: "تريد الصورة الكاملة؟" },
  "audit.deep.subtitle": {
    en: "Share your details for a deeper review of technical SEO, content quality, competitor context, and practical next steps.",
    ar: "شارك بياناتك لمراجعة أعمق تشمل SEO التقني وجودة المحتوى وسياق المنافسين والخطوات العملية التالية."
  },
  "audit.deep.name": { en: "Your Name", ar: "اسمك" },
  "audit.deep.namePlaceholder": { en: "Full name", ar: "الاسم الكامل" },
  "audit.deep.email": { en: "Email Address", ar: "البريد الإلكتروني" },
  "audit.deep.emailPlaceholder": { en: "you@company.com", ar: "you@company.com" },
  "audit.deep.website": { en: "Website URL", ar: "رابط الموقع" },
  "audit.deep.websitePlaceholder": { en: "https://yoursite.com", ar: "https://yoursite.com" },
  "audit.deep.submit": { en: "Request Free Deep Audit", ar: "اطلب تدقيقاً شاملاً مجانياً" },
  "audit.deep.success": {
    en: "Your details are ready. Contact us by WhatsApp or email to continue the review.",
    ar: "بياناتك جاهزة. تواصل معنا عبر واتساب أو البريد الإلكتروني لمتابعة المراجعة."
  },

  // ─── Hero (new keys used by redesigned pages) ──────────────
  "hero.headline": { en: "Rank Higher. Get More Customers.", ar: "تصدّر أعلى. اجذب عملاء أكثر." },
  "hero.subtitle": {
    en: "AI-powered SEO that fills your phone with calls and your business with buyers - on Google, ChatGPT, Gemini, and everywhere your customers search.",
    ar: "SEO بالذكاء الاصطناعي يملأ هاتفك بالمكالمات وعملك بالعملاء - على Google وChatGPT وGemini وكل مكان يبحث فيه عملاؤك."
  },
  "hero.inputPlaceholder": { en: "Enter your website...", ar: "أدخل موقعك الإلكتروني..." },
  "hero.cta": { en: "Get Free Audit", ar: "احصل على تدقيق مجاني" },
  "hero.platforms": { en: "Optimized for all AI platforms", ar: "محسّن لجميع منصات الذكاء الاصطناعي" },
  "hero.stat1.number": { en: "50+", ar: "+50" },
  "hero.stat1.label": { en: "Pages Deployed per Site", ar: "صفحة لكل موقع" },
  "hero.stat2.number": { en: "4hrs", ar: "4 ساعات" },
  "hero.stat2.label": { en: "Average Build Time", ar: "متوسط وقت البناء" },
  "hero.stat3.number": { en: "24/7", ar: "24/7" },
  "hero.stat3.label": { en: "AI Monitoring", ar: "مراقبة ذكية" },
  "hero.stat4.number": { en: "EN+AR", ar: "EN+عربي" },
  "hero.stat4.label": { en: "Bilingual SEO", ar: "SEO ثنائي اللغة" },

  // ─── Hero (legacy keys still used by Index.tsx) ─────────────
  "hero.tagline": { en: "Rank Higher. Get More Customers.", ar: "تصدّر أعلى. اجذب عملاء أكثر." },

  "hero.freeConsultation": { en: "Free AI Audit - see where you stand", ar: "تدقيق مجاني بالذكاء الاصطناعي - اعرف وضعك الحالي" },
  "hero.viewServices": { en: "[OUR_SERVICES]", ar: "[خدماتنا]" },
  "hero.contact": { en: "[GET_FREE_AUDIT]", ar: "[احصل على تدقيق مجاني]" },
  "hero.cta.audit": { en: "Get Free AI Audit", ar: "احصل على تدقيق مجاني" },
  "hero.cta.call": { en: "Book Strategy Call", ar: "احجز استشارة" },

  // ─── Client Logos ───────────────────────────────────────────
  "clients.trusted": {
    en: "Platforms We Optimize For",
    ar: "المنصات التي نُحسّن لها"
  },

  // ─── Homepage search signal field ───────────────────────────
  "home.nav.label": { en: "Primary navigation", ar: "التنقل الرئيسي" },
  "home.nav.open": { en: "Open navigation", ar: "فتح التنقل" },
  "home.nav.close": { en: "Close navigation", ar: "إغلاق التنقل" },
  "home.seo.title": { en: "ConstantSEO, search systems for the GCC", ar: "ConstantSEO، أنظمة بحث لمنطقة الخليج" },
  "home.seo.description": { en: "ConstantSEO builds bilingual, technical, and local search systems for businesses across the GCC.", ar: "تبني ConstantSEO أنظمة بحث ثنائية اللغة وتقنية ومحلية للشركات في أنحاء الخليج." },
  "signalField.label": { en: "Search signal field", ar: "مجال إشارات البحث" },
  "signalField.discovery": { en: "Organic discovery", ar: "الاكتشاف العضوي" },
  "signalField.conceptual": { en: "Conceptual model", ar: "نموذج مفاهيمي" },
  "signalField.title": { en: "Scattered search signals organizing into a rising trajectory", ar: "إشارات بحث متناثرة تنتظم في مسار صاعد" },
  "signalField.description": { en: "A deterministic presentation model shows query signals resolving into an organized search trajectory.", ar: "نموذج عرض حتمي يوضح كيف تنتظم إشارات الاستعلام في مسار بحث منظم." },
  "signalField.start": { en: "Early signals", ar: "إشارات أولية" },
  "signalField.end": { en: "Organized field", ar: "مجال منظم" },
  "signalField.query": { en: "Query", ar: "استعلام" },
  "signalField.scattered": { en: "Scattered signals", ar: "إشارات متناثرة" },
  "signalField.trajectory": { en: "Search trajectory", ar: "مسار البحث" },
  "signalField.presentation": { en: "Presentation model", ar: "نموذج توضيحي" },
  "signalField.disclaimer": { en: "Not performance data", ar: "ليس بيانات أداء" },
  "home.hero.eyebrow": { en: "Search systems for GCC growth", ar: "أنظمة بحث لنمو أعمال الخليج" },
  "home.hero.title": { en: "Build the answer people find.", ar: "ابنِ الإجابة التي يجدها الناس." },
  "home.hero.subtitle": { en: "Bilingual SEO systems for the pages, places, and questions that create qualified demand across the GCC.", ar: "أنظمة SEO ثنائية اللغة للصفحات والأماكن والأسئلة التي تخلق طلباً مؤهلاً في أنحاء الخليج." },
  "home.hero.inputLabel": { en: "Website to audit", ar: "الموقع المراد تدقيقه" },
  "home.hero.proofCta": { en: "Inspect the evidence", ar: "تحقق من الدليل" },
  "home.hero.methodCta": { en: "See the method", ar: "اطّلع على المنهج" },
  "home.capabilities.eyebrow": { en: "SEO, GEO, and AEO together", ar: "SEO و GEO و AEO معاً" },
  "home.capabilities.copy": { en: "One system running at the same time across classic search, local discovery, and AI answers.", ar: "نظام واحد يعمل في الوقت نفسه عبر البحث التقليدي والاكتشاف المحلي وإجابات الذكاء الاصطناعي." },
  "home.system.eyebrow": { en: "Visibility system", ar: "نظام الظهور" },
  "home.system.title": { en: "More than pages. A connected search presence.", ar: "أكثر من صفحات. حضور بحث مترابط." },
  "home.system.copy": { en: "We identify demand, build useful entry points, and learn from the signals the search engines return.", ar: "نحدد الطلب ونبني نقاط دخول مفيدة ونتعلم من الإشارات التي تعيدها محركات البحث." },
  "home.system.signal.title": { en: "Demand signal", ar: "إشارة الطلب" },
  "home.system.signal.copy": { en: "Research the terms, questions, and local intent worth earning.", ar: "نبحث في المصطلحات والأسئلة والنية المحلية التي تستحق أن نكسبها." },
  "home.system.structure.title": { en: "Useful structure", ar: "بنية مفيدة" },
  "home.system.structure.copy": { en: "Connect service, location, and editorial pages around a clear buyer journey.", ar: "نربط صفحات الخدمات والمناطق والمحتوى التحريري حول رحلة مشترٍ واضحة." },
  "home.system.measure.title": { en: "Measured learning", ar: "تعلم قابل للقياس" },
  "home.system.measure.copy": { en: "Use Search Console evidence to prioritize the next meaningful improvement.", ar: "نستخدم أدلة Search Console لترتيب التحسين التالي ذي المعنى." },
  "home.system.outcome": { en: "What this changes", ar: "ما الذي يغيره ذلك" },
  "home.system.outcome1": { en: "Clearer paths from query to contact", ar: "مسارات أوضح من الاستعلام إلى التواصل" },
  "home.system.outcome2": { en: "Arabic and English built together", ar: "العربية والإنجليزية مبنيتان معاً" },
  "home.system.outcome3": { en: "Reporting tied to search evidence", ar: "تقارير مرتبطة بأدلة البحث" },
  "home.services.title": { en: "The work behind durable visibility.", ar: "العمل وراء ظهور مستدام." },
  "home.services.copy": { en: "Focused specialist work, assembled as one search system rather than a stack of disconnected deliverables.", ar: "عمل متخصص ومركز، يُجمع كنظام بحث واحد بدلاً من مجموعة مخرجات منفصلة." },
  "home.services.ai.title": { en: "AI search presence", ar: "حضور في البحث بالذكاء الاصطناعي" },
  "home.services.ai.copy": { en: "Make useful, citable information easier for AI-assisted discovery to understand.", ar: "نجعل المعلومات المفيدة والقابلة للاستشهاد أسهل للفهم ضمن الاكتشاف بمساعدة الذكاء الاصطناعي." },
  "home.services.technical.title": { en: "Technical foundations", ar: "أسس تقنية" },
  "home.services.technical.copy": { en: "Resolve crawl, indexation, and performance issues that get in the way of a useful site.", ar: "نعالج مشكلات الزحف والفهرسة والأداء التي تعيق موقعاً مفيداً." },
  "home.services.content.title": { en: "Content systems", ar: "أنظمة المحتوى" },
  "home.services.content.copy": { en: "Plan and publish editorial pages that answer the questions worth owning.", ar: "نخطط وننشر صفحات تحريرية تجيب عن الأسئلة التي تستحق امتلاكها." },
  "home.services.local.title": { en: "Local discovery", ar: "الاكتشاف المحلي" },
  "home.services.local.copy": { en: "Build trustworthy location signals for the customers closest to your offer.", ar: "نبني إشارات موقع موثوقة للعملاء الأقرب إلى عرضك." },
  "home.services.arabic.title": { en: "Arabic search", ar: "البحث بالعربية" },
  "home.services.arabic.copy": { en: "Create a cohesive Arabic experience built for local language and search intent.", ar: "ننشئ تجربة عربية متماسكة مبنية للغة المحلية ونيّة البحث." },
  "home.method.eyebrow": { en: "Methodology", ar: "المنهجية" },
  "home.method.title": { en: "From a useful brief to a learning search system.", ar: "من موجز مفيد إلى نظام بحث يتعلم." },
  "home.method.copy": { en: "A visible sequence for deciding what to build, publishing it well, and improving from the evidence.", ar: "تسلسل واضح لتحديد ما يجب بناؤه ونشره بإتقان وتحسينه وفقاً للأدلة." },
  "home.method.audit.title": { en: "Audit", ar: "تدقيق" },
  "home.method.audit.copy": { en: "Establish the technical and content baseline before choosing priorities.", ar: "نحدد الأساس التقني والمحتوى قبل اختيار الأولويات." },
  "home.method.map.title": { en: "Map", ar: "خريطة" },
  "home.method.map.copy": { en: "Connect demand themes to a clear page, place, or answer.", ar: "نربط موضوعات الطلب بصفحة أو مكان أو إجابة واضحة." },
  "home.method.build.title": { en: "Build", ar: "بناء" },
  "home.method.build.copy": { en: "Create the structure and content that make each result genuinely useful.", ar: "ننشىء البنية والمحتوى اللذين يجعلان كل نتيجة مفيدة فعلاً." },
  "home.method.publish.title": { en: "Publish", ar: "نشر" },
  "home.method.publish.copy": { en: "Release pages with the technical signals search engines need to read them.", ar: "ننشر الصفحات بإشارات تقنية تحتاجها محركات البحث لقراءتها." },
  "home.method.learn.title": { en: "Learn", ar: "تعلم" },
  "home.method.learn.copy": { en: "Review evidence, improve the next priority, and repeat.", ar: "نراجع الأدلة ونحسن الأولوية التالية ونكرر العملية." },
  "home.methods.eyebrow": { en: "Methods, not client logos", ar: "مناهج وليست شعارات عملاء" },
  "home.methods.title": { en: "Work designed to earn discovery.", ar: "عمل مصمم لكسب الاكتشاف." },
  "home.methods.copy": { en: "We show the work categories we use instead of making outcome promises that cannot be substantiated.", ar: "نعرض فئات العمل التي نستخدمها بدلاً من تقديم وعود بالنتائج لا يمكن إثباتها." },
  "home.methods.research.title": { en: "Research maps", ar: "خرائط البحث" },
  "home.methods.research.copy": { en: "Technical context, search intent, and a prioritised route forward.", ar: "سياق تقني ونية بحث ومسار مرتب حسب الأولوية." },
  "home.methods.local.title": { en: "Local relevance", ar: "الملاءمة المحلية" },
  "home.methods.local.copy": { en: "Location signals that help the right nearby customers understand your offer.", ar: "إشارات موقع تساعد العملاء القريبين المناسبين على فهم عرضك." },
  "home.methods.bilingual.title": { en: "Bilingual depth", ar: "عمق ثنائي اللغة" },
  "home.methods.bilingual.copy": { en: "Arabic and English information architecture planned as one connected experience.", ar: "هندسة معلومات عربية وإنجليزية مخططة كتجربة واحدة مترابطة." },
  "home.methods.link": { en: "Explore service", ar: "استكشف الخدمة" },
  "home.cta.eyebrow": { en: "Your next signal", ar: "إشارتك التالية" },
  "home.cta.title": { en: "Start with the evidence your site already has.", ar: "ابدأ بالدليل الموجود بالفعل في موقعك." },
  "home.cta.copy": { en: "Request a practical audit and we will identify the clearest opportunities in your current search presence.", ar: "اطلب تدقيقاً عملياً وسنحدد أوضح الفرص في حضورك الحالي ضمن البحث." },
  "home.booking.eyebrow": { en: "Book a working session", ar: "احجز جلسة عمل" },
  "home.booking.title": { en: "A useful next conversation.", ar: "محادثة تالية مفيدة." },
  "home.booking.panelTitle": { en: "Bring the search question.", ar: "أحضر سؤال البحث." },
  "home.booking.panelCopy": { en: "We will use the time to understand your current search presence and the most useful next investigation.", ar: "سنستخدم الوقت لفهم حضورك الحالي في البحث وأفضل تحقيق تالٍ مفيد." },
  "whatsapp.ariaLabel": { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },
  "whatsapp.tooltip": { en: "Chat on WhatsApp", ar: "تواصل عبر واتساب" },

  // ─── Mufakkir evidence ─────────────────────────────────────
  "mufakkir.eyebrow": { en: "SEO, GEO, AEO together, six-month growth story", ar: "SEO و GEO و AEO معاً، قصة نمو خلال ستة أشهر" },
  "mufakkir.title": { en: "From zero visibility to 1.74K clicks.", ar: "من ظهور معدوم إلى 1.74 ألف نقرة." },
  "mufakkir.regionLabel": { en: "Mufakkir organic search performance", ar: "أداء مَفكِّر في البحث العضوي" },
  "mufakkir.statement": {
    en: "For mufakkir.app, Google Search Console reported 1.74K organic clicks, 29K impressions, 6.0% CTR, and average position 8.4 over the displayed 12-month period. The operating model runs SEO, GEO, and AEO together from day one.",
    ar: "بالنسبة إلى mufakkir.app، أبلغ Google Search Console عن 1.74 ألف نقرة عضوية و29 ألف ظهور ونسبة نقر إلى ظهور قدرها 6.0% ومتوسط ترتيب 8.4 خلال فترة الاثني عشر شهراً المعروضة."
  },
  "mufakkir.metric.clicks": { en: "Total clicks", ar: "إجمالي النقرات" },
  "mufakkir.metric.impressions": { en: "Total impressions", ar: "إجمالي مرات الظهور" },
  "mufakkir.metric.ctr": { en: "Average CTR", ar: "متوسط نسبة النقر إلى الظهور" },
  "mufakkir.metric.position": { en: "Average position", ar: "متوسط الترتيب" },
  "mufakkir.source": { en: "mufakkir.app performance report · selected 12 months", ar: "تقرير أداء mufakkir.app · الاثنا عشر شهراً المحددة" },
  "mufakkir.viewScreenshot": { en: "View source screenshot", ar: "عرض لقطة المصدر" },
  "mufakkir.imageAlt": { en: "Google Search Console performance screenshot for mufakkir.app", ar: "لقطة أداء Google Search Console لموقع mufakkir.app" },

  // ─── Problem / Solution ─────────────────────────────────────
  "problem.label": { en: "The Problem", ar: "المشكلة" },
  "problem.title": { en: "Your Customers Are Searching - But Can't Find You", ar: "عملاؤك يبحثون - لكنهم لا يجدونك" },
  "problem.point1": { en: "Competitors are stealing your customers on Google every day", ar: "المنافسون يسرقون عملاءك على جوجل كل يوم" },
  "problem.point2": { en: "AI tools like ChatGPT recommend your competitors, not you", ar: "أدوات الذكاء الاصطناعي كـ ChatGPT توصي بمنافسيك وليس بك" },
  "problem.point3": { en: "You're paying for ads but organic traffic brings zero calls", ar: "تدفع على الإعلانات لكن البحث العضوي لا يجلب مكالمات" },
  "problem.point4": { en: "Old SEO agencies take 12 months and deliver no real revenue", ar: "وكالات SEO القديمة تأخذ 12 شهراً ولا تحقق إيرادات حقيقية" },

  "solution.label": { en: "Our Solution", ar: "الحل" },
  "solution.title": { en: "AI-Powered SEO That Brings Real Customers", ar: "SEO بالذكاء الاصطناعي يجلب عملاء حقيقيين" },
  "solution.point1": { en: "Customers start calling and visiting within weeks, not months", ar: "العملاء يبدأون بالاتصال والزيارة في أسابيع وليس أشهر" },
  "solution.point2": { en: "Your business shows up on Google AND when people ask ChatGPT", ar: "عملك يظهر على Google وعند سؤال ChatGPT معاً" },
  "solution.point3": { en: "SEO strategy built specifically for your customers and market", ar: "استراتيجية SEO مبنية خصيصاً لعملائك وسوقك" },
  "solution.point4": { en: "50+ pages that attract customers, deployed in hours not months", ar: "50+ صفحة تجذب العملاء، تُنشر في ساعات وليس أشهر" },

  // ─── Services (new keys used by redesigned pages) ───────────
  "services.label": { en: "Our Services", ar: "خدماتنا" },
  "services.title": { en: "Connected Search Systems for the GCC", ar: "أنظمة بحث مترابطة للخليج" },
  "services.subtitle": { en: "Technical, local, bilingual, content, and AI-answer search work coordinated as one system.", ar: "عمل تقني ومحلي وثنائي اللغة ومحتوى وظهور في إجابات الذكاء الاصطناعي منسق كنظام واحد." },
  "services.learnMore": { en: "Learn More", ar: "اعرف أكثر" },

  "service.aiSeo.title": { en: "Show Up When Customers Ask Google or ChatGPT", ar: "اظهر عندما يسأل العملاء Google أو ChatGPT" },
  "service.aiSeo.desc": {
    en: "Whether customers Google you or ask ChatGPT, Gemini, or Perplexity - your business shows up as the answer. AI-powered SEO (GEO/AEO) makes you the recommended choice.",
    ar: "سواء بحث عنك العملاء على Google أو سألوا ChatGPT وGemini - يظهر عملك كالإجابة الأولى. SEO بالذكاء الاصطناعي يجعلك الخيار الموصى به."
  },

  "service.technicalSeo.title": { en: "Fix What's Keeping You Off Page 1", ar: "أصلح ما يمنعك من الصفحة الأولى" },
  "service.technicalSeo.desc": {
    en: "Slow site, broken pages, bad structure - technical problems silently kill your rankings. We diagnose and fix every issue so customers can actually find you in search.",
    ar: "موقع بطيء، صفحات معطلة، هيكل سيء - المشاكل التقنية تقتل ترتيبك بصمت. نشخّص ونصلح كل مشكلة حتى يجدك العملاء في البحث."
  },

  "service.contentStrategy.title": { en: "More Organic Traffic Every Month", ar: "حركة مرور عضوية أكثر كل شهر" },
  "service.contentStrategy.desc": {
    en: "Content that ranks and converts. AI-researched keywords and topic clusters that bring your target customers to your site month after month - without paying for every click.",
    ar: "محتوى يتصدر ويحوّل الزوار. كلمات مفتاحية بالذكاء الاصطناعي تجلب عملاءك المستهدفين شهراً بعد شهر - بدون دفع على كل نقرة."
  },

  "service.localSeo.title": { en: "Be the #1 Result When Locals Search", ar: "كن النتيجة الأولى عندما يبحث المحليون" },
  "service.localSeo.desc": {
    en: "When someone in Dubai or Riyadh searches for what you offer, you appear first. Google Business optimization, local citations, and Arabic SEO content that drives real foot traffic and calls.",
    ar: "عندما يبحث شخص في دبي أو الرياض عما تقدمه، تظهر أنت أولاً. تحسين Google Business والمحتوى العربي يجلبان زيارات حقيقية ومكالمات."
  },

  "service.arabicSeo.title": { en: "Reach Gulf Customers in Their Own Language", ar: "اوصل لعملاء الخليج بلغتهم" },
  "service.arabicSeo.desc": {
    en: "Millions of Gulf customers search in Arabic. Native Arabic SEO content, RTL-optimized pages, and Arabic keyword research that connects you with customers others are missing.",
    ar: "ملايين عملاء الخليج يبحثون بالعربية. محتوى SEO عربي أصيل وبحث كلمات مفتاحية عربية يربطك بعملاء يفوّتهم غيرك."
  },

  // ─── Services (legacy keys for SERVICES array in Index.tsx) ──
  "service.AI_SEARCH_OPTIMIZATION.title": { en: "AI Search Optimization (GEO/AEO)", ar: "تحسين البحث بالذكاء الاصطناعي (GEO/AEO)" },
  "service.AI_SEARCH_OPTIMIZATION.description": {
    en: "Dominate AI search results across ChatGPT, Gemini, Perplexity, and Claude. We optimize your digital presence so AI assistants recommend YOUR business.",
    ar: "تصدّر نتائج البحث في ChatGPT وGemini وPerplexity وClaude. نُحسّن حضورك الرقمي ليوصي بك الذكاء الاصطناعي."
  },
  "service.AI_SEARCH_OPTIMIZATION.oneLiner": { en: "Get recommended by AI", ar: "خلّ الذكاء الاصطناعي يوصي بك" },

  "service.TECHNICAL_SEO.title": { en: "Technical SEO Mastery", ar: "إتقان SEO التقني" },
  "service.TECHNICAL_SEO.description": {
    en: "Lightning-fast, technically flawless websites that search engines love. From Core Web Vitals to schema markup, we handle every technical detail.",
    ar: "مواقع سريعة وخالية من الأخطاء التقنية تعشقها محركات البحث. من Core Web Vitals إلى البيانات المنظمة، نتولى كل التفاصيل."
  },
  "service.TECHNICAL_SEO.oneLiner": { en: "Technically flawless foundations", ar: "أساس تقني متين" },

  "service.ARABIC_CONTENT.title": { en: "Arabic Content Strategy", ar: "استراتيجية المحتوى العربي" },
  "service.ARABIC_CONTENT.description": {
    en: "Native Arabic content that resonates with GCC audiences. Culturally authentic, SEO-optimized content by native speakers.",
    ar: "محتوى عربي أصيل يتحدث بلسان جمهور الخليج. محتوى مُحسّن لمحركات البحث من كتّاب عرب يفهمون الثقافة المحلية."
  },
  "service.ARABIC_CONTENT.oneLiner": { en: "Content that speaks to the Gulf", ar: "محتوى يخاطب جمهور الخليج" },

  "service.LOCAL_SEO.title": { en: "Local SEO Dominance", ar: "السيطرة على البحث المحلي" },
  "service.LOCAL_SEO.description": {
    en: "Own your local market. Google Maps optimization, local citations, and geo-targeted content for UAE, Saudi Arabia, and Oman.",
    ar: "سيطر على سوقك المحلي. تحسين خرائط جوجل، بناء الاستشهادات المحلية، ومحتوى جغرافي مستهدف للإمارات والسعودية وعُمان."
  },
  "service.LOCAL_SEO.oneLiner": { en: "Own your local market", ar: "سيطر على سوقك المحلي" },

  "service.SEO_AUDITS.title": { en: "SEO Audits & Analytics", ar: "تدقيق SEO والتحليلات" },
  "service.SEO_AUDITS.description": {
    en: "Comprehensive AI-driven audits that find and fix every issue. Real-time dashboards tracking your performance across Google AND AI platforms.",
    ar: "تدقيق شامل بالذكاء الاصطناعي يكتشف ويصلح كل مشكلة. لوحات بيانات لحظية تتابع أداءك في جوجل ومنصات الذكاء الاصطناعي."
  },
  "service.SEO_AUDITS.oneLiner": { en: "Find and fix every issue", ar: "اكتشف وأصلح كل مشكلة" },

  "service.WEBSITE_DEVELOPMENT.title": { en: "Website Development", ar: "تطوير المواقع" },
  "service.WEBSITE_DEVELOPMENT.description": {
    en: "SEO-first websites built with agentic AI in days, not months. 50+ optimized pages deployed before your competitors finish their first draft.",
    ar: "مواقع مبنية بأولوية SEO باستخدام الذكاء الاصطناعي في أيام وليس أشهر. 50+ صفحة مُحسّنة جاهزة قبل ما ينتهي منافسك من مسودته الأولى."
  },
  "service.WEBSITE_DEVELOPMENT.oneLiner": { en: "SEO-first sites, built fast", ar: "مواقع SEO أولاً، بسرعة فائقة" },

  "service.CRO.title": { en: "Conversion Rate Optimization", ar: "تحسين معدل التحويل" },
  "service.CRO.description": {
    en: "Turn traffic into revenue. Data-driven CRO that maximizes every visitor from both traditional and AI search channels.",
    ar: "حوّل الزيارات إلى إيرادات. تحسين معدل التحويل بالبيانات لتحقيق أقصى استفادة من كل زائر سواء من جوجل أو منصات الذكاء الاصطناعي."
  },
  "service.CRO.oneLiner": { en: "Turn traffic into revenue", ar: "حوّل الزيارات إلى أرباح" },

  // ─── Stats ───────────────────────────────────────────────────
  "stats.keywords": { en: "AI + Traditional SEO Combined", ar: "SEO تقليدي + ذكاء اصطناعي" },
  "stats.businesses": { en: "Built for the GCC Market", ar: "مصمم لسوق الخليج" },
  "stats.growth": { en: "Arabic + English Optimization", ar: "تحسين بالعربية والإنجليزية" },
  "stats.retention": { en: "Dubai-Based Team", ar: "فريق من دبي" },

  // ─── How It Works ───────────────────────────────────────────
  "howItWorks.label": { en: "How It Works", ar: "كيف نعمل" },
  "howItWorks.title": { en: "From Audit to Domination in 5 Steps", ar: "من التدقيق إلى التصدر في 5 خطوات" },

  "howItWorks.step1.title": { en: "Deep Audit", ar: "تدقيق شامل" },
  "howItWorks.step1.desc": {
    en: "Our AI scans your site, competitors, and market to find every opportunity and weakness.",
    ar: "يفحص الذكاء الاصطناعي موقعك ومنافسيك وسوقك لاكتشاف كل فرصة ونقطة ضعف."
  },

  "howItWorks.step2.title": { en: "Keyword Intelligence", ar: "ذكاء الكلمات المفتاحية" },
  "howItWorks.step2.desc": {
    en: "AI-driven keyword research across Google AND AI platforms. We find what your customers actually search for.",
    ar: "بحث كلمات مفتاحية بالذكاء الاصطناعي عبر Google ومنصات AI. نجد ما يبحث عنه عملاؤك فعلاً."
  },

  "howItWorks.step3.title": { en: "Rapid Build", ar: "بناء سريع" },
  "howItWorks.step3.desc": {
    en: "50+ SEO-optimized pages deployed in days. Content, schema, internal linking - all automated.",
    ar: "أكثر من 50 صفحة محسّنة تُنشر في أيام. المحتوى والبيانات المهيكلة والروابط الداخلية - كلها مؤتمتة."
  },

  "howItWorks.step4.title": { en: "Continuous Optimization", ar: "تحسين مستمر" },
  "howItWorks.step4.desc": {
    en: "AI monitors rankings, adjusts strategy, and keeps your content fresh and competitive 24/7.",
    ar: "يراقب الذكاء الاصطناعي ترتيبك ويعدّل الاستراتيجية ويبقي محتواك حديثاً وتنافسياً على مدار الساعة."
  },

  "howItWorks.step5.title": { en: "Dominate", ar: "تصدّر" },
  "howItWorks.step5.desc": {
    en: "Watch your brand become the #1 answer on Google, ChatGPT, Gemini, and every search platform.",
    ar: "شاهد علامتك التجارية تصبح الإجابة الأولى على Google وChatGPT وGemini وكل محرك بحث."
  },

  // ─── Mission / About (used by Index.tsx) ─────────────────────
  "mission.label": { en: "[WHO_WE_ARE]", ar: "[من نحن]" },
  "mission.title": { en: "THE MISSION", ar: "رسالتنا" },
  "mission.line1": {
    en: "We don't just do SEO - we engineer search dominance.",
    ar: "ما نسوّي SEO وبس - نهندس سيطرة كاملة على نتائج البحث."
  },
  "mission.line2": {
    en: "Based in Dubai, built for the GCC. The search landscape is changing - AI assistants are becoming the new front door to every business. While others are still chasing Google rankings, we're already optimizing for ChatGPT, Gemini, and the next wave of AI search. Your business needs to be where your customers are looking, and that's everywhere.",
    ar: "من دبي، مبنيين لسوق الخليج. عالم البحث يتغيّر - مساعدات الذكاء الاصطناعي صارت الباب الأول لكل عمل تجاري. بينما غيرنا يلاحقون ترتيب جوجل، نحن نُحسّن ظهورك في ChatGPT وGemini والموجة القادمة من البحث الذكي. عملك لازم يكون حيث عملاؤك يبحثون، وهذا في كل مكان."
  },
  "mission.line3": {
    en: "AI-native. Arabic-first. Results-obsessed.",
    ar: "ذكاء اصطناعي أصيل. عربي أولاً. مهووسين بالنتائج."
  },
  "mission.approach": { en: "// OUR APPROACH", ar: "// منهجيتنا" },
  "mission.diagnose": { en: "Audit", ar: "تدقيق" },
  "mission.diagnose.desc": { en: "We analyze your search presence across Google and AI platforms", ar: "نحلل حضورك في جوجل ومنصات الذكاء الاصطناعي" },
  "mission.engineer": { en: "Strategize", ar: "تخطيط" },
  "mission.engineer.desc": { en: "We build a custom roadmap for your market and goals", ar: "نبني خطة مخصصة لسوقك وأهدافك" },
  "mission.deliver": { en: "Dominate", ar: "سيطرة" },
  "mission.deliver.desc": { en: "We execute relentlessly until you own your search results", ar: "ننفّذ بلا توقف حتى تسيطر على نتائج البحث" },
  "mission.hardware": { en: "AI-Native", ar: "ذكاء اصطناعي" },
  "mission.software": { en: "Arabic-First", ar: "عربي أولاً" },
  "mission.noLimits": { en: "Results-Driven", ar: "نتائج ملموسة" },
  "mission.tagline": { en: "// AI-POWERED SEO // FOR THE GCC MARKET //", ar: "// SEO بالذكاء الاصطناعي // لسوق الخليج //" },

  // ─── Case Studies (new keys) ────────────────────────────────
  "caseStudies.label": { en: "What We Do", ar: "ماذا نقدم" },
  "caseStudies.title": { en: "How We Help Businesses Get More Customers", ar: "كيف نساعد الأعمال على جذب عملاء أكثر" },

  "case1.metric": { en: "50+", ar: "+50" },
  "case1.title": { en: "Ranking & Calling in Hours", ar: "ترتيب أعلى ومكالمات في ساعات" },
  "case1.industry": { en: "AI-Powered", ar: "بالذكاء الاصطناعي" },
  "case1.market": { en: "Any Market", ar: "أي سوق" },
  "case1.desc": { en: "A local diesel repair business went from zero visibility to #1 on Google in 24 hours, generating thousands in revenue from phone calls - 50+ pages built by our AI in under 4 hours", ar: "شركة إصلاح محلية انتقلت من الصفر إلى المركز الأول في جوجل في 24 ساعة، وحققت آلاف الدراهم من المكالمات - 50+ صفحة بناها الذكاء الاصطناعي في أقل من 4 ساعات" },

  "case2.metric": { en: "GEO", ar: "GEO" },
  "case2.title": { en: "Customers Recommend You on AI", ar: "العملاء يجدونك على أدوات الذكاء الاصطناعي" },
  "case2.industry": { en: "Next-Gen SEO", ar: "SEO الجيل القادم" },
  "case2.market": { en: "GCC Region", ar: "منطقة الخليج" },
  "case2.desc": { en: "When customers ask ChatGPT, Gemini, or Perplexity \"who's the best AC repair company in Mirdif?\", your business is the recommended answer - not your competitor's", ar: "عندما يسأل العملاء ChatGPT أو Gemini \"من أفضل شركة تصليح تكييف في مردف؟\"، عملك هو الجواب الموصى به - وليس منافسك" },

  "case3.metric": { en: "AR+EN", ar: "عر+EN" },
  "case3.title": { en: "Reach Every Gulf Customer", ar: "اوصل لكل عميل خليجي" },
  "case3.industry": { en: "GCC Specialist", ar: "متخصص خليجي" },
  "case3.market": { en: "UAE · KSA · Oman", ar: "الإمارات · السعودية · عمان" },
  "case3.desc": { en: "Gulf customers search in both Arabic and English. Our bilingual SEO strategy makes sure you capture both audiences - double the reach, double the revenue", ar: "عملاء الخليج يبحثون بالعربية والإنجليزية. استراتيجية SEO ثنائية اللغة تضمن الوصول للجمهورين - ضعف الانتشار، ضعف الإيرادات" },

  // ─── Pricing (new keys) ─────────────────────────────────────
  "pricing.label": { en: "Pricing", ar: "الأسعار" },
  "pricing.title": { en: "Transparent Service Plans", ar: "باقات خدمات واضحة" },
  "pricing.subtitle": { en: "All plans include AI-powered optimization. No hidden fees.", ar: "جميع الباقات تشمل التحسين بالذكاء الاصطناعي. بدون رسوم مخفية." },
  "pricing.monthly": { en: "/ month", ar: "/ شهر" },
  "pricing.popular": { en: "Most Popular", ar: "الأكثر طلباً" },
  "pricing.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "pricing.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "pricing.cta": { en: "Get Started", ar: "ابدأ الآن" },
  "pricing.custom": { en: "Need a custom plan? Let's talk.", ar: "تحتاج خطة مخصصة؟ كلّمنا." },

  "pricing.starter.name": { en: "Starter", ar: "المبتدئ" },
  "pricing.starter.price": { en: "700 AED", ar: "700 درهم" },
  "pricing.starter.desc": { en: "A focused foundation for a smaller search scope", ar: "أساس مركز لنطاق بحث أصغر" },
  "pricing.starter.f1": { en: "15 target keywords", ar: "15 كلمة مفتاحية مستهدفة" },
  "pricing.starter.f2": { en: "Monthly SEO audit", ar: "تدقيق SEO شهري" },
  "pricing.starter.f3": { en: "Basic performance reporting", ar: "تقارير أداء أساسية" },
  "pricing.starter.f4": { en: "Google Search Console setup", ar: "إعداد Google Search Console" },
  "pricing.starter.f5": { en: "Technical SEO fixes", ar: "إصلاحات SEO التقنية" },
  "pricing.starter.f6": { en: "1 blog post per month", ar: "مقال واحد شهرياً" },
  "pricing.starter.f7": { en: "Email support", ar: "دعم عبر البريد الإلكتروني" },

  "pricing.growth.name": { en: "Growth", ar: "النمو" },
  "pricing.growth.price": { en: "1,400 AED", ar: "1,400 درهم" },
  "pricing.growth.desc": { en: "A broader recurring scope across technical, content, and local search", ar: "نطاق دوري أوسع عبر البحث التقني والمحتوى والبحث المحلي" },
  "pricing.growth.f1": { en: "50 target keywords", ar: "50 كلمة مفتاحية مستهدفة" },
  "pricing.growth.f2": { en: "Weekly optimization cycles", ar: "دورات تحسين أسبوعية" },
  "pricing.growth.f3": { en: "AI search tracking (GEO/AEO)", ar: "تتبع بحث الذكاء الاصطناعي (GEO/AEO)" },
  "pricing.growth.f4": { en: "Arabic content creation (4 articles / month)", ar: "إنشاء محتوى عربي (4 مقالات / شهر)" },
  "pricing.growth.f5": { en: "Local SEO for up to 3 locations", ar: "SEO محلي لـ 3 مواقع" },
  "pricing.growth.f7": { en: "Bi-weekly strategy calls", ar: "مكالمات استراتيجية كل أسبوعين" },

  "pricing.enterprise.name": { en: "Enterprise", ar: "المؤسسي" },
  "pricing.enterprise.price": { en: "3,000 AED", ar: "3,000 درهم" },
  "pricing.enterprise.desc": { en: "A coordinated multi-market scope across Google, AI platforms, Arabic, and English", ar: "نطاق منسق متعدد الأسواق عبر Google ومنصات الذكاء الاصطناعي والعربية والإنجليزية" },
  "pricing.enterprise.f1": { en: "Unlimited target keywords", ar: "كلمات مفتاحية غير محدودة" },
  "pricing.enterprise.f2": { en: "Dedicated SEO strategist", ar: "استراتيجي SEO مخصص" },
  "pricing.enterprise.f3": { en: "Custom AI search dashboard", ar: "لوحة بحث AI مخصصة" },
  "pricing.enterprise.f4": { en: "Unlimited Arabic & English content", ar: "محتوى عربي وإنجليزي غير محدود" },
  "pricing.enterprise.f5": { en: "Full GCC local SEO coverage", ar: "تغطية SEO محلي لكامل الخليج" },
  "pricing.enterprise.f7": { en: "Priority support (same-day response)", ar: "دعم أولوية (رد في نفس اليوم)" },

  // ─── Testimonials ───────────────────────────────────────────
  "testimonials.label": { en: "Proven Results", ar: "نتائج مُثبتة" },
  "testimonials.title": { en: "Real Results. Real Revenue.", ar: "نتائج حقيقية. إيرادات حقيقية." },

  "testimonial1.quote": {
    en: "A local diesel repair business went from zero to #1 on Google within 24 hours of launching - generating thousands in revenue from phone calls. 50+ optimized pages built in just 4 hours using the same AI technology we deploy for our clients.",
    ar: "شركة إصلاح ديزل محلية انتقلت من الصفر إلى المركز الأول في جوجل خلال 24 ساعة من الإطلاق - وحققت آلاف الدراهم من المكالمات الهاتفية. 50+ صفحة محسّنة بُنيت في 4 ساعات فقط باستخدام نفس تقنية AI التي نستخدمها."
  },
  "testimonial1.name": { en: "Real Case Study", ar: "دراسة حالة حقيقية" },
  "testimonial1.title": { en: "Documented by Greg Isenberg", ar: "موثقة بواسطة Greg Isenberg" },
  "testimonial1.company": { en: "234K+ views on YouTube", ar: "234 ألف+ مشاهدة على يوتيوب" },

  "testimonial2.quote": {
    en: "Traditional SEO agencies charge thousands per month and take 6-12 months for results. Our AI-powered approach builds 50+ pages, fixes all technical issues, optimizes for both Google AND AI platforms - in days, not months. Same tools. Fraction of the time.",
    ar: "وكالات SEO التقليدية تتقاضى آلافاً شهرياً وتحتاج 6-12 شهراً للنتائج. نهجنا بالذكاء الاصطناعي يبني 50+ صفحة، يصلح كل المشاكل التقنية، يحسّن لجوجل ومنصات AI - في أيام وليس أشهر."
  },
  "testimonial2.name": { en: "The AI Advantage", ar: "ميزة الذكاء الاصطناعي" },
  "testimonial2.title": { en: "Our Technology", ar: "تقنيتنا" },
  "testimonial2.company": { en: "Agentic AI SEO", ar: "SEO بالذكاء الاصطناعي" },

  "testimonial3.quote": {
    en: "Good foundational SEO equals good GEO. There's no secret strategy for appearing in ChatGPT or Gemini - it's about having a technically flawless site with the right content and authority. That's exactly what our AI builds, automatically.",
    ar: "SEO الأساسي الجيد يعني GEO جيد. لا توجد استراتيجية سرية للظهور في ChatGPT أو Gemini - الأمر يتعلق بموقع تقني مثالي بالمحتوى الصحيح والسلطة. وهذا بالضبط ما يبنيه الذكاء الاصطناعي تلقائياً."
  },
  "testimonial3.name": { en: "Industry Insight", ar: "رؤية الصناعة" },
  "testimonial3.title": { en: "SEO + GEO Strategy", ar: "استراتيجية SEO + GEO" },
  "testimonial3.company": { en: "Proven Methodology", ar: "منهجية مُثبتة" },

  // ─── FAQ (new keys) ─────────────────────────────────────────
  "faq.label": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "faq.title": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
  "faq.subtitle": { en: "// Common questions about our services", ar: "// أسئلة شائعة عن خدماتنا" },

  "faq1.q": { en: "What is AI SEO and how is it different from traditional SEO?", ar: "ما هو SEO بالذكاء الاصطناعي وكيف يختلف عن SEO التقليدي؟" },
  "faq1.a": {
    en: "AI-assisted SEO uses automation to support research, content operations, and technical review. It can also assess how clearly answer platforms such as ChatGPT, Gemini, and Perplexity can understand and cite a business, without guaranteeing inclusion.",
    ar: "يستخدم SEO بمساعدة الذكاء الاصطناعي الأتمتة لدعم البحث وعمليات المحتوى والمراجعة التقنية. ويمكنه أيضاً تقييم مدى وضوح النشاط لمنصات الإجابة مثل ChatGPT وGemini وPerplexity وقابليته للاستشهاد، دون ضمان الإدراج."
  },

  "faq2.q": { en: "How long until I see results?", ar: "كم من الوقت حتى أرى النتائج؟" },
  "faq2.a": {
    en: "Timing depends on the site's starting point, technical condition, content, competition, and authority. We establish a baseline, agree priorities, and report measured changes without promising a fixed ranking date.",
    ar: "تعتمد المدة على نقطة بداية الموقع وحالته التقنية والمحتوى والمنافسة والسلطة. نحدد خط أساس ونتفق على الأولويات ونبلغ عن التغييرات المقاسة دون وعد بتاريخ ثابت للترتيب."
  },

  "faq3.q": { en: "Do you work with businesses outside the UAE?", ar: "هل تعملون مع شركات خارج الإمارات؟" },
  "faq3.a": {
    en: "Yes! While we specialize in the GCC market (UAE, Saudi Arabia, Oman), we work with businesses worldwide. Our AI tools work in any language and market.",
    ar: "نعم! بينما نتخصص في سوق الخليج (الإمارات، السعودية، عمان)، نعمل مع شركات حول العالم. أدواتنا بالذكاء الاصطناعي تعمل بأي لغة وسوق."
  },

  "faq4.q": { en: "What is GEO and AEO?", ar: "ما هو GEO و AEO؟" },
  "faq4.a": {
    en: "GEO and AEO focus on content structure, entity clarity, citations, and technical signals that help AI answer platforms understand information. Each platform controls what it includes, so visibility cannot be guaranteed.",
    ar: "يركز GEO وAEO على بنية المحتوى ووضوح الكيانات والاستشهادات والإشارات التقنية التي تساعد منصات الإجابة على فهم المعلومات. تتحكم كل منصة فيما تدرجه، لذلك لا يمكن ضمان الظهور."
  },

  "faq5.q": { en: "Do you offer Arabic SEO?", ar: "هل تقدمون SEO بالعربية؟" },
  "faq5.a": {
    en: "Absolutely. We have native Arabic speakers who create authentic Arabic content, perform Arabic keyword research, and optimize for Arabic search queries. Our team understands the Gulf dialect and business culture.",
    ar: "بالتأكيد. لدينا متحدثون عرب أصليون ينشئون محتوى عربي أصيل، ويجرون بحث كلمات مفتاحية بالعربية، ويحسّنون لاستعلامات البحث العربية. فريقنا يفهم اللهجة الخليجية وثقافة الأعمال."
  },

  "faq6.q": { en: "What's included in the free audit?", ar: "ماذا يشمل التدقيق المجاني؟" },
  "faq6.a": {
    en: "Our free audit includes a technical SEO analysis, competitor comparison, keyword opportunity report, AI search visibility check, and a prioritized action plan. It's a comprehensive overview of where you stand and what needs to be done.",
    ar: "يشمل تدقيقنا المجاني تحليل SEO تقني، مقارنة مع المنافسين، تقرير فرص الكلمات المفتاحية، فحص ظهور بحث الذكاء الاصطناعي، وخطة عمل مرتبة حسب الأولوية."
  },

  "faq7.q": { en: "Do you require long-term contracts?", ar: "هل تتطلبون عقوداً طويلة الأمد؟" },
  "faq7.a": {
    en: "We offer month-to-month agreements with a recommended minimum of 6 months for meaningful SEO results. SEO is a long-term strategy, and we are transparent about that. You are never locked in - we earn your business every month.",
    ar: "نقدم اتفاقيات شهرية مع توصية بحد أدنى 6 أشهر لنتائج SEO ذات معنى. SEO استراتيجية طويلة المدى ونحن صريحون بهذا. لست مقيداً أبداً - نكسب ثقتك كل شهر."
  },

  "faq8.q": { en: "Can you build our website too?", ar: "هل يمكنكم بناء موقعنا أيضاً؟" },
  "faq8.a": {
    en: "Yes. We build SEO-first websites with planned information architecture, metadata, structured data, internal linking, accessibility, and technical review. Scope and schedule are agreed for each project.",
    ar: "نعم. نبني مواقع بأولوية SEO مع هندسة معلومات وبيانات ميتا وبيانات منظمة وروابط داخلية وإمكانية وصول ومراجعة تقنية مخططة. نتفق على النطاق والجدول لكل مشروع."
  },

  // ─── CTA Section ────────────────────────────────────────────
  "cta.title": { en: "Ready to Get More Customers From Search?", ar: "مستعد لجذب عملاء أكثر من البحث؟" },
  "cta.subtitle": {
    en: "Get a free AI SEO audit - see exactly how many customers you're losing to competitors right now, and how to win them back.",
    ar: "احصل على تدقيق SEO مجاني بالذكاء الاصطناعي - اعرف كم من العملاء تخسرهم للمنافسين الآن وكيف تستعيدهم."
  },
  "cta.emailPlaceholder": { en: "Enter your email...", ar: "أدخل بريدك الإلكتروني..." },
  "cta.button": { en: "Get Your Free Audit", ar: "احصل على تدقيقك المجاني" },
  "cta.whatsapp": { en: "Or chat with us on WhatsApp", ar: "أو تواصل معنا عبر واتساب" },
  "cta.freeAudit": { en: "Get Free AI Audit", ar: "احصل على تدقيق مجاني" },
  "cta.bookCall": { en: "Book Strategy Call", ar: "احجز استشارة" },
  "cta.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "cta.learnMore": { en: "Learn More", ar: "اعرف أكثر" },
  "cta.viewPricing": { en: "View Pricing", ar: "عرض الأسعار" },
  "cta.contactUs": { en: "Contact Us", ar: "تواصل معنا" },

  // ─── Calendly / Booking (used by CalendlySection.tsx) ───────
  "calendly.title": { en: "[BOOK_A_CALL]", ar: "[احجز استشارة]" },
  "calendly.subtitle": {
    en: "// Schedule a free strategy call to discuss your SEO goals.",
    ar: "// احجز استشارة مجانية لمناقشة أهدافك في تحسين محركات البحث."
  },
  "calendly.free": { en: "100% FREE", ar: "مجانية 100%" },

  // ─── ZCal Booking Section ─────────────────────────────────────
  "zcal.title": { en: "Let's Help You Out Right Now For Free", ar: "دعنا نساعدك الآن مجاناً" },
  "zcal.subtitle": {
    en: "Book a quick 30-min call to get actionable SEO advice. No strings attached.",
    ar: "احجز مكالمة سريعة لمدة 30 دقيقة للحصول على نصائح SEO قابلة للتنفيذ. بدون أي التزام."
  },
  "zcal.bookNow": { en: "Book Free Consultation", ar: "احجز استشارة مجانية" },
  "zcal.whatsapp": { en: "Or chat on WhatsApp", ar: "أو تواصل عبر واتساب" },
  "zcal.email": { en: "Or email us", ar: "أو راسلنا" },
  "zcal.emailSubject": { en: "Free SEO Consultation Request", ar: "طلب استشارة SEO مجانية" },
  "zcal.openCalendar": { en: "Open Calendar", ar: "افتح التقويم" },
  "zcal.loading": { en: "Loading booking calendar", ar: "جارٍ تحميل تقويم الحجز" },
  "zcal.iframeTitle": { en: "Book a consultation with ConstantSEO", ar: "احجز استشارة مع ConstantSEO" },
  "zcal.fallback": { en: "Use WhatsApp or email below, or return and try the calendar again.", ar: "استخدم واتساب أو البريد أدناه، أو ارجع وحاول فتح التقويم مرة أخرى." },
  "zcal.back": { en: "Back", ar: "رجوع" },
  "zcal.widgetFailed": { en: "Unable to load the booking widget", ar: "تعذر تحميل أداة الحجز" },
  "zcal.note": { en: "✓ No commitment  ✓ Real answers  ✓ Actionable advice", ar: "✓ بدون التزام  ✓ إجابة حقيقية  ✓ نصائح عملية" },
  "zcal.emoji": { en: "⚡", ar: "⚡" },

  // ─── Featured Work (used by Index.tsx) ──────────────────────
  "featured.title": { en: "[FEATURED_RESULTS]", ar: "[نتائج مميزة]" },
  "featured.subtitle": { en: "// Success stories from GCC businesses", ar: "// قصص نجاح من شركات الخليج" },

  // ─── Vault / Case Studies (used by Index.tsx) ───────────────
  "vault.title": { en: "[CASE_STUDIES]", ar: "[قصص النجاح]" },
  "vault.subtitle": { en: "// Proven results across the GCC", ar: "// نتائج مثبتة في جميع أنحاء الخليج" },
  "vault.software": { en: "// RESULTS", ar: "// النتائج" },
  "vault.hardware": { en: "// METRICS", ar: "// المقاييس" },
  "vault.viewAll": { en: "[VIEW_ALL_CASE_STUDIES]", ar: "[عرض جميع قصص النجاح]" },
  "vault.hide": { en: "[HIDE_CASE_STUDIES]", ar: "[إخفاء قصص النجاح]" },

  // ─── Client Work (used by Index.tsx) ────────────────────────
  "clientWork.title": { en: "[CLIENT_RESULTS]", ar: "[نتائج العملاء]" },
  "clientWork.subtitle": {
    en: "// Real results delivered for real businesses",
    ar: "// نتائج حقيقية لشركات حقيقية"
  },

  // ─── Clients Section (used by Index.tsx) ────────────────────
  "clients.title": { en: "[OUR_WORK]", ar: "[أعمالنا]" },
  "clients.subtitle": {
    en: "// Case studies showcasing our SEO and AI search results",
    ar: "// دراسات حالة تعرض نتائجنا في SEO والبحث الذكي"
  },

  // ─── Operators / Team (used by Index.tsx) ───────────────────
  "operators.title": { en: "[THE_TEAM]", ar: "[الفريق]" },
  "operators.subtitle": { en: "// The people behind your search dominance", ar: "// الفريق وراء تصدّرك في البحث" },
  "operators.bilingual": {
    en: "A bilingual Arabic-English team combining AI expertise with deep GCC market knowledge. We don't just understand SEO - we understand your market.",
    ar: "فريق ثنائي اللغة يجمع بين خبرة الذكاء الاصطناعي ومعرفة عميقة بسوق الخليج. ما نفهم SEO بس - نفهم سوقك."
  },
  "operators.journeyLog": { en: "// OUR_EXPERTISE //", ar: "// خبراتنا //" },
  "operators.footer": { en: "// AI_NATIVE // GCC_FOCUSED // RESULTS_DRIVEN //", ar: "// ذكاء_اصطناعي // تركيز_خليجي // نتائج_ملموسة //" },

  // ─── Contact (used by Index.tsx) ────────────────────────────
  "contact.title": { en: "[GET_IN_TOUCH]", ar: "[تواصل معنا]" },
  "contact.subtitle": { en: "// Let's discuss your search strategy", ar: "// خلنا نناقش استراتيجية البحث حقتك" },
  "contact.cta": {
    en: "Ready to dominate search in the GCC? Get your free AI audit today.",
    ar: "جاهز تتصدر نتائج البحث في الخليج؟ احصل على تدقيقك المجاني اليوم."
  },
  "contact.email": { en: "[EMAIL]", ar: "[إيميل]" },
  "contact.whatsapp": { en: "[WHATSAPP]", ar: "[واتساب]" },
  "contact.encrypted": { en: "[SECURE_CHANNEL]", ar: "[قناة آمنة]" },
  "contact.secureLine": { en: "[GET_FREE_AUDIT]", ar: "[احصل على تدقيق مجاني]" },
  "contact.location": { en: "Dubai, United Arab Emirates", ar: "دبي، الإمارات العربية المتحدة" },

  // ─── Footer (used by Index.tsx and new pages) ───────────────
  "footer.copyright": { en: "CONSTANTSEO \u00A9 2026 \u2014 A Constant Labs Product \u2014 DUBAI, UAE", ar: "CONSTANTSEO \u00A9 2026 \u2014 منتج من Constant Labs \u2014 دبي، الإمارات" },
  "footer.tagline": { en: "// AI-POWERED SEO // FOR THE GCC MARKET //", ar: "// SEO بالذكاء الاصطناعي // لسوق الخليج //" },
  "footer.privacy": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "footer.terms": { en: "Terms of Service", ar: "الشروط والأحكام" },
  "footer.brand": { en: "ConstantSEO", ar: "ConstantSEO" },
  "footer.taglineShort": { en: "AI-Powered SEO for the GCC Market", ar: "تحسين محركات البحث بالذكاء الاصطناعي لسوق الخليج" },
  "footer.services": { en: "Services", ar: "الخدمات" },
  "footer.company": { en: "Company", ar: "الشركة" },
  "footer.resources": { en: "Resources", ar: "الموارد" },
  "footer.contact": { en: "Contact", ar: "التواصل" },
  "footer.aiSeo": { en: "AI-Powered SEO", ar: "SEO بالذكاء الاصطناعي" },
  "footer.technicalSeo": { en: "Technical SEO", ar: "SEO تقني" },
  "footer.contentStrategy": { en: "Content Strategy", ar: "استراتيجية المحتوى" },
  "footer.localSeo": { en: "Local SEO", ar: "SEO محلي" },
  "footer.arabicSeo": { en: "Arabic SEO", ar: "SEO بالعربية" },
  "footer.seoAudits": { en: "SEO Audits", ar: "تدقيق SEO" },
  "footer.aboutUs": { en: "About Us", ar: "من نحن" },
  "footer.careers": { en: "Careers", ar: "الوظائف" },
  "footer.blog": { en: "Blog", ar: "المدونة" },
  "footer.caseStudies": { en: "Case Studies", ar: "دراسات حالة" },
  "footer.seoGuide": { en: "SEO Guide", ar: "دليل SEO" },
  "footer.aiSearchGuide": { en: "AI Search Guide", ar: "دليل بحث AI" },
  "footer.freeTools": { en: "Free Tools", ar: "أدوات مجانية" },
  "footer.email": { en: "akhmad@constantlabs.ai", ar: "akhmad@constantlabs.ai" },
  "footer.phone": { en: "+971 56 149 5656", ar: "+971 56 149 5656" },
  "footer.location": { en: "Dubai, Al Awir, UAE", ar: "دبي، العوير، الإمارات" },

  // ─── Project / Case Study Detail (used by ProjectDetailModal) ─
  "project.viewFullPage": { en: "VIEW FULL CASE STUDY", ar: "عرض دراسة الحالة" },
  "project.visitSite": { en: "VIEW RESULTS", ar: "عرض النتائج" },
  "project.viewRepo": { en: "VIEW DETAILS", ar: "عرض التفاصيل" },
  "project.techStack": { en: "// SERVICES USED", ar: "// الخدمات المستخدمة" },
  "project.features": { en: "// KEY RESULTS", ar: "// النتائج الرئيسية" },
  "project.back": { en: "BACK", ar: "رجوع" },
  "project.viewWork": { en: "// VIEW OUR RESULTS \u2192", ar: "// شاهد نتائجنا \u2190" },

  // ─── Service Pages ───────────────────────────────────────────
  "privateAI.hero.title": { en: "AI Search Optimization", ar: "تحسين البحث بالذكاء الاصطناعي" },
  "privateAI.hero.subtitle": {
    en: "Get recommended by ChatGPT, Gemini, Perplexity, and Claude. The future of search is AI.",
    ar: "خلّ ChatGPT وGemini وPerplexity وClaude يوصون بك. مستقبل البحث هو الذكاء الاصطناعي."
  },
  "privateAI.why.title": { en: "WHY AI SEARCH OPTIMIZATION?", ar: "ليش تحسين البحث بالذكاء الاصطناعي؟" },
  "privateAI.why.sovereignty": { en: "AI Recommendations", ar: "توصيات الذكاء الاصطناعي" },
  "privateAI.why.sovereignty.desc": {
    en: "When users ask AI about your industry, your brand appears as the top recommendation.",
    ar: "لما المستخدمين يسألون الذكاء الاصطناعي عن مجالك، علامتك التجارية تظهر كأول توصية."
  },
  "privateAI.why.speed": { en: "Competitive Edge", ar: "ميزة تنافسية" },
  "privateAI.why.speed.desc": {
    en: "Most businesses have zero AI search strategy. Be first in your market to dominate this channel.",
    ar: "أغلب الشركات ما عندها استراتيجية بحث AI. كن الأول في سوقك واسيطر على هالقناة."
  },
  "privateAI.why.cost": { en: "Compounding Returns", ar: "عوائد متراكمة" },
  "privateAI.why.cost.desc": {
    en: "AI search optimization compounds over time. The earlier you start, the harder it is for competitors to catch up.",
    ar: "تحسين البحث بالذكاء الاصطناعي يتراكم مع الوقت. كل ما بديت أبكر، كل ما صعب على منافسينك يلحقونك."
  },
  "privateAI.useCases.title": { en: "USE CASES", ar: "حالات الاستخدام" },
  "privateAI.cta": { en: "Get Your Free AI Audit", ar: "احصل على تدقيقك المجاني" },

  "customAgents.hero.title": { en: "Arabic Content Strategy", ar: "استراتيجية المحتوى العربي" },
  "customAgents.hero.subtitle": {
    en: "Native Arabic content that ranks in Google and resonates with GCC audiences.",
    ar: "محتوى عربي أصيل يتصدر جوجل ويتحدث بلغة جمهور الخليج."
  },
  "customAgents.what.title": { en: "WHAT WE CREATE", ar: "ماذا ننتج" },
  "customAgents.how.title": { en: "OUR PROCESS", ar: "طريقة عملنا" },
  "customAgents.cta": { en: "Discuss Your Content Strategy", ar: "ناقش استراتيجية المحتوى" },

  "websites.title": { en: "[OUR_SERVICES]", ar: "[خدماتنا]" },
  "websites.subtitle": {
    en: "// Comprehensive AI-powered SEO solutions for GCC businesses",
    ar: "// حلول SEO شاملة بالذكاء الاصطناعي لشركات الخليج"
  },

  // ─── City Landing Pages ──────────────────────────────────────
  "cityPage.breadcrumb.services": { en: "SEO Services", ar: "خدمات SEO" },
  "cityPage.cta.audit": { en: "Get Free Audit", ar: "احصل على تدقيق مجاني" },
  "cityPage.cta.services": { en: "View Services", ar: "عرض الخدمات" },
  "cityPage.hero.sub": { en: "Technical foundations, local discovery, bilingual content, structured data, and AI-answer visibility planned as one search system.", ar: "أسس تقنية واكتشاف محلي ومحتوى ثنائي اللغة وبيانات منظمة وظهور في إجابات الذكاء الاصطناعي ضمن نظام بحث واحد." },
  "cityPage.opportunity.label": { en: "Local Opportunity", ar: "الفرصة المحلية" },
  "cityPage.why.titlePrefix": { en: "Why SEO Matters in", ar: "لماذا يهم SEO في" },
  "cityPage.why.copy": { en: "A useful local search presence combines accurate technical signals, clear location information, relevant service pages, and content that works in Arabic and English. We audit and coordinate those elements without promising a fixed ranking or timeline.", ar: "يجمع الحضور المفيد في البحث المحلي بين إشارات تقنية دقيقة ومعلومات موقع واضحة وصفحات خدمات ذات صلة ومحتوى يعمل بالعربية والإنجليزية. ندقق هذه العناصر وننسقها دون وعد بترتيب أو مدة زمنية ثابتة." },
  "cityPage.system.technical": { en: "Technical review", ar: "مراجعة تقنية" },
  "cityPage.system.local": { en: "Local discovery", ar: "اكتشاف محلي" },
  "cityPage.system.bilingual": { en: "Bilingual coverage", ar: "تغطية ثنائية اللغة" },
  "cityPage.industries.label": { en: "Sector Expertise", ar: "خبرة القطاعات" },
  "cityPage.industries.titlePrefix": { en: "Industries We Serve in", ar: "القطاعات التي نخدمها في" },
  "cityPage.industries.subtitle": {
    en: "From established sectors to Vision-era growth industries, we have deep SEO expertise across the key verticals.",
    ar: "من القطاعات الراسخة إلى صناعات النمو في عهد الرؤية، لدينا خبرة SEO عميقة في أبرز المجالات."
  },
  "cityPage.keywords.label": { en: "Search Visibility", ar: "ظهور البحث" },
  "cityPage.keywords.title": { en: "Search Topics We Map", ar: "موضوعات البحث التي نرسم خريطتها" },
  "cityPage.keywords.subtitle": {
    en: "Representative high-intent search terms used to organize local content and technical coverage.",
    ar: "مصطلحات بحث تمثيلية ذات نية عالية تُستخدم لتنظيم المحتوى المحلي والتغطية التقنية."
  },
  "cityPage.local.label": { en: "Local Intelligence", ar: "الذكاء المحلي" },
  "cityPage.local.titlePrefix": { en: "What Makes", ar: "ما يجعل" },
  "cityPage.local.titleSuffix": { en: "SEO Unique", ar: "SEO فريداً" },
  "cityPage.local.subtitle": {
    en: "Generic SEO agencies apply cookie-cutter tactics. We build strategies around the specific commercial realities of your market.",
    ar: "وكالات SEO العادية تطبق أساليب جاهزة. نحن نبني استراتيجيات حول الواقع التجاري المحدد لسوقك."
  },
  "cityPage.facts.technical.title": { en: "Technical foundations", ar: "الأسس التقنية" },
  "cityPage.facts.technical.body": { en: "We review crawlability, indexation, page structure, performance, and structured data before planning expansion.", ar: "نراجع قابلية الزحف والفهرسة وبنية الصفحات والأداء والبيانات المنظمة قبل التخطيط للتوسع." },
  "cityPage.facts.local.title": { en: "Local entities", ar: "الكيانات المحلية" },
  "cityPage.facts.local.body": { en: "Business details, service areas, location pages, and map profiles should present consistent information across the search journey.", ar: "ينبغي أن تعرض بيانات النشاط ومناطق الخدمة وصفحات المواقع وملفات الخرائط معلومات متسقة عبر رحلة البحث." },
  "cityPage.facts.content.title": { en: "Bilingual content systems", ar: "أنظمة محتوى ثنائية اللغة" },
  "cityPage.facts.content.body": { en: "Arabic and English content are researched and reviewed separately, then connected with clear language and regional signals.", ar: "نبحث المحتوى العربي والإنجليزي ونراجعه كلٌّ على حدة، ثم نربطهما بإشارات لغوية وإقليمية واضحة." },
  "cityPage.faq.label": { en: "Common Questions", ar: "أسئلة شائعة" },
  "cityPage.faq.titleSuffix": { en: "SEO - FAQ", ar: "SEO - الأسئلة الشائعة" },
  "cityPage.faq.subtitlePrefix": { en: "Answers to the most common questions from", ar: "إجابات على أكثر الأسئلة شيوعاً من شركات" },
  "cityPage.faq.subtitleSuffix": { en: "businesses considering SEO.", ar: "التي تفكر في SEO." },
  "cityPage.faq.timing.q": { en: "How long does SEO take?", ar: "كم يستغرق SEO؟" },
  "cityPage.faq.timing.a": { en: "Timing depends on the site's starting point, technical condition, content, competition, and available authority. We define priorities and report measured changes without promising a fixed ranking date.", ar: "تعتمد المدة على نقطة بداية الموقع وحالته التقنية والمحتوى والمنافسة والسلطة المتاحة. نحدد الأولويات ونبلغ عن التغييرات المقاسة دون وعد بتاريخ ثابت للترتيب." },
  "cityPage.faq.arabic.q": { en: "Do you support Arabic SEO?", ar: "هل تدعمون SEO العربي؟" },
  "cityPage.faq.arabic.a": { en: "Yes. Arabic research, content, metadata, RTL presentation, and language targeting are planned alongside English rather than treated as a direct translation step.", ar: "نعم. نخطط للبحث والمحتوى وبيانات الميتا والعرض من اليمين إلى اليسار والاستهداف اللغوي بالعربية إلى جانب الإنجليزية، لا كخطوة ترجمة مباشرة." },
  "cityPage.faq.process.q": { en: "What does the local SEO process include?", ar: "ماذا تشمل عملية SEO المحلية؟" },
  "cityPage.faq.process.a": { en: "Scope can include technical review, business-profile consistency, location and service architecture, content planning, structured data, and measurement setup.", ar: "قد يشمل النطاق المراجعة التقنية واتساق ملف النشاط وبنية المواقع والخدمات وتخطيط المحتوى والبيانات المنظمة وإعداد القياس." },
  "cityPage.faq.ai.q": { en: "Can you review AI-answer visibility?", ar: "هل يمكنكم مراجعة الظهور في إجابات الذكاء الاصطناعي؟" },
  "cityPage.faq.ai.a": { en: "Yes. We review content structure, entity clarity, citations, and structured data that can help answer platforms understand the business. Inclusion is controlled by each platform and is not guaranteed.", ar: "نعم. نراجع بنية المحتوى ووضوح الكيان والاستشهادات والبيانات المنظمة التي قد تساعد منصات الإجابة على فهم النشاط. تتحكم كل منصة في الإدراج ولا نضمنه." },
  "cityPage.trust.technical": { en: "Technical foundations", ar: "أسس تقنية" },
  "cityPage.trust.local": { en: "Local search systems", ar: "أنظمة بحث محلية" },
  "cityPage.trust.bilingual": { en: "Arabic + English", ar: "العربية + الإنجليزية" },
  "cityPage.trust.structured": { en: "Structured data", ar: "بيانات منظمة" },

  // ─── Industry Landing Pages ──────────────────────────────────
  "industryPage.breadcrumb.services": { en: "Services", ar: "الخدمات" },
  "industryPage.cta.audit": { en: "Get Free SEO Audit", ar: "احصل على تدقيق SEO مجاني" },
  "industryPage.cta.whatsapp": { en: "WhatsApp Us", ar: "تواصل عبر واتساب" },
  "industryPage.hero.sub": { en: "Technical foundations, useful sector content, local entities, structured data, and bilingual coverage planned as one search system.", ar: "أسس تقنية ومحتوى قطاعي مفيد وكيانات محلية وبيانات منظمة وتغطية ثنائية اللغة ضمن نظام بحث واحد." },
  "industryPage.pain.label": { en: "Why This Is Hard", ar: "لماذا هذا صعب" },
  "industryPage.pain.titlePrefix": { en: "The SEO Challenges in", ar: "تحديات SEO في قطاع" },
  "industryPage.pain.structure.title": { en: "Fragmented page structure", ar: "بنية صفحات مجزأة" },
  "industryPage.pain.structure.body": { en: "Services, locations, and common questions often sit in disconnected pages that are difficult for people and crawlers to navigate.", ar: "غالباً ما تتوزع الخدمات والمواقع والأسئلة الشائعة على صفحات منفصلة يصعب على الناس وبرامج الزحف التنقل بينها." },
  "industryPage.pain.local.title": { en: "Unclear local entities", ar: "كيانات محلية غير واضحة" },
  "industryPage.pain.local.body": { en: "Inconsistent business details, service areas, and profiles make the local offer harder to understand.", ar: "تجعل بيانات النشاط ومناطق الخدمة والملفات غير المتسقة العرض المحلي أصعب فهماً." },
  "industryPage.pain.trust.title": { en: "Thin evidence and context", ar: "أدلة وسياق محدودان" },
  "industryPage.pain.trust.body": { en: "Sector pages need accurate definitions, useful explanations, and attributable sources rather than unsupported claims.", ar: "تحتاج صفحات القطاع إلى تعريفات دقيقة وشروحات مفيدة ومصادر قابلة للنسبة بدلاً من ادعاءات غير موثقة." },
  "industryPage.approach.label": { en: "Our Process", ar: "طريقتنا" },
  "industryPage.approach.title": { en: "How We Fix It", ar: "كيف نحل المشكلة" },
  "industryPage.approach.audit.title": { en: "Audit the foundation", ar: "تدقيق الأساس" },
  "industryPage.approach.audit.body": { en: "Review crawlability, indexation, page templates, metadata, performance, and existing measurement.", ar: "مراجعة قابلية الزحف والفهرسة وقوالب الصفحات وبيانات الميتا والأداء والقياس الحالي." },
  "industryPage.approach.map.title": { en: "Map useful topics", ar: "رسم خريطة موضوعات مفيدة" },
  "industryPage.approach.map.body": { en: "Connect audience questions to services, locations, and reference content with a clear information architecture.", ar: "ربط أسئلة الجمهور بالخدمات والمواقع والمحتوى المرجعي ضمن هندسة معلومات واضحة." },
  "industryPage.approach.build.title": { en: "Build consistent signals", ar: "بناء إشارات متسقة" },
  "industryPage.approach.build.body": { en: "Coordinate bilingual content, internal links, structured data, and local entity details.", ar: "تنسيق المحتوى ثنائي اللغة والروابط الداخلية والبيانات المنظمة وتفاصيل الكيانات المحلية." },
  "industryPage.approach.measure.title": { en: "Measure and learn", ar: "القياس والتعلم" },
  "industryPage.approach.measure.body": { en: "Establish a baseline, review attributable search evidence, and prioritize the next useful improvement.", ar: "تحديد خط أساس ومراجعة أدلة بحث قابلة للنسبة وترتيب التحسين المفيد التالي." },
  "industryPage.model.tech.metric": { en: "TECH", ar: "تقني" },
  "industryPage.model.tech.label": { en: "Crawl, indexation, and structured-data review", ar: "مراجعة الزحف والفهرسة والبيانات المنظمة" },
  "industryPage.model.local.metric": { en: "LOCAL", ar: "محلي" },
  "industryPage.model.local.label": { en: "Location and service-entity consistency", ar: "اتساق كيانات المواقع والخدمات" },
  "industryPage.model.bilingual.metric": { en: "AR+EN", ar: "عربي+EN" },
  "industryPage.model.bilingual.label": { en: "Arabic and English information architecture", ar: "هندسة معلومات عربية وإنجليزية" },
  "industryPage.keywords.label": { en: "Keyword Intelligence", ar: "ذكاء الكلمات المفتاحية" },
  "industryPage.keywords.title": { en: "Search Topics We Map", ar: "موضوعات البحث التي نرسم خريطتها" },
  "industryPage.keywords.subtitle": {
    en: "Representative high-intent queries used to organize useful content and technical coverage for the sector.",
    ar: "استعلامات تمثيلية ذات نية عالية تُستخدم لتنظيم محتوى مفيد وتغطية تقنية للقطاع."
  },
  "industryPage.faq.label": { en: "Common Questions", ar: "أسئلة شائعة" },
  "industryPage.faq.titleSuffix": { en: "SEO - FAQs", ar: "SEO - الأسئلة الشائعة" },
  "industryPage.faq.timing.q": { en: "How long does sector SEO take?", ar: "كم يستغرق SEO للقطاع؟" },
  "industryPage.faq.timing.a": { en: "Timing depends on the site's baseline, technical condition, content, competition, and authority. We report measured changes without promising a fixed ranking date.", ar: "تعتمد المدة على خط أساس الموقع وحالته التقنية والمحتوى والمنافسة والسلطة. نبلغ عن التغييرات المقاسة دون وعد بتاريخ ثابت للترتيب." },
  "industryPage.faq.scope.q": { en: "What can the engagement include?", ar: "ماذا قد يشمل نطاق العمل؟" },
  "industryPage.faq.scope.a": { en: "Scope can include technical review, content and location architecture, structured data, internal linking, and measurement setup. It is agreed for each site.", ar: "قد يشمل النطاق المراجعة التقنية وبنية المحتوى والمواقع والبيانات المنظمة والروابط الداخلية وإعداد القياس. نتفق عليه لكل موقع." },
  "industryPage.faq.arabic.q": { en: "Do you plan Arabic and English together?", ar: "هل تخططون للعربية والإنجليزية معاً؟" },
  "industryPage.faq.arabic.a": { en: "Yes. Research, metadata, content, RTL presentation, and structured data are reviewed in each language and connected with clear language signals.", ar: "نعم. نراجع البحث وبيانات الميتا والمحتوى والعرض من اليمين إلى اليسار والبيانات المنظمة بكل لغة ونربطها بإشارات لغوية واضحة." },
  "industryPage.faq.measurement.q": { en: "How is the work measured?", ar: "كيف يُقاس العمل؟" },
  "industryPage.faq.measurement.a": { en: "Measurement starts with an agreed baseline and attributed sources such as Search Console. Reporting separates observed changes from hypotheses and future priorities.", ar: "يبدأ القياس بخط أساس متفق عليه ومصادر منسوبة مثل Search Console. تفصل التقارير بين التغييرات المرصودة والفرضيات والأولويات المستقبلية." },
  // ─── Shared Inner-Page Headers ───────────────────────────────
  "inner.caseStudies.eyebrow": { en: "Case Studies", ar: "دراسات الحالة" },
  "inner.caseStudies.title": { en: "Documented SEO Work", ar: "أعمال SEO موثقة" },
  "inner.caseStudies.lede": {
    en: "Explore the context, scope, and reported outcomes behind selected SEO engagements across the GCC.",
    ar: "استكشف السياق والنطاق والنتائج المُبلّغ عنها لمشاريع SEO مختارة في دول الخليج."
  },
  "inner.pricing.title": { en: "Simple, Transparent Pricing", ar: "أسعار بسيطة وشفافة" },
  "inner.pricing.lede": {
    en: "No hidden fees or long-term lock-ins. Choose a plan that fits your business and adapt it as your needs change.",
    ar: "لا رسوم خفية ولا التزامات طويلة الأمد. اختر باقة تناسب عملك وعدّلها مع تغيّر احتياجاتك."
  },
  "inner.blog.title": { en: "Insights & Updates", ar: "رؤى وتحديثات" },
  "inner.blog.lede": {
    en: "SEO, AI search, and GCC market notes for teams making informed decisions about their search presence.",
    ar: "ملاحظات حول SEO والبحث بالذكاء الاصطناعي وأسواق الخليج لفرق تتخذ قرارات مدروسة بشأن حضورها في البحث."
  },
  "inner.notFound.title": { en: "Page not found", ar: "الصفحة غير موجودة" },
  "inner.notFound.lede": { en: "The page you requested is unavailable or has moved.", ar: "الصفحة التي طلبتها غير متاحة أو تم نقلها." },
  "inner.notFound.backHome": { en: "Back to Home", ar: "العودة إلى الرئيسية" },
  "inner.about.titleLead": { en: "AI-Powered SEO.", ar: "SEO مدعوم بالذكاء الاصطناعي." },
  "inner.about.titleTail": { en: "Built for the GCC.", ar: "مصمم للخليج." },
  "inner.about.lede": {
    en: "ConstantSEO is a Dubai-based SEO agency using agentic AI to build and improve search visibility across Google and AI search platforms.",
    ar: "ConstantSEO وكالة SEO مقرها دبي تستخدم الذكاء الاصطناعي الوكيلي لبناء وتحسين الظهور في Google ومنصات البحث بالذكاء الاصطناعي."
  },
  "inner.contact.lede": {
    en: "Request a practical review of your website's current search signals and technical foundations.",
    ar: "اطلب مراجعة عملية لإشارات البحث الحالية والأسس التقنية لموقعك الإلكتروني."
  },
  "inner.caseStudyDetail.all": { en: "All Case Studies", ar: "كل دراسات الحالة" },
  "inner.blogPost.by": { en: "By", ar: "بواسطة" },
  "inner.blogPost.toc": { en: "Table of Contents", ar: "جدول المحتويات" },
  "inner.blogPost.faqs": { en: "Frequently Asked Questions", ar: "الأسئلة الشائعة" },
  "inner.blogPost.sources": { en: "Sources", ar: "المصادر" },
  "inner.blogPost.tags": { en: "Tags", ar: "الوسوم" },
  "inner.blogPost.related": { en: "Related Articles", ar: "مقالات ذات صلة" },
  "inner.blogPost.back": { en: "Back to All Articles", ar: "العودة إلى كل المقالات" },

  // ─── Localized capabilities ────────────────────────────────
  "home.capabilities.technical": { en: "Technical SEO", ar: "SEO تقني" },
  "home.capabilities.local": { en: "Local search", ar: "البحث المحلي" },
  "home.capabilities.content": { en: "Content systems", ar: "أنظمة المحتوى" },
  "home.capabilities.schema": { en: "Structured data", ar: "البيانات المنظمة" },
  "home.capabilities.bilingual": { en: "Arabic + English visibility", ar: "ظهور عربي + إنجليزي" },
  "home.capabilities.answers": { en: "AI answer visibility", ar: "الظهور في إجابات AI" },

  // ─── Services and case studies ─────────────────────────────
  "services.seo.title": { en: "SEO Services | ConstantSEO", ar: "خدمات SEO | ConstantSEO" },
  "services.seo.description": { en: "Technical, bilingual, local, content, and AI-answer search systems for GCC businesses.", ar: "أنظمة بحث تقنية وثنائية اللغة ومحلية ومحتوى وظهور في إجابات الذكاء الاصطناعي لشركات الخليج." },
  "caseStudies.seo.title": { en: "SEO Work and Methods | ConstantSEO", ar: "أعمال ومنهجيات SEO | ConstantSEO" },
  "caseStudies.seo.description": { en: "Explore documented ConstantSEO methods and the scope of selected search-system work.", ar: "استكشف منهجيات ConstantSEO الموثقة ونطاق أعمال مختارة في أنظمة البحث." },
  "caseStudies.readMore": { en: "Read methodology", ar: "اقرأ المنهجية" },
  "caseStudies.notFound.title": { en: "Case study not found", ar: "دراسة الحالة غير موجودة" },
  "caseStudies.notFound.copy": { en: "The requested case study is unavailable.", ar: "دراسة الحالة المطلوبة غير متاحة." },
  "caseStudies.detail.category": { en: "Engagement type", ar: "نوع العمل" },
  "caseStudies.detail.overview": { en: "Method overview", ar: "نظرة عامة على المنهجية" },
  "caseStudies.detail.more": { en: "Other methodologies", ar: "منهجيات أخرى" },

  // ─── About page ────────────────────────────────────────────
  "about.seo.title": { en: "About ConstantSEO", ar: "عن ConstantSEO" },
  "about.seo.description": { en: "Meet the ConstantSEO team and learn how we approach technical, bilingual, local, and AI-answer search systems for the GCC.", ar: "تعرّف إلى فريق ConstantSEO ومنهجيتنا للأنظمة التقنية وثنائية اللغة والمحلية والظهور في إجابات الذكاء الاصطناعي للخليج." },
  "about.story.title": { en: "Why ConstantSEO exists", ar: "لماذا تأسست ConstantSEO" },
  "about.story.p1": { en: "Search now spans classic results, local discovery, and AI answer platforms. Businesses need one coherent system across those surfaces.", ar: "يمتد البحث اليوم عبر النتائج التقليدية والاكتشاف المحلي ومنصات إجابات الذكاء الاصطناعي. وتحتاج الشركات إلى نظام واحد متماسك عبر هذه الواجهات." },
  "about.story.p2": { en: "ConstantSEO combines technical SEO, useful content, structured data, and Arabic-English market context in one operating approach.", ar: "تجمع ConstantSEO بين SEO التقني والمحتوى المفيد والبيانات المنظمة وسياق السوق العربي والإنجليزي ضمن منهجية تشغيل واحدة." },
  "about.story.p3": { en: "We document decisions, separate methodology from measured evidence, and keep clients close to the work.", ar: "نوثّق القرارات ونفصل بين المنهجية والأدلة المقاسة ونُبقي العملاء قريبين من سير العمل." },
  "about.values.eyebrow": { en: "Operating principles", ar: "مبادئ العمل" },
  "about.values.title": { en: "How we work", ar: "كيف نعمل" },
  "about.values.ai.title": { en: "AI-assisted", ar: "بمساعدة الذكاء الاصطناعي" },
  "about.values.ai.copy": { en: "Automation supports research and execution while people remain accountable for decisions.", ar: "تدعم الأتمتة البحث والتنفيذ، فيما يبقى الأشخاص مسؤولين عن القرارات." },
  "about.values.arabic.title": { en: "Bilingual by design", ar: "ثنائي اللغة بالتصميم" },
  "about.values.arabic.copy": { en: "Arabic and English are planned together, including metadata, direction, and structured data.", ar: "نخطط للعربية والإنجليزية معاً، بما يشمل بيانات الميتا والاتجاه والبيانات المنظمة." },
  "about.values.useful.title": { en: "Useful first", ar: "الفائدة أولاً" },
  "about.values.useful.copy": { en: "Content starts with audience questions and clear information architecture.", ar: "يبدأ المحتوى من أسئلة الجمهور وبنية معلومات واضحة." },
  "about.values.technical.title": { en: "Technical foundations", ar: "أسس تقنية" },
  "about.values.technical.copy": { en: "Crawlability, performance, semantics, and structured data are treated as one system.", ar: "نتعامل مع قابلية الزحف والأداء والدلالات والبيانات المنظمة كنظام واحد." },
  "about.values.gcc.title": { en: "GCC context", ar: "سياق خليجي" },
  "about.values.gcc.copy": { en: "Local language, markets, and search behavior shape each plan.", ar: "تشكل اللغة المحلية والأسواق وسلوك البحث كل خطة." },
  "about.values.transparent.title": { en: "Transparent evidence", ar: "أدلة شفافة" },
  "about.values.transparent.copy": { en: "Measured evidence is attributed; conceptual models are labeled as such.", ar: "ننسب الأدلة المقاسة إلى مصادرها ونصنّف النماذج المفاهيمية بوضوح." },
  "about.team.eyebrow": { en: "Team", ar: "الفريق" },
  "about.team.title": { en: "Direct collaboration", ar: "تعاون مباشر" },
  "about.team.role": { en: "Founder, ConstantSEO", ar: "مؤسس ConstantSEO" },
  "about.team.bio": { en: "Ahmad leads strategy and delivery across technical SEO, content systems, and GCC market work.", ar: "يقود أحمد الاستراتيجية والتنفيذ عبر SEO التقني وأنظمة المحتوى والعمل المتعلق بأسواق الخليج." },
  "about.team.contact": { en: "Direct contact:", ar: "للتواصل المباشر:" },

  // ─── Contact page ──────────────────────────────────────────
  "contactPage.seo.title": { en: "Contact ConstantSEO", ar: "تواصل مع ConstantSEO" },
  "contactPage.seo.description": { en: "Contact ConstantSEO to discuss a practical review of your website's search signals and technical foundations.", ar: "تواصل مع ConstantSEO لمناقشة مراجعة عملية لإشارات البحث والأسس التقنية لموقعك." },
  "contactPage.form.title": { en: "Start the conversation", ar: "ابدأ المحادثة" },
  "contactPage.form.status": { en: "WhatsApp opened with your details. You can also use the direct contact options on this page.", ar: "تم فتح واتساب مع بياناتك. ويمكنك أيضاً استخدام خيارات التواصل المباشر في هذه الصفحة." },
  "contactPage.form.name": { en: "Name", ar: "الاسم" },
  "contactPage.form.namePlaceholder": { en: "Your name", ar: "اسمك" },
  "contactPage.form.email": { en: "Email", ar: "البريد الإلكتروني" },
  "contactPage.form.emailPlaceholder": { en: "you@company.com", ar: "you@company.com" },
  "contactPage.form.website": { en: "Website", ar: "الموقع الإلكتروني" },
  "contactPage.form.websitePlaceholder": { en: "https://example.com", ar: "https://example.com" },
  "contactPage.form.message": { en: "What should we review?", ar: "ما الذي تريد منا مراجعته؟" },
  "contactPage.form.messagePlaceholder": { en: "Tell us about your goals and current search challenges.", ar: "أخبرنا عن أهدافك وتحديات البحث الحالية." },
  "contactPage.form.submit": { en: "Continue on WhatsApp", ar: "تابع عبر واتساب" },
  "contactPage.info.title": { en: "Direct contact", ar: "التواصل المباشر" },
  "contactPage.info.email.label": { en: "Email", ar: "البريد الإلكتروني" },
  "contactPage.info.phone.label": { en: "Phone", ar: "الهاتف" },
  "contactPage.info.location.label": { en: "Location", ar: "الموقع" },
  "contactPage.info.location.value": { en: "Dubai, Al Awir, UAE", ar: "دبي، العوير، الإمارات" },
  "contactPage.info.whatsapp.label": { en: "WhatsApp", ar: "واتساب" },
  "contactPage.info.whatsapp.value": { en: "Open WhatsApp", ar: "فتح واتساب" },
  "contactPage.info.hours.label": { en: "Working hours", ar: "ساعات العمل" },
  "contactPage.info.hours.value": { en: "Sunday to Thursday, 9:00 to 18:00 GST", ar: "الأحد إلى الخميس، 9:00 إلى 18:00 بتوقيت الخليج" },
  "contactPage.info.panelTitle": { en: "Prefer a written brief?", ar: "تفضل موجزاً مكتوباً؟" },
  "contactPage.info.panelCopy": { en: "Email the website, market, and questions you want reviewed.", ar: "أرسل عبر البريد الموقع والسوق والأسئلة التي تريد مراجعتها." },
  "contactPage.info.response": { en: "WhatsApp and email are available above.", ar: "واتساب والبريد الإلكتروني متاحان أعلاه." },
};
