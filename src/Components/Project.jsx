import { ArrowUpRight, Github, Globe, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/mintly.png";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "Mintlify Clone",
    image: img3,
    desc: "A polished documentation-style experience inspired by Mintlify, built with a strong focus on layout, hierarchy, and smooth interaction.",
    tech: ["JavaScript", "React", "Tailwind"],
    live: "https://mintlify-lyart.vercel.app/",
  },
  {
    title: "Estate Clone",
    image: img2,
    desc: "A real-estate browsing experience with filtering and card-based presentation designed to feel clear and modern.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "https://estate-clone-eight.vercel.app/",
  },
];

function ProjectCard({ item, theme, index }) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({
      rotateX: (-y * 10).toFixed(2),
      rotateY: (x * 12).toFixed(2),
      scale: 1.02,
    });
  };

  const resetTilt = () => {
    setTilt({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className="perspective-[1600px]"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={resetTilt}
        className={`group relative h-full overflow-hidden rounded-[2rem] border backdrop-blur-xl transition-all duration-300 ${
          theme === "dark"
            ? "border-white/10 bg-white/5"
            : "border-gray-200 bg-white"
        }`}
        style={{
          transform: `perspective(1600px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.22),transparent_38%),linear-gradient(135deg,rgba(59,130,246,0.12),transparent_55%)]" />
        <div className="absolute inset-0 border border-white/5 opacity-0 transition duration-500 group-hover:opacity-100" />

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
            className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />
          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            <Sparkles size={14} />
            Featured Work
          </div>
          <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            3D hover
          </div>
        </a>

        <div
          className="relative space-y-5 p-6 sm:p-7"
          style={{ transform: "translateZ(32px)" }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 opacity-85">{item.desc}</p>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500">
              <Layers3 size={20} />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-500"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href={item.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              <Globe size={16} />
              View Live
              <ArrowUpRight size={16} />
            </a>
            {item.code ? (
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
            ) : null}
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
      className={`relative overflow-hidden py-24 px-6 bg-transparent ${
        theme === "dark" ? "text-[#E5E7EB]" : "text-gray-800"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            <Sparkles size={14} />
            Selected work
          </p>
          <h2 className="text-4xl font-extrabold md:text-6xl">
            Projects with a{" "}
            <span className="text-blue-500">3D showcase feel</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
            I kept your existing work and upgraded the presentation so each card
            feels more premium, interactive, and visually memorable.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((item, index) => (
            <ProjectCard
              key={item.title}
              item={item}
              theme={theme}
              index={index}
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-sm font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
