import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { blogPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title="Blog - ConstantSEO"
        description="SEO insights, AI search trends, and digital marketing guides for the GCC market. Expert advice on SEO in Dubai, Arabic SEO, GEO, and local search optimization."
        path="/blog"
        breadcrumbs={[{ name: "Blog", path: "/blog" }]}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4"
          >
            Blog
          </motion.p>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold"
            style={{ color: "#ffffff" }}
          >
            Insights & Updates
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            AI-powered SEO insights, GCC market trends, and strategies that
            work. Practical guides for businesses in the UAE, Saudi Arabia, and
            Oman.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
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
                className="group block bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Featured image */}
                  <div className="relative h-64 md:h-full min-h-[280px] bg-gradient-to-br from-[#2B124C] via-[#3a1a65] to-[#1a0a30] overflow-hidden">
                    {blogPosts[0].heroImage ? (
                      <img src={blogPosts[0].heroImage} alt={blogPosts[0].heroImageAlt || blogPosts[0].title} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex items-center justify-center h-full text-center px-8">
                        <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider">
                          {blogPosts[0].category}
                        </span>
                      </div>
                    )}
                    {/* Decorative grid */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: `linear-gradient(rgba(113,67,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.5) 1px, transparent 1px)`,
                        backgroundSize: "40px 40px",
                      }}
                    />
                  </div>
                  {/* Content */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <span className="inline-block w-fit px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-4">
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
                      className="group block bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
                    >
                      {/* Post image */}
                      <div className="relative h-48 bg-gradient-to-br from-[#2B124C] via-[#3a1a65] to-[#1a0a30] overflow-hidden">
                        {post.heroImage ? (
                          <img src={post.heroImage} alt={post.heroImageAlt || post.title} loading="lazy" className="w-full h-full object-cover" />
                        ) : (
                          <p className="absolute inset-0 flex items-center justify-center text-white/50 text-sm font-medium">
                            {post.category}
                          </p>
                        )}
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage: `linear-gradient(rgba(113,67,224,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(113,67,224,0.5) 1px, transparent 1px)`,
                            backgroundSize: "30px 30px",
                          }}
                        />
                        {/* Gradient accent bar */}
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7143E0] to-cyan-400" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-3">
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
