import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowLeft } from "lucide-react";

const content = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 29, 2026",
    sections: [
      {
        heading: "Introduction",
        body: [
          'ConstantSEO by Constant Labs ("we," "our," or "us") respects your privacy. This Privacy Policy explains what information we collect when you use our website and SEO services, how we use it, and your choices regarding your data.',
          "This policy covers our website (seo.constantlabs.ai) and all SEO consultation, audit, and optimization services we provide to our clients.",
        ],
      },
      {
        heading: "Information We Collect",
        body: ["We collect the following types of information:"],
        subsections: [
          {
            subheading: "Information You Provide",
            items: [
              "Contact information (name, email, phone number) when you fill out forms or book consultations",
              "Business information when you engage our SEO services",
              "Website and domain information for SEO audit purposes",
              "Communication records when you contact us via email, phone, or WhatsApp",
            ],
          },
          {
            subheading: "Information Collected Automatically",
            items: [
              "Browser type and version",
              "Pages visited and time spent on our website",
              "Referring website or source",
              "Device type and operating system",
              "IP address and approximate geographic location",
            ],
          },
        ],
      },
      {
        heading: "How We Use Your Information",
        items: [
          "To provide and improve our SEO services",
          "To respond to your inquiries and schedule consultations",
          "To send you project updates, reports, and deliverables",
          "To analyze website performance and improve user experience",
          "To comply with legal obligations",
        ],
      },
      {
        heading: "Data Sharing",
        body: [
          "We do not sell your personal data. We may share information with:",
        ],
        items: [
          "Service providers who assist in delivering our SEO services (e.g., analytics platforms, hosting providers)",
          "Legal authorities when required by law",
        ],
        footer: "All third-party service providers are bound by data processing agreements and are required to protect your data.",
      },
      {
        heading: "Cookies and Tracking",
        body: [
          "Our website uses cookies and similar technologies for analytics and to improve your experience. You can control cookies through your browser settings. Disabling cookies may affect some website functionality.",
        ],
      },
      {
        heading: "Data Security",
        body: [
          "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. All data transmitted between your browser and our website is encrypted using HTTPS/TLS.",
        ],
      },
      {
        heading: "Your Rights",
        body: ["You have the right to:"],
        items: [
          "Access your personal data we hold",
          "Request correction of inaccurate data",
          "Request deletion of your data",
          "Object to or restrict processing of your data",
          "Withdraw consent at any time",
        ],
        footer: "To exercise any of these rights, contact us at the email address below.",
      },
      {
        heading: "Changes to This Policy",
        body: [
          'We may update this Privacy Policy from time to time. We will update the "Last updated" date at the top of this page and notify clients of significant changes via email.',
        ],
      },
      {
        heading: "Contact Us",
        body: ["If you have any questions about this Privacy Policy, contact us:"],
        contact: true,
      },
    ],
    termsLink: "Terms of Service",
    rights: "ConstantSEO. All rights reserved.",
  },
  ar: {
    title: "سياسة الخصوصية",
    lastUpdated: "آخر تحديث: 29 مارس 2026",
    sections: [
      {
        heading: "مقدمة",
        body: [
          'تحترم ConstantSEO من Constant Labs ("نحن" أو "لنا") خصوصيتك. توضح سياسة الخصوصية هذه المعلومات التي نجمعها عند استخدامك لموقعنا الإلكتروني وخدمات تحسين محركات البحث، وكيفية استخدامنا لها، وخياراتك فيما يتعلق ببياناتك.',
          "تغطي هذه السياسة موقعنا الإلكتروني (seo.constantlabs.ai) وجميع خدمات استشارات تحسين محركات البحث والتدقيق والتحسين التي نقدمها لعملائنا.",
        ],
      },
      {
        heading: "المعلومات التي نجمعها",
        body: ["نجمع الأنواع التالية من المعلومات:"],
        subsections: [
          {
            subheading: "المعلومات التي تقدمها",
            items: [
              "معلومات الاتصال (الاسم، البريد الإلكتروني، رقم الهاتف) عند ملء النماذج أو حجز الاستشارات",
              "معلومات العمل عند الاستفادة من خدمات تحسين محركات البحث",
              "معلومات الموقع الإلكتروني والنطاق لأغراض تدقيق SEO",
              "سجلات التواصل عند الاتصال بنا عبر البريد الإلكتروني أو الهاتف أو واتساب",
            ],
          },
          {
            subheading: "المعلومات المجمعة تلقائياً",
            items: [
              "نوع المتصفح وإصداره",
              "الصفحات التي تمت زيارتها والوقت المستغرق على موقعنا",
              "الموقع أو المصدر المُحيل",
              "نوع الجهاز ونظام التشغيل",
              "عنوان IP والموقع الجغرافي التقريبي",
            ],
          },
        ],
      },
      {
        heading: "كيف نستخدم معلوماتك",
        items: [
          "لتقديم وتحسين خدمات تحسين محركات البحث",
          "للرد على استفساراتك وجدولة الاستشارات",
          "لإرسال تحديثات المشروع والتقارير والمخرجات",
          "لتحليل أداء الموقع وتحسين تجربة المستخدم",
          "للامتثال للالتزامات القانونية",
        ],
      },
      {
        heading: "مشاركة البيانات",
        body: ["نحن لا نبيع بياناتك الشخصية. قد نشارك المعلومات مع:"],
        items: [
          "مزودي الخدمات الذين يساعدون في تقديم خدمات SEO (مثل منصات التحليلات ومزودي الاستضافة)",
          "السلطات القانونية عند الحاجة بموجب القانون",
        ],
        footer: "جميع مزودي الخدمات الخارجيين ملزمون باتفاقيات معالجة البيانات ومطالبون بحماية بياناتك.",
      },
      {
        heading: "ملفات تعريف الارتباط والتتبع",
        body: [
          "يستخدم موقعنا ملفات تعريف الارتباط وتقنيات مشابهة للتحليلات ولتحسين تجربتك. يمكنك التحكم في ملفات تعريف الارتباط من خلال إعدادات المتصفح. قد يؤثر تعطيل ملفات تعريف الارتباط على بعض وظائف الموقع.",
        ],
      },
      {
        heading: "أمان البيانات",
        body: [
          "ننفذ تدابير تقنية وتنظيمية مناسبة لحماية بياناتك الشخصية من الوصول غير المصرح به أو التغيير أو الإفصاح أو التدمير. جميع البيانات المنقولة بين متصفحك وموقعنا مشفرة باستخدام HTTPS/TLS.",
        ],
      },
      {
        heading: "حقوقك",
        body: ["لديك الحق في:"],
        items: [
          "الوصول إلى بياناتك الشخصية التي نحتفظ بها",
          "طلب تصحيح البيانات غير الدقيقة",
          "طلب حذف بياناتك",
          "الاعتراض على معالجة بياناتك أو تقييدها",
          "سحب الموافقة في أي وقت",
        ],
        footer: "لممارسة أي من هذه الحقوق، تواصل معنا على عنوان البريد الإلكتروني أدناه.",
      },
      {
        heading: "التغييرات على هذه السياسة",
        body: [
          'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بتحديث تاريخ "آخر تحديث" في أعلى هذه الصفحة وإخطار العملاء بالتغييرات الجوهرية عبر البريد الإلكتروني.',
        ],
      },
      {
        heading: "اتصل بنا",
        body: ["إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، تواصل معنا:"],
        contact: true,
      },
    ],
    termsLink: "شروط الخدمة",
    rights: "ConstantSEO. جميع الحقوق محفوظة.",
  },
};

const PrivacyPolicy = () => {
  const { isAr } = useLanguage();
  const c = isAr ? content.ar : content.en;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={c.title + " | ConstantSEO"}
        description="Privacy Policy for ConstantSEO by Constant Labs."
        path="/privacy"
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

              {s.subsections?.map((sub, k) => (
                <div key={k} className="mt-4">
                  <h3 className="text-lg font-semibold text-slate-800 mb-2">{sub.subheading}</h3>
                  <ul className="list-disc list-inside text-slate-600 space-y-1.5">
                    {sub.items.map((item, l) => (
                      <li key={l}>{item}</li>
                    ))}
                  </ul>
                </div>
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
            <Link to="/terms" className="text-xs text-[#7143E0] hover:underline mt-2 inline-block">
              {c.termsLink}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
