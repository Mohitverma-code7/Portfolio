import { motion } from "framer-motion";
import ManImg from "../assets/Man1.jpg";

const stats = [
  { label: "Projects", value: "15+" },
  { label: "GitHub Stars", value: "50+" },
  { label: "Hackathons", value: "4" },
  { label: "Years Coding", value: "2+" },
  { label: "Technologies", value: "20+" },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Who I Am</span>
          <h2 className="section-heading">
            ABOUT
            <br />
            ME
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
          {/* LEFT - Portrait */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06]">
              <img
                src={ManImg}
                alt="Mohit Kumar"
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/70 via-transparent to-transparent" />
            </div>

            {/* Quote */}
            <motion.div
              className="absolute -bottom-8 -right-4 lg:-right-8 max-w-[280px] glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-4xl text-[#4F8CFF] leading-none">&ldquo;</span>
              <p className="text-sm leading-relaxed text-[#9B9B9B] -mt-2">
                I focus on creating products that people actually use. Code is just a means to
                solve real problems.
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT - Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Editorial text */}
            <div className="space-y-6 mb-12">
              <p className="text-lg lg:text-xl leading-relaxed text-[#F5F5F5] font-light">
                I'm a Full Stack & React Native Developer passionate about building exceptional
                digital products that live at the intersection of design and technology.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-[#9B9B9B]">
                With expertise spanning modern web frameworks, cross-platform mobile development,
                and AI integration, I craft solutions that are not just functional - they're
                delightful to use. Every pixel, every API call, every animation is intentional.
              </p>
              <p className="text-base lg:text-lg leading-relaxed text-[#9B9B9B]">
                When I'm not coding, you'll find me exploring the latest in AI/ML, contributing to
                open-source, or competing in hackathons. I believe in continuous learning and
                pushing boundaries.
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 lg:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 rounded-2xl border border-white/[0.04] bg-white/[0.01]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  <div className="font-display text-2xl lg:text-3xl text-[#4F8CFF] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] lg:text-xs uppercase tracking-wider text-[#9B9B9B]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;