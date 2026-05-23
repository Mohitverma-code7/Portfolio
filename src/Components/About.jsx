import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import Img from "../assets/Man1.jpg";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="About"
      className={`relative w-full flex flex-col items-center py-24 bg-transparent ${
        theme === "dark" ? "text-[#9BABAB]" : "text-gray-700"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-blue-500"
      >
        About me
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-6 px-6 text-center text-4xl font-black tracking-tight md:text-6xl"
      >
        Building interfaces that feel{" "}
        <span className="text-blue-500">clean and alive</span>
      </motion.h1>

      <div className="relative mb-8">
        <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl" />
        <img
          src={Img}
          alt="Mohit Kumar"
          className="relative h-40 w-40 rounded-full border-4 border-blue-500 object-cover shadow-[0_20px_80px_rgba(59,130,246,0.35)]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl rounded-[2rem] border border-white/10 bg-white/5 px-6 py-8 text-center text-lg leading-relaxed backdrop-blur-xl"
      >
        Hi, I am <span className="font-semibold text-blue-500">Mohit Kumar</span>,
        a Frontend Web Developer who enjoys turning ideas into clean, fast, and
        responsive web experiences. I care about spacing, hierarchy, motion, and
        the small details that make a UI feel finished.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 mb-10 text-3xl font-bold"
      >
        What I Do
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        transition={{ duration: 0.9 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid w-full max-w-6xl grid-cols-1 gap-8 px-6 md:grid-cols-2"
      >
        <div
          className={`group rounded-3xl border p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            theme === "dark"
              ? "border-white/10 bg-white/5"
              : "border-white/50 bg-white/80"
          }`}
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition group-hover:scale-110">
            <Award size={28} />
          </div>

          <h3 className="mb-2 text-2xl font-bold">Experience</h3>
          <p className="text-base leading-7 opacity-90">
            2+ years of experience <br />
            Self-employed <br />
            Freelance Jan 2023 - Jan 2025 <br />
            <span className="font-semibold text-blue-500">
              Frontend Developer
            </span>
          </p>
        </div>

        <div
          className={`group rounded-3xl border p-8 backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            theme === "dark"
              ? "border-white/10 bg-white/5"
              : "border-white/50 bg-white/80"
          }`}
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition group-hover:scale-110">
            <GraduationCap size={28} />
          </div>

          <h3 className="mb-4 text-2xl font-bold">Education</h3>

          <ul className="space-y-4 text-sm leading-7">
            <li>
              <span className="font-semibold text-blue-500">B.Tech (CSE)</span>
              <br />
              SBSSU <span className="opacity-70">(2023 - 2027)</span>
            </li>

            <li>
              <span className="font-semibold">12th</span>
              <br />
              S.P.N College <span className="opacity-70">(2022 - 2023)</span>
            </li>

            <li>
              <span className="font-semibold">10th</span>
              <br />
              D.A.V School <span className="opacity-70">(2020 - 2021)</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
