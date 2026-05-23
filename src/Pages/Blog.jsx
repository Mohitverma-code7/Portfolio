import React from "react";
import git1 from "../assets/.git.png";
import git2 from "../assets/GIT1.png";
import git3 from "../assets/GIT2.jpeg";
import img from "../assets/IMG4.png";

import {
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const blogs = [
  {
    title:
      "Inside Git: How It Works and the Role of the .git Folder",
    image: git2,
    desc:
      "A deep dive into Git internals and how the .git folder manages version control behind the scenes.",
    tags: [
      "Git",
      "Version Control",
      ".git",
      "Branches",
      "Collaboration",
    ],
    url:
      "https://mohitcodes-write.hashnode.dev/inside-git-how-it-works-and-the-role-of-the-git-folder",
  },

  {
    title:
      "Git for Beginners: Basics and Essential Commands Explained",
    image: git1,
    desc:
      "A beginner-friendly guide to Git commands like add, commit, push, and pull.",
    tags: [
      "Git",
      "Commands",
      "add",
      "commit",
      "push",
      "pull",
    ],
    url:
      "https://mohitcodes-write.hashnode.dev/git-for-beginners-basics-and-essential-commands",
  },

  {
    title:
      "The Pendrive Problem: Why Version Control Exists",
    image: git3,
    desc:
      "Learn why version control is crucial to avoid chaos when sharing code manually with pendrives.",
    tags: [
      "Git",
      "Collaboration",
      "GitHub",
      "Version Control",
    ],
    url:
      "https://mohitcodes-write.hashnode.dev/why-version-control-exists-the-pendrive-problem",
  },

  {
    title: "How DNS Resolution Works",
    image: img,
    desc:
      "Understand how DNS resolution works behind the scenes and how browsers connect domain names to servers across the internet.",
    tags: [
      "computer-networking",
      "dns",
      "chaicode",
      "networking",
    ],
    url:
      "https://mohitcodes-dns.hashnode.dev/how-dns-resolution-works?t=1768844354598",
  },
];

const Article = () => {
  const { theme } = useTheme();

  return (
    <section
      className={`relative overflow-hidden px-6 py-40 ${
        theme === "dark"
          ? "bg-[#0b0b0f] text-[#E5E7EB]"
          : "bg-[#f8fafc] text-gray-800"
      }`}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left Glow */}
        <div className="absolute -left-32 top-0 h-[28rem] w-[28rem] rounded-full bg-[#ff2d55]/20 blur-3xl" />

        {/* Right Glow */}
        <div className="absolute right-0 top-1/3 h-[32rem] w-[32rem] rounded-full bg-[#ff6b8a]/10 blur-3xl" />

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-purple-500/10 blur-3xl" />

        {/* Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,45,85,0.12),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]" />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4d6d]">
            <Sparkles size={14} />
            Technical Writing
          </p>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            My{" "}
            <span
              className="text-[#ff4d6d]"
              id="blogs"
            >
              Blogs
            </span>
          </h1>

          <p
            className={`mx-auto mt-6 max-w-3xl text-base leading-8 ${
              theme === "dark"
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >
            Articles about Git, networking, development,
            and modern engineering concepts explained in a
            practical and beginner-friendly way.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-6xl mx-auto"
        >
          {blogs.map((blog, index) => (
            <motion.article
              key={index}
              whileHover={{
                y: -10,
                rotateX: 4,
                rotateY:
                  index % 2 === 0 ? 4 : -4,
              }}
              transition={{ duration: 0.35 }}
              style={{
                transformStyle: "preserve-3d",
              }}
              className={`group relative overflow-hidden rounded-[2rem] border ${
                theme === "dark"
                  ? "border-white/10 bg-white/5 backdrop-blur-xl"
                  : "border-gray-200 bg-white"
              }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,45,85,0.24),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_30%)]" />

              {/* Border Effects */}
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent opacity-80" />

              <div className="absolute left-0 top-0 h-full w-[2px] bg-gradient-to-b from-[#ff2d55] via-[#ff6b8a] to-transparent opacity-80" />

              {/* Image */}
              <div
                className="relative overflow-hidden"
                style={{
                  transform: "translateZ(40px)",
                }}
              >
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Button */}
                <a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100"
                >
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
                    <ExternalLink size={16} />
                    Read Blog
                  </span>
                </a>

                {/* Badge */}
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  Featured Article
                </div>
              </div>

              {/* Content */}
              <div
                className="relative space-y-5 p-7"
                style={{
                  transform: "translateZ(60px)",
                }}
              >
                {/* Heading */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[#ff4d6d]">
                    Technical Blog
                  </p>

                  <h3 className="text-2xl font-bold leading-snug md:text-3xl">
                    {blog.title}
                  </h3>

                  <p
                    className={`mt-4 text-sm leading-7 ${
                      theme === "dark"
                        ? "text-gray-400"
                        : "text-gray-600"
                    }`}
                  >
                    {blog.desc}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-3 py-1 text-xs font-medium text-[#ff4d6d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom */}
                <div className="flex items-center justify-between pt-4">
                  <p
                    className={`text-sm ${
                      theme === "dark"
                        ? "text-gray-500"
                        : "text-gray-500"
                    }`}
                  >
                    Engineering • Development
                  </p>

                  <a
                    href={blog.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#ff4d6d] transition-all duration-300 hover:gap-3"
                  >
                    Explore
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default Article;