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
    { label: "Projects", id: "projects" },
    { label: "Blogs", id: "blog" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      {/* Navbar */}
      <div
        className={`mx-auto max-w-7xl px-6 py-3 flex justify-between items-center rounded-2xl mt-4
        backdrop-blur-xl border transition-all
        ${
          theme === "dark"
            ? "bg-white/5 border-white/10 text-white"
            : "bg-white/40 border-gray-200 text-gray-800"
        }`}
      >
        {/* Logo */}
        <HashLink smooth to="/#Header" className="flex items-center gap-2">
          <img
            src={Img}
            alt="Mohit Kumar"
            className={`w-11 h-11 rounded-xl transition-transform hover:scale-95 ${
              theme === "dark" ? "bg-yellow-300" : "bg-blue-400"
            }`}
          />
        </HashLink>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              smooth
              to={`/#${item.id}`}
              className="relative group"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </HashLink>
          ))}
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={handleToggleTheme}
            className="h-9 w-9 flex items-center justify-center rounded-full border border-blue-500/30 hover:bg-blue-500/10 transition"
          >
            {theme === "dark" ? <Moon size={16} /> : <Sun size={16} />}
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`absolute right-6 mt-4 w-44 rounded-2xl p-4 shadow-xl border backdrop-blur-xl
          ${
            theme === "dark"
              ? "bg-[#0A0A09] border-white/10 text-white"
              : "bg-white border-gray-200 text-gray-800"
          }`}
        >
          {navItems.map((item) => (
            <HashLink
              key={item.id}
              smooth
              to={`/#${item.id}`}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-lg hover:bg-blue-500/10 transition"
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
