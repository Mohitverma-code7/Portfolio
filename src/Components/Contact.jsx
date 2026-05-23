import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import { useTheme } from "../context/ThemeContext";

const CONTACT_EMAIL = "mk0641137@gmail.com";

const Contact = () => {
  const { theme } = useTheme();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app...");

    setForm({ name: "", email: "", message: "" });
  };

  const links = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohit-kumar-300b63311/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/Mohitverma-code7",
      icon: Github,
    },
    {
      label: "Email",
      href: `mailto:${CONTACT_EMAIL}`,
      icon: Mail,
    },
  ];

  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-24 px-6 bg-transparent ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#ff2d55]/18 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div
          className="ui-surface ui-surface-strong rounded-[2rem] p-8"
        >
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#ff4d6d]">
            <Send size={14} />
            Contact
          </p>
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Let&apos;s build something{" "}
            <span className="text-[#ff4d6d]">worth showing</span>
          </h2>
          <p className="mt-4 text-sm leading-7 text-gray-500 md:text-base">
            If you need a frontend developer for a portfolio, landing page, or
            polished React interface, this is where you can reach me quickly.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3 rounded-2xl border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-4">
              <MapPin className="text-[#ff4d6d]" size={18} />
              <div>
                <p className="text-sm font-semibold">Based in India</p>
                <p className="text-xs text-gray-500">Available for remote work</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-[#ff2d55]/20 bg-[#ff2d55]/10 px-4 py-4">
              <Mail className="text-[#ff4d6d]" size={18} />
              <div>
                <p className="text-sm font-semibold">{CONTACT_EMAIL}</p>
                <p className="text-xs text-gray-500">Best for direct enquiries</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full border px-4 py-3 text-sm font-medium transition ${
                    theme === "dark"
                      ? "border-white/10 text-white hover:bg-white/10"
                      : "border-gray-300 text-gray-800 hover:bg-gray-100"
                  }`}
                >
                  <Icon size={16} />
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="ui-surface ui-surface-strong rounded-[2rem] p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium">Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-[#ff2d55] ${
                  theme === "dark"
                    ? "border-white/10 bg-black/20 text-white placeholder:text-gray-500"
                    : "border-gray-200 bg-[#F8FBFB] text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                className={`w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-[#ff2d55] ${
                  theme === "dark"
                    ? "border-white/10 bg-black/20 text-white placeholder:text-gray-500"
                    : "border-gray-200 bg-[#F8FBFB] text-gray-900 placeholder:text-gray-400"
                }`}
              />
            </label>
          </div>

          <label className="mt-4 block space-y-2">
            <span className="text-sm font-medium">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="6"
              placeholder="Tell me about your project or role."
              className={`w-full rounded-2xl border px-4 py-3 outline-none transition focus:border-[#ff2d55] ${
                theme === "dark"
                  ? "border-white/10 bg-black/20 text-white placeholder:text-gray-500"
                  : "border-gray-200 bg-[#F8FBFB] text-gray-900 placeholder:text-gray-400"
              }`}
            />
          </label>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#ff2d55] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#ff6b8a]"
          >
            Send Message
            <Send size={16} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
