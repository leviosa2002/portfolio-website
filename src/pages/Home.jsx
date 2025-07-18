import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
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
          <ThemeToggle />
        </div>

        {/* Navbar - Ensure it has top padding to account for the ThemeToggle */}
        <Navbar className="pt-16 md:pt-20" /> {/* Add padding-top to the Navbar. Adjust 'pt-16' (or more) based on your ThemeToggle's size and desired spacing. */}
      </div>

      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
