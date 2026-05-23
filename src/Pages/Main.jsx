import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import { ThemeProvider } from "../context/ThemeContext";
import Project from "../Components/Project";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";
import { ToastContainer } from "react-toastify";
import Icons from "../Components/Icons";
import SmoothScroll from "../Components/SmoothScroll";
import Highlights from "../Components/Highlights";

const Main = () => {
  return (
    <div className="relative z-0">
      <ThemeProvider>
        <SmoothScroll>
          <ToastContainer />
          <Navbar />
          <Header />
          <About />
          <Highlights />
          <Icons />
          <Project />
          <Article />
          <Contact />
          <Footer />
        </SmoothScroll>
      </ThemeProvider>
    </div>
  );
};

export default Main;
