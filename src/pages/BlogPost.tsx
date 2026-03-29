import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SEO } from "@/components/SEO";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { getBlogPostBySlug, getRelatedPosts } from "@/data/blogData";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, Tag, ChevronRight } from "lucide-react";

const BASE_URL = "https://seo.constantlabs.ai";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  const blogPostingSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "ConstantSEO by Constant Labs",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/og-image.png`,
      },
    },
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags.join(", "),
    wordCount: post.sections.reduce(
      (acc, s) => acc + s.content.split(/\s+/).length,
      0
    ),
    inLanguage: "en",
  });

  const breadcrumbSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: BASE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${BASE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${BASE_URL}/blog/${post.slug}`,
      },
    ],
  });

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
      />
      <Helmet>
        <script type="application/ld+json">{blogPostingSchema}</script>
        <script type="application/ld+json">{breadcrumbSchema}</script>
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#2B124C] to-[#1a0a30] text-white">
        <div className="max-w-4xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <ChevronRight className="w-3.5 h-3.5" />
              </li>
              <li className="text-gray-200 truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </li>
            </ol>
          </nav>

          {/* Category badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4">
              {post.category}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight"
          >
            {post.title}
          </motion.h1>

          {/* Meta info */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-wrap items-center gap-4 mt-6 text-sm text-gray-300"
          >
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
            <span className="text-gray-400">By {post.author}</span>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Excerpt / Intro */}
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-12 border-l-4 border-[#7143E0] pl-6">
            {post.excerpt}
          </p>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
              Table of Contents
            </h2>
            <ol className="space-y-2">
              {post.sections.map((section, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="text-sm text-slate-600 hover:text-[#7143E0] transition-colors flex items-start gap-2"
                  >
                    <span className="text-[#7143E0] font-semibold shrink-0">
                      {idx + 1}.
                    </span>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          {/* Sections */}
          {post.sections.map((section, idx) => (
            <section key={idx} id={`section-${idx}`} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-5">
                {section.heading}
              </h2>
              {section.content.split("\n\n").map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-slate-700 leading-relaxed mb-4 text-base md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Tags */}
          <div className="border-t border-slate-200 pt-8 mt-12">
            <div className="flex items-center gap-2 mb-3">
              <Tag className="w-4 h-4 text-slate-400" />
              <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Tags
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-600 text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((related) => {
                const relatedDate = new Date(
                  related.date
                ).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                });
                return (
                  <Link
                    key={related.slug}
                    to={`/blog/${related.slug}`}
                    className="group bg-white rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Color accent bar */}
                    <div className="h-1.5 bg-gradient-to-r from-[#7143E0] to-cyan-400" />
                    <div className="p-6">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-cyan-50 text-cyan-700 text-xs font-semibold mb-3">
                        {related.category}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#7143E0] transition-colors mb-2 line-clamp-2">
                        {related.title}
                      </h3>
                      <p className="text-sm text-slate-500 line-clamp-2 mb-4">
                        {related.excerpt}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-400">
                        <span>{relatedDate}</span>
                        <span>{related.readTime}</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-10">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-[#7143E0] font-semibold hover:underline"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </section>
      )}

      <CTASection />
      <Footer />
    </div>
  );
};

export default BlogPost;
