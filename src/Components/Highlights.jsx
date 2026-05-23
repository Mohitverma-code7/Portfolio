import { ArrowUpRight, Code2, Sparkles, Target } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

const skills = [
  "React",
  "JavaScript",
  "Tailwind",
  "HTML",
  "CSS",
  "Firebase",
  "Git",
  "Responsive UI",
  "Framer Motion",
  "Vite",
];

const stats = [
  { label: "Featured projects", value: "2+" },
  { label: "Technical blogs", value: "4" },
  { label: "Core stack", value: "Frontend" },
  { label: "Focus", value: "Polished UI" },
];

const Highlights = () => {
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className={`relative overflow-hidden py-24 px-6 bg-transparent ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="absolute inset-0 opacity-70">
        <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-[#ff2d55]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#ff6b8a]/14 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4d6d]">
            <Sparkles size={14} />
            Skills and highlights
          </p>
          <h2 className="text-4xl font-extrabold md:text-6xl">
            A focused stack for{" "}
            <span className="text-[#ff4d6d]">clean, modern builds</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 md:text-base">
            This section gives recruiters a fast scan of what you build, how you
            think, and the kind of work you want to attract.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="ui-surface ui-surface-strong rounded-[2rem] p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff2d55]/10 text-[#ff4d6d]">
                  <Code2 size={22} />
                </div>
              <div>
                <h3 className="text-2xl font-bold">What I build</h3>
                <p className="text-sm text-gray-500">
                  Interactive frontend experiences with strong visual polish.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="ui-surface-soft rounded-2xl p-5"
                >
                  <div className="text-3xl font-black text-[#ff4d6d]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-sm text-[#ff4d6d]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-6"
          >
            <div
              className="ui-surface ui-surface-strong rounded-[2rem] p-8"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff2d55]/10 text-[#ff4d6d]">
                  <Target size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Best fit for</h3>
                  <p className="text-sm text-gray-500">
                    Landing pages, portfolios, dashboards, and UI refreshes.
                  </p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm opacity-90">
                <li>- Fast, responsive React interfaces</li>
                <li>- Clean component structure and reusable sections</li>
                <li>- Smooth motion without overdoing it</li>
                <li>- Portfolio pieces that look finished, not just functional</li>
              </ul>
            </div>

            <div
              className={`ui-surface rounded-[2rem] p-8 ${
                theme === "dark"
                  ? "bg-gradient-to-br from-[#ff2d55]/10 to-cyan-500/5"
                  : "bg-gradient-to-br from-white/90 to-[#ff2d55]/10"
              }`}
            >
                  <p className="text-sm uppercase tracking-[0.3em] text-[#ff4d6d]">
                    Next step
                  </p>
              <h3 className="mt-3 text-2xl font-bold">
                Turn curiosity into a real conversation.
              </h3>
              <p className="mt-3 text-sm leading-7 opacity-80">
                If someone lands on your portfolio, this is the section that
                should make them think, "this person can build what we need."
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/resume"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff2d55] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#ff6b8a]"
                >
                  View Resume
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[#ff2d55] px-5 py-3 text-sm font-medium text-[#ff4d6d] transition hover:bg-[#ff2d55] hover:text-white"
                >
                  Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
