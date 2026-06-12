export type LocalizedText = {
  en: string;
  ar: string;
};

export type ToolCategory = "seo" | "schema" | "crawler" | "web" | "youtube";

export interface FreeToolFaq {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface FreeTool {
  slug: string;
  category: ToolCategory;
  icon: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  metaTitle: LocalizedText;
  metaDescription: LocalizedText;
  quickAnswer: LocalizedText;
  useCases: LocalizedText[];
  faqs: FreeToolFaq[];
}

export const toolsPageCopy = {
  eyebrow: {
    en: "Free SEO Tools",
    ar: "أدوات SEO مجانية",
  },
  title: {
    en: "Free SEO Tools for GCC Marketers",
    ar: "أدوات SEO مجانية للمسوقين في الخليج",
  },
  subtitle: {
    en: "Check metadata, headings, schema, sitemaps, robots.txt, bandwidth, website cost, and video SEO without signing up.",
    ar: "افحص العناوين الوصفية، العناوين، البيانات المنظمة، خرائط الموقع، robots.txt، استهلاك البيانات، تكلفة الموقع، وSEO للفيديو بدون تسجيل.",
  },
  quickAnswer: {
    en: "ConstantSEO's free tools help marketers and business owners spot practical SEO issues before they become ranking problems. Start with metadata, headings, sitemap extraction, FAQ schema, and robots.txt, then use the calculators to plan website growth in the UAE, Saudi Arabia, and Oman.",
    ar: "تساعد أدوات ConstantSEO المجانية المسوقين وأصحاب الأعمال على اكتشاف مشاكل SEO العملية قبل أن تؤثر على الترتيب. ابدأ بفحص الميتا والعناوين وخريطة الموقع وFAQ Schema وrobots.txt، ثم استخدم الحاسبات لتخطيط نمو موقعك في الإمارات والسعودية وعُمان.",
  },
  primaryCta: {
    en: "Run a Free Audit",
    ar: "ابدأ تدقيقاً مجانياً",
  },
  secondaryCta: {
    en: "Explore Tools",
    ar: "استكشف الأدوات",
  },
  popularLabel: {
    en: "Most useful first",
    ar: "الأكثر فائدة أولاً",
  },
  categoriesTitle: {
    en: "Choose a tool by workflow",
    ar: "اختر أداة حسب سير العمل",
  },
  categoriesSubtitle: {
    en: "These are the tools we would actually use during a fast SEO sprint: diagnose, structure, publish, and plan.",
    ar: "هذه هي الأدوات التي نستخدمها فعلياً في دفعة SEO سريعة: تشخيص، تنظيم، نشر، وتخطيط.",
  },
  howTitle: {
    en: "How this helps rankings",
    ar: "كيف يساعد هذا على تحسين الترتيب",
  },
  howBody: {
    en: "Free tools attract high-intent searches, earn links, and show Google that ConstantSEO has practical technical SEO expertise. Each tool page also links visitors toward audits and services when they need hands-on implementation.",
    ar: "الأدوات المجانية تجذب عمليات بحث ذات نية عالية، وتكسب روابط، وتُظهر لجوجل أن ConstantSEO لديها خبرة عملية في SEO التقني. كل صفحة أداة تربط الزائر بالتدقيق والخدمات عندما يحتاج إلى تنفيذ احترافي.",
  },
};

export const toolUiCopy = {
  allTools: { en: "All Tools", ar: "كل الأدوات" },
  openTool: { en: "Open Tool", ar: "افتح الأداة" },
  tryTool: { en: "Try the Tool", ar: "جرّب الأداة" },
  quickAnswer: { en: "Quick Answer", ar: "إجابة سريعة" },
  useCases: { en: "Use this tool when you need to", ar: "استخدم هذه الأداة عندما تحتاج إلى" },
  relatedTools: { en: "Related SEO Tools", ar: "أدوات SEO ذات صلة" },
  input: { en: "Input", ar: "الإدخال" },
  results: { en: "Results", ar: "النتائج" },
  output: { en: "Output", ar: "المخرجات" },
  analyze: { en: "Analyze", ar: "حلّل" },
  generate: { en: "Generate", ar: "أنشئ" },
  calculate: { en: "Calculate", ar: "احسب" },
  copy: { en: "Copy", ar: "نسخ" },
  copied: { en: "Copied", ar: "تم النسخ" },
  reset: { en: "Reset", ar: "إعادة ضبط" },
  sample: { en: "Load Sample", ar: "تحميل مثال" },
  good: { en: "Good", ar: "جيد" },
  warning: { en: "Needs Work", ar: "يحتاج تحسين" },
  missing: { en: "Missing", ar: "مفقود" },
  noData: { en: "Add input to see results.", ar: "أضف بيانات لعرض النتائج." },
  freeAudit: { en: "Need the full fix? Get a free audit.", ar: "تحتاج للإصلاح الكامل؟ احصل على تدقيق مجاني." },
  faqTitle: { en: "Tool FAQ", ar: "أسئلة شائعة عن الأداة" },
};

export const toolCategoryCopy: Record<ToolCategory, { title: LocalizedText; description: LocalizedText }> = {
  seo: {
    title: { en: "On-page SEO checks", ar: "فحوصات SEO داخل الصفحة" },
    description: {
      en: "Audit titles, descriptions, headings, and social previews before pages go live.",
      ar: "دقّق العناوين والوصف والعناوين الداخلية ومعاينات السوشيال قبل نشر الصفحات.",
    },
  },
  schema: {
    title: { en: "Schema generators", ar: "مولدات البيانات المنظمة" },
    description: {
      en: "Create structured data that helps Google and answer engines understand your content.",
      ar: "أنشئ بيانات منظمة تساعد جوجل ومحركات الإجابة على فهم محتواك.",
    },
  },
  crawler: {
    title: { en: "Crawl and indexation tools", ar: "أدوات الزحف والفهرسة" },
    description: {
      en: "Extract sitemap URLs and generate crawler-friendly robots.txt files.",
      ar: "استخرج روابط خريطة الموقع وأنشئ ملفات robots.txt مناسبة للزحف.",
    },
  },
  web: {
    title: { en: "Website planning calculators", ar: "حاسبات تخطيط المواقع" },
    description: {
      en: "Estimate bandwidth, scope, and website investment before scaling traffic.",
      ar: "قدّر استهلاك البيانات والنطاق وتكلفة الموقع قبل زيادة الزيارات.",
    },
  },
  youtube: {
    title: { en: "Video SEO tools", ar: "أدوات SEO للفيديو" },
    description: {
      en: "Optimize YouTube metadata for search visibility and campaign support.",
      ar: "حسّن بيانات يوتيوب الوصفية لزيادة الظهور في البحث ودعم الحملات.",
    },
  },
};

export const freeTools: FreeTool[] = [
  {
    slug: "bulk-meta-title-description-checker",
    category: "seo",
    icon: "Tags",
    title: {
      en: "Bulk Meta Title & Description Checker",
      ar: "فاحص عناوين ووصف الميتا بالجملة",
    },
    shortDescription: {
      en: "Paste many URLs with title and description data, then spot length issues, missing tags, and duplicates.",
      ar: "الصق عدة روابط مع العنوان والوصف لاكتشاف مشاكل الطول والوسوم المفقودة والتكرار.",
    },
    metaTitle: {
      en: "Bulk Meta Title & Description Checker Free",
      ar: "فاحص عناوين ووصف الميتا بالجملة مجاناً",
    },
    metaDescription: {
      en: "Free bulk meta title and description checker for SEO audits. Paste URLs, titles, and descriptions to find missing, short, long, and duplicate metadata.",
      ar: "أداة مجانية لفحص عناوين ووصف الميتا بالجملة في تدقيق SEO. الصق الروابط والعناوين والأوصاف لاكتشاف المفقود والقصير والطويل والمكرر.",
    },
    quickAnswer: {
      en: "Use this bulk meta checker when you have exported page data from a crawl or CMS and need to find title and description problems fast. It highlights missing tags, length issues, and duplicate metadata that can reduce click-through rate from Google.",
      ar: "استخدم فاحص الميتا بالجملة عندما يكون لديك تصدير من أداة زحف أو CMS وتحتاج لاكتشاف مشاكل العنوان والوصف بسرعة. يوضح الوسوم المفقودة ومشاكل الطول والتكرار التي قد تقلل معدل النقر من جوجل.",
    },
    useCases: [
      {
        en: "Clean metadata before launching SEO landing pages.",
        ar: "تنظيف بيانات الميتا قبل إطلاق صفحات SEO.",
      },
      {
        en: "Find duplicate titles in a site migration export.",
        ar: "اكتشاف العناوين المكررة في تصدير ترحيل الموقع.",
      },
      {
        en: "Prioritize pages that need better search snippets.",
        ar: "تحديد الصفحات التي تحتاج مقتطفات بحث أفضل.",
      },
    ],
    faqs: [
      {
        question: { en: "What title length is best for Google?", ar: "ما طول العنوان الأفضل لجوجل؟" },
        answer: {
          en: "A practical range is usually 30 to 60 characters. The exact display depends on pixel width, device, and query, so use the result as a prioritization guide rather than a hard rule.",
          ar: "النطاق العملي غالباً بين 30 و60 حرفاً. العرض الفعلي يعتمد على عرض البكسل والجهاز والاستعلام، لذلك استخدم النتيجة كدليل أولوية وليس كقاعدة صارمة.",
        },
      },
      {
        question: { en: "Can this tool crawl my website automatically?", ar: "هل تزحف هذه الأداة إلى موقعي تلقائياً؟" },
        answer: {
          en: "This browser-based version analyzes pasted exports so it stays fast and private. For live crawling, use a crawler export or request a full ConstantSEO audit.",
          ar: "هذه النسخة داخل المتصفح تحلل البيانات الملصوقة لتبقى سريعة وخاصة. للزحف المباشر، استخدم تصدير أداة زحف أو اطلب تدقيق ConstantSEO الكامل.",
        },
      },
    ],
  },
  {
    slug: "meta-tag-analyzer",
    category: "seo",
    icon: "SearchCheck",
    title: { en: "Meta Tag Analyzer Tool", ar: "أداة تحليل وسوم الميتا" },
    shortDescription: {
      en: "Paste HTML and review title, description, canonical, robots, viewport, language, and social tags.",
      ar: "الصق HTML وراجع العنوان والوصف والكانونيكال والروبوتس والـ viewport واللغة ووسوم السوشيال.",
    },
    metaTitle: { en: "Meta Tag Analyzer Tool Free", ar: "أداة تحليل وسوم الميتا مجاناً" },
    metaDescription: {
      en: "Analyze meta tags from pasted HTML. Check title, meta description, canonical, robots, viewport, hreflang signals, Open Graph, and Twitter tags.",
      ar: "حلّل وسوم الميتا من HTML ملصوق. افحص العنوان والوصف والكانونيكال والروبوتس والـ viewport وإشارات اللغة وOpen Graph وTwitter.",
    },
    quickAnswer: {
      en: "The meta tag analyzer checks whether a page has the essential tags Google and social platforms expect. It is useful before publishing a landing page, fixing crawl issues, or reviewing pages generated by a React or CMS template.",
      ar: "يفحص محلل وسوم الميتا ما إذا كانت الصفحة تحتوي على الوسوم الأساسية التي يتوقعها جوجل ومنصات السوشيال. يفيد قبل نشر صفحة هبوط أو إصلاح مشاكل الزحف أو مراجعة صفحات مولدة من React أو CMS.",
    },
    useCases: [
      { en: "Audit one page before requesting indexing.", ar: "تدقيق صفحة واحدة قبل طلب الفهرسة." },
      { en: "Check whether a React page exposes crawlable metadata.", ar: "فحص ما إذا كانت صفحة React تعرض بيانات وصفية قابلة للزحف." },
      { en: "Spot missing canonicals and robots directives.", ar: "اكتشاف الكانونيكال وتعليمات الروبوتس المفقودة." },
    ],
    faqs: [
      {
        question: { en: "Why paste HTML instead of a URL?", ar: "لماذا ألصق HTML بدلاً من الرابط؟" },
        answer: {
          en: "Many browsers block direct cross-site fetches for security. Pasting the rendered source or crawler export keeps the tool reliable without a server proxy.",
          ar: "تمنع كثير من المتصفحات جلب المواقع الأخرى مباشرة لأسباب أمنية. لصق المصدر أو تصدير أداة الزحف يجعل الأداة موثوقة بدون خادم وسيط.",
        },
      },
      {
        question: { en: "Does this replace a technical SEO audit?", ar: "هل تغني هذه الأداة عن تدقيق SEO تقني؟" },
        answer: {
          en: "No. It catches visible metadata problems quickly, but a full audit also checks redirects, rendering, internal links, schema validity, performance, and indexing signals.",
          ar: "لا. تلتقط مشاكل الميتا الظاهرة بسرعة، لكن التدقيق الكامل يفحص التحويلات والرندر والروابط الداخلية وصحة البيانات المنظمة والأداء وإشارات الفهرسة.",
        },
      },
    ],
  },
  {
    slug: "heading-tag-checker",
    category: "seo",
    icon: "Heading1",
    title: { en: "Heading Tag Checker", ar: "فاحص عناوين H1-H6" },
    shortDescription: {
      en: "Extract H1-H6 headings from HTML and find hierarchy, missing H1, duplicate H1, and skipped-level issues.",
      ar: "استخرج عناوين H1-H6 من HTML واكتشف مشاكل التسلسل وH1 المفقود أو المكرر وتخطي المستويات.",
    },
    metaTitle: { en: "Heading Tag Checker Free", ar: "فاحص عناوين H1-H6 مجاناً" },
    metaDescription: {
      en: "Free heading tag checker for SEO. Paste HTML to review H1-H6 structure, heading hierarchy, duplicate H1s, skipped heading levels, and empty headings.",
      ar: "فاحص عناوين مجاني للـ SEO. الصق HTML لمراجعة بنية H1-H6 وتسلسل العناوين وH1 المكرر وتخطي المستويات والعناوين الفارغة.",
    },
    quickAnswer: {
      en: "A heading checker helps search engines and readers understand the page structure. Most SEO pages should have one clear H1, question-led H2s, and a logical hierarchy that does not skip levels without a reason.",
      ar: "يساعد فاحص العناوين محركات البحث والقراء على فهم بنية الصفحة. معظم صفحات SEO يجب أن تحتوي على H1 واضح، وعناوين H2 بصيغة أسئلة، وتسلسل منطقي لا يتخطى المستويات بدون سبب.",
    },
    useCases: [
      { en: "Review SEO landing pages before publishing.", ar: "مراجعة صفحات SEO قبل النشر." },
      { en: "Find pages with multiple H1 tags.", ar: "اكتشاف الصفحات التي تحتوي على أكثر من H1." },
      { en: "Turn vague section titles into search questions.", ar: "تحويل عناوين الأقسام العامة إلى أسئلة بحثية." },
    ],
    faqs: [
      {
        question: { en: "Can a page have more than one H1?", ar: "هل يمكن أن تحتوي الصفحة على أكثر من H1؟" },
        answer: {
          en: "Modern HTML can technically contain more than one H1, but one strong primary H1 is still the cleaner SEO pattern for landing pages and articles.",
          ar: "يمكن تقنياً أن تحتوي HTML الحديثة على أكثر من H1، لكن H1 رئيسي واحد وواضح يبقى النمط الأنظف لصفحات الهبوط والمقالات.",
        },
      },
      {
        question: { en: "Should H2 headings be written as questions?", ar: "هل يجب كتابة عناوين H2 كأسئلة؟" },
        answer: {
          en: "Not always, but question headings are useful for AEO and AI Overviews because they map directly to real search queries.",
          ar: "ليس دائماً، لكن العناوين بصيغة أسئلة مفيدة لـ AEO وAI Overviews لأنها تتطابق مباشرة مع استفسارات البحث الحقيقية.",
        },
      },
    ],
  },
  {
    slug: "sitemap-url-extractor",
    category: "crawler",
    icon: "Map",
    title: { en: "Sitemap URL Extractor", ar: "مستخرج روابط خريطة الموقع" },
    shortDescription: {
      en: "Paste XML sitemap content and extract clean URLs for audits, redirects, and indexation checks.",
      ar: "الصق محتوى خريطة الموقع XML واستخرج الروابط النظيفة للتدقيق والتحويلات وفحوصات الفهرسة.",
    },
    metaTitle: { en: "Sitemap URL Extractor Free", ar: "مستخرج روابط خريطة الموقع مجاناً" },
    metaDescription: {
      en: "Extract URLs from XML sitemaps and sitemap indexes. Paste sitemap XML to get a clean URL list, hostname summary, duplicate count, and export-ready output.",
      ar: "استخرج الروابط من خرائط XML وفهارس الخرائط. الصق XML للحصول على قائمة روابط نظيفة وملخص النطاقات وعدد التكرارات ومخرجات جاهزة للتصدير.",
    },
    quickAnswer: {
      en: "Use a sitemap URL extractor when you need a clean list of indexable URLs for a migration, crawl comparison, redirect map, or Google Search Console inspection batch.",
      ar: "استخدم مستخرج روابط خريطة الموقع عندما تحتاج إلى قائمة نظيفة من الروابط القابلة للفهرسة للترحيل أو مقارنة الزحف أو خريطة التحويلات أو دفعة فحص في Google Search Console.",
    },
    useCases: [
      { en: "Prepare URL lists for status checks.", ar: "تجهيز قوائم الروابط لفحوصات الحالة." },
      { en: "Compare old and new sitemap coverage.", ar: "مقارنة تغطية خريطة الموقع القديمة والجديدة." },
      { en: "Build redirect maps during migrations.", ar: "بناء خرائط التحويل أثناء الترحيل." },
    ],
    faqs: [
      {
        question: { en: "Can this handle sitemap indexes?", ar: "هل يدعم فهارس خرائط الموقع؟" },
        answer: {
          en: "Yes. It extracts every loc tag, whether it points to a page URL or a child sitemap. For child sitemaps, paste each child file to extract page URLs.",
          ar: "نعم. يستخرج كل وسم loc سواء كان يشير إلى رابط صفحة أو خريطة فرعية. للخرائط الفرعية، الصق كل ملف فرعي لاستخراج روابط الصفحات.",
        },
      },
      {
        question: { en: "Why are duplicate sitemap URLs a problem?", ar: "لماذا تمثل روابط خريطة الموقع المكررة مشكلة؟" },
        answer: {
          en: "Duplicates usually do not destroy rankings, but they create noisy crawl data and can hide bigger canonical or generation issues.",
          ar: "التكرارات لا تدمر الترتيب عادة، لكنها تجعل بيانات الزحف مشوشة وقد تخفي مشاكل أكبر في الكانونيكال أو التوليد.",
        },
      },
    ],
  },
  {
    slug: "faq-schema-generator",
    category: "schema",
    icon: "BadgeHelp",
    title: { en: "FAQ Schema Markup Generator", ar: "مولد FAQ Schema" },
    shortDescription: {
      en: "Write visible FAQs and generate clean JSON-LD FAQPage schema for landing pages and articles.",
      ar: "اكتب الأسئلة الشائعة الظاهرة وأنشئ FAQPage JSON-LD نظيفاً لصفحات الهبوط والمقالات.",
    },
    metaTitle: { en: "FAQ Schema Markup Generator Free", ar: "مولد FAQ Schema مجاناً" },
    metaDescription: {
      en: "Generate FAQPage JSON-LD schema for SEO. Add questions and answers, copy clean markup, and use it on pages where the FAQ content is visible.",
      ar: "أنشئ FAQPage JSON-LD للـ SEO. أضف الأسئلة والإجابات وانسخ كوداً نظيفاً واستخدمه في الصفحات التي تظهر فيها الأسئلة للمستخدم.",
    },
    quickAnswer: {
      en: "FAQ schema helps search engines understand visible question-and-answer content. It should only be used when the same FAQs appear on the page, and each answer should be concise, factual, and useful to the searcher.",
      ar: "تساعد FAQ Schema محركات البحث على فهم محتوى الأسئلة والأجوبة الظاهر. يجب استخدامها فقط عندما تظهر نفس الأسئلة في الصفحة، ويجب أن تكون كل إجابة مختصرة وواقعية ومفيدة للباحث.",
    },
    useCases: [
      { en: "Add structured FAQ data to service pages.", ar: "إضافة بيانات FAQ منظمة لصفحات الخدمات." },
      { en: "Make answer-engine extraction easier.", ar: "تسهيل استخراج الإجابات لمحركات الإجابة." },
      { en: "Standardize schema before publishing articles.", ar: "توحيد البيانات المنظمة قبل نشر المقالات." },
    ],
    faqs: [
      {
        question: { en: "Does FAQ schema guarantee rich results?", ar: "هل تضمن FAQ Schema ظهور النتائج الغنية؟" },
        answer: {
          en: "No. Google decides when to show rich results, but valid FAQ schema still helps machines understand the content and can support AI-search extraction.",
          ar: "لا. جوجل يقرر متى تظهر النتائج الغنية، لكن FAQ Schema الصحيحة تساعد الآلات على فهم المحتوى وقد تدعم استخراج الإجابات في بحث الذكاء الاصطناعي.",
        },
      },
      {
        question: { en: "Can I add FAQs that are not visible on the page?", ar: "هل يمكن إضافة أسئلة غير ظاهرة في الصفحة؟" },
        answer: {
          en: "No. The schema should match visible page content. Hidden or fake FAQ markup can create trust and compliance problems.",
          ar: "لا. يجب أن تطابق البيانات المنظمة محتوى الصفحة الظاهر. الأسئلة المخفية أو غير الحقيقية قد تسبب مشاكل ثقة وامتثال.",
        },
      },
    ],
  },
  {
    slug: "robots-txt-generator",
    category: "crawler",
    icon: "Bot",
    title: { en: "Robots.txt Generator", ar: "مولد robots.txt" },
    shortDescription: {
      en: "Generate a clean robots.txt file with sitemap, private-path, and AI crawler directives.",
      ar: "أنشئ ملف robots.txt نظيفاً مع خريطة الموقع والمسارات الخاصة وتعليمات زواحف الذكاء الاصطناعي.",
    },
    metaTitle: { en: "Robots.txt Generator Free", ar: "مولد robots.txt مجاناً" },
    metaDescription: {
      en: "Free robots.txt generator for SEO. Create crawler directives, add sitemap URLs, block private paths, and optionally allow reputable AI crawlers.",
      ar: "مولد robots.txt مجاني للـ SEO. أنشئ تعليمات الزحف، أضف روابط خرائط الموقع، احجب المسارات الخاصة، واسمح اختيارياً لزواحف الذكاء الاصطناعي الموثوقة.",
    },
    quickAnswer: {
      en: "A robots.txt file tells crawlers which areas they can request. For most public SEO sites, the best default is to allow important pages, block private or duplicate paths, and include the final sitemap URL.",
      ar: "يخبر ملف robots.txt الزواحف بالمناطق التي يمكن طلبها. لمعظم مواقع SEO العامة، الخيار الأفضل هو السماح بالصفحات المهمة، وحجب المسارات الخاصة أو المكررة، وإضافة رابط خريطة الموقع النهائي.",
    },
    useCases: [
      { en: "Create robots.txt for a new website launch.", ar: "إنشاء robots.txt لإطلاق موقع جديد." },
      { en: "Add sitemap discovery for Google.", ar: "إضافة اكتشاف خريطة الموقع لجوجل." },
      { en: "Block staging, admin, and search-result paths.", ar: "حجب مسارات التجربة والإدارة ونتائج البحث." },
    ],
    faqs: [
      {
        question: { en: "Can robots.txt remove a page from Google?", ar: "هل يستطيع robots.txt إزالة صفحة من جوجل؟" },
        answer: {
          en: "Not reliably. Robots.txt controls crawling, not indexing. Use noindex or removal tools when you need a page out of search results.",
          ar: "ليس بشكل موثوق. robots.txt يتحكم في الزحف وليس الفهرسة. استخدم noindex أو أدوات الإزالة عندما تريد إخراج صفحة من نتائج البحث.",
        },
      },
      {
        question: { en: "Should I block AI crawlers?", ar: "هل يجب حجب زواحف الذكاء الاصطناعي؟" },
        answer: {
          en: "If public visibility and citations matter, allowing reputable AI crawlers can support GEO and AEO. Block them only for privacy, legal, or strategy reasons.",
          ar: "إذا كان الظهور العام والاستشهادات مهمة، فإن السماح لزواحف الذكاء الاصطناعي الموثوقة قد يدعم GEO وAEO. احجبها فقط لأسباب خصوصية أو قانونية أو استراتيجية.",
        },
      },
    ],
  },
  {
    slug: "open-graph-checker",
    category: "seo",
    icon: "Share2",
    title: { en: "Open Graph Checker", ar: "فاحص Open Graph" },
    shortDescription: {
      en: "Paste page HTML and preview Open Graph and Twitter tags before sharing links on social platforms.",
      ar: "الصق HTML للصفحة وعاين وسوم Open Graph وTwitter قبل مشاركة الروابط على منصات التواصل.",
    },
    metaTitle: { en: "Open Graph Checker Free", ar: "فاحص Open Graph مجاناً" },
    metaDescription: {
      en: "Check Open Graph and Twitter card tags from pasted HTML. Preview social title, description, image, URL, and missing sharing metadata.",
      ar: "افحص وسوم Open Graph وTwitter Card من HTML ملصوق. عاين عنوان ووصف وصورة ورابط السوشيال والبيانات المفقودة.",
    },
    quickAnswer: {
      en: "Open Graph tags control how your page appears when shared on LinkedIn, WhatsApp, Facebook, and other platforms. Strong social previews improve click-through and support content distribution.",
      ar: "تتحكم وسوم Open Graph في شكل ظهور صفحتك عند مشاركتها على LinkedIn وWhatsApp وFacebook وغيرها. المعاينات القوية تحسن معدل النقر وتدعم توزيع المحتوى.",
    },
    useCases: [
      { en: "Preview a new landing page before launch.", ar: "معاينة صفحة هبوط جديدة قبل الإطلاق." },
      { en: "Fix missing WhatsApp or LinkedIn previews.", ar: "إصلاح معاينات WhatsApp أو LinkedIn المفقودة." },
      { en: "Check social metadata after a template change.", ar: "فحص بيانات السوشيال بعد تغيير القالب." },
    ],
    faqs: [
      {
        question: { en: "Which Open Graph tags are essential?", ar: "ما وسوم Open Graph الأساسية؟" },
        answer: {
          en: "At minimum, use og:title, og:description, og:image, og:url, and og:type. Twitter card tags are also useful for X and other previews.",
          ar: "كحد أدنى استخدم og:title وog:description وog:image وog:url وog:type. وسوم Twitter Card مفيدة أيضاً لمنصة X ومعاينات أخرى.",
        },
      },
      {
        question: { en: "Why does WhatsApp show an old preview?", ar: "لماذا يعرض WhatsApp معاينة قديمة؟" },
        answer: {
          en: "Social platforms cache previews. After fixing tags, use each platform's debugger or wait for cache refresh.",
          ar: "تخزن منصات التواصل المعاينات مؤقتاً. بعد إصلاح الوسوم، استخدم أداة فحص المنصة أو انتظر تحديث الذاكرة المؤقتة.",
        },
      },
    ],
  },
  {
    slug: "website-bandwidth-calculator",
    category: "web",
    icon: "Gauge",
    title: { en: "Website Bandwidth Calculator", ar: "حاسبة استهلاك بيانات الموقع" },
    shortDescription: {
      en: "Estimate monthly bandwidth from visits, page views, page size, and caching assumptions.",
      ar: "قدّر استهلاك البيانات الشهري من الزيارات ومشاهدات الصفحات وحجم الصفحة ونسبة التخزين المؤقت.",
    },
    metaTitle: { en: "Website Bandwidth Calculator Free", ar: "حاسبة استهلاك بيانات الموقع مجاناً" },
    metaDescription: {
      en: "Free website bandwidth calculator. Estimate monthly GB usage from visitors, page views per visit, average page size, and cache hit rate.",
      ar: "حاسبة مجانية لاستهلاك بيانات الموقع. قدّر الاستخدام الشهري بالجيجابايت من الزوار ومشاهدات الصفحات وحجم الصفحة ومتوسط التخزين المؤقت.",
    },
    quickAnswer: {
      en: "Bandwidth planning helps avoid slow pages, hosting surprises, and CDN limits as SEO traffic grows. The formula is monthly visitors multiplied by page views, average page size, and uncached delivery percentage.",
      ar: "يساعد تخطيط استهلاك البيانات على تجنب بطء الصفحات ومفاجآت الاستضافة وحدود CDN مع نمو زيارات SEO. المعادلة هي الزوار الشهريون مضروبون في مشاهدات الصفحات وحجم الصفحة ومتوسط الجزء غير المخزن مؤقتاً.",
    },
    useCases: [
      { en: "Plan hosting for a growing SEO campaign.", ar: "تخطيط الاستضافة لحملة SEO متنامية." },
      { en: "Estimate CDN needs before a content launch.", ar: "تقدير احتياجات CDN قبل إطلاق المحتوى." },
      { en: "Model the impact of image-heavy landing pages.", ar: "نمذجة تأثير صفحات الهبوط الغنية بالصور." },
    ],
    faqs: [
      {
        question: { en: "What is a normal page size?", ar: "ما حجم الصفحة الطبيعي؟" },
        answer: {
          en: "Many modern marketing pages land between 1 MB and 4 MB. Image-heavy pages can be larger, which makes compression and lazy loading important.",
          ar: "تتراوح كثير من صفحات التسويق الحديثة بين 1 و4 ميجابايت. الصفحات الغنية بالصور قد تكون أكبر، لذلك يصبح الضغط والتحميل الكسول مهمين.",
        },
      },
      {
        question: { en: "Does caching reduce bandwidth?", ar: "هل يقلل التخزين المؤقت استهلاك البيانات؟" },
        answer: {
          en: "Yes. Browser, CDN, and edge caching reduce repeated asset delivery and can sharply lower bandwidth for returning visitors.",
          ar: "نعم. التخزين المؤقت في المتصفح وCDN والحافة يقلل تسليم الملفات المتكررة ويمكن أن يخفض الاستهلاك كثيراً للزوار العائدين.",
        },
      },
    ],
  },
  {
    slug: "website-cost-calculator",
    category: "web",
    icon: "Calculator",
    title: { en: "Website Cost Calculator", ar: "حاسبة تكلفة الموقع" },
    shortDescription: {
      en: "Estimate website build cost in AED based on pages, languages, SEO landing pages, booking, and ecommerce scope.",
      ar: "قدّر تكلفة بناء الموقع بالدرهم بناءً على الصفحات واللغات وصفحات SEO والحجز والتجارة الإلكترونية.",
    },
    metaTitle: { en: "Website Cost Calculator UAE Free", ar: "حاسبة تكلفة الموقع في الإمارات مجاناً" },
    metaDescription: {
      en: "Estimate website cost in AED for UAE and GCC projects. Calculate a planning range based on pages, bilingual content, SEO pages, ecommerce, and booking features.",
      ar: "قدّر تكلفة الموقع بالدرهم لمشاريع الإمارات والخليج. احسب نطاقاً تخطيطياً حسب الصفحات والمحتوى الثنائي وصفحات SEO والتجارة الإلكترونية والحجز.",
    },
    quickAnswer: {
      en: "A realistic website cost depends on page count, bilingual content, integrations, ecommerce, SEO landing pages, and how much content must be written or migrated. This calculator gives a planning range in AED, not a final quote.",
      ar: "تعتمد تكلفة الموقع الواقعية على عدد الصفحات والمحتوى الثنائي والتكاملات والتجارة الإلكترونية وصفحات SEO ومقدار المحتوى المطلوب كتابته أو ترحيله. تقدم هذه الحاسبة نطاقاً تخطيطياً بالدرهم وليس عرض سعر نهائياً.",
    },
    useCases: [
      { en: "Budget a new SEO-first website.", ar: "تحديد ميزانية موقع جديد بأولوية SEO." },
      { en: "Compare a brochure site with a larger landing-page build.", ar: "مقارنة موقع تعريفي مع بناء أكبر لصفحات هبوط." },
      { en: "Estimate bilingual English-Arabic scope.", ar: "تقدير نطاق الموقع الثنائي إنجليزي-عربي." },
    ],
    faqs: [
      {
        question: { en: "Why are SEO landing pages priced separately?", ar: "لماذا تُحسب صفحات SEO بشكل منفصل؟" },
        answer: {
          en: "SEO landing pages need keyword mapping, unique copy, metadata, schema, internal links, and static-generation checks, so they require more strategy than ordinary pages.",
          ar: "تحتاج صفحات SEO إلى ربط كلمات مفتاحية ونص فريد وبيانات ميتا وسكيما وروابط داخلية وفحص توليد ثابت، لذلك تتطلب استراتيجية أكثر من الصفحات العادية.",
        },
      },
      {
        question: { en: "Is the estimate a quote?", ar: "هل التقدير عرض سعر؟" },
        answer: {
          en: "No. It is a planning range. A final quote should follow a short discovery call and a review of design, content, and technical requirements.",
          ar: "لا. هو نطاق تخطيطي. عرض السعر النهائي يحتاج مكالمة اكتشاف قصيرة ومراجعة التصميم والمحتوى والمتطلبات التقنية.",
        },
      },
    ],
  },
  {
    slug: "youtube-video-seo-checker",
    category: "youtube",
    icon: "Youtube",
    title: { en: "YouTube Video SEO Checker", ar: "فاحص SEO لفيديو يوتيوب" },
    shortDescription: {
      en: "Check video title, description, tags, target keyword, chapters, and CTA signals for better YouTube discovery.",
      ar: "افحص عنوان الفيديو والوصف والوسوم والكلمة المستهدفة والفصول ونداء الإجراء لتحسين اكتشاف يوتيوب.",
    },
    metaTitle: { en: "YouTube Video SEO Checker Free", ar: "فاحص SEO لفيديو يوتيوب مجاناً" },
    metaDescription: {
      en: "Free YouTube video SEO checker. Audit title length, keyword usage, description depth, tags, chapters, hashtags, and call-to-action signals.",
      ar: "فاحص مجاني لـ SEO فيديو يوتيوب. دقّق طول العنوان واستخدام الكلمة المفتاحية وعمق الوصف والوسوم والفصول والهاشتاغ ونداء الإجراء.",
    },
    quickAnswer: {
      en: "YouTube SEO works best when the title clearly matches the query, the description gives context, tags support the topic, and the video includes chapters or a strong call to action. This checker gives a quick optimization score before publishing.",
      ar: "يعمل SEO يوتيوب بأفضل شكل عندما يطابق العنوان الاستعلام بوضوح، ويقدم الوصف سياقاً، وتدعم الوسوم الموضوع، ويتضمن الفيديو فصولاً أو نداء إجراء واضحاً. يعطيك هذا الفاحص تقييماً سريعاً قبل النشر.",
    },
    useCases: [
      { en: "Optimize videos that support SEO campaigns.", ar: "تحسين فيديوهات تدعم حملات SEO." },
      { en: "Improve titles before publishing on YouTube.", ar: "تحسين العناوين قبل النشر على يوتيوب." },
      { en: "Check whether descriptions include enough context and CTAs.", ar: "فحص ما إذا كان الوصف يحتوي على سياق ونداءات إجراء كافية." },
    ],
    faqs: [
      {
        question: { en: "Do YouTube tags still matter?", ar: "هل ما زالت وسوم يوتيوب مهمة؟" },
        answer: {
          en: "They are not the strongest ranking factor, but clean tags can still clarify topic context, spelling variants, and campaign grouping.",
          ar: "ليست أقوى عامل ترتيب، لكن الوسوم النظيفة قد توضح سياق الموضوع واختلافات الكتابة وتجميع الحملات.",
        },
      },
      {
        question: { en: "Should the keyword be in the title?", ar: "هل يجب وضع الكلمة المفتاحية في العنوان؟" },
        answer: {
          en: "Usually yes, as long as it reads naturally. The title should match real viewer intent rather than stuffing keywords.",
          ar: "غالباً نعم، بشرط أن يكون طبيعياً. يجب أن يطابق العنوان نية المشاهد الحقيقية لا أن يحشو الكلمات.",
        },
      },
    ],
  },
];

export const featuredToolSlugs = [
  "bulk-meta-title-description-checker",
  "meta-tag-analyzer",
  "heading-tag-checker",
  "faq-schema-generator",
  "robots-txt-generator",
  "website-cost-calculator",
];

export function getLocalizedText(value: LocalizedText, isAr: boolean) {
  return isAr ? value.ar : value.en;
}

export function getToolBySlug(slug: string | undefined) {
  return freeTools.find((tool) => tool.slug === slug);
}
