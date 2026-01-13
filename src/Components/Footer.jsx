import React from "react";
import { useTheme } from "../context/ThemeContext";
import VisitorBox from "./VisitorBox";
import { Quote } from "lucide-react";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer
      className={`pt-20  ${theme === "dark" ? "bg-[#0A0A09] text-white" : "bg-white text-black"}`}
    >
      {/* Quote Section */}
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`relative rounded-3xl p-10 border backdrop-blur-lg shadow-2xl  ${theme === "dark" ? "bg-[#0A0A09] text-white" : "bg-white text-black"}`}
        >
          <Quote className="absolute top-6 left-6 w-14 h-14 text-blue-500/30" />

          <p className="text-lg md:text-xl italic leading-relaxed pl-10">
            If I give up now, I’ll regret it.
          </p>

          <p className="mt-6 text-right text-sm font-medium opacity-80">
            — Monkey D. Luffy
          </p>
        </div>
      </div>

      {/* Visitor Counter */}
      <div className="mt-16">
        <VisitorBox />
      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-80">
          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-blue-500">
              mohitcodes
            </span>
          </p>

          <p>© 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
