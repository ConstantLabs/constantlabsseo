import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { SERVICES } from "@/data/projectsData";
import { useLanguage } from "@/i18n/LanguageContext";
import { ArrowRight, Check } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";

function slugify(id: string) {
  return id.toLowerCase().replace(/_/g, "-");
}

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isAr } = useLanguage();

  const service = SERVICES.find((s) => slugify(s.id) === slug);
  const otherServices = SERVICES.filter((s) => slugify(s.id) !== slug).slice(0, 4);

  if (!service) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">
            {isAr ? "الخدمة غير موجودة" : "Service Not Found"}
          </h1>
          <p className="text-slate-600 mb-8">
            {isAr ? "الخدمة التي تبحث عنها غير موجودة." : "The service you're looking for doesn't exist."}
          </p>
          <Link to="/services" className="text-[#7143E0] font-semibold hover:underline">
            {isAr ? "عرض جميع الخدمات" : "View All Services"}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={`${service.title} | ConstantSEO`}
        description={service.description}
        path={`/services/${slug}`}
      />
      <Navbar />

      <PageHero
        eyebrow={isAr ? "الخدمات" : "Services"}
        title={service.title}
        lede={service.oneLiner}
        meta={<Icon className="h-6 w-6 text-evidence-blue" aria-hidden="true" />}
        actions={<Link to="/services" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">{isAr ? "جميع الخدمات" : "All Services"}</Link>}
      />

      {/* Main Content */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Description */}
          <div className="max-w-3xl">
            <p className="mb-8 text-lg leading-relaxed text-ink/70">
              {service.description}
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-12 border border-line bg-paper p-8 md:p-10">
            <h2 className="mb-6 font-heading text-3xl uppercase text-ink">
              {isAr ? "ما يشمله" : "What's Included"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.tags.map((tag) => (
                <div key={tag} className="flex items-center gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center border border-line bg-lime">
                    <Check className="h-3.5 w-3.5 text-ink" />
                  </div>
                  <span className="font-medium text-ink/80">{tag}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Why It Matters */}
          <div className="mb-12">
            <h2 className="mb-4 font-heading text-3xl uppercase text-ink">
              {isAr ? "لماذا هذا مهم" : "Why This Matters"}
            </h2>
            <p className="leading-relaxed text-ink/70">
              {isAr
                ? "في عصر الذكاء الاصطناعي والبحث المتطور، لم يعد كافياً الاعتماد على الأساليب التقليدية فقط. نستخدم أحدث تقنيات الذكاء الاصطناعي لضمان تفوق عملك في نتائج البحث التقليدية ومنصات الذكاء الاصطناعي على حد سواء."
                : "In the age of AI and evolving search, traditional approaches alone aren't enough. We use cutting-edge AI technology to ensure your business dominates both traditional search results and AI platforms like ChatGPT, Gemini, and Perplexity."
              }
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-12">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-4 py-2 text-sm font-medium text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="border-b border-line bg-paper/70 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="mb-8 text-center font-heading text-3xl uppercase text-ink">
            {isAr ? "خدمات أخرى" : "Other Services"}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherServices.map((s) => {
              const SIcon = s.icon;
              return (
                <Link
                  key={s.id}
                  to={`/services/${slugify(s.id)}`}
                  className="group border border-line bg-paper p-5 hover:-translate-y-0.5 hover:bg-lime/20 transition-all"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center border border-line bg-ink">
                    <SIcon className="h-5 w-5 text-lime" />
                  </div>
                  <h3 className="text-sm font-bold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-1 text-xs text-ink/60">{s.oneLiner}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default ServiceDetail;
