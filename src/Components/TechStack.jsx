import { motion } from "framer-motion";

const techCategories = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Redux"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "FastAPI", "Python", "PostgreSQL", "Firebase"],
  },
  {
    label: "Mobile",
    items: ["React Native", "Expo", "iOS", "Android"],
  },
  {
    label: "AI/ML",
    items: ["PyTorch", "TensorFlow", "OpenAI", "LangChain", "Scikit-learn"],
  },
  {
    label: "Tools",
    items: ["Git", "Docker", "AWS", "Vercel", "Figma"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const TechStack = () => {
  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Tools & Technologies</span>
          <h2 className="section-heading mb-16 lg:mb-20">
            TECH
            <br />
            STACK
          </h2>
        </motion.div>

        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {techCategories.map((category) => (
            <motion.div key={category.label} variants={itemVariants}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-6 sm:gap-12">
                {/* Category label */}
                <div className="sm:w-32 flex-shrink-0">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4F8CFF]">
                    {category.label}
                  </span>
                </div>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.items.map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;