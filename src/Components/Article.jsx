import React from "react";
import git1 from "../assets/.git.png";
import git2 from "../assets/GIT1.png";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
const blogs = [
  {
    title: "Inside Git: How It Works and the Role of the .git Folder",
    image: git2,
    desc: "A deep dive into Git internals and how the .git folder manages version control behind the scenes.",
    tags: ["Git", "Version Control", ".git", "Branches", "Collaboration"],
    url: "https://mohitcodes-write.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder",
  },
  {
    title: "Git for Beginners: Basics and Essential Commands Explained",
    image: git1,
    desc: "A beginner-friendly guide to Git commands like add, commit, push, and pull.",
    tags: ["Git", "Commands", "add", "commit", "push", "pull"],
    url: "https://mohitcodes-write.hashnode.dev/git-for-beginners-basics-and-essential-commands",
  },
];

const Article = () => {
  const { theme } = useTheme();

  return (
    <section
      id="blog"
      className={`py-20 px-6 bg-transparent ${
        theme === "dark" ? "text-[#9BABAB]" : "text-gray-700"
      }`}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-extrabold text-center mb-14"
      >
        My <span className="text-[#ff4d6d]">Blogs</span>
      </motion.h1>

      {/* Grid */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto"
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="ui-surface ui-surface-strong group overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center gap-2 bg-gradient-to-t from-[#ff2d55]/70 via-black/35 to-black/10 font-medium text-white opacity-0 transition group-hover:opacity-100"
              >
                <ExternalLink />
                Read Blog
              </a>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold leading-snug">{blog.title}</h3>

              <p className="text-sm leading-relaxed opacity-90">{blog.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-3 py-1 text-xs text-[#ff4d6d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Show all blogs */}
      <div className="mt-14 flex justify-center">
        <Link
          to="/log"
          className="rounded-full border border-[#ff2d55] px-6 py-3 font-medium text-[#ff4d6d] transition hover:bg-[#ff2d55] hover:text-white"
        >
          Show all blogs →
        </Link>
      </div>
    </section>
  );
};

export default Article;
