export interface IndustryData {
  slug: string;
  industry: string;
  location: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: Array<{ title: string; body: string }>;
  ourApproach: Array<{ step: string; title: string; body: string }>;
  targetKeywords: string[];
  results: Array<{ metric: string; label: string }>;
  faq: Array<{ q: string; a: string }>;
}

export const industries: IndustryData[] = [
  {
    slug: "real-estate-seo-dubai",
    industry: "Real Estate",
    location: "Dubai & UAE",
    metaTitle: "Real Estate SEO Dubai - Rank for Property Searches in UAE",
    metaDescription:
      "ConstantSEO helps Dubai real estate agencies, developers, and brokers rank on Google for high-intent property searches. Neighborhood pages, off-plan project SEO, Arabic investor content - all done by AI-assisted experts.",
    heroHeadline: "Real Estate SEO That Puts Your Properties in Front of Buyers",
    heroSub:
      "Emaar, DAMAC, and Nakheel dominate the first page of Google. We build the technical foundation, content depth, and local authority to get your real estate brand ranking for the property searches that actually convert.",
    painPoints: [
      {
        title: "Developer Giants Crowd Out Independent Brokers",
        body:
          "Emaar, DAMAC, Nakheel, and Aldar have entire in-house SEO teams and millions in marketing spend. Independent agencies and smaller developers are pushed to page 3 or beyond, even for neighborhoods where they have the most inventory. Without a deliberate keyword architecture, you're invisible.",
      },
      {
        title: "Property Listings Don't Rank on Their Own",
        body:
          "Uploading a listing to your website is not SEO. Without proper on-page structure, schema markup (RealEstateListing, Apartment, House), internal linking from neighborhood guides, and unique descriptions, Google treats your listings as thin duplicate content and refuses to rank them.",
      },
      {
        title: "Arabic-Speaking Investors Are Being Ignored",
        body:
          "A large share of Dubai's property buyers communicate and search in Arabic - from Saudi Arabia, Egypt, and locally. Most real estate websites have no Arabic pages, no RTL UX, and zero keyword research in Arabic. This is an enormous untapped traffic pool your competitors haven't claimed yet.",
      },
    ],
    ourApproach: [
      {
        step: "01",
        title: "Neighborhood-Specific Landing Pages",
        body:
          "We build SEO-optimized pages for every area where you operate: Dubai Marina, Downtown Dubai, JBR, Palm Jumeirah, Business Bay, Arabian Ranches, and more. Each page targets the exact keyword clusters buyers use when searching for property in that community, complete with schema markup and internal link architecture.",
      },
      {
        step: "02",
        title: "Off-Plan Project SEO",
        body:
          "Off-plan searches ('Emaar Palmiera launch', 'off-plan villas Dubai Hills 2025') are high intent and underserved. We create dedicated project pages with launch timelines, payment plan details, developer credentials, and FAQ schema - capturing buyers at the earliest stage of their decision.",
      },
      {
        step: "03",
        title: "Arabic Investor Content",
        body:
          "We produce fully translated, culturally adapted Arabic pages targeting GCC investor keyword sets. This includes Arabic property guides, market reports, and neighborhood overviews - all with proper hreflang tags, RTL layout signals, and Arabic schema to rank in Google.ae Arabic SERPs.",
      },
      {
        step: "04",
        title: "Google Maps & Local SEO for Offices",
        body:
          "We optimize your Google Business Profile(s) for each branch location, build local citations on UAE property directories (Bayut, Property Finder, Dubizzle), and implement LocalBusiness schema so your office appears in Google Maps for brokers and agents searching nearby.",
      },
    ],
    targetKeywords: [
      "apartments for sale Dubai Marina",
      "off-plan properties Dubai 2025",
      "villas for rent Jumeirah",
      "luxury apartments Downtown Dubai",
      "Dubai real estate agent",
      "ROI property investment Dubai",
      "townhouses for sale Arabian Ranches",
      "studio apartment Business Bay rent",
      "buy property Dubai as expat",
      "best areas to invest in Dubai real estate",
    ],
    results: [
      { metric: "340%", label: "Increase in organic property enquiries within 9 months" },
      { metric: "62", label: "Neighborhood landing pages ranking on page 1" },
      { metric: "4.2x", label: "More Arabic traffic from GCC investor searches" },
    ],
    faq: [
      {
        q: "How long does real estate SEO in Dubai take to show results?",
        a: "Most real estate clients see measurable ranking improvements within 3–4 months for long-tail neighborhood and property-type keywords. Highly competitive terms like 'apartments for sale Dubai' take 8–12 months of consistent work. We prioritize quick-win keywords alongside long-term authority building so you see ROI early.",
      },
      {
        q: "Can you help us rank against Bayut and Property Finder?",
        a: "We don't try to outrank aggregators on generic terms - that's a losing battle. Instead, we focus on your unique brand advantage: specific developments you list exclusively, hyperlocal community guides, off-plan project pages, and agent-specific search queries where aggregators have thin content.",
      },
      {
        q: "Do you handle Arabic SEO for real estate?",
        a: "Yes. We conduct separate Arabic keyword research, write original Arabic content (not Google Translate), implement hreflang correctly, and test RTL rendering. Arabic SEO is a distinct service, not an afterthought - and it's one of the highest-ROI opportunities in Dubai real estate right now.",
      },
      {
        q: "What makes real estate SEO in Dubai different from other markets?",
        a: "Dubai's market has unique dynamics: extremely high-value transactions, a multilingual buyer base (English, Arabic, Russian, Chinese), strong reliance on Google Maps for broker discovery, off-plan as a dominant purchase category, and rapid neighborhood development that creates constant new keyword opportunities. We understand these nuances deeply.",
      },
    ],
  },

  {
    slug: "restaurant-seo-dubai",
    industry: "Restaurants & F&B",
    location: "Dubai & UAE",
    metaTitle: "Restaurant SEO Dubai - Rank for Brunch, Cuisine & Location Searches",
    metaDescription:
      "ConstantSEO helps Dubai restaurants, cafes, and F&B groups rank on Google for high-intent dining searches. Google Maps optimization, menu schema, cuisine + neighborhood pages - proven F&B SEO for the UAE market.",
    heroHeadline: "Restaurant SEO That Fills Tables, Not Just Feeds Algorithms",
    heroSub:
      "Your restaurant is buried under Zomato, TripAdvisor, and Time Out Dubai. We optimize your Google presence so hungry diners searching for 'brunch Dubai' or 'Italian restaurant Marina' find you first - and walk through your door.",
    painPoints: [
      {
        title: "Zomato and TripAdvisor Own the First Page",
        body:
          "For almost every restaurant keyword in Dubai, aggregator websites take 5–6 of the top 10 results. Your restaurant's own website ranks on page 3 or doesn't rank at all. This means you pay Zomato commission every time a customer books - even one who Googled your name. Owning your SEO stops this leakage.",
      },
      {
        title: "Zero Google Maps Visibility",
        body:
          "The local 3-pack (the map results at the top of Google) drives a huge share of 'restaurant near me' traffic, yet most Dubai restaurants have incomplete Google Business Profiles, outdated hours, no menu uploaded, and fewer than 50 reviews. Competitors with better profiles get the walk-in traffic you're missing.",
      },
      {
        title: "Not Showing Up for Cuisine or Occasion Searches",
        body:
          "Searches like 'best brunch Dubai', 'Friday brunch JBR', 'rooftop restaurant for anniversary Dubai', and 'halal Korean BBQ Dubai' have thousands of monthly searches. If you don't have dedicated pages optimized for your cuisine type, occasion, and neighborhood, you're invisible to these high-intent diners.",
      },
    ],
    ourApproach: [
      {
        step: "01",
        title: "Google Business Profile Optimization",
        body:
          "We fully optimize your GBP: complete menu upload (with pricing and descriptions), accurate hours (including Ramadan hours), high-quality photos by category, service area configuration, and a review generation strategy. A properly optimized GBP can drive more walk-in traffic than any paid campaign.",
      },
      {
        step: "02",
        title: "Menu & Restaurant Schema Markup",
        body:
          "We implement Restaurant, Menu, MenuSection, and MenuItem structured data on your website. This tells Google exactly what you serve, at what price, and where - making your listing eligible for rich results (star ratings, price range, menu items) directly in search results before anyone clicks.",
      },
      {
        step: "03",
        title: "Cuisine + Neighborhood Content Pages",
        body:
          "We create SEO pages targeting your cuisine category in your neighborhood: 'Italian restaurant Dubai Marina', 'rooftop brunch JBR', 'halal Japanese Dubai'. These pages rank for the discovery searches that bring in new customers who've never heard of your brand but want exactly what you offer.",
      },
      {
        step: "04",
        title: "Review Generation & Reputation Strategy",
        body:
          "Reviews are a direct ranking signal for local SEO. We build a systematic post-visit review request flow - WhatsApp follow-ups, QR codes on receipts, NFC tags on tables - targeting Google reviews specifically. More recent, high-quality reviews push you up in the local pack rankings.",
      },
    ],
    targetKeywords: [
      "best brunch Dubai",
      "restaurants near Dubai Mall",
      "Arabic restaurant Deira Dubai",
      "Friday brunch JBR",
      "Italian restaurant Dubai Marina",
      "rooftop restaurant Dubai with view",
      "halal Japanese restaurant Dubai",
      "Lebanese restaurant Downtown Dubai",
      "family restaurant Abu Dhabi",
      "outdoor restaurant Dubai winter",
    ],
    results: [
      { metric: "280%", label: "Growth in 'near me' search impressions" },
      { metric: "#1", label: "Google Maps ranking for target cuisine + location keywords" },
      { metric: "55%", label: "Reduction in third-party booking commission dependency" },
    ],
    faq: [
      {
        q: "How does SEO help my restaurant when most bookings come from Instagram?",
        a: "Instagram builds brand awareness; Google captures purchase intent. Someone who sees your restaurant on Instagram will Google you before booking - and if you don't rank well or your GBP looks sparse, you lose the conversion. SEO also captures entirely new customers who've never seen your social media: people actively searching for a restaurant type right now.",
      },
      {
        q: "Can you help us rank for 'best brunch Dubai' - that's extremely competitive?",
        a: "We target a portfolio of keywords at different competition levels. 'Best brunch Dubai' is hard, but 'Friday brunch JBR views', 'outdoor brunch Dubai Creek Harbour', and 'bottomless brunch Dubai under 300 AED' are much more achievable and often convert better because they're more specific. We build rankings from the bottom up.",
      },
      {
        q: "How important is Google Maps vs. organic search for restaurants?",
        a: "For restaurants, Google Maps (local pack) is often more important than traditional organic results - especially for 'near me' and location + cuisine queries. We optimize both in parallel because they reinforce each other: your website's SEO authority strengthens your Maps ranking and vice versa.",
      },
      {
        q: "We have multiple branches. Can you do SEO for each location?",
        a: "Yes. We create location-specific pages for each branch on your main website, optimize a separate Google Business Profile per location, build location-specific citations, and implement BranchOf schema to show Google the relationship between your brand and each branch. Multi-location SEO is a core specialty.",
      },
    ],
  },

  {
    slug: "legal-seo-uae",
    industry: "Legal & Law Firms",
    location: "UAE",
    metaTitle: "Legal SEO UAE - SEO for Law Firms & Lawyers in Dubai & Abu Dhabi",
    metaDescription:
      "ConstantSEO helps UAE law firms and lawyers rank on Google for specific legal queries - employment disputes, company formation, visa issues, and more. Bilingual EN+AR legal content built within UAE Bar guidelines.",
    heroHeadline: "Legal SEO That Brings Clients to Your Firm - Not Your Competitors",
    heroSub:
      "In the UAE, legal clients search Google before they call a lawyer. If your firm doesn't appear for 'employment lawyer Dubai' or 'company formation UAE', your competitors are taking clients that should be yours. We fix that.",
    painPoints: [
      {
        title: "Legal Advertising Restrictions Create a Content Gap",
        body:
          "UAE legal advertising guidelines are restrictive - no guarantees, no testimonials in certain formats, strict rules on claims. Most law firm websites default to vague, generic pages that say nothing useful. Google rewards depth and usefulness; thin 'We handle all legal matters' pages rank at the bottom while informative guides rank at the top.",
      },
      {
        title: "Too Broad, No Specificity",
        body:
          "A page titled 'Legal Services' competes with every law firm in the UAE for zero specific queries. Potential clients search for exact problems: 'can my employer cancel my visa without notice UAE', 'how to register an LLC in Dubai', 'what to do if landlord breaches rental contract Dubai'. Without practice-area pages targeting these specifics, you capture none of this traffic.",
      },
      {
        title: "Not Visible for the Searches That Matter",
        body:
          "Labour disputes, visa cancellations, cheque bounce cases, company formation, DIFC litigation, family law - each of these is a distinct search market with its own keyword set and user intent. Firms that treat their website as a digital brochure miss all of it. We've seen law firm blogs with legal guides outrank established firms on high-value queries in under six months.",
      },
    ],
    ourApproach: [
      {
        step: "01",
        title: "Practice Area Landing Pages",
        body:
          "We build a dedicated, SEO-optimized page for every practice area: Employment Law, Company Formation, Real Estate Law, Criminal Defence, Family Law, DIFC/ADGM Litigation, IP, and Immigration. Each page targets the specific keyword clusters clients use, includes FAQs, and links to supporting guide content - creating a content cluster that builds topical authority.",
      },
      {
        step: "02",
        title: "Legal Guides & FAQ Content",
        body:
          "We produce legally accurate, plain-language guides that answer the exact questions your potential clients type into Google: 'UAE labour law gratuity calculation', 'how to dispute a rent increase Dubai', 'steps to form a free zone company UAE'. These guides rank for long-tail queries, demonstrate expertise, and build the E-E-A-T signals Google requires for legal content.",
      },
      {
        step: "03",
        title: "Bilingual EN + AR Legal Pages",
        body:
          "A substantial portion of legal clients in the UAE search in Arabic - especially for labour disputes, family matters, and criminal cases. We translate and locally adapt your practice area pages and guides into Arabic, implementing correct hreflang, RTL layout signals, and Arabic-specific keyword targeting so you capture both language markets.",
      },
      {
        step: "04",
        title: "Google Business Profile & Local Citations",
        body:
          "We optimize your firm's GBP with accurate service area, practice areas as categories, office photos, and a review generation workflow for past satisfied clients. We also build citations on UAE legal directories (UAE Law, Gulf Legal, DubaiCourts resource pages) and general business directories to reinforce your local authority.",
      },
    ],
    targetKeywords: [
      "employment lawyer Dubai",
      "company formation UAE lawyer",
      "visa cancellation lawyer Dubai",
      "contract dispute lawyer UAE",
      "criminal lawyer Abu Dhabi",
      "real estate lawyer Dubai",
      "labour dispute UAE legal advice",
      "cheque bounce case lawyer UAE",
      "DIFC litigation lawyer Dubai",
      "family lawyer Dubai divorce",
    ],
    results: [
      { metric: "190%", label: "Increase in organic enquiry form submissions" },
      { metric: "38", label: "Practice area and guide pages ranking in top 5" },
      { metric: "2.7x", label: "More Arabic-language client enquiries" },
    ],
    faq: [
      {
        q: "Is SEO for law firms different from other industries?",
        a: "Yes, significantly. Google applies heightened scrutiny to legal content under its YMYL (Your Money or Your Life) guidelines, meaning E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signals are critical. Pages must demonstrate real legal expertise - attorney author bios, credentials, up-to-date legal references - not just keyword density. We build content that satisfies both Google's quality standards and UAE legal advertising rules.",
      },
      {
        q: "Can you help a boutique firm compete with large international law firms?",
        a: "Absolutely. Large firms often have broad but shallow content. A boutique firm can dominate specific practice areas and jurisdictions by having deeper, more useful content on niche queries. A boutique DIFC employment firm can outrank Magic Circle firms for queries like 'wrongful dismissal claim DIFC' if their content is superior.",
      },
      {
        q: "How do you handle legal content accuracy?",
        a: "Our process requires review and approval from a qualified lawyer at your firm before any legal guide or practice area page is published. We produce the structure, SEO framework, and draft content; your attorneys review for legal accuracy and compliance. This protects your firm and ensures the content meets bar guidelines.",
      },
      {
        q: "How long before a law firm sees SEO results in UAE?",
        a: "Long-tail practice area queries (e.g., 'employment visa cancellation lawyer Dubai') typically rank within 3–5 months. More competitive terms like 'lawyer Dubai' can take 12+ months. We set realistic expectations from the start and track rankings, organic traffic, and - most importantly - enquiry volume so you see the business impact.",
      },
    ],
  },

  {
    slug: "healthcare-seo-uae",
    industry: "Healthcare & Medical",
    location: "UAE",
    metaTitle: "Healthcare SEO UAE - SEO for Medical Clinics & Specialists in Dubai",
    metaDescription:
      "ConstantSEO helps UAE medical clinics, specialist doctors, and healthcare groups rank on Google for patient searches. Specialty service pages, Arabic medical content, Google Maps optimization, and review strategy.",
    heroHeadline: "Healthcare SEO That Connects Patients to the Right Specialist",
    heroSub:
      "Patients in Dubai and Abu Dhabi search Google before booking a clinic. If your dermatology clinic, dental practice, or specialist centre doesn't appear for 'dermatologist Dubai' or 'pediatrician Abu Dhabi', you're losing patients to competitors who invest in SEO.",
    painPoints: [
      {
        title: "Specialist Clinics Are Invisible in Search",
        body:
          "A patient needing an orthopedic surgeon types 'orthopedic surgeon Dubai JLT' into Google. If your clinic doesn't have a specialty-specific page with the right structure, keywords, and local signals, you won't appear - even if you're the best in the area. Most clinic websites have one generic 'Our Services' page covering everything, which ranks for nothing specific.",
      },
      {
        title: "Missing 'Near Me' and Location Searches",
        body:
          "Over 60% of medical searches on Google include a location or 'near me' qualifier. These are the highest-converting searches - the patient is ready to book. Yet most clinics in the UAE have incomplete Google Business Profiles, no location-specific pages, and no local citation strategy, meaning they're invisible for the searches that would fill their appointment books.",
      },
      {
        title: "No Arabic Healthcare Content",
        body:
          "A significant portion of UAE residents, particularly in Abu Dhabi, Sharjah, and among Arab expatriate communities, search for healthcare in Arabic: 'طبيب أسنان دبي', 'عيادة جلدية أبوظبي', 'دكتور أطفال'. Clinics with no Arabic web presence are completely absent from these results, missing an enormous patient segment.",
      },
    ],
    ourApproach: [
      {
        step: "01",
        title: "Specialty-Specific Service Pages",
        body:
          "We build individual optimized pages for every medical specialty and condition you treat: Dermatology, Dentistry, Pediatrics, Orthopedics, Gynecology, Plastic Surgery, General Practice, and more. Each page targets the specific queries patients use - not just specialty names but condition-level searches: 'acne treatment Dubai', 'teeth whitening cost Abu Dhabi', 'knee replacement surgeon UAE'.",
      },
      {
        step: "02",
        title: "Location Pages per Clinic & Area",
        body:
          "If you have multiple branches - or even one clinic in a specific neighbourhood - we create location-specific pages targeting 'Clinic in [Area]' keyword patterns. We also optimize for the surrounding neighborhoods to capture patients who search by proximity. Each location page gets its own structured data (MedicalClinic, Physician schemas) and GBP linkage.",
      },
      {
        step: "03",
        title: "Patient FAQ & Medical Guide Content",
        body:
          "We produce patient-facing FAQ content that targets question-based searches: 'what is the cost of Botox in Dubai', 'how long does a root canal take UAE', 'best hospital for C-section Dubai'. This content ranks for informational searches, builds trust before the booking decision, and creates internal link pathways to your service pages.",
      },
      {
        step: "04",
        title: "Google Maps, Reviews & Arabic Medical Content",
        body:
          "We fully optimize your GBP (hours, photos, services, insurance info), build a patient review strategy with post-appointment WhatsApp follow-ups, and produce Arabic translations of key service pages and FAQs. Arabic medical SEO is a standalone discipline we approach with native-level keyword research and culturally appropriate health communication.",
      },
    ],
    targetKeywords: [
      "dermatologist Dubai",
      "pediatrician Abu Dhabi",
      "dental clinic near me Dubai",
      "orthopedic surgeon UAE",
      "plastic surgery clinic Dubai",
      "GP doctor Dubai same day appointment",
      "gynecologist Dubai private clinic",
      "teeth whitening Dubai cost",
      "acne treatment specialist Dubai",
      "physiotherapy clinic Abu Dhabi",
    ],
    results: [
      { metric: "220%", label: "Increase in appointment booking from organic search" },
      { metric: "Top 3", label: "Google Maps ranking for specialist + location keywords" },
      { metric: "3.1x", label: "Growth in Arabic-language patient enquiries" },
    ],
    faq: [
      {
        q: "What SEO regulations apply to healthcare marketing in UAE?",
        a: "UAE healthcare advertising is regulated by the Ministry of Health and Prevention (MoHAP) and DHA in Dubai. Rules prohibit before/after photos in certain contexts, false claims, and misleading statistics. Our content strategy is built around factual, educational information that ranks well precisely because it's genuinely useful - we never produce content that puts your DHA license at risk.",
      },
      {
        q: "We're a multi-specialty clinic. Should we have a page per specialty or one services page?",
        a: "Definitely one page per specialty - and ideally one page per major condition you treat within each specialty. Google cannot rank a single 'services' page for 20 different medical specialties. Dedicated pages with focused content, appropriate schema markup, and internal linking to related conditions perform vastly better and allow each specialty to build its own search authority.",
      },
      {
        q: "How do reviews affect our clinic's Google ranking?",
        a: "Reviews are one of the most significant local ranking factors for medical practices. Quantity, recency, and rating all matter. A clinic with 200 reviews at 4.7 stars will consistently outrank a competitor with 30 reviews at 4.9 stars in the local pack. We build systematic review generation into our healthcare SEO engagement from day one.",
      },
      {
        q: "Can SEO help with insurance-based patient acquisition?",
        a: "Yes. We optimize for searches like 'clinic accepting Daman insurance Dubai' or 'DHA approved physiotherapy Abu Dhabi'. We also ensure your insurance panel information is clearly structured on your website and GBP so it surfaces in relevant searches. Insurance acceptance is a major patient decision factor that should be explicitly optimized for.",
      },
    ],
  },
];
