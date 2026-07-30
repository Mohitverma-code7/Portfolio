import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import TextScramble from "./TextScramble";
import useMagnetic from "../hooks/useMagnetic";
import ManImg from "../assets/Man1.jpg";

// ============================================================
// FLOATING PARTICLES — subtle ambient background particles
// ============================================================
const Particles = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = 0, h = 0;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      h = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
      ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    // Create ~30 subtle particles
    particlesRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      radius: Math.random() * 1.2 + 0.3,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      opacity: Math.random() * 0.25 + 0.05,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, w, h);
      const particles = particlesRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around edges
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(79,140,255,${p.opacity})`;
        ctx.fill();
      }

      // Draw subtle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(79,140,255,${0.04 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
      aria-hidden="true"
    />
  );
};

// ============================================================
// BLUEPRINT GRID — ultra-subtle grid overlay
// ============================================================
const BlueprintGrid = () => (
  <div
    className="absolute inset-0 pointer-events-none opacity-[0.015]"
    aria-hidden="true"
    style={{
      backgroundImage: `
        linear-gradient(rgba(79,140,255,0.5) 1px, transparent 1px),
        linear-gradient(90deg, rgba(79,140,255,0.5) 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px",
      maskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 70%)",
    }}
  />
);

// ============================================================
// MAGNETIC BUTTON — premium reusable button with magnetic hover
// ============================================================
const MagneticButton = ({ children, variant = "primary", ...props }) => {
  const magnetic = useMagnetic(0.35);
  const [isHovered, setIsHovered] = useState(false);

  const sharedClasses =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold cursor-pointer whitespace-nowrap overflow-hidden transition-all duration-300";

  const variantClasses =
    variant === "primary"
      ? "bg-[#F5F5F5] text-[#080808] hover:bg-[#4F8CFF] hover:text-white"
      : "border border-white/[0.12] bg-white/[0.03] text-[#F5F5F5] backdrop-blur-sm hover:border-[#4F8CFF]/40 hover:bg-[#4F8CFF]/10";

  return (
    <div
      ref={magnetic.ref}
      style={magnetic.style}
      className="inline-flex"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <motion.div
        className={`${sharedClasses} ${variantClasses}`}
        style={{ display: "inline-flex" }}
        whileTap={{ scale: 0.96 }}
      >
        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background:
              variant === "primary"
                ? "radial-gradient(circle at center, rgba(79,140,255,0.5) 0%, transparent 70%)"
                : "radial-gradient(circle at center, rgba(79,140,255,0.3) 0%, transparent 70%)",
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
        {children}
      </motion.div>
    </div>
  );
};

// ============================================================
// HERO COMPONENT
// ============================================================
const Hero = () => {
  const portraitRef = useRef(null);

  // 3D tilt motion values for portrait
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 50, damping: 30 });
  const springY = useSpring(y, { stiffness: 50, damping: 30 });
  const rotateX = useTransform(springY, [-1, 1], [8, -8]);
  const rotateY = useTransform(springX, [-1, 1], [-8, 8]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!portraitRef.current) return;
      const rect = portraitRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) / (rect.width / 2);
      const deltaY = (e.clientY - centerY) / (rect.height / 2);
      x.set(Math.max(-1, Math.min(1, deltaX)));
      y.set(Math.max(-1, Math.min(1, deltaY)));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  // Stagger animation configs
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "40px",
      transition: { duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  const textRevealVariants = {
    hidden: { y: "120%" },
    visible: (delay = 0) => ({
      y: 0,
      transition: { duration: 0.9, delay, ease: [0.22, 0.61, 0.36, 1] },
    }),
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] },
    }),
  };

  const portraitSlideVariants = {
    hidden: { opacity: 0, x: 80, rotateY: 15 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: { duration: 1, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#050505" }}
    >
      {/* ============ BACKGROUND LAYERS ============ */}
      {/* Radial glows */}
      <div
        className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,140,255,0.08) 0%, rgba(79,140,255,0.03) 35%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(79,140,255,0.06) 0%, rgba(79,140,255,0.02) 40%, transparent 70%)",
          filter: "blur(80px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(79,140,255,0.04) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
        aria-hidden="true"
      />

      {/* Blueprint grid */}
      <BlueprintGrid />

      {/* Floating particles */}
      <Particles />

      {/* ============ MAIN CONTENT ============ */}
      <div className="mx-auto w-full max-w-[1400px] px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-16 xl:gap-20 items-center min-h-[85vh] py-20">
          {/* ============ LEFT — Editorial Typography ============ */}
          <div className="relative">
            {/* Line decoration */}
            <motion.div
              className="line-decoration mb-10"
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              style={{ marginBottom: "2.5rem" }}
            />

            {/* NAME — MOHIT */}
            <div className="overflow-hidden">
              <motion.h1
                className="font-display text-[clamp(4.5rem,11vw,11rem)] leading-[0.82] uppercase tracking-tighter text-[#F5F5F5] select-none"
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                custom={0.15}
              >
                MOHIT
              </motion.h1>
            </div>

            {/* NAME — KUMAR */}
            <div className="overflow-hidden -mt-1 mb-1">
              <motion.h1
                className="font-display text-[clamp(4.5rem,11vw,11rem)] leading-[0.82] uppercase tracking-tighter text-[#F5F5F5] select-none"
                variants={textRevealVariants}
                initial="hidden"
                animate="visible"
                custom={0.3}
              >
                KUMAR
              </motion.h1>
            </div>

            {/* SUBTITLE */}
            <motion.div
              className="overflow-hidden mt-5 mb-5"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.45}
            >
              <h2 className="font-display text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.1] uppercase tracking-tight text-[#4F8CFF]">
                FULL STACK &
                <br />
                MOBILE DEVELOPER
              </h2>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              className="max-w-lg text-sm lg:text-base leading-relaxed mb-8"
              style={{ color: "var(--color-text-secondary)" }}
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.55}
            >
              <TextScramble
                text="Building modern web applications, cross-platform mobile apps, and AI-powered digital experiences using React, React Native, Node.js, Firebase, and modern web technologies."
                delay={1200}
              />
            </motion.p>

            {/* CTA BUTTONS */}
            <motion.div
              className="flex flex-wrap gap-4"
              variants={fadeUpVariants}
              initial="hidden"
              animate="visible"
              custom={0.7}
            >
              <HashLink smooth to="#projects" className="inline-flex">
                <MagneticButton variant="primary">
                  <span className="leading-none">View Projects</span>
                  <ArrowUpRight
                    size={16}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </MagneticButton>
              </HashLink>

              <Link to="/resume" className="inline-flex">
                <MagneticButton variant="secondary">
                  <Download size={16} className="shrink-0" />
                  <span className="leading-none">Resume</span>
                </MagneticButton>
              </Link>
            </motion.div>
          </div>

          {/* ============ RIGHT — Interactive Portrait Card ============ */}
          <motion.div
            ref={portraitRef}
            className="relative flex-shrink-0 flex justify-center lg:justify-end"
            style={{
              perspective: 1200,
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            variants={portraitSlideVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Ambient blue glow behind portrait */}
            <motion.div
              className="absolute -inset-16 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,140,255,0.15) 0%, rgba(79,140,255,0.04) 40%, transparent 70%)",
                filter: "blur(80px)",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute -inset-6 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(79,140,255,0.1) 0%, transparent 60%)",
                filter: "blur(40px)",
              }}
              aria-hidden="true"
            />

            {/* Main portrait frame */}
            <div
              className="relative w-[260px] h-[360px] sm:w-[300px] sm:h-[420px] lg:w-[380px] lg:h-[520px] xl:w-[420px] xl:h-[560px] rounded-[30px] overflow-hidden"
              style={{
                background: "rgba(17,17,17,0.6)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: `
                  0 30px 80px -20px rgba(0,0,0,0.6),
                  0 0 100px -30px rgba(79,140,255,0.2),
                  0 0 0 1px rgba(255,255,255,0.03) inset,
                  0 -40px 80px -40px rgba(79,140,255,0.08) inset
                `,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              {/* Internal noise overlay */}
              <div
                className="absolute inset-0 z-10 pointer-events-none"
                style={{ opacity: 0.03 }}
                aria-hidden="true"
              >
                <div
                  className="w-full h-full"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
                  }}
                />
              </div>

              {/* Image with subtle zoom animation */}
              <motion.img
                src={ManImg}
                alt="Mohit Kumar — Full Stack & Mobile Developer"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                initial={{ scale: 1 }}
                animate={{ scale: 1.02 }}
                transition={{
                  scale: { repeat: Infinity, repeatType: "reverse", duration: 8, ease: "easeInOut" },
                }}
                whileHover={{ scale: 1.06 }}
              />

              {/* Bottom gradient fade */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(5,5,5,0.5) 0%, transparent 30%)",
                }}
                aria-hidden="true"
              />

              {/* Bottom accent line */}
              <div
                className="absolute bottom-0 left-4 right-4 h-[1px]"
                style={{
                  background:
                    "linear-gradient(to right, transparent, rgba(79,140,255,0.4), transparent)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Available for Work — integrated badge */}
            <motion.div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div
                className="flex items-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-medium text-[#F5F5F5] whitespace-nowrap"
                style={{
                  background: "rgba(17,17,17,0.85)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px -8px rgba(0,0,0,0.5)",
                }}
              >
                <span
                  className="relative flex h-2 w-2"
                  aria-label="Available for work"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Available for work
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ============ SCROLL INDICATOR ============ */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span
          className="text-[10px] uppercase tracking-[0.3em]"
          style={{ color: "var(--color-text-secondary)" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown size={16} style={{ color: "var(--color-text-secondary)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;