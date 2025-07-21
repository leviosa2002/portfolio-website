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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />

      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
        watch={[]}
      >
        <ScrollContent
          containerRef={containerRef}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </LocomotiveScrollProvider>

    </div>
  );
};

// Inner scroll-aware content
const ScrollContent = ({ containerRef, activeSection, setActiveSection }) => {
  const { scroll: locomotiveScroll } = useLocomotiveScroll();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current = locomotiveScroll;
  }, [locomotiveScroll]);

  const handleNavLinkClick = useCallback((targetId) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(`#${targetId}`, {
        duration: 1000,
        easing: [0.645, 0.045, 0.355, 1.000],
        offset: -80,
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

   useEffect(() => {
  if (!locomotiveScroll) return;


 const handleScroll = (instance) => {

  let currentActive = null;
  let minDistance = Infinity;

  Object.entries(instance.currentElements).forEach(([key, element]) => {
    const el = element.el;
    const rect = el.getBoundingClientRect();

    // Check if the section is in viewport
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    // console.log(`🧩 Checking ID: ${el.id}, top: ${rect.top.toFixed(2)}, bottom: ${rect.bottom.toFixed(2)}, inView: ${inView}`);

    if (inView && el.id) {
      const distance = Math.abs(rect.top);
      if (distance < minDistance) {
        minDistance = distance;
        currentActive = el.id;
      }
    }
  });

  // console.log("⭐ Closest section in view:", currentActive);

  if (currentActive && currentActive !== activeSection) {
    setActiveSection(currentActive);
  }
};


  locomotiveScroll.on('scroll', handleScroll);
  return () => locomotiveScroll.off('scroll', handleScroll);
}, [locomotiveScroll, activeSection, setActiveSection]);

  return (
    <>
      <div className="relative z-50">
        <Navbar className="pt-16 md:pt-20" onNavLinkClick={handleNavLinkClick} activeSection={activeSection} />
      </div>

      <main data-scroll-container ref={containerRef}>
        <HeroSection id="home" />
        <div className="mt-24">
          <SkillsSection id="skills" />
        </div>
        <div className="mt-24">
          <ProjectsSection id="projects" />
        </div>
        <div className="mt-24">
          <AboutSection id="about" />
        </div>
        <div className="mt-24">
          <ContactSection id="contact" />
        </div>
        <Footer />
      </main>
      
    </>
   
  );
};
