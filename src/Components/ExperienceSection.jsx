import { motion } from "framer-motion";

const milestones = [
  {
    year: "2024",
    title: "Started Web Development",
    description:
      "Began the journey into full-stack development. Built foundational skills in HTML, CSS, JavaScript, React, and Node.js.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    year: "2025",
    title: "Weather Dashboard & Portfolio",
    description:
      "Built an interactive Weather Dashboard with real-time data. Created a personal portfolio website. Explored backend development with Node.js & Express.",
    tags: ["Next.js", "Node.js", "Express", "APIs"],
    featured: true,
  },
  {
    year: "2025",
    title: "Notify — iOS App",
    description:
      "Developed a notification management app for iOS using React Native & Expo. Learned mobile development patterns and push notification systems.",
    tags: ["React Native", "Expo", "iOS"],
  },
  {
    year: "2026",
    title: "Portl — Cross-Platform App",
    description:
      "Built Portl, a cross-platform portfolio builder. Integrated Firebase for real-time sync and authentication. Published to both App Store & Play Store.",
    tags: ["React Native", "Expo", "Firebase", "TypeScript"],
    featured: true,
  },
  {
    year: "2026",
    title: "AI Chatbot & Open Source",
    description:
      "Developed an AI-powered chatbot with GPT integration. Began contributing to open-source projects. Participated in hackathons and built with FastAPI & Python.",
    tags: ["Next.js", "FastAPI", "Python", "OpenAI", "Open Source"],
    featured: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="relative py-24 lg:py-32">
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
          <span className="section-subheading mb-4 block">The Journey</span>
          <h2 className="section-heading">
            EXPERIENCE
            <br />
            TIMELINE
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute left-[7px] lg:left-[15px] top-3 bottom-3 w-px bg-white/[0.06]" />

          <div className="space-y-12 lg:space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div key={index} variants={itemVariants} className="relative pl-10 lg:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-0 lg:left-[7px] top-1.5">
                  <div
                    className={`w-[14px] h-[14px] lg:w-4 lg:h-4 rounded-full border-2 bg-[#080808] transition-colors ${
                      milestone.featured
                        ? "border-[#4F8CFF] shadow-[0_0_12px_rgba(79,140,255,0.3)]"
                        : "border-white/[0.15]"
                    }`}
                  >
                    {milestone.featured && (
                      <div className="absolute inset-1 rounded-full bg-[#4F8CFF]" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-4 lg:gap-12">
                  {/* Year */}
                  <div>
                    <span className="font-display text-2xl lg:text-3xl tracking-tight text-[#4F8CFF]">
                      {milestone.year}
                    </span>
                  </div>

                  {/* Details */}
                  <div>
                    <h3 className="font-display text-xl lg:text-2xl uppercase tracking-tight text-[#F5F5F5] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed text-[#9B9B9B] mb-4 max-w-xl">
                      {milestone.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {milestone.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-3 py-1 rounded-full border border-white/[0.05] bg-white/[0.02] text-[#9B9B9B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-24">
        <div className="h-px bg-white/[0.04]" />
      </div>
    </section>
  );
};

export default ExperienceSection;