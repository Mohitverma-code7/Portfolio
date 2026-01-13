import React from "react";
import { useTheme } from "../context/ThemeContext";
import { toast } from "react-toastify";
import { Mail, User, MessageSquare } from "lucide-react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  const { theme } = useTheme();
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "bb1fdb7d-2998-416f-8f21-6f3c119a3d55");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Message sent successfully 🚀");
      event.target.reset();
    } else {
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 px-6 ${theme === "dark" ? "bg-[#0A0A09] text-white" : "bg-white text-black"}`}
    >
      <Navbar/>
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          Get In <span className="text-blue-500">Touch</span>
        </h1>
        <p className="mt-4 max-w-md mx-auto text-sm opacity-90">
          Have an idea or a project in mind? Let’s build something amazing
          together.
        </p>
      </div>

      {/* Form Card */}
      <form
        onSubmit={onSubmit}
        className={`max-w-3xl mx-auto p-8 md:p-10 rounded-3xl border backdrop-blur-lg transition  ${theme === "dark" ? "bg-[#0A0A09] text-white" : "bg-white text-black"}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <User size={16} /> Your Name
            </label>
            <input
              type="text"
              name="Name"
              placeholder="John Doe"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium flex items-center gap-2 mb-2">
              <Mail size={16} /> Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mt-6">
          <label className="text-sm font-medium flex items-center gap-2 mb-2">
            <MessageSquare size={16} /> Message
          </label>
          <textarea
            name="Message"
            placeholder="Tell me about your project..."
            required
            rows="5"
            className="w-full px-4 py-3 rounded-xl border border-gray-700 bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        {/* Submit */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="px-10 py-3 rounded-full font-semibold text-white bg-blue-500 hover:bg-blue-600 transition shadow-lg"
          >
            {result || "Send Message"}
          </button>
        </div>
      </form>
      <Footer/>
    </section>
  );
};

export default Contact;
