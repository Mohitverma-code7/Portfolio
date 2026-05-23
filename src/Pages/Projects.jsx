import { ArrowUpRight, Github, Globe, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/mintly.png";

const projects = [
  {
    number: "01",
    title: "Mintlify Clone",
    image: img3,
    desc: "A polished documentation-style experience inspired by Mintlify, built with a strong focus on layout, hierarchy, and smooth interaction.",
    tech: ["JavaScript", "React", "Tailwind"],
    live: "https://mintlify-lyart.vercel.app/",
    focus: "Documentation UI",
    vibe: "Editorial and polished",
  },
  {
    number: "02",
    title: "Estate Clone",
    image: img2,
    desc: "A real-estate browsing experience with filtering and card-based presentation designed to feel clear and modern.",
    tech: ["React", "Tailwind", "JavaScript"],
    live: "https://estate-clone-eight.vercel.app/",
    focus: "Property browsing",
    vibe: "Clean and conversion-first",
  },
];

const Projects = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-transparent ${
        theme === "dark" ? "text-[#E5E7EB]" : "text-gray-800"
      }`}
    >
      <Navbar />

      <main className="px-6 pt-32">
        <section className="relative mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4d6d]">
              <Sparkles size={14} />
              Full showcase
            </p>
            <h1 className="text-4xl font-black md:text-6xl">
              My <span className="text-[#ff4d6d]">Projects</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
              A dedicated page for the work I have shipped, presented like a
              mini case study instead of a basic gallery.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#ff2d55] via-[#ff6b8a] to-transparent opacity-85" />
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#ff2d55] to-transparent opacity-75" />

                <a
                  href={item.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent opacity-90" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    Case {item.number}
                  </div>
                  <div className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {item.focus}
                  </div>
                  <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {item.vibe}
                  </div>
                </a>

                <div className="space-y-6 p-7">
                  <div>
                    <div className="mb-3 flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-[#ff2d55]/20 bg-[#ff2d55]/10 text-xs font-bold text-[#ff4d6d]">
                      {item.number}
                    </span>
                      <p className="text-xs uppercase tracking-[0.35em] text-[#ff6b8a]/80">
                        Featured project
                      </p>
                    </div>
                    <h2 className="text-2xl font-bold md:text-3xl">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-7 opacity-85">
                      {item.desc}
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        Focus
                      </p>
                      <p className="mt-2 text-sm font-semibold">{item.focus}</p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/10 p-4 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                        Style
                      </p>
                      <p className="mt-2 text-sm font-semibold">{item.vibe}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {item.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-3 py-1 text-xs font-medium text-[#ff4d6d] shadow-sm"
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
                      className="inline-flex items-center gap-2 rounded-full bg-[#ff2d55] px-5 py-3 text-sm font-medium text-white shadow-[0_14px_35px_rgba(255,45,85,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ff6b8a]"
                    >
                      <Globe size={16} />
                      View Live
                      <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={item.code || item.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition ${
                        theme === "dark"
                          ? "border-white/15 text-white hover:bg-white/10"
                          : "border-white/50 text-gray-800 hover:bg-white/70"
                      }`}
                    >
                      <Github size={16} />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-[#ff2d55] px-6 py-3 text-sm font-medium text-[#ff4d6d] transition hover:bg-[#ff2d55] hover:text-white"
            >
              Want something similar?
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
