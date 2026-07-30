import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Sparkles, BookOpen, Clock, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import FooterNew from "../Components/FooterNew";
import useHashnodePosts from "../hooks/useHashnodePosts";
import fallbackPosts from "../data/blogPosts";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const Blog = () => {
  const { posts: livePosts, loading, error } = useHashnodePosts();

  // Use live data or fall back to static
  const posts = livePosts.length > 0 ? livePosts : fallbackPosts;

  return (
    <div className="relative z-0 bg-[#080808] min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-[#F5F5F5] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="line-decoration mb-6" />
            <span className="section-subheading mb-4 block">
              <span className="inline-flex items-center gap-2">
                <Sparkles size={14} />
                Technical Writing
              </span>
            </span>
            <h1 className="section-heading">
              BLOG &
              <br />
              <span className="text-[var(--color-accent)]">ARTICLES</span>
            </h1>

            <p className="mt-6 text-base lg:text-lg leading-relaxed max-w-2xl" style={{ color: "var(--color-text-secondary)" }}>
              Articles about Git, networking, development, and modern engineering concepts explained in a practical and beginner-friendly way.
            </p>

            {/* Live indicator */}
            {livePosts.length > 0 && (
              <p className="mt-3 text-xs" style={{ color: "var(--color-accent)", opacity: 0.7 }}>
                {livePosts.length} articles fetched live from Hashnode
              </p>
            )}
          </motion.div>

          {/* Loading spinner */}
          {loading && (
            <div className="flex items-center gap-3 py-12" style={{ color: "var(--color-text-secondary)" }}>
              <Loader2 size={18} className="animate-spin" style={{ color: "var(--color-accent)" }} />
              <span className="text-sm">Fetching articles from Hashnode...</span>
            </div>
          )}

          {/* Blog grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-0"
            variants={container}
            initial="hidden"
            animate="visible"
          >
          {posts.map((article, i) => (
            <Link
              key={article.id}
              to={`/blog/${article.slug || article.id}`}
              className="group"
            >
                <motion.div
                  variants={item}
                  className="relative py-8 px-6 lg:py-10 lg:px-10 border-b md:border-r border-[var(--color-border)] hover:bg-[#4F8CFF]/[0.03] transition-colors duration-300 h-full flex flex-col justify-between gap-6"
                >
                  {/* Number + icon row */}
                  <div className="flex items-center justify-between">
                    <span className="font-display text-5xl lg:text-6xl leading-none text-[var(--color-border)] select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-center gap-2">
                      <BookOpen size={14} style={{ color: "var(--color-text-secondary)" }} />
                      <span className="text-[10px] uppercase tracking-widest opacity-50" style={{ color: "var(--color-text-secondary)" }}>
                        Article
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-semibold leading-snug font-display tracking-tight uppercase"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {article.title}
                    </h3>

                    <p className="text-sm leading-relaxed line-clamp-3"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {article.excerpt}
                    </p>
                  </div>

                  {/* Bottom row */}
                  <div className="flex items-center justify-between pt-2 border-t"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1.5 text-[11px]"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        <Clock size={11} />
                        {article.readTime}
                      </div>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex gap-1.5">
                          {article.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-medium uppercase tracking-wider"
                              style={{ color: "var(--color-accent)", opacity: 0.7 }}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <span className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                      style={{ color: "var(--color-accent)" }}
                    >
                      Read
                      <ArrowUpRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  );
};

export default Blog;