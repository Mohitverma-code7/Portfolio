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

const Header = () => {
  const { theme } = useTheme();

  return (
    <header
      id="Header"
      className={`min-h-screen pt-24 ${
        theme === "dark" ? "bg-[#0A0A09] text-white" : "bg-white text-black"
      }`}
    >
      <Navbar />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 pt-20 md:pt-32 pb-20"
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
          
          {/* LEFT SIDE — TEXT CONTENT */}
          <div className="order-2 md:order-1 flex-1 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Hi, I’m <span className="text-blue-500">Mohit Kumar</span>
            </h1>

            <p className="mt-3 text-lg text-gray-400">
              Frontend Web Developer
            </p>

            {/* Description */}
            <p className="mt-2 max-w-3xl text-base leading-relaxed">
              I build modern, interactive, and responsive user interfaces using{" "}
              <span className="inline-flex flex-wrap gap-2 ml-2">
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faHtml5} /> HTML
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faCss3} /> CSS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faJs} /> JavaScript
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-500 flex items-center gap-1">
                  <FontAwesomeIcon icon={faReact} /> React
                </span>
              </span>
              , focusing on clean UI,
              <br /> performance, and accessibility.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/resume"
                className="
                  inline-flex items-center justify-center gap-2
                  px-4 py-2 text-sm
                  sm:px-6 sm:py-3 sm:text-base
                  rounded-full
                  border border-blue-500
                  text-blue-500
                  hover:bg-blue-500 hover:text-white
                  transition font-medium
                  w-fit sm:w-auto
                "
              >
                <NotebookPen size={16} />
                Resume / CV
              </Link>

              <Link
                to="/contact"
                className="
                  flex justify-center items-center gap-2
                  px-4 py-2 text-sm
                  sm:px-6 sm:py-3 sm:text-base
                  rounded-full
                  bg-blue-500 text-white
                  hover:bg-blue-600
                  transition font-medium shadow-lg
                  w-fit sm:w-auto
                "
              >
                <Navigation size={16} />
                Get In Touch
              </Link>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex justify-center md:justify-start gap-6 text-gray-400">
              <a
                href="https://x.com/Mohitvermacode7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <X />
              </a>

              <a
                href="https://www.linkedin.com/in/mohit-kumar-300b63311/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Linkedin />
              </a>

              <a
                href="https://github.com/Mohitverma-code7"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <Github />
              </a>

              <a
                href="mailto:mk0641137@gmail.com"
                className="hover:text-blue-500 transition"
              >
                <Mail />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="order-1 md:order-2 relative shrink-0">
            <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/30"></div>
            <img
              src={Img}
              alt="Mohit Kumar"
              className="relative w-40 h-40 md:w-80 md:h-80 rounded-2xl border-4 border-blue-500 object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Music Player */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center pb-16"
      >
        <MusicPlayer />
      </motion.div>
    </header>
  );
};

export default Header;
