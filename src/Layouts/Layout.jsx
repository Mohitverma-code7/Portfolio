import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "../Pages/Blog.jsx";
import BlogPost from "../Pages/BlogPost.jsx";
import Main from "../Pages/Main.jsx";
import Resume from "../Pages/Resume.jsx";
import { ThemeProvider } from "../context/ThemeContext.jsx";
import Contact1 from "../Pages/Contact1.jsx";
import ScrollToTop from "../utils/ScrollToTop.jsx";
import GlobalBackground from "../Components/GlobalBackground.jsx";
import Projects from "../Pages/Projects.jsx";

const Layout = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <ThemeProvider>
        <GlobalBackground />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/log" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact1 />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
