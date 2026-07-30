import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Github, Linkedin, Mail, FileText, Twitter } from "lucide-react";

const socialLinks = [
  { label: "Email", href: "mailto:mk0641137@gmail.com", icon: Mail, external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mohit-kumar-300b63311/", icon: Linkedin, external: true },
  { label: "GitHub", href: "https://github.com/Mohitverma-code7", icon: Github, external: true },
  { label: "X", href: "https://x.com/Mohitvermacode7", icon: Twitter, external: true },
  { label: "Resume", href: "/resume", icon: FileText, external: false },
];

const FooterNew = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG progress ring
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - scrollProgress * circumference;

  return (
    <footer className="relative bg-[#080808] border-t border-white/[0.04]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 py-20 lg:py-28">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="font-display text-4xl tracking-tighter text-[#F5F5F5]">MK</span>
            <p className="text-sm text-[#9B9B9B] mt-2 max-w-xs">
              Full Stack & React Native Developer crafting premium digital experiences.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {socialLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-sm text-[#9B9B9B] hover:text-[#F5F5F5] hover:border-[#4F8CFF]/30 transition-all"
                >
                  <link.icon size={14} />
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.01] text-sm text-[#9B9B9B] hover:text-[#F5F5F5] hover:border-[#4F8CFF]/30 transition-all"
                >
                  <link.icon size={14} />
                  {link.label}
                </Link>
              )
            )}
          </motion.div>

          {/* Back to top with SVG progress ring */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-[#F5F5F5] transition-colors group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Back to top
            <div className="relative w-9 h-9 flex items-center justify-center">
              {/* Background circle */}
              <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 36 36">
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="2"
                />
                <circle
                  cx="18"
                  cy="18"
                  r={radius}
                  fill="none"
                  stroke="#4F8CFF"
                  strokeWidth="2"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  className="transition-all duration-300"
                />
              </svg>
              {/* Arrow icon */}
              <svg
                className="relative z-10 w-3.5 h-3.5 text-[#4F8CFF] group-hover:text-[#F5F5F5] transition-colors"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
              </svg>
            </div>
          </motion.button>
        </div>

        <div className="mt-16 pt-8 border-t border-white/[0.03] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9B9B9B]">
            &copy; {new Date().getFullYear()} Mohit Kumar. All rights reserved.
          </p>
          <p className="text-xs text-[#9B9B9B]">Designed & Built with precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;