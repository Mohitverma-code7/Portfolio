import React from "react";
import { useTheme } from "../context/ThemeContext";
import Img from "../assets/Man1.jpg";
import { Award, GraduationCap } from "lucide-react";

const About = () => {
  const { theme } = useTheme();

  return (
    <section
      id="About"
      className={`w-full py-20 flex flex-col items-center ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#9BABAB]"
          : "bg-white text-gray-700"
      } `}
    >
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        About <span className="text-blue-500">Me</span>
      </h1>

      {/* Profile Image */}
      <div className="relative mt-6 mb-8">
        <div className="absolute inset-0 rounded-full blur-xl bg-blue-500/30"></div>
        <img
          src={Img}
          alt="Mohit Kumar"
          className="relative w-40 h-40 rounded-full border-4 border-blue-500 object-cover"
        />
      </div>

      {/* About Text */}
      <p className="max-w-4xl text-center text-lg leading-relaxed px-6">
        Hi, I’m <span className="font-semibold text-blue-500">Mohit Kumar</span>,
        a Frontend Web Developer who loves building clean, fast, and responsive
        web applications. I work with HTML, CSS, JavaScript, React, and modern UI
        tools to create smooth and engaging user experiences.
      </p>

      {/* Section Title */}
      <h2 className="text-3xl font-bold mt-16 mb-10">
        What I Do
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6">
        {/* Experience */}
        <div
          className={`group p-8 rounded-3xl border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            theme === "dark"
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 mb-4 group-hover:scale-110 transition">
            <Award size={28} />
          </div>

          <h3 className="text-2xl font-bold mb-2">Experience</h3>
          <p className="text-base opacity-90">
            2+ years of experience <br />{" "}
           Self-Employed <br /> Freelance
Jan 2023 – Jan 2025 <br />
            <span className="font-semibold text-blue-500">
              Frontend Developer
            </span>
          </p>
        </div>

        {/* Education */}
        <div
          className={`group p-8 rounded-3xl border backdrop-blur-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
            theme === "dark"
              ? "bg-white/5 border-white/10"
              : "bg-white border-gray-200"
          }`}
        >
          <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 mb-4 group-hover:scale-110 transition">
            <GraduationCap size={28} />
          </div>

          <h3 className="text-2xl font-bold mb-4">Education</h3>

          <ul className="space-y-4 text-sm">
            <li>
              <span className="font-semibold text-blue-500">B.Tech (CSE)</span>
              <br />
              SBSSU <span className="opacity-70">(2023 – 2027)</span>
            </li>

            <li>
              <span className="font-semibold">12th</span>
              <br />
              S.P.N College <span className="opacity-70">(2022 – 2023)</span>
            </li>

            <li>
              <span className="font-semibold">10th</span>
              <br />
              D.A.V School <span className="opacity-70">(2020 – 2021)</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
