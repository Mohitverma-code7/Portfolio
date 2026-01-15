import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog.jsx";
import Main from "../Pages/Main.jsx";
import Resume from "../Pages/Resume.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import Contact1 from "../Pages/Contact1.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";

const Layout = () => {
  return (
    <div className="w-full">
      <ThemeProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/log" element={<Blog />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
