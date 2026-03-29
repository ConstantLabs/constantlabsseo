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
  "nav.contact": { en: "Contact", ar: "تواصل معنا" },
  "nav.faq": { en: "FAQ", ar: "الأسئلة الشائعة" },
  "nav.audit": { en: "Get Free Audit", ar: "تدقيق مجاني" },

  // ─── Hero (new keys used by redesigned pages) ──────────────
  "hero.headline": { en: "Rank Higher. Get More Customers.", ar: "تصدّر أعلى. اجذب عملاء أكثر." },
  "hero.subtitle": {
    en: "AI-powered SEO that fills your phone with calls and your business with buyers - on Google, ChatGPT, Gemini, and everywhere your customers search.",
    ar: "سيو بالذكاء الاصطناعي يملأ هاتفك بالمكالمات وعملك بالعملاء - على Google وChatGPT وGemini وكل مكان يبحث فيه عملاؤك."
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
  "hero.stat4.label": { en: "Bilingual SEO", ar: "سيو ثنائي اللغة" },

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

  // ─── Problem / Solution ─────────────────────────────────────
  "problem.label": { en: "The Problem", ar: "المشكلة" },
  "problem.title": { en: "Your Customers Are Searching - But Can't Find You", ar: "عملاؤك يبحثون - لكنهم لا يجدونك" },
  "problem.point1": { en: "Competitors are stealing your customers on Google every day", ar: "المنافسون يسرقون عملاءك على جوجل كل يوم" },
  "problem.point2": { en: "AI tools like ChatGPT recommend your competitors, not you", ar: "أدوات الذكاء الاصطناعي كـ ChatGPT توصي بمنافسيك وليس بك" },
  "problem.point3": { en: "You're paying for ads but organic traffic brings zero calls", ar: "تدفع على الإعلانات لكن البحث العضوي لا يجلب مكالمات" },
  "problem.point4": { en: "Old SEO agencies take 12 months and deliver no real revenue", ar: "وكالات السيو القديمة تأخذ 12 شهراً ولا تحقق إيرادات حقيقية" },

  "solution.label": { en: "Our Solution", ar: "الحل" },
  "solution.title": { en: "AI-Powered SEO That Brings Real Customers", ar: "SEO بالذكاء الاصطناعي يجلب عملاء حقيقيين" },
  "solution.point1": { en: "Customers start calling and visiting within weeks, not months", ar: "العملاء يبدأون بالاتصال والزيارة في أسابيع وليس أشهر" },
  "solution.point2": { en: "Your business shows up on Google AND when people ask ChatGPT", ar: "عملك يظهر على Google وعند سؤال ChatGPT معاً" },
  "solution.point3": { en: "SEO strategy built specifically for your customers and market", ar: "استراتيجية SEO مبنية خصيصاً لعملائك وسوقك" },
  "solution.point4": { en: "50+ pages that attract customers, deployed in hours not months", ar: "50+ صفحة تجذب العملاء، تُنشر في ساعات وليس أشهر" },

  // ─── Services (new keys used by redesigned pages) ───────────
  "services.label": { en: "Our Services", ar: "خدماتنا" },
  "services.title": { en: "Everything You Need to Get Found and Grow", ar: "كل ما تحتاجه لتُكتشف وتنمو" },
  "services.subtitle": { en: "AI-powered SEO services that turn search into revenue for Gulf businesses", ar: "خدمات SEO بالذكاء الاصطناعي تحوّل البحث إلى إيرادات لأعمال الخليج" },
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

  "service.linkBuilding.title": { en: "Outrank Competitors With Stronger Authority", ar: "تفوّق على المنافسين بسلطة أقوى" },
  "service.linkBuilding.desc": {
    en: "Google ranks the most trusted sites first. We build high-quality backlinks from authoritative GCC and international publications that push you above competitors permanently.",
    ar: "جوجل يرتّب أكثر المواقع ثقة أولاً. نبني روابط خلفية عالية الجودة من منشورات خليجية ودولية موثوقة تدفعك فوق المنافسين بشكل دائم."
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

  "service.TECHNICAL_SEO.title": { en: "Technical SEO Mastery", ar: "إتقان السيو التقني" },
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

  "service.AI_LINK_BUILDING.title": { en: "AI-Powered Link Building", ar: "بناء الروابط بالذكاء الاصطناعي" },
  "service.AI_LINK_BUILDING.description": {
    en: "Strategic backlink acquisition using AI to identify high-value opportunities. Build authority that search engines and LLMs trust.",
    ar: "بناء روابط خلفية استراتيجية باستخدام الذكاء الاصطناعي لاكتشاف أفضل الفرص. ابنِ سلطة يثق بها جوجل ونماذج الذكاء الاصطناعي."
  },
  "service.AI_LINK_BUILDING.oneLiner": { en: "Authority search engines trust", ar: "سلطة تثق بها محركات البحث" },

  "service.SEO_AUDITS.title": { en: "SEO Audits & Analytics", ar: "تدقيق السيو والتحليلات" },
  "service.SEO_AUDITS.description": {
    en: "Comprehensive AI-driven audits that find and fix every issue. Real-time dashboards tracking your performance across Google AND AI platforms.",
    ar: "تدقيق شامل بالذكاء الاصطناعي يكتشف ويصلح كل مشكلة. لوحات بيانات لحظية تتابع أداءك في جوجل ومنصات الذكاء الاصطناعي."
  },
  "service.SEO_AUDITS.oneLiner": { en: "Find and fix every issue", ar: "اكتشف وأصلح كل مشكلة" },

  "service.WEBSITE_DEVELOPMENT.title": { en: "Website Development", ar: "تطوير المواقع" },
  "service.WEBSITE_DEVELOPMENT.description": {
    en: "SEO-first websites built with agentic AI in days, not months. 50+ optimized pages deployed before your competitors finish their first draft.",
    ar: "مواقع مبنية بأولوية السيو باستخدام الذكاء الاصطناعي في أيام وليس أشهر. 50+ صفحة مُحسّنة جاهزة قبل ما ينتهي منافسك من مسودته الأولى."
  },
  "service.WEBSITE_DEVELOPMENT.oneLiner": { en: "SEO-first sites, built fast", ar: "مواقع سيو أولاً، بسرعة فائقة" },

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
  "mission.tagline": { en: "// AI-POWERED SEO // FOR THE GCC MARKET //", ar: "// سيو بالذكاء الاصطناعي // لسوق الخليج //" },

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
  "case2.desc": { en: "When customers ask ChatGPT, Gemini, or Perplexity \"who's the best AC repair company in Dubai?\", your business is the recommended answer - not your competitor's", ar: "عندما يسأل العملاء ChatGPT أو Gemini \"من أفضل شركة تصليح تكييف في دبي؟\"، عملك هو الجواب الموصى به - وليس منافسك" },

  "case3.metric": { en: "AR+EN", ar: "عر+EN" },
  "case3.title": { en: "Reach Every Gulf Customer", ar: "اوصل لكل عميل خليجي" },
  "case3.industry": { en: "GCC Specialist", ar: "متخصص خليجي" },
  "case3.market": { en: "UAE · KSA · Oman", ar: "الإمارات · السعودية · عمان" },
  "case3.desc": { en: "Gulf customers search in both Arabic and English. Our bilingual SEO strategy makes sure you capture both audiences - double the reach, double the revenue", ar: "عملاء الخليج يبحثون بالعربية والإنجليزية. استراتيجية SEO ثنائية اللغة تضمن الوصول للجمهورين - ضعف الانتشار، ضعف الإيرادات" },

  // ─── Pricing (new keys) ─────────────────────────────────────
  "pricing.label": { en: "Pricing", ar: "الأسعار" },
  "pricing.title": { en: "Transparent Pricing, Real Results", ar: "أسعار واضحة، نتائج حقيقية" },
  "pricing.subtitle": { en: "All plans include AI-powered optimization. No hidden fees.", ar: "جميع الباقات تشمل التحسين بالذكاء الاصطناعي. بدون رسوم مخفية." },
  "pricing.monthly": { en: "/month", ar: "/شهر" },
  "pricing.popular": { en: "Most Popular", ar: "الأكثر طلباً" },
  "pricing.getStarted": { en: "Get Started", ar: "ابدأ الآن" },
  "pricing.contactUs": { en: "Contact Us", ar: "تواصل معنا" },
  "pricing.cta": { en: "Get Started", ar: "ابدأ الآن" },
  "pricing.custom": { en: "Need a custom plan? Let's talk.", ar: "تحتاج خطة مخصصة؟ كلّمنا." },

  "pricing.starter.name": { en: "Starter", ar: "المبتدئ" },
  "pricing.starter.price": { en: "1,500 AED", ar: "1,500 درهم" },
  "pricing.starter.desc": { en: "Start getting found online and attract your first customers through SEO", ar: "ابدأ الظهور على البحث واجذب أول عملائك عبر SEO" },
  "pricing.starter.f1": { en: "15 target keywords", ar: "15 كلمة مفتاحية مستهدفة" },
  "pricing.starter.f2": { en: "Monthly SEO audit", ar: "تدقيق SEO شهري" },
  "pricing.starter.f3": { en: "Basic performance reporting", ar: "تقارير أداء أساسية" },
  "pricing.starter.f4": { en: "Google Search Console setup", ar: "إعداد Google Search Console" },
  "pricing.starter.f5": { en: "Technical SEO fixes", ar: "إصلاحات SEO التقنية" },
  "pricing.starter.f6": { en: "1 blog post per month", ar: "مقال واحد شهرياً" },
  "pricing.starter.f7": { en: "Email support", ar: "دعم عبر البريد الإلكتروني" },

  "pricing.growth.name": { en: "Growth", ar: "النمو" },
  "pricing.growth.price": { en: "3,500 AED", ar: "3,500 درهم" },
  "pricing.growth.desc": { en: "Most popular - for businesses serious about ranking higher and winning more customers", ar: "الأكثر طلباً - للشركات الجادة في التصدر وكسب عملاء أكثر" },
  "pricing.growth.f1": { en: "50 target keywords", ar: "50 كلمة مفتاحية مستهدفة" },
  "pricing.growth.f2": { en: "Weekly optimization cycles", ar: "دورات تحسين أسبوعية" },
  "pricing.growth.f3": { en: "AI search tracking (GEO/AEO)", ar: "تتبع بحث الذكاء الاصطناعي (GEO/AEO)" },
  "pricing.growth.f4": { en: "Arabic content creation (4 articles/mo)", ar: "إنشاء محتوى عربي (4 مقالات/شهر)" },
  "pricing.growth.f5": { en: "Local SEO for up to 3 locations", ar: "SEO محلي لـ 3 مواقع" },
  "pricing.growth.f6": { en: "Backlink building (10/month)", ar: "بناء روابط خلفية (10/شهر)" },
  "pricing.growth.f7": { en: "Bi-weekly strategy calls", ar: "مكالمات استراتيجية كل أسبوعين" },

  "pricing.enterprise.name": { en: "Enterprise", ar: "المؤسسي" },
  "pricing.enterprise.price": { en: "7,500 AED", ar: "7,500 درهم" },
  "pricing.enterprise.desc": { en: "Own every search result in your space - across Google, AI platforms, Arabic and English", ar: "امتلك كل نتيجة بحث في مجالك - على Google ومنصات الذكاء الاصطناعي بالعربية والإنجليزية" },
  "pricing.enterprise.f1": { en: "Unlimited target keywords", ar: "كلمات مفتاحية غير محدودة" },
  "pricing.enterprise.f2": { en: "Dedicated SEO strategist", ar: "استراتيجي SEO مخصص" },
  "pricing.enterprise.f3": { en: "Custom AI search dashboard", ar: "لوحة بحث AI مخصصة" },
  "pricing.enterprise.f4": { en: "Unlimited Arabic & English content", ar: "محتوى عربي وإنجليزي غير محدود" },
  "pricing.enterprise.f5": { en: "Full GCC local SEO coverage", ar: "تغطية SEO محلي لكامل الخليج" },
  "pricing.enterprise.f6": { en: "Aggressive link building (30+/month)", ar: "بناء روابط مكثف (30+/شهر)" },
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
  "testimonial2.company": { en: "Agentic AI SEO", ar: "سيو بالذكاء الاصطناعي" },

  "testimonial3.quote": {
    en: "Good foundational SEO equals good GEO. There's no secret strategy for appearing in ChatGPT or Gemini - it's about having a technically flawless site with the right content and authority. That's exactly what our AI builds, automatically.",
    ar: "السيو الأساسي الجيد يعني GEO جيد. لا توجد استراتيجية سرية للظهور في ChatGPT أو Gemini - الأمر يتعلق بموقع تقني مثالي بالمحتوى الصحيح والسلطة. وهذا بالضبط ما يبنيه الذكاء الاصطناعي تلقائياً."
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
    en: "AI SEO uses artificial intelligence to automate and enhance every aspect of search optimization - from keyword research to content creation to technical fixes. Unlike traditional SEO, it also optimizes for AI search platforms like ChatGPT, Gemini, and Perplexity, ensuring your brand appears when users ask AI for recommendations.",
    ar: "يستخدم SEO بالذكاء الاصطناعي الذكاء الاصطناعي لأتمتة وتحسين كل جانب من جوانب تحسين البحث - من بحث الكلمات المفتاحية إلى إنشاء المحتوى إلى الإصلاحات التقنية. على عكس SEO التقليدي، يعمل أيضاً على تحسين منصات البحث بالذكاء الاصطناعي مثل ChatGPT وGemini وPerplexity."
  },

  "faq2.q": { en: "How long until I see results?", ar: "كم من الوقت حتى أرى النتائج؟" },
  "faq2.a": {
    en: "With our AI-powered approach, most clients see measurable improvements within 4-8 weeks. Traditional SEO typically takes 6-12 months. We deploy 50+ optimized pages rapidly and start building authority immediately.",
    ar: "مع نهجنا القائم على الذكاء الاصطناعي، يرى معظم العملاء تحسينات قابلة للقياس خلال 4-8 أسابيع. يستغرق SEO التقليدي عادة 6-12 شهراً. ننشر أكثر من 50 صفحة محسّنة بسرعة ونبدأ ببناء السلطة فوراً."
  },

  "faq3.q": { en: "Do you work with businesses outside the UAE?", ar: "هل تعملون مع شركات خارج الإمارات؟" },
  "faq3.a": {
    en: "Yes! While we specialize in the GCC market (UAE, Saudi Arabia, Oman), we work with businesses worldwide. Our AI tools work in any language and market.",
    ar: "نعم! بينما نتخصص في سوق الخليج (الإمارات، السعودية، عمان)، نعمل مع شركات حول العالم. أدواتنا بالذكاء الاصطناعي تعمل بأي لغة وسوق."
  },

  "faq4.q": { en: "What is GEO and AEO?", ar: "ما هو GEO و AEO؟" },
  "faq4.a": {
    en: "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are new SEO disciplines focused on making your brand visible in AI-generated search results. As more people use ChatGPT, Gemini, and Perplexity to find information, GEO/AEO ensures your business is the recommended answer.",
    ar: "GEO (تحسين محركات التوليد) و AEO (تحسين محركات الإجابة) هما تخصصان جديدان في SEO يركزان على جعل علامتك التجارية مرئية في نتائج البحث المولّدة بالذكاء الاصطناعي. مع استخدام المزيد من الأشخاص لـ ChatGPT وGemini وPerplexity، يضمن GEO/AEO أن عملك هو الإجابة الموصى بها."
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
    ar: "نقدم اتفاقيات شهرية مع توصية بحد أدنى 6 أشهر لنتائج SEO ذات معنى. السيو استراتيجية طويلة المدى ونحن صريحون بهذا. لست مقيداً أبداً - نكسب ثقتك كل شهر."
  },

  "faq8.q": { en: "Can you build our website too?", ar: "هل يمكنكم بناء موقعنا أيضاً؟" },
  "faq8.a": {
    en: "Yes. We build SEO-first websites using agentic AI, delivering 50+ optimized pages in days rather than months. Every site we build is designed for search performance from the ground up.",
    ar: "نعم. نبني مواقع بأولوية السيو باستخدام الذكاء الاصطناعي، وننشر 50+ صفحة محسّنة في أيام وليس أشهر. كل موقع نبنيه مصمم لأداء البحث من الأساس."
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
    ar: "// دراسات حالة تعرض نتائجنا في السيو والبحث الذكي"
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
  "footer.tagline": { en: "// AI-POWERED SEO // FOR THE GCC MARKET //", ar: "// سيو بالذكاء الاصطناعي // لسوق الخليج //" },
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
  "footer.linkBuilding": { en: "Link Building", ar: "بناء الروابط" },
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
    ar: "// حلول سيو شاملة بالذكاء الاصطناعي لشركات الخليج"
  },
};
