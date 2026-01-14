import { Globe, Github } from "lucide-react";
import project from "../assets/Project.png";
import img1 from "../assets/IMG1.png";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/IMG3.png";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Web-Clone",
    image: project,
    desc: "A Web clone",
    tech: ["JavaScript", "React", "Tailwind"],
    github: "https://github.com/Mohitverma-code7/Web-Clone",
  },
  {
    title: "To-Do List",
    image: img1,
    desc: "A task management app with add, edit, delete, and mark complete features.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Mohitverma-code7/js-todo",
  },
  {
    title: "Estate Clone",
    image: img2,
    desc: "A real-estate clone where users can browse and filter property listings.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Mohitverma-code7/Estate-Clone",
  },
  {
    title: "Codeleap",
    image: img3,
    desc: "A coding platform to practice challenges, share solutions, and learn together.",
    tech: ["Next.js", "React", "MongoDB", "Node.js"],
    github: "https://github.com/Mohitverma-code7",
    live: "https://www.codeleap.in/",
  },
];

export default function Project() {
  const { theme } = useTheme();

  return (
    <section
      id="projects"
      className={`py-20 px-6 ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#9BABAB]"
          : "bg-white text-gray-700"
      }`}
    >
      {/* Heading */}
      <motion.h1 
      initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
      className="text-4xl md:text-6xl font-extrabold text-center mb-14">
        My <span className="text-blue-500">Projects</span>
      </motion.h1>

      {/* Grid */}
      <motion.div 
      initial={{opacity: 0, y:100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`group rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              theme === "dark"
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200"
            }`}
          >
            {/* IMAGE — FULL CLICKABLE */}
            <a
              href={item.live || item.github}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
              />

              {/* subtle hover overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
            </a>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-sm leading-relaxed opacity-90">
                {item.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4">
                <span className="flex items-center gap-2 text-xs text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live & Maintained
                </span>

                <a
                  href={item.live || item.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
