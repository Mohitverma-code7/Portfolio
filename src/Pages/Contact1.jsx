import Contact from "../Components/Contact";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useTheme } from "../context/ThemeContext";

const Contact1 = () => {
  const { theme } = useTheme();

  return (
    <div
      className={`min-h-screen bg-transparent ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <Navbar />
      <div className="pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Contact1;
