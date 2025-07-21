import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef, useState } from "react";

export const Home = () => {
  const containerRef = useRef(null);
  const [scrollPos,setScrollPos] = useState(0);
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <ParticlesBackground />

      {/* Container for Navbar and ThemeToggle to manage their relative positions */}    
      <div className="relative z-50"> {/* Higher z-index to ensure it's on top of content and background */}
        {/*
          Theme Toggle - Position it at the top right with some padding.
          We'll use absolute positioning relative to this new container.
        */}
        <div className="absolute top-4 right-4 md:top-6 md:right-6"> {/* Adjust top/right values as needed */}
          {/* <ThemeToggle /> */}
        </div>

        {/* Navbar - Ensure it has top padding to account for the ThemeToggle */}
        <Navbar className="pt-16 md:pt-20" /> {/* Add padding-top to the Navbar. Adjust 'pt-16' (or more) based on your ThemeToggle's size and desired spacing. */}
      </div>

      {/* Main Content */}
      <LocomotiveScrollProvider
      options={{
        smooth: true, // Enable smooth scrolling
        // ... any other Locomotive Scroll options you want to configure
        // See https://scroll.locomotive.ca/docs/options for full list
      }}

      watch={
        [
          // Dependencies to watch for layout changes
          // e.g., if you have data fetching that changes content height,
          // include a state variable here that updates on data load.
          // For React Router, you might watch `location.pathname` or `router.asPath` (for Next.js)
        ]
      }
      containerRef={containerRef} // Pass the ref to the provider
    >

      <main data-scroll-container ref={containerRef} >
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
    </LocomotiveScrollProvider>

      {/* Footer */}
      <Footer />
    </div>
  );
};
