import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowLeft } from "lucide-react";

const content = {
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: March 29, 2026",
    sections: [
      {
        heading: "Agreement to Terms",
        body: [
          'By accessing or using the website and services provided by ConstantSEO by Constant Labs ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree, do not use our services.',
          "These Terms apply to all visitors, users, and clients of our website (seo.constantlabs.ai) and all SEO consultation, audit, optimization, and related digital marketing services.",
        ],
      },
      {
        heading: "Changes to Terms",
        body: [
          "We reserve the right to modify these Terms at any time. Changes are effective immediately upon posting. Your continued use of our services constitutes acceptance of the new Terms.",
        ],
      },
      {
        heading: "Description of Services",
        body: ["ConstantSEO provides AI-powered SEO services, including but not limited to:"],
        items: [
          "SEO audits and technical analysis",
          "AI-driven keyword research and content strategy",
          "On-page and off-page SEO optimization",
          "Local SEO for GCC markets",
          "Bilingual SEO (English and Arabic)",
          "Performance monitoring and reporting",
          "SEO consultation and strategy planning",
        ],
        footer: "We reserve the right to modify, suspend, or discontinue any service at any time with reasonable notice to active clients.",
      },
      {
        heading: "Client Obligations",
        body: ["As a client, you agree to:"],
        items: [
          "Provide accurate business and website information",
          "Grant necessary access to your website, analytics, and tools as required",
          "Review and approve deliverables in a timely manner",
          "Pay all fees in accordance with agreed terms",
          "Not engage in practices that violate search engine guidelines",
        ],
      },
      {
        heading: "Intellectual Property",
        body: [
          "All content, methodologies, tools, reports, and materials created by ConstantSEO are our intellectual property unless otherwise agreed in writing. Deliverables produced for your project are licensed for your use upon full payment.",
          "You retain ownership of your existing website content, branding, and business materials. You grant us a limited license to use these materials solely for providing our services.",
        ],
      },
      {
        heading: "Payment Terms",
        body: ["Payment terms are specified in individual service agreements. General terms include:"],
        items: [
          "Invoices are due within the period specified in your agreement",
          "Late payments may result in service suspension",
          "All fees are in the currency specified in your agreement",
          "Refunds are subject to our refund policy as outlined in your service agreement",
        ],
      },
      {
        heading: "SEO Results Disclaimer",
        body: [
          "While we use industry-leading AI tools and proven methodologies, we cannot guarantee specific search engine rankings, traffic volumes, or revenue outcomes. SEO results depend on many factors outside our control, including algorithm changes, competitor actions, and market conditions.",
          "We commit to applying best practices and providing transparent reporting on all work performed.",
        ],
      },
      {
        heading: "Limitation of Liability",
        body: [
          "To the maximum extent permitted by law, ConstantSEO shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or goodwill.",
          "Our total liability shall not exceed the amount paid by you for the specific services giving rise to the claim during the six (6) months prior to the event.",
        ],
      },
      {
        heading: "Confidentiality",
        body: [
          "Both parties agree to keep confidential any proprietary information shared during the engagement. This includes business strategies, analytics data, access credentials, and any non-public information. Confidentiality obligations survive termination of services.",
        ],
      },
      {
        heading: "Governing Law",
        body: [
          "These Terms shall be governed by the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.",
        ],
      },
      {
        heading: "Termination",
        body: [
          "Either party may terminate services with written notice as specified in the service agreement. Upon termination, you will receive all completed deliverables and a final report. Outstanding payments for work already performed remain due.",
        ],
      },
      {
        heading: "Contact Us",
        body: ["If you have any questions about these Terms of Service, contact us:"],
        contact: true,
      },
    ],
    privacyLink: "Privacy Policy",
    rights: "ConstantSEO. All rights reserved.",
  },
  ar: {
    title: "شروط الخدمة",
    lastUpdated: "آخر تحديث: 29 مارس 2026",
    sections: [
      {
        heading: "الموافقة على الشروط",
        body: [
          'بالوصول إلى أو استخدام الموقع الإلكتروني والخدمات المقدمة من ConstantSEO من Constant Labs ("الشركة" أو "نحن" أو "لنا")، فإنك توافق على الالتزام بشروط الخدمة هذه. إذا لم توافق، لا تستخدم خدماتنا.',
          "تنطبق هذه الشروط على جميع زوار ومستخدمي وعملاء موقعنا الإلكتروني (seo.constantlabs.ai) وجميع خدمات استشارات تحسين محركات البحث والتدقيق والتحسين وخدمات التسويق الرقمي ذات الصلة.",
        ],
      },
      {
        heading: "التغييرات على الشروط",
        body: [
          "نحتفظ بالحق في تعديل هذه الشروط في أي وقت. تصبح التغييرات سارية فور نشرها. استمرارك في استخدام خدماتنا يشكل قبولاً للشروط الجديدة.",
        ],
      },
      {
        heading: "وصف الخدمات",
        body: ["تقدم ConstantSEO خدمات تحسين محركات البحث المدعومة بالذكاء الاصطناعي، بما في ذلك على سبيل المثال لا الحصر:"],
        items: [
          "تدقيق SEO والتحليل التقني",
          "بحث الكلمات المفتاحية واستراتيجية المحتوى بالذكاء الاصطناعي",
          "تحسين SEO الداخلي والخارجي",
          "تحسين محركات البحث المحلية لأسواق الخليج",
          "تحسين محركات البحث ثنائي اللغة (الإنجليزية والعربية)",
          "مراقبة الأداء والتقارير",
          "استشارات وتخطيط استراتيجية SEO",
        ],
        footer: "نحتفظ بالحق في تعديل أو تعليق أو إيقاف أي خدمة في أي وقت مع إشعار معقول للعملاء النشطين.",
      },
      {
        heading: "التزامات العميل",
        body: ["بصفتك عميلاً، فإنك توافق على:"],
        items: [
          "تقديم معلومات دقيقة عن العمل والموقع الإلكتروني",
          "منح الوصول اللازم إلى موقعك الإلكتروني والتحليلات والأدوات حسب الحاجة",
          "مراجعة المخرجات والموافقة عليها في الوقت المناسب",
          "دفع جميع الرسوم وفقاً للشروط المتفق عليها",
          "عدم الانخراط في ممارسات تنتهك إرشادات محركات البحث",
        ],
      },
      {
        heading: "الملكية الفكرية",
        body: [
          "جميع المحتويات والمنهجيات والأدوات والتقارير والمواد التي أنشأتها ConstantSEO هي ملكيتنا الفكرية ما لم يتم الاتفاق على خلاف ذلك كتابياً. المخرجات المنتجة لمشروعك مرخصة لاستخدامك عند السداد الكامل.",
          "تحتفظ بملكية محتوى موقعك الإلكتروني الحالي وعلامتك التجارية ومواد عملك. تمنحنا ترخيصاً محدوداً لاستخدام هذه المواد فقط لغرض تقديم خدماتنا.",
        ],
      },
      {
        heading: "شروط الدفع",
        body: ["يتم تحديد شروط الدفع في اتفاقيات الخدمة الفردية. تشمل الشروط العامة:"],
        items: [
          "الفواتير مستحقة خلال الفترة المحددة في اتفاقيتك",
          "قد يؤدي التأخر في الدفع إلى تعليق الخدمة",
          "جميع الرسوم بالعملة المحددة في اتفاقيتك",
          "تخضع المبالغ المستردة لسياسة الاسترداد الموضحة في اتفاقية الخدمة",
        ],
      },
      {
        heading: "إخلاء مسؤولية نتائج SEO",
        body: [
          "بينما نستخدم أدوات ذكاء اصطناعي رائدة ومنهجيات مثبتة، لا يمكننا ضمان ترتيبات محددة في محركات البحث أو أحجام حركة مرور أو نتائج إيرادات محددة. تعتمد نتائج SEO على عوامل كثيرة خارجة عن سيطرتنا.",
          "نلتزم بتطبيق أفضل الممارسات وتقديم تقارير شفافة عن جميع الأعمال المنجزة.",
        ],
      },
      {
        heading: "تحديد المسؤولية",
        body: [
          "إلى أقصى حد يسمح به القانون، لن تكون ConstantSEO مسؤولة عن أي أضرار غير مباشرة أو عرضية أو خاصة أو تبعية أو عقابية.",
          "لن تتجاوز مسؤوليتنا الإجمالية المبلغ الذي دفعته مقابل الخدمات المحددة خلال الأشهر الستة (6) السابقة للحدث.",
        ],
      },
      {
        heading: "السرية",
        body: [
          "يوافق الطرفان على الحفاظ على سرية أي معلومات خاصة تتم مشاركتها خلال التعاقد. يشمل ذلك استراتيجيات العمل وبيانات التحليلات وبيانات الوصول وأي معلومات غير عامة. تبقى التزامات السرية سارية بعد إنهاء الخدمات.",
        ],
      },
      {
        heading: "القانون الحاكم",
        body: [
          "تخضع هذه الشروط لقوانين دولة الإمارات العربية المتحدة. تخضع أي نزاعات للاختصاص القضائي الحصري لمحاكم دبي، الإمارات.",
        ],
      },
      {
        heading: "الإنهاء",
        body: [
          "يجوز لأي من الطرفين إنهاء الخدمات بإشعار كتابي وفقاً لاتفاقية الخدمة. عند الإنهاء، ستتلقى جميع المخرجات المكتملة وتقريراً نهائياً. تبقى المدفوعات المستحقة عن العمل المنجز واجبة السداد.",
        ],
      },
      {
        heading: "اتصل بنا",
        body: ["إذا كان لديك أي أسئلة حول شروط الخدمة هذه، تواصل معنا:"],
        contact: true,
      },
    ],
    privacyLink: "سياسة الخصوصية",
    rights: "ConstantSEO. جميع الحقوق محفوظة.",
  },
};

const TermsOfService = () => {
  const { isAr } = useLanguage();
  const c = isAr ? content.ar : content.en;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={c.title + " | ConstantSEO"}
        description="Terms of Service for ConstantSEO by Constant Labs."
        path="/terms"
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-3xl mx-auto px-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-200 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} />
            {isAr ? "الرئيسية" : "Home"}
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold">{c.title}</h1>
          <p className="mt-3 text-gray-200 text-sm">{c.lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 space-y-10">
          {c.sections.map((s, i) => (
            <div key={i}>
              <h2 className="text-xl font-bold text-slate-900 mb-4">{s.heading}</h2>

              {s.body?.map((p, j) => (
                <p key={j} className="text-slate-600 leading-relaxed mb-3">{p}</p>
              ))}

              {s.items && (
                <ul className="list-disc list-inside text-slate-600 space-y-1.5 mt-2">
                  {s.items.map((item, l) => (
                    <li key={l}>{item}</li>
                  ))}
                </ul>
              )}

              {s.footer && (
                <p className="text-slate-600 leading-relaxed mt-3">{s.footer}</p>
              )}

              {s.contact && (
                <div className="mt-3 space-y-1 text-slate-600">
                  <p><strong className="text-slate-900">{isAr ? "البريد الإلكتروني:" : "Email:"}</strong>{" "}akhmad@constantlabs.ai</p>
                  <p><strong className="text-slate-900">{isAr ? "الموقع:" : "Website:"}</strong>{" "}seo.constantlabs.ai</p>
                </div>
              )}
            </div>
          ))}

          {/* Footer link */}
          <div className="pt-8 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} {c.rights}</p>
            <Link to="/privacy" className="text-xs text-[#7143E0] hover:underline mt-2 inline-block">
              {c.privacyLink}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
