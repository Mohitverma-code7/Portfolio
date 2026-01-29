import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { useLocation } from "react-router-dom";

const SmoothScroll = ({ children }) => {
  const lenisRef = useRef(null);
  const location = useLocation();

  // init lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,          // inertia strength
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) =>
        Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // scroll to top on route change (Lenis way)
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  return <>{children}</>;
};

export default SmoothScroll;
