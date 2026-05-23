import { ArrowUpRight, Github, Globe, Layers3, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/mintly.png";

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
            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              <Sparkles size={14} />
              Full showcase
            </p>
            <h1 className="text-4xl font-black md:text-6xl">
              My <span className="text-blue-500">Projects</span>
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-gray-500 md:text-base">
              A dedicated page for the work I have shipped, with direct access to
              the live versions and a presentation that matches the rest of the
              portfolio.
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
                className={`group relative overflow-hidden rounded-[2rem] border backdrop-blur-xl ${
                  theme === "dark"
                    ? "border-white/10 bg-white/5"
                    : "border-white/60 bg-white/80"
                }`}
              >
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-85" />
                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    <Sparkles size={14} />
                    Featured Work
                  </div>
                </a>

                <div className="space-y-5 p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="mt-2 text-sm leading-7 opacity-85">
                        {item.desc}
                      </p>
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
                    <a
                      href={item.code || item.live}
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
              </motion.article>
            ))}
          </div>

          <div className="mt-14 flex justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 text-sm font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white"
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
