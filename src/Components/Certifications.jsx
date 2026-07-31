import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Web Dev Cohort 2026",
    issuer: "Chai Code",
    year: "2026",
  },
  {
    title: "Mobile Development Cohort",
    issuer: "Chai Code",
    year: "2026",
  },
  {
    title: "React Native Cohort",
    issuer: "Chai Code",
    year: "2026",
  },
  {
    title: "Cyber Security",
    issuer: "Future Finders",
    year: "2026",
  },
  {
    title: "Gen AI",
    issuer: "Whitehat Coder",
    year: "2026",
  },
];

const Certifications = () => {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <motion.div
          className="mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="line-decoration mb-6" />
          <span className="section-subheading mb-4 block">Credentials</span>
          <h2 className="section-heading">
            CERTIFICATIONS
          </h2>
        </motion.div>

        <div className="flex flex-wrap gap-4 lg:gap-6 justify-center">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group glass-card flex items-center gap-4 px-6 py-4 hover:border-[#4F8CFF]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[#C6A15B]/10 group-hover:bg-[#C6A15B]/15 transition-colors flex-shrink-0">
                <Award size={18} className="text-[#C6A15B]" />
              </div>
              <div className="flex items-center gap-2 text-sm whitespace-nowrap">
                <span className="font-semibold text-[#F5F5F5] group-hover:text-[#4F8CFF] transition-colors">
                  {cert.title}
                </span>
                <span className="text-[#9B9B9B]">·</span>
                <span className="text-[#9B9B9B]">{cert.issuer}</span>
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#4F8CFF]/60">
                  {cert.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-12 mt-24">
        <div className="h-px bg-white/[0.04]" />
      </div>
    </section>
  );
};

export default Certifications;