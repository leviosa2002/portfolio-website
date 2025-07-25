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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for optimizing scroll performance
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimize scroll options based on device
  const scrollOptions = {
    smooth: true,
    smoothMobile: false,
    smartphone: {
      smooth: false,
      breakpoint: 767,
    },
    tablet: {
      smooth: true,
      breakpoint: 1024,
    },
    // Reduce DOM calculations
    lerp: isMobile ? 0.15 : 0.1,
    getDirection: true,
    getSpeed: false, // Disable speed calculation for performance
    resetNativeScroll: true
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />

      <LocomotiveScrollProvider
        options={scrollOptions}
        containerRef={containerRef}
        watch={[]}
      >
        <ScrollContent
          containerRef={containerRef}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isMobile={isMobile}
        />
      </LocomotiveScrollProvider>
    </div>
  );
};

// Inner scroll-aware content
const ScrollContent = ({ containerRef, activeSection, setActiveSection, isMobile }) => {
  const { scroll: locomotiveScroll } = useLocomotiveScroll();
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current = locomotiveScroll;
  }, [locomotiveScroll]);

  // Optimize scroll handler with throttling
  const handleNavLinkClick = useCallback((targetId) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo(`#${targetId}`, {
        duration: isMobile ? 800 : 1000, // Shorter duration on mobile
        easing: [0.645, 0.045, 0.355, 1.000],
        offset: -80,
      });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [isMobile]);

  // Throttle scroll events to improve performance
  useEffect(() => {
    if (!locomotiveScroll) return;

    let lastUpdate = 0;
    const throttleTime = isMobile ? 200 : 100; // Increase throttle on mobile
    
    const handleScroll = (instance) => {
      const now = performance.now();
      if (now - lastUpdate < throttleTime) return;
      lastUpdate = now;

      let currentActive = null;
      let minDistance = Infinity;

      // Process only visible elements for efficiency
      Object.entries(instance.currentElements).forEach(([key, element]) => {
        const el = element.el;
        if (!el.id) return;
        
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
          const distance = Math.abs(rect.top);
          if (distance < minDistance) {
            minDistance = distance;
            currentActive = el.id;
          }
        }
      });

      if (currentActive && currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    locomotiveScroll.on('scroll', handleScroll);
    return () => locomotiveScroll.off('scroll', handleScroll);
  }, [locomotiveScroll, activeSection, setActiveSection, isMobile]);

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
