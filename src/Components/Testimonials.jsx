import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote:
      "Mohit delivered an exceptional mobile app that exceeded our expectations. His attention to detail and commitment to quality is remarkable.",
    author: "Priya Sharma",
    role: "Founder, TechVentures",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Working with Mohit was a pleasure. He transformed our vision into a beautiful, performant web application. Highly recommended for any React/Next.js project.",
    author: "Rahul Mehta",
    role: "CTO, StartupXYZ",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "The cross-platform app Mohit built saved us months of development time. His expertise in React Native and Firebase is outstanding.",
    author: "Ananya Gupta",
    role: "Product Manager, InnovateLabs",
    rating: 5,
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6 mx-auto" />
          <span className="section-subheading mb-4 block">Kind Words</span>
          <h2 className="section-heading">
            WHAT
            <br />
            CLIENTS SAY
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[current].id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              {/* Giant quote mark */}
              <span className="font-display text-[8rem] lg:text-[10rem] leading-none text-[#4F8CFF]/10 select-none block">
                &ldquo;
              </span>

              <p className="text-xl lg:text-2xl leading-relaxed text-[#F5F5F5] font-light -mt-12 mb-8 max-w-2xl mx-auto">
                {testimonials[current].quote}
              </p>

              {/* Stars */}
              <div className="flex items-center justify-center gap-1 mb-3">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-[#C6A15B] fill-[#C6A15B]" />
                ))}
              </div>

              <p className="text-sm font-semibold text-[#F5F5F5]">
                {testimonials[current].author}
              </p>
              <p className="text-xs text-[#9B9B9B] mt-1">{testimonials[current].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:border-[#4F8CFF]/30 hover:bg-[#4F8CFF]/5 transition-all"
            >
              <ChevronLeft size={18} className="text-[#9B9B9B]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[#4F8CFF] w-6" : "bg-white/[0.1] hover:bg-white/[0.2]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.02] flex items-center justify-center hover:border-[#4F8CFF]/30 hover:bg-[#4F8CFF]/5 transition-all"
            >
              <ChevronRight size={18} className="text-[#9B9B9B]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;