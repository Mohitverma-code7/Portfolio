import img from "../assets/RESUME.png";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useTheme } from "../context/ThemeContext";

const Resume = () => {
  const { theme } = useTheme();
  return (
    <div
      className={` max-w-full  h-full ${
        theme === "dark"
          ? "bg-[#0A0A09] text-[#9BABAB]"
          : "bg-white text-gray-700"
      } `}
    >
      <Navbar />
      <div className="  ">
        <p className=" text-[40px] md:text-6xl font-bold pt-30  text-center hover:underline  underline-offset-16 decoration-6 decoration-blue-700 cursor-pointer  ">
          My
          <span className=" text-blue-700 ">Resume</span>
        </p>
        <p className="text-center pt-8 text-sm md:text-base  max-w-2xl mx-auto ">
          MY PROFESSIONAL RESUME
        </p>
        <div className="flex justify-center px-4 mt-10 mb-20">
  <img
  src={img}
  alt="Resume"
  className="w-full max-w-md mx-auto mt-10 mb-20 rounded-lg shadow-lg"
/>

</div>

      </div>
      <Footer />
    </div>
  );
};

export default Resume;
