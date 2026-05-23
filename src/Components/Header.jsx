import { motion } from "framer-motion";
import {
  NotebookPen,
  Navigation,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
import Img from "../assets/Man1.jpg";
import { useTheme } from "../context/ThemeContext";
import MusicPlayer from "./MusicPlayer";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      id="Header"
      className={`relative overflow-hidden min-h-screen pt-28 bg-transparent ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-10 md:pt-16"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div className="order-2 text-center lg:order-1 lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
              Frontend Developer
            </div>

            <motion.h1
              variants={item}
              className="text-4xl font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Mohit Kumar
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-lg text-gray-400 sm:text-xl"
            >
              I design and build polished, responsive React interfaces with a
              clean visual rhythm and thoughtful motion.
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-8 text-gray-500"
            >
              I build modern, interactive, and responsive user interfaces using{" "}
              <span className="inline-flex flex-wrap gap-2 ml-2 align-middle">
                {[
                  { icon: faHtml5, label: "HTML" },
                  { icon: faCss3, label: "CSS" },
                  { icon: faJs, label: "JavaScript" },
                  { icon: faReact, label: "React" },
                ].map((tech) => (
                  <span
                    key={tech.label}
                    className="inline-flex items-center gap-1 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-500"
                  >
                    <FontAwesomeIcon icon={tech.icon} /> {tech.label}
                  </span>
                ))}
              </span>
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3 font-medium text-blue-500 transition hover:bg-blue-500 hover:text-white"
              >
                <NotebookPen size={16} />
                Resume / CV
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-600"
              >
                <Navigation size={16} />
                Get In Touch
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start text-gray-400"
            >
              {[
                { icon: X, link: "https://x.com/Mohitvermacode7" },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/mohit-kumar-300b63311/",
                },
                { icon: Github, link: "https://github.com/Mohitverma-code7" },
                { icon: Mail, link: "mailto:mk0641137@gmail.com" },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="rounded-full border border-white/10 bg-white/5 p-3 hover:text-blue-400"
                >
                  <item.icon />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 grid gap-4 sm:grid-cols-2"
            >
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Focus</p>
                <p className="mt-1 text-xl font-bold">Beautiful UI, built fast</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-sm text-gray-400">Availability</p>
                <p className="mt-1 text-xl font-bold">Open for freelance and roles</p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariant}
            className="order-1 relative mx-auto w-full max-w-md lg:order-2 lg:max-w-none"
          >
            <div className="absolute inset-6 rounded-[2rem] bg-blue-500/20 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/5 p-4 shadow-[0_24px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="absolute left-5 top-5 z-10 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Available now
              </div>
              <div className="absolute bottom-5 right-5 z-10 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                React + UI Design
              </div>
              <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_32%),linear-gradient(180deg,transparent,rgba(0,0,0,0.3))]" />
              <img
                src={Img}
                alt="Mohit Kumar"
                className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center pb-16"
      >
        <MusicPlayer />
      </motion.div>
    </header>
  );
};

export default Header;
