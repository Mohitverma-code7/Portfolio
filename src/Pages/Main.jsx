import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "../Components/About";
import { ThemeProvider } from "../context/ThemeContext";
import Project from "../Components/Project";
import Article from "../Components/Article";
import Footer from "../Components/Footer";
import Blog from "./Blog";
import Contact from "../Components/Contact";
import { ToastContainer } from "react-toastify";

const Main = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ThemeProvider>
        <ToastContainer />
        <Navbar />
        <Header />
        <About />
        <Project />
        <Article />
        <Contact />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Main;
