import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Sun, Moon, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "About", href: "#about", isExternal: false },
  { label: "Projects", href: "#projects", isExternal: false },
  { label: "Experience", href: "#experience", isExternal: false },
  { label: "Blog", href: "/blog", isRoute: true },
  { label: "Contact", href: "#contact", isExternal: false },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme toggle with CSS class
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[var(--nav-bg)]/80 backdrop-blur-xl border-b border-[var(--color-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1400px] flex items-center justify-between px-6 py-5 lg:px-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group relative z-10 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold tracking-tighter text-[var(--color-text-primary)] transition-colors group-hover:text-[var(--color-accent)]">
                MK
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--color-accent)]" />
              <span className="hidden sm:block text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Developer
              </span>
            </div>
          </button>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <HashLink
                  key={link.label}
                  smooth
                  to={link.href}
                  className="relative text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)] group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full" />
                </HashLink>
              )
            )}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] flex items-center justify-center hover:border-[rgba(79,140,255,0.4)] transition-all"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={14} className="text-[var(--color-text-secondary)]" /> : <Moon size={14} className="text-[var(--color-text-secondary)]" />}
            </button>

            <HashLink
              smooth
              to="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-2.5 text-sm font-medium text-[var(--color-text-primary)] transition-all hover:border-[rgba(79,140,255,0.4)] hover:bg-[rgba(79,140,255,0.08)] backdrop-blur-sm"
            >
              Let's Talk
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </HashLink>
          </div>

          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[var(--color-bg)]/95 backdrop-blur-2xl md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <HashLink
                    smooth
                    to={link.href}
                    onClick={() => setIsMobileOpen(false)}
                    className="font-display text-5xl uppercase tracking-tight text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-text-primary)]"
                  >
                    {link.label}
                  </HashLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <button
                  onClick={toggleTheme}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] px-6 py-3 text-sm font-medium text-[var(--color-text-primary)]"
                >
                  {isDark ? <Sun size={16} /> : <Moon size={16} />}
                  {isDark ? "Light Mode" : "Dark Mode"}
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              >
                <HashLink
                  smooth
                  to="#contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--glass-bg)] px-8 py-3 text-base font-medium text-[var(--color-text-primary)]"
                >
                  Let's Talk
                  <ArrowUpRight size={16} />
                </HashLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;