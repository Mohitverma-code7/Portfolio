import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Clock, Tag, Loader2 } from "lucide-react";
import Navbar from "../Components/Navbar";
import FooterNew from "../Components/FooterNew";
import fallbackPosts from "../data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);

      // Check fallback first for instant load
      const fallbackMatch = fallbackPosts.find(
        (p) => p.slug === slug || p.id === slug
      );

      try {
        const res = await fetch("https://gql.hashnode.com", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: `
              query Publication($host: String!, $slug: String!) {
                publication(host: $host) {
                  post(slug: $slug) {
                    title
                    subtitle
                    brief
                    slug
                    url
                    publishedAt
                    readTimeInMinutes
                    content {
                      html
                    }
                    coverImage {
                      url
                    }
                    tags {
                      name
                    }
                  }
                }
              }
            `,
            variables: { host: "mohitcodes-write", slug },
          }),
        });

        const json = await res.json();
        const data = json?.data?.publication?.post;

        if (data) {
          // Live data from Hashnode
          setPost({
            title: data.title,
            subtitle: data.subtitle,
            brief: data.brief,
            url: data.url,
            date: new Date(data.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            readTime: `${data.readTimeInMinutes} min read`,
            content: data.content?.html || "",
            coverImage: data.coverImage?.url || null,
            tags: (data.tags || []).map((t) => t.name),
          });
        } else if (fallbackMatch) {
          // Fallback static data
          setPost(fallbackMatch);
        }
      } catch (err) {
        console.error("Failed to fetch post:", err);
        // On error, use fallback
        if (fallbackMatch) {
          setPost(fallbackMatch);
        }
      }

      setLoading(false);
    };

    if (slug) fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="relative z-0 bg-[#080808] min-h-screen">
        <div className="noise-overlay" />
        <Navbar />
        <div className="flex items-center justify-center pt-40 pb-20">
          <Loader2 size={24} className="animate-spin" style={{ color: "var(--color-accent)" }} />
        </div>
        <FooterNew />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="relative z-0 bg-[#080808] min-h-screen">
        <div className="noise-overlay" />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-12 text-center">
            <h1 className="section-heading mb-4">Post Not Found</h1>
            <Link to="/blog" className="text-sm" style={{ color: "var(--color-accent)" }}>
              ← Back to Blog
            </Link>
          </div>
        </section>
        <FooterNew />
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-[#080808] min-h-screen">
      <div className="noise-overlay" />
      <Navbar />

      <article className="pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm transition-colors group"
              style={{ color: "var(--color-text-secondary)" }}
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="line-decoration mb-6" />

            <h1 className="font-display text-4xl lg:text-5xl uppercase tracking-tight leading-[1.05] mb-6"
              style={{ color: "var(--color-text-primary)" }}
            >
              {post.title}
            </h1>

            {post.subtitle && (
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                {post.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-4 text-sm" style={{ color: "var(--color-text-secondary)" }}>
              <span className="flex items-center gap-1.5">
                <Clock size={14} />
                {post.readTime}
              </span>
              <span className="opacity-50">•</span>
              <span>{post.date}</span>
            </div>

            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full"
                    style={{
                      backgroundColor: "rgba(79,140,255,0.08)",
                      color: "var(--color-accent)",
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>

          {/* Cover image */}
          {post.coverImage && (
            <motion.div
              className="mb-12 rounded-2xl overflow-hidden border"
              style={{ borderColor: "var(--color-border)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img src={post.coverImage} alt={post.title} className="w-full h-auto" />
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div
              className="blog-content prose-custom text-base lg:text-lg leading-relaxed space-y-6"
              style={{ color: "var(--color-text-secondary)" }}
              dangerouslySetInnerHTML={{ __html: post.content || post.brief || "" }}
            />
          </motion.div>

          {/* Read on Hashnode */}
          {post.url && post.url.includes("hashnode") && (
            <motion.div
              className="mt-16 pt-8 border-t flex justify-center"
              style={{ borderColor: "var(--color-border)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-all hover:gap-3"
                style={{
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-primary)",
                  backgroundColor: "var(--glass-bg)",
                }}
              >
                Read original on Hashnode
                <ArrowUpRight size={14} />
              </a>
            </motion.div>
          )}
        </div>
      </article>

      <FooterNew />
    </div>
  );
};

export default BlogPost;