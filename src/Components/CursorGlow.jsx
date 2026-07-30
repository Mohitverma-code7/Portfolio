import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
      glow.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      glow.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
      style={{ opacity: 0, transition: "opacity 0.3s ease" }}
      aria-hidden="true"
    />
  );
};

export default CursorGlow;