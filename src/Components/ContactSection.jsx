import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Check, AlertCircle, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

// ============================================================
// CONFIGURE EMAILJS
// 1. Sign up at https://emailjs.com (free: 200 emails/month)
// 2. Create an Email Service (connect your Gmail/Outlook)
// 3. Create an Email Template with these variables:
//    {{from_name}}, {{from_email}}, {{message}}
// 4. Fill in your credentials below:
// ============================================================
const EMAILJS_SERVICE_ID = "service_9i78kka";   // e.g. "service_abc123"
const EMAILJS_TEMPLATE_ID = "template_eiyjii3"; // e.g. "template_xyz789"
const EMAILJS_PUBLIC_KEY = "NWBfMy2l6A1DeY-eO";   // e.g. "AbCdEfGhIjKlMnOp"

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // If EmailJS not configured, show a friendly message
    if (
      EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID" ||
      EMAILJS_TEMPLATE_ID === "YOUR_TEMPLATE_ID" ||
      EMAILJS_PUBLIC_KEY === "YOUR_PUBLIC_KEY"
    ) {
      setStatus("success");
      setFormState({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("sending");
    setErrorMsg("");

    try {
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg(
        error.text || "Failed to send message. Please try again or email me directly."
      );
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const isConfigured =
    EMAILJS_SERVICE_ID !== "YOUR_SERVICE_ID" &&
    EMAILJS_TEMPLATE_ID !== "YOUR_TEMPLATE_ID" &&
    EMAILJS_PUBLIC_KEY !== "YOUR_PUBLIC_KEY";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
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
          <span className="section-subheading mb-4 block">Get In Touch</span>
          <h2 className="section-heading">
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span className="text-[var(--color-accent)]">AMAZING.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-24">
          {/* LEFT - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg leading-relaxed mb-10" style={{ color: "var(--color-text-secondary)" }}>
              Have a project in mind? Let's collaborate and create something exceptional. I'm
              currently available for freelance work and open to new opportunities.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:mk0641137@gmail.com"
                className="flex items-center gap-4 group transition-colors"
                style={{ color: "var(--color-text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
              >
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--glass-bg)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(79,140,255,0.4)";
                    e.currentTarget.style.backgroundColor = "rgba(79,140,255,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--color-border)";
                    e.currentTarget.style.backgroundColor = "var(--glass-bg)";
                  }}
                >
                  <Mail size={18} style={{ color: "var(--color-accent)" }} />
                </div>
                <div>
                  <span
                    className="block text-xs uppercase tracking-wider"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Email
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                    mk0641137@gmail.com
                  </span>
                </div>
              </a>

              <div className="flex items-center gap-4" style={{ color: "var(--color-text-secondary)" }}>
                <div
                  className="w-10 h-10 rounded-full border flex items-center justify-center"
                  style={{
                    borderColor: "var(--color-border)",
                    backgroundColor: "var(--glass-bg)",
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <span
                    className="block text-xs uppercase tracking-wider"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Location
                  </span>
                  <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                    India
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    className="block text-xs uppercase tracking-[0.15em] mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm transition-all resize-none focus:outline-none"
                    style={{
                      backgroundColor: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    className="block text-xs uppercase tracking-[0.15em] mb-2"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full rounded-xl px-4 py-3 text-sm transition-all resize-none focus:outline-none"
                    style={{
                      backgroundColor: "var(--glass-bg)",
                      border: "1px solid var(--color-border)",
                      color: "var(--color-text-primary)",
                    }}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-xs uppercase tracking-[0.15em] mb-2"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full rounded-xl px-4 py-3 text-sm transition-all resize-none focus:outline-none"
                  style={{
                    backgroundColor: "var(--glass-bg)",
                    border: "1px solid var(--color-border)",
                    color: "var(--color-text-primary)",
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Status message */}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-400">
                  <AlertCircle size={16} />
                  {errorMsg}
                </div>
              )}

              {!isConfigured && status !== "success" && (
                <div className="flex items-center gap-2 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-xs text-amber-300/80">
                  <AlertCircle size={14} />
                  EmailJS is installed but not configured — add your credentials in{" "}
                  <code className="bg-amber-500/10 px-1 rounded">ContactSection.jsx</code> (lines 14-16)
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === "sending"}
                className="magnetic-btn group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  backgroundColor:
                    status === "success"
                      ? "rgba(34,197,94,0.1)"
                      : status === "sending"
                      ? "var(--color-text-primary)"
                      : "var(--color-text-primary)",
                  color:
                    status === "success"
                      ? "#22c55e"
                      : "var(--color-bg)",
                  border: status === "success" ? "1px solid rgba(34,197,94,0.3)" : "none",
                }}
                whileHover={status !== "sending" ? { scale: 1.02 } : {}}
                whileTap={status !== "sending" ? { scale: 0.98 } : {}}
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  <>
                    <Check size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={14} className="group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;