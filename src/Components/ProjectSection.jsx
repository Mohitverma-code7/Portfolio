import { useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Smartphone, Monitor, Laptop, Lock, Wifi, X } from "lucide-react";

const projects = [
  {
    id: "portl",
    title: "Portl",
    category: "React Native App",
    description:
      "A cross-platform portfolio builder with Expo & Firebase. Create stunning portfolios in minutes with real-time previews and cloud sync.",
    tech: ["React Native", "Expo", "Firebase", "TypeScript"],
    mockup: "phone",
    features: [
      "Custom templates & themes",
      "Firebase real-time sync",
      "Cross-platform (iOS & Android)",
      "Offline-first architecture",
    ],
    github: "https://github.com/Mohitverma-code7/Portl",
    live: "https://github.com/Mohitverma-code7/Portl/releases/tag/v1.0.0",
  },
  {
    id: "notify",
    title: "Notify",
    category: "Android App",
    description:
      "Modern notification management app with intelligent grouping, scheduled delivery, and rich media support. Built with React Native & Expo.",
    tech: ["React Native", "Expo", "Push Notifications", "Node.js"],
    mockup: "iphone",
    features: [
      "Smart notification grouping",
      "Scheduled delivery",
      "Rich media attachments",
      "Cross-device sync",
    ],
    github: "#",
    live: "https://play.google.com/store/apps/details?id=com.mohitcodes07.notify",
    githubDisabled: "Repository is private",
  },
  {
    id: "ai-chatbot",
    title: "Sankya",
    category: "Full Stack App",
    description:
      "Intelligent chatbot powered by GPT with custom knowledge base, multi-turn conversations, and a polished chat UI built with Next.js & FastAPI.",
    tech: ["Next.js", "FastAPI", "Python", "PostgreSQL", "OpenAI"],
    mockup: "laptop",
    features: [
      "GPT-powered conversations",
      "Custom knowledge base integration",
      "Multi-turn context awareness",
      "Polished streaming UI",
    ],
    github: "https://github.com/Mohitverma-code7/Sankya",
    live: "#",
    liveDisabled: "Yet to be deployed — local only",
  },
  {
    id: "weather-dashboard",
    title: "SkyCast",
    category: "Web Application",
    description:
      "Real-time weather dashboard with interactive maps, 7-day forecasts, and location-based alerts. Built with Next.js & OpenWeatherMap API.",
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Chart.js", "REST APIs"],
    mockup: "browser",
    features: [
      "Interactive weather maps",
      "7-day detailed forecasts",
      "Location-based alerts",
      "Beautiful data visualizations",
    ],
    github: "https://github.com/Mohitverma-code7/SkyCast",
    live: "https://skycast.mohitxcodes.in/",
  },
];

const mockupIcons = {
  phone: Smartphone,
  iphone: Smartphone,
  laptop: Laptop,
  browser: Monitor,
};

// ---- Toast Popup Component ----
const Toast = ({ message, icon: Icon, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 10, scale: 0.95 }}
    transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[200] flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#111111]/95 backdrop-blur-2xl px-6 py-3.5 shadow-2xl"
  >
    <div className="w-8 h-8 rounded-full bg-[#4F8CFF]/10 flex items-center justify-center flex-shrink-0">
      <Icon size={16} className="text-[#4F8CFF]" />
    </div>
    <p className="text-sm text-[#F5F5F5] pr-2">{message}</p>
    <button
      onClick={onClose}
      className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-white/[0.1] transition-colors"
    >
      <X size={12} className="text-[#9B9B9B]" />
    </button>
  </motion.div>
);

// ---- ProjectCard ----
const ProjectCard = ({ project, index, onDisabledClick }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 0.3, 1], [60, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.95, 1, 1]);

  const isEven = index % 2 === 0;
  const MockupIcon = mockupIcons[project.mockup] || Monitor;

  const hasGithub = project.github && project.github !== "#";
  const hasLive = project.live && project.live !== "#";

  // Determine which icon to show for disabled buttons
  const disabledIcon = project.githubDisabled ? Lock : Wifi;

  return (
    <motion.div ref={cardRef} style={{ opacity, y, scale }} className="py-16 lg:py-24">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center`}
      >
        {/* Device Mockup Side */}
        <div className={isEven ? "lg:order-1" : "lg:order-2"}>
          <motion.div
            className="relative group cursor-default"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-full scale-90" />

            <div className="relative bg-[#111111] border border-white/[0.06] rounded-3xl overflow-hidden">
              <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.04]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4 h-5 rounded-full bg-white/[0.03]" />
                <MockupIcon size={18} className="text-[#9B9B9B]" />
              </div>

              <div className="aspect-[16/10] lg:aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#4F8CFF]/10">
                    <MockupIcon size={32} className="text-[#4F8CFF]" />
                  </div>
                  <p className="text-sm text-[#9B9B9B] font-medium uppercase tracking-widest">
                    {project.category}
                  </p>
                  <h3 className="font-display text-4xl lg:text-5xl uppercase tracking-tight text-[#F5F5F5]">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="absolute inset-0 bg-[#4F8CFF]/0 group-hover:bg-[#4F8CFF]/3 transition-all duration-500" />
            </div>

            <div className="absolute -top-6 -right-4 sm:-right-8 lg:-right-12 font-display text-[6rem] lg:text-[8rem] leading-none text-white/[0.02] select-none pointer-events-none">
              {String(index + 1).padStart(2, "0")}
            </div>
          </motion.div>
        </div>

        {/* Content Side */}
        <div className={isEven ? "lg:order-2" : "lg:order-1"}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-subheading mb-3 block">{project.category}</span>

            <h3 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] uppercase tracking-tighter text-[#F5F5F5] mb-4">
              {project.title}
            </h3>

            <p className="text-base lg:text-lg leading-relaxed text-[#9B9B9B] mb-6 max-w-md">
              {project.description}
            </p>

            <div className="space-y-2 mb-8">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-[#9B9B9B]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]/60 flex-shrink-0" />
                  {feature}
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t) => (
                <span key={t} className="tech-pill">{t}</span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="flex gap-3">
              {/* GitHub button — active or disabled */}
              {hasGithub ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn group inline-flex items-center gap-2 rounded-full border border-white/[0.1] bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#4F8CFF]/40"
                >
                  <Github size={16} />
                  GitHub
                </a>
              ) : project.githubDisabled ? (
                <button
                  onClick={() => onDisabledClick(project.githubDisabled, Lock)}
                  className="magnetic-btn group inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.01] px-5 py-2.5 text-sm font-medium text-[#9B9B9B]/60 transition-all hover:border-amber-500/30 hover:text-amber-300/80 cursor-pointer"
                  title={project.githubDisabled}
                >
                  <Lock size={14} />
                  GitHub
                </button>
              ) : null}

              {/* Live Demo button — active or disabled */}
              {hasLive ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-5 py-2.5 text-sm font-semibold text-[#080808] transition-all hover:bg-[#4F8CFF] hover:text-white"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              ) : project.liveDisabled ? (
                <button
                  onClick={() => onDisabledClick(project.liveDisabled, Wifi)}
                  className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-[#9B9B9B]/60 border border-white/[0.05] transition-all hover:border-amber-500/30 hover:text-amber-300/80 cursor-pointer"
                  title={project.liveDisabled}
                >
                  <Wifi size={14} />
                  Live Demo
                </button>
              ) : null}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// ---- ProjectSection (main export) ----
const ProjectSection = () => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, icon) => {
    setToast({ message, icon, key: Date.now() });
    // Auto-dismiss after 4 seconds
    setTimeout(() => setToast(null), 4000);
  }, []);

  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Selected Work</span>
          <h2 className="section-heading">
            FEATURED
            <br />
            PROJECTS
          </h2>
        </motion.div>

        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onDisabledClick={showToast}
          />
        ))}
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="h-px bg-white/[0.04]" />
      </div>

      {/* Toast Popup */}
      <AnimatePresence>
        {toast && (
          <Toast
            key={toast.key}
            message={toast.message}
            icon={toast.icon}
            onClose={() => setToast(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectSection;