// src/components/ParticlesBackground.jsx

import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    // Set initial value
    checkMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // console.log("Particles loaded:", container);
  }, []);

  // Optimized options based on device type
  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: isMobile ? 30 : 60, // Lower FPS on mobile
    interactivity: {
      events: {
        onClick: { enable: false },
        onHover: { enable: false },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        enable: false, // Disable links for a cleaner blinking effect
      },
      move: {
        enable: false, // Disable movement
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: isMobile ? 50 : 100, // Fewer particles on mobile
      },
      opacity: {
        value: 0.5, // Base opacity
        animation: {
          enable: true,
          speed: isMobile ? 0.7 : 1, // Slower animation on mobile
          minimumValue: 0.1,
          sync: false,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: isMobile ? 2 : 3 }, // Smaller particles on mobile
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles-background"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
      className="absolute inset-0 z-0"
    />
  );
};
