import { useParams, Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { caseStudies } from "@/data/projectsData";
import { PageHero } from "@/components/marketing/PageHero";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) {
    return (
      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-slate-600 mb-8">The case study you're looking for doesn't exist.</p>
          <Link to="/case-studies" className="text-[#7143E0] font-semibold hover:underline">
            View All Case Studies
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={`${cs.title} | ConstantSEO`}
        description={cs.description}
        path={`/case-studies/${slug}`}
      />
      <Navbar />

      <PageHero
        eyebrow={cs.industry}
        title={cs.title}
        lede={cs.description}
        meta={<span>{cs.market} · {cs.metric}</span>}
        actions={<Link to="/case-studies" className="border border-ink px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-ink hover:bg-ink hover:text-paper">All Case Studies</Link>}
      />

      {/* Content */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-3xl mx-auto px-4">
            <div className="mb-8 border-s-2 border-evidence-blue ps-5">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-evidence-blue">Client</h2>
              <p className="font-heading text-2xl uppercase text-ink">{cs.client}</p>
          </div>

          <div className="mb-8">
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-evidence-blue">Overview</h2>
              <p className="text-lg leading-relaxed text-ink/70">
              {cs.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="border border-line px-4 py-2 text-sm font-medium text-ink/70"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Other case studies */}
          {caseStudies.filter((c) => c.id !== cs.id).length > 0 && (
            <div className="border-t border-line pt-8">
              <h3 className="mb-4 font-heading text-2xl uppercase text-ink">More Case Studies</h3>
              <div className="space-y-3">
                {caseStudies
                  .filter((c) => c.id !== cs.id)
                  .map((other) => (
                    <Link
                      key={other.id}
                      to={`/case-studies/${other.slug}`}
                      className="block border border-line bg-paper p-4 hover:bg-lime/20 transition-all"
                    >
                      <div className="mb-1 text-sm font-bold text-evidence-blue">{other.metric}</div>
                      <div className="font-semibold text-ink">{other.title}</div>
                    </Link>
                  ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
