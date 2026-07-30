import { motion } from "framer-motion";
import { Download, ArrowLeft } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import Navbar from "../Components/Navbar";
import FooterNew from "../Components/FooterNew";
import ResumeImg from "../assets/RESUME.png";

const Resume = () => {
  return (
    <div className="relative z-0 bg-[#080808] min-h-screen">
      <div className="noise-overlay" aria-hidden="true" />

      <Navbar />

      <section className="pt-32 pb-20">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          {/* Back link */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HashLink
              smooth
              to="/#hero"
              className="inline-flex items-center gap-2 text-sm text-[#9B9B9B] hover:text-[#F5F5F5] transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </HashLink>
          </motion.div>

          {/* Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="line-decoration mb-6" />
            <span className="section-subheading mb-4 block">Credentials</span>
            <h1 className="section-heading">
              MY
              <br />
              <span className="text-[#4F8CFF]">RESUME</span>
            </h1>
          </motion.div>

          {/* Resume Image */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="relative w-full max-w-2xl">
              {/* Glow behind image */}
              <div className="absolute inset-0 bg-[#4F8CFF]/5 blur-3xl rounded-3xl scale-90" />

              <div className="relative rounded-2xl overflow-hidden border border-white/[0.06] bg-[#111111]">
                <img
                  src={ResumeImg}
                  alt="Mohit Kumar - Resume"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Download Button */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="https://drive.google.com/file/d/1HTnJQPIA6hUV_96wQkjNvw5szuxGTh0v/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn group inline-flex items-center gap-2 rounded-full bg-[#F5F5F5] px-7 py-3.5 text-sm font-semibold text-[#080808] transition-all hover:bg-[#4F8CFF] hover:text-white"
            >
              <Download size={16} />
              Download Resume
            </a>
          </motion.div>
        </div>
      </section>

      <FooterNew />
    </div>
  );
};

export default Resume;