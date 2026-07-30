import {
  ArrowUpRight,
  Github,
  Globe,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

import img2 from "../assets/IMG2.png";
import img3 from "../assets/mintly.png";

import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    number: "01",
    title: "Mintlify Clone",
    image: img3,
    desc: "A polished documentation-style experience inspired by Mintlify, built with a strong focus on layout, hierarchy, and smooth interaction.",
    tech: ["JavaScript", "React", "Tailwind"],
    live: "https://mintlify-lyart.vercel.app/",
    code: "https://github.com/yourusername/mintlify-clone",
    focus: "Documentation UI",
    vibe: "Editorial and polished",
  },
  {
    number: "02",
    title: "Estate Clone",
    image: img2,
    desc: "A real-estate browsing experience with filtering and card-baseds presentation designed to feel clear and modern.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "https://estate-clone-eight.vercel.app/",
    code: "https://github.com/yourusername/estate-clone",
    focus: "Property browsing",
    vibe: "Clean and conversion-first",
  },
];

function ProjectCard({ item, theme, index }) {
  // NOTE: kept for legacy/unused implementation.
  // Project page cards below were restyled to match Blog article card structure.

  const [tilt, setTilt] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
  });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: -y * 10,
      rotateY: x * 12,
      scale: 1.02,
    });
  };

  const resetTilt = () => {
    setTilt({
      rotateX: 0,
      rotateY: 0,
      scale: 1,
    });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
      }}
      viewport={{ once: true }}
      style={{ perspective: "1600px" }}
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className="group relative h-full overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300"
        style={{
          transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Glow Effects */}
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_left,rgba(255,45,85,0.24),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_30%)]" />

        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff2d55] via-[#ff6b8a] to-transparent opacity-85" />

        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent opacity-75" />

        {/* Image */}
        <a
          href={item.live}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden"
          style={{ transform: "translateZ(24px)" }}
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            <Sparkles size={14} />
            Case {item.number}
          </div>

          <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            {item.focus}
          </div>

          <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            {item.vibe}
          </div>
        </a>

        {/* Content */}
        <div
          className="relative space-y-6 p-6 sm:p-7"
          style={{ transform: "translateZ(32px)" }}
        >
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#ff2d55]/20 bg-[#ff2d55]/10 text-xs font-bold text-[#ff4d6d]">
                {item.number}
              </span>

              <p className="text-xs uppercase tracking-[0.35em] text-[#ff6b8a]/80">
                Featured project
              </p>
            </div>

            <h3 className="text-2xl font-bold md:text-3xl">
              {item.title}
            </h3>

            <p className="mt-3 text-sm leading-7 opacity-80">
              {item.desc}
            </p>
          </div>

          {/* Info Boxes */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Focus
              </p>

              <p className="mt-2 text-sm font-semibold">
                {item.focus}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                Style
              </p>

              <p className="mt-2 text-sm font-semibold">
                {item.vibe}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech, i) => (
              <span
                key={i}
                className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-3 py-1 text-xs font-medium text-[#ff4d6d]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#ff2d55] px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ff6b8a]"
            >
              <Globe size={16} />
              View Live
              <ArrowUpRight size={16} />
            </a>

            <a
              href={item.code}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition ${
                theme === "dark"
                  ? "border-white/15 text-white hover:bg-white/10"
                  : "border-gray-300 text-gray-800 hover:bg-gray-100"
              }`}
            >
              <Github size={16} />
              Source
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default function Project() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`relative overflow-hidden px-6 py-24 ${
        theme === "dark"
          ? "bg-[#0b0b0f] text-[#E5E7EB]"
          : "bg-[#f8fafc] text-gray-800"
      }`}
    >
      {/* Background Blur */}
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#ff2d55]/25 blur-3xl" />

        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-[#ff6b8a]/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4d6d]">
            <Sparkles size={14} />
            Selected work
          </p>

          <h2 className="text-4xl font-extrabold md:text-6xl">
            Interactive projects {" "}
            <span className="text-[#ff4d6d]">
              with modern UI experiences
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
            Interactive portfolio cards with smooth hover
            animations, layered depth, and premium presentation.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((item, index) => (
            <motion.div
              key={item.number}
              className="ui-surface ui-surface-strong group overflow-hidden rounded-[2rem] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100"
                >
                  <span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
                    <Globe size={16} />
                    View Live
                    <ArrowUpRight size={16} />
                  </span>
                </a>

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  Featured project
                </div>
              </div>

              <div className="p-7 space-y-5">
                <h3 className="text-2xl font-bold leading-snug">{item.title}</h3>
                <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-3 py-1 text-xs text-[#ff4d6d]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={item.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#ff2d55] px-5 py-3 text-sm font-medium text-[#ff4d6d] transition hover:bg-[#ff2d55] hover:text-white"
                  >
                    <Github size={16} />
                    Source
                  </a>

                  <span className="text-xs uppercase tracking-[0.35em] text-[#ff6b8a]/80">
                    {item.focus}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Button */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-[#ff2d55] px-6 py-3 text-sm font-medium text-[#ff4d6d] transition hover:bg-[#ff2d55] hover:text-white"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}