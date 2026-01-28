import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";
import React from "react";
import { motion } from "framer-motion";

const Icons = () => {
  const { theme } = useTheme();

  const iconStyle =
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl";

  const iconBox =
    "p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-md \
     hover:shadow-[0_0_40px_rgba(59,130,246,0.55)]\
     hover:-translate-y-2 transition-all duration-300";

  return (
    <div
      className={`px-6 py-20 ${
        theme === "dark"
          ? "bg-[#0D0D0F] text-[#9BABAB]"
          : "bg-[#F4F9F9] text-gray-700"
      }`}
    >
      <motion.div 
       initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      className="max-w-6xl mx-auto">
        <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-20">
          Tech<span className="text-blue-500"> Skills</span>
        </h3>

        {/* MOBILE / TABLET */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-10 place-items-center lg:hidden bg-white ">
          <div className={iconBox}><FaReact className={`${iconStyle} text-cyan-400`} /></div>
          <div className={iconBox}><FaJs className={`${iconStyle} text-yellow-400`} /></div>
          <div className={iconBox}><SiTypescript className={`${iconStyle} text-blue-400`} /></div>
          <div className={iconBox}><FaNodeJs className={`${iconStyle} text-green-400`} /></div>
          <div className={iconBox}><FaGithub className={`${iconStyle} text-red-400`} /></div>
          <div className={iconBox}><FaBootstrap className={`${iconStyle} text-purple-500`} /></div>
          <div className={iconBox}><FaJava className={`${iconStyle} text-red-500`} /></div>
          <div className={iconBox}><FaPython className={`${iconStyle} text-yellow-400`} /></div>
          <div className={iconBox}><SiTailwindcss className={`${iconStyle} text-sky-400`} /></div>
          <div className={iconBox}><FaHtml5 className={`${iconStyle} text-orange-500`} /></div>
          <div className={iconBox}><FaCss3Alt className={`${iconStyle} text-blue-500`} /></div>
          <div className={iconBox}><FaGitAlt className={`${iconStyle} text-red-500`} /></div>
        </div>

        {/* DESKTOP 5–4–3 */}
        <div className="hidden lg:block">
          <div className="flex justify-center gap-16 mb-16 cursor-pointer ">
            <div className={iconBox}><FaReact className={`${iconStyle} text-cyan-400`} /></div>
            <div className={iconBox}><FaJs className={`${iconStyle} text-yellow-400`} /></div>
            <div className={iconBox}><SiTypescript className={`${iconStyle} text-blue-400`} /></div>
            <div className={iconBox}><FaNodeJs className={`${iconStyle} text-green-400`} /></div>
            <div className={iconBox}><FaGithub className={`${iconStyle} text-red-400`} /></div>
          </div>

          <div className="flex justify-center gap-16 mb-16">
            <div className={iconBox}><FaBootstrap className={`${iconStyle} text-purple-500`} /></div>
            <div className={iconBox}><FaJava className={`${iconStyle} text-red-500`} /></div>
            <div className={iconBox}><FaPython className={`${iconStyle} text-yellow-400`} /></div>
            <div className={iconBox}><SiTailwindcss className={`${iconStyle} text-sky-400`} /></div>
          </div>

          <div className="flex justify-center gap-16">
            <div className={iconBox}><FaHtml5 className={`${iconStyle} text-orange-500`} /></div>
            <div className={iconBox}><FaCss3Alt className={`${iconStyle} text-blue-500`} /></div>
            <div className={iconBox}><FaGitAlt className={`${iconStyle} text-red-500`} /></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Icons;
