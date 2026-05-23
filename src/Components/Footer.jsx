import { Quote } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import VisitorBox from "./VisitorBox";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`pt-20 bg-transparent ${theme === "dark" ? "text-white" : "text-black"}`}>
      <div className="mx-auto max-w-4xl px-6">
        <div
          className="ui-surface ui-surface-strong rounded-[2rem] p-10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(14,165,233,0.12),transparent_30%)]" />
          <Quote className="absolute left-6 top-6 h-14 w-14 text-[#ff4d6d]/30" />

          <div className="relative">
            <p className="pl-10 text-lg italic leading-relaxed md:text-2xl">
              If I give up now, I&apos;ll regret it.
            </p>

            <p className="mt-6 text-right text-sm font-medium opacity-80">
              - Monkey D. Luffy
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <VisitorBox />
      </div>

      <div className="mt-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm opacity-80 md:flex-row">
          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-[#ff4d6d]">mohitcodes</span>
          </p>

          <p>&copy; 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
