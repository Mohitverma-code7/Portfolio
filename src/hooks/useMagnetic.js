import { useRef, useState, useEffect, useCallback } from "react";

/**
 * Magnetic button hook — returns a ref to attach to the button + event handlers.
 * The element will subtly follow the cursor when hovered.
 */
export default function useMagnetic(strength = 0.3) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;
      setPosition({ x: deltaX, y: deltaY });
    },
    [strength]
  );

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave]);

  return {
    ref,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: "transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    },
  };
}