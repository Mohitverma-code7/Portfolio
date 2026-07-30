import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, BookOpen, Clock } from "lucide-react";

const articles = [
  {
    id: 1,
    title: "Inside Git: How It Works and the Role of the .git Folder",
    excerpt:
      "A deep dive into Git internals and how the .git folder manages version control behind the scenes.",
    date: "Jan 15, 2026",
    readTime: "10 min read",
    url: "https://mohitcodes-write.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder",
    tags: ["Git", "Version Control", "Branches", "Collaboration"],
  },
  {
    id: 2,
    title: "Git for Beginners: Basics and Essential Commands Explained",
    excerpt:
      "A beginner-friendly guide to Git commands like add, commit, push, and pull.",
    date: "Feb 2026",
    readTime: "8 min read",
    url: "https://mohitcodes-write.hashnode.dev/git-for-beginners-basics-and-essential-commands",
    tags: ["Git", "Commands", "Commit", "Push"],
  },
  {
    id: 3,
    title: "The Pendrive Problem: Why Version Control Exists",
    excerpt:
      "Learn why version control is crucial to avoid chaos when sharing code manually with pendrives.",
    date: "Feb 2026",
    readTime: "7 min read",
    url: "https://mohitcodes-write.hashnode.dev/why-version-control-exists-the-pendrive-problem",
    tags: ["GitHub", "Collaboration", "VC"],
  },
  {
    id: 4,
    title: "How DNS Resolution Works",
    excerpt:
      "Understand how DNS resolution works behind the scenes and how browsers connect domain names to servers across the internet.",
    date: "Mar 2026",
    readTime: "9 min read",
    url: "https://mohitcodes-dns.hashnode.dev/how-dns-resolution-works?t=1768844354598",
    tags: ["DNS", "Networking", "Browser"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

const BlogPreview = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Writing</span>
          <h2 className="section-heading">
            BLOG &
            <br />
            ARTICLES
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-0"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {articles.slice(0, 4).map((article, i) => (
            <Link
              key={article.id}
              to="/blog"
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
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-medium transition-all group-hover:gap-2"
                    style={{ color: "var(--color-accent)" }}
                  >
                    View All
                    <ArrowUpRight size={12} />
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-24">
        <div className="h-px" style={{ backgroundColor: "var(--color-border)" }} />
      </div>
    </section>
  );
};

export default BlogPreview;


