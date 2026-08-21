import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/marketing/PageHero";
import { useLanguage } from "@/i18n/LanguageContext";

const Blog = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Blog - ConstantSEO"
        description="SEO insights, AI search trends, and digital marketing guides for the GCC market. Expert advice on SEO in Dubai, Arabic SEO, GEO, and local search optimization."
        path="/blog"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <Navbar />

      <PageHero
        eyebrow={t("nav.blog")}
        title={t("inner.blog.title")}
        lede={t("inner.blog.lede")}
      />

      {/* Blog Grid */}
      <section className="border-b border-line bg-paper py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured Post (first article) */}
          {blogPosts.length > 0 && (
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-16"
            >
              <Link
                to={`/blog/${blogPosts[0].slug}`}
                className="group block overflow-hidden border border-line bg-paper p-1 transition-colors hover:bg-lime/20"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured image */}
                  <div className="relative h-64 min-h-[280px] overflow-hidden border-b border-line bg-ink md:h-full md:border-b-0 md:border-e">
                    {blogPosts[0].heroImage ? (
                      <img src={blogPosts[0].heroImage} alt={blogPosts[0].heroImageAlt || blogPosts[0].title} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-center px-8">
                        <span className="inline-block border border-paper/30 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-lime">
                          {blogPosts[0].category}
                        </span>
                      </div>
                    )}
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="mb-4 inline-block w-fit border border-line px-2.5 py-0.5 text-xs font-semibold text-evidence-blue">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors mb-3">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={blogPosts[0].date}>
                          {new Date(blogPosts[0].date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </time>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-[#7143E0] font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Remaining Posts Grid */}
          {blogPosts.length > 1 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, idx) => {
                const formattedDate = new Date(post.date).toLocaleDateString(
                  "en-US",
                  { year: "numeric", month: "short", day: "numeric" }
                );
                return (
                  <motion.div
                    key={post.slug}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  >
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block h-full overflow-hidden border border-line bg-paper p-1 transition-colors hover:-translate-y-1 hover:bg-lime/20"
                    >
                      {/* Post image */}
                      <div className="relative h-48 overflow-hidden border border-line bg-ink">
                        {post.heroImage ? (
                          <img src={post.heroImage} alt={post.heroImageAlt || post.title} loading="lazy" className="w-full h-full object-cover" />
                        ) : (
                          <p className="absolute inset-0 flex items-center justify-center text-white/50 text-sm font-medium">
                            {post.category}
                          </p>
                        )}
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-lime" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="mb-3 inline-block border border-line px-2.5 py-0.5 text-xs font-semibold text-evidence-blue">
                          {post.category}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 text-xs text-slate-400">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5" />
                              <time dateTime={post.date}>{formattedDate}</time>
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-3.5 h-3.5" />
                              {post.readTime}
                            </span>
                          </div>
                          <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#7143E0] transition-colors" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Blog;
