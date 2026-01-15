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
      className={`py-20 px-6 ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#9BABAB]"
          : "bg-white text-gray-700"
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
        My <span className="text-blue-500">Blogs</span>
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
            className={`group rounded-3xl overflow-hidden border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
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
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2 text-white font-medium"
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
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500"
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
      <div className="flex justify-center mt-14">
        <Link
          to="/log"
          className="px-6 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-medium"
        >
          Show all blogs →
        </Link>
      </div>
    </section>
  );
};

export default Article;
