import { Globe, Github } from "lucide-react";
import project from "../assets/Project.png";
import img1 from "../assets/IMG1.png";
import img2 from "../assets/IMG2.png";
import img3 from "../assets/IMG3.png";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "College Website",
    image: project,
    desc: "A college website clone providing information about courses, faculty, admissions, and campus life.",
    tech: ["JavaScript", "React", "Tailwind"],
    github: "https://github.com/Mohitverma-code7",
  },
  {
    title: "To-Do List",
    image: img1,
    desc: "A task management app with add, edit, delete, and mark complete features.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Mohitverma-code7",
  },
  {
    title: "Estate Clone",
    image: img2,
    desc: "A real-estate clone where users can browse and filter property listings.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/Mohitverma-code7",
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
      className={`py-20 px-6 ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#9BABAB]"
          : "bg-white text-gray-700"
      }`}
      id="projects"
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-14">
        My <span className="text-blue-500">Projects</span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {projects.map((item, index) => (
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
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                {item.live && (
                  <a
                    href={item.live}
                    target="_blank"
                    className="p-2 rounded-full bg-white text-black hover:scale-110 transition"
                  >
                    <Globe />
                  </a>
                )}
                <a
                  href={item.github}
                  target="_blank"
                  className="p-2 rounded-full bg-white text-black hover:scale-110 transition"
                >
                  <Github />
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-bold">{item.title}</h3>

              <p className="text-sm leading-relaxed opacity-90">{item.desc}</p>

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

              {/* Status */}
              <div className="flex items-center justify-between pt-4">
                <span className="flex items-center gap-2 text-xs text-green-500">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live & Maintained
                </span>

                <span className="text-sm font-medium text-blue-500 group-hover:underline">
                  View Project →
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
