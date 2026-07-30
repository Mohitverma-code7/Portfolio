import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import AboutSection from "../Components/AboutSection";
import TechStack from "../Components/TechStack";
import ProjectSection from "../Components/ProjectSection";
import ExperienceSection from "../Components/ExperienceSection";
import SpotifySection from "../Components/SpotifySection";
import Certifications from "../Components/Certifications";
import GithubSection from "../Components/GithubSection";
import BlogPreview from "../Components/BlogPreview";
import ContactSection from "../Components/ContactSection";
import FooterNew from "../Components/FooterNew";
import CursorGlow from "../Components/CursorGlow";
import ScrollProgress from "../Components/ScrollProgress";
import PageLoader from "../Components/PageLoader";
import SmoothScroll from "../Components/SmoothScroll";

const Main = () => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Show loader only on first visit (session-based)
    const hasVisited = sessionStorage.getItem("visited");
    if (hasVisited) {
      setShowLoader(false);
    } else {
      sessionStorage.setItem("visited", "true");
    }
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 800); // Longer delay to account for page loader
    }
  }, [location.hash]);

  return (
    <div className="relative z-0 bg-[#080808]">
      {/* Preloader */}
      {showLoader && <PageLoader />}

      <SmoothScroll>
        <CursorGlow />
        <ScrollProgress />
        <div className="noise-overlay" aria-hidden="true" />

        <Navbar />
        <Hero />
        <AboutSection />
        <TechStack />
        <ProjectSection />
        <ExperienceSection />
        <SpotifySection />
        <Certifications />
        <GithubSection />
        <BlogPreview />
        <ContactSection />
        <FooterNew />
      </SmoothScroll>
    </div>
  );
};

export default Main;