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
            CERTIFI
            <br />
            CATIONS
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              className="group glass-card p-6 text-center hover:border-[#4F8CFF]/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#C6A15B]/10 mb-4 group-hover:bg-[#C6A15B]/15 transition-colors">
                <Award size={22} className="text-[#C6A15B]" />
              </div>
              <h3 className="text-sm font-semibold text-[#F5F5F5] mb-1 group-hover:text-[#4F8CFF] transition-colors">
                {cert.title}
              </h3>
              <p className="text-xs text-[#9B9B9B] mb-2">{cert.issuer}</p>
              <span className="text-[10px] font-medium uppercase tracking-wider text-[#4F8CFF]/60">
                {cert.year}
              </span>
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