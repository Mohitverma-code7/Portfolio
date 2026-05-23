import { Menu, Moon, Sun, X } from "lucide-react";
import Img from "../assets/Man1.jpg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const { theme, handleToggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", id: "About" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Blogs", id: "blog" },
    
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-[1.75rem] border px-4 py-3 shadow-[0_30px_120px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all sm:px-6
        ${
          theme === "dark"
            ? "border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] text-white"
            : "border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.76))] text-gray-800"
        }`}
      >
        <div className="flex items-center gap-3">
          <HashLink smooth to="/#Header" className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-[#ff2d55]/25 blur-md" />
              <img
                src={Img}
                alt="Mohit Kumar"
                className={`relative h-11 w-11 rounded-2xl object-cover ring-2 ring-[#ff2d55]/40 transition-transform hover:scale-95 ${
                  theme === "dark" ? "bg-yellow-300" : "bg-[#ff6b8a]"
                }`}
              />
            </div>
          </HashLink>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold leading-none">Mohit Kumar</p>
            <p className="text-xs text-[#ff4d6d]/90">Frontend Developer</p>
          </div>
        </div>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              smooth
              to={`/#${item.id}`}
              className="group relative transition-colors hover:text-[#ff4d6d]"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-[#ff2d55] transition-all duration-300 group-hover:w-full" />
            </HashLink>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ff2d55]/30 bg-[#ff2d55]/10 transition hover:scale-105 hover:bg-[#ff2d55]/15"
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          <HashLink
            smooth
            to="/#contact"
            className="hidden rounded-full border border-[#ff2d55]/30 bg-[#ff2d55] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#ff6b8a] md:inline-flex"
          >
            Contact
          </HashLink>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Open menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          className={`absolute right-6 mt-4 w-56 rounded-3xl border p-4 shadow-2xl backdrop-blur-2xl
          ${
            theme === "dark"
            ? "border-white/10 bg-[#0A0A09]/95 text-white"
            : "border-white/70 bg-white/95 text-gray-800"
          }`}
        >
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              smooth
              to={`/#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="block rounded-2xl px-3 py-3 transition hover:bg-[#ff2d55]/10"
            >
              {item.label}
            </HashLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
