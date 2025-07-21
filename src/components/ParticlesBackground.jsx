// src/components/ParticlesBackground.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log("Particles loaded:", container);
  }, []);

  const particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60, // Lower FPS for smoother fading if not much movement
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
        enable: false, // Disable movement if you only want blinking
        // If you want slow, subtle movement WITH blinking, set speed to a very small value like 0.1
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 100, // Maybe more particles for a denser blink effect
      },
      opacity: {
        value: 0.5, // Base opacity
        animation: {
          enable: true, // Enable opacity animation
          speed: 1, // Speed of the fade in/out animation
          minimumValue: 0.1, // Minimum opacity during the fade
          sync: false, // Particles fade independently
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 3 },
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
