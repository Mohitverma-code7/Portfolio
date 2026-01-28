import React from "react";
import Navbar from "./Navbar";
import { useTheme } from "../context/ThemeContext";
import Img from "../assets/Man1.jpg";
import { motion } from "framer-motion";
import {
  NotebookPen,
  Navigation,
  Github,
  Linkedin,
  Mail,
  X,
} from "lucide-react";
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
      className={`relative overflow-hidden min-h-screen pt-24 ${
        theme === "dark"
          ? "bg-[#0D0D0F] text-white"
          : "bg-[#F4F9F9] text-black"
      }`}
    >

      <Navbar />
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-20"
      >
        <div className="flex flex-col md:flex-row items-center gap-12">

          <motion.div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <motion.h1
              variants={item}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
            >
              Hi, I’m <span className="text-blue-500">Mohit Kumar</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-3 text-lg text-gray-400"
            >
              Frontend Web Developer
            </motion.p>

            <motion.p
              variants={item}
              className="mt-4 max-w-3xl text-base leading-relaxed"
            >
              I build modern, interactive, and responsive user interfaces using{" "}
              <span className="inline-flex flex-wrap gap-2 ml-2">
                {[
                  { icon: faHtml5, label: "HTML" },
                  { icon: faCss3, label: "CSS" },
                  { icon: faJs, label: "JavaScript" },
                  { icon: faReact, label: "React" },
                ].map((tech) => (
                  <span
                    key={tech.label}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 flex items-center gap-1"
                  >
                    <FontAwesomeIcon icon={tech.icon} /> {tech.label}
                  </span>
                ))}
              </span>
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex gap-4 justify-center md:justify-start"
            >
              <Link
                to="/resume"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
              >
                <NotebookPen size={16} />
                Resume / CV
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition shadow-lg"
              >
                <Navigation size={16} />
                Get In Touch
              </Link>
            </motion.div>
         <motion.div
              variants={item}
              className="mt-10 flex gap-6 justify-center md:justify-start text-gray-400"
            >
              {[
                { icon: X, link: "https://x.com/Mohitvermacode7" },
                { icon: Linkedin, link: "https://www.linkedin.com/in/mohit-kumar-300b63311/" },
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
                  className="hover:text-blue-500"
                >
                  <item.icon />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={imageVariant}
            className="order-1 md:order-2 relative shrink-0"
          >
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/30" />
            <img
              src={Img}
              alt="Mohit Kumar"
              className="relative w-40 h-40 md:w-80 md:h-80 rounded-2xl border-4 border-blue-500 object-cover"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center pb-16 relative z-10"
      >
        <MusicPlayer />
      </motion.div>
    </header>
  );
};

export default Header;
