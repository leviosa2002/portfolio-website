import { Navbar } from "../components/Navbar";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { LocomotiveScrollProvider, useLocomotiveScroll } from 'react-locomotive-scroll';
import { useRef, useState, useEffect, useCallback } from "react";

export const Home = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState('home');

  const { scroll: locomotiveScroll } = useLocomotiveScroll();

  // 💡 NEW: Create a ref to always hold the latest locomotiveScroll instance
  const scrollRef = useRef(null);

  // 💡 NEW: Effect to update the ref whenever locomotiveScroll changes
  useEffect(() => {
    scrollRef.current = locomotiveScroll;
  }, [locomotiveScroll]);

  // Function to handle clicks on Navbar links for smooth scrolling
  // This useCallback has an empty dependency array because it uses the mutable scrollRef.current
  const handleNavLinkClick = useCallback((targetId) => {
    // 💡 NEW: Use scrollRef.current to access the instance
    if (scrollRef.current) {
      scrollRef.current.scrollTo(`#${targetId}`, {
        duration: 1000,
        easing: [0.645, 0.045, 0.355, 1.000],
        offset: -80
      });
    } else {
      console.warn("Locomotive Scroll instance not available for scrolling. Falling back to native scroll.");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []); // Empty dependency array as scrollRef.current is stable

  // Effect to listen for Locomotive Scroll's 'scroll' event for active section highlighting
  useEffect(() => {
    if (locomotiveScroll) {
      console.log("Locomotive Scroll instance is available for active section tracking.");

      const handleScroll = (instance) => {
        let currentActive = null;
        let minDistance = Infinity;

        for (const key in instance.currentElements) {
          if (instance.currentElements.hasOwnProperty(key)) {
            const element = instance.currentElements[key];
            if (element.inViewport) {
                const distanceFromTop = Math.abs(element.y);
                if (distanceFromTop < minDistance) {
                    minDistance = distanceFromTop;
                    currentActive = element.id;
                }
            }
          }
        }
        if (currentActive && currentActive !== activeSection) {
            setActiveSection(currentActive);
        }
      };

      locomotiveScroll.on('scroll', handleScroll);

      return () => {
        locomotiveScroll.off('scroll', handleScroll);
      };
    }
  }, [locomotiveScroll, activeSection]); // Dependencies: re-run if locomotiveScroll or activeSection changes

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />

      <div className="relative z-50">
        <Navbar className="pt-16 md:pt-20" onNavLinkClick={handleNavLinkClick} activeSection={activeSection} />
      </div>

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <HeroSection id="home" />
          <ProjectsSection id="projects" />
          <SkillsSection id="skills" />
          <AboutSection id="about" />
          <ContactSection id="contact" />
        </main>
      </LocomotiveScrollProvider>

      <Footer />
    </div>
  );
};