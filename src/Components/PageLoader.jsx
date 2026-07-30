import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#080808]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Decorative background glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-64 h-64 rounded-full bg-[#4F8CFF]/10 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            />
          </div>

          {/* MK Logo animation */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span
                className="font-display text-[5rem] sm:text-[7rem] lg:text-[9rem] leading-none tracking-tighter text-[#F5F5F5] block"
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: 1, duration: 1, delay: 0.5 }}
              >
                MK
              </motion.span>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              className="mt-6 mx-auto h-[2px] overflow-hidden w-40 rounded-full bg-white/[0.06]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-[#4F8CFF] to-[#C6A15B]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 0.4, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="mt-4 text-[10px] uppercase tracking-[0.4em] text-[#9B9B9B]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;