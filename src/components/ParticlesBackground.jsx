// src/components/ParticlesBackground.jsx

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // This loads the 'slim' bundle for smaller file size

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    // This function is called when the Particles instance is initialized.
    // You can load different bundles (full, slim, etc.) here.
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // This function is called once the Particles instance has loaded.
    console.log("Particles loaded:", container);
  }, []);

  // Define the configuration options for your particles
  const particlesOptions = {
    background: {
      color: {
        value: "transparent", // Make the background of the particles transparent
      },
    },
    fpsLimit: 120, // Frames per second limit
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push", // On click, push more particles
        },
        onHover: {
          enable: true,
          mode: "repulse", // On hover, particles will repel
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff", // Color of the particles (white)
      },
      links: {
        color: "#ffffff", // Color of the lines between particles (white)
        distance: 150, // Max distance for lines to appear
        enable: true, // Enable lines
        opacity: 0.5, // Opacity of lines
        width: 1, // Width of lines
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce", // Particles bounce off edges
        },
        random: false,
        speed: 1, // Speed of particles
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80, // Number of particles
      },
      opacity: {
        value: 0.5, // Opacity of particles
      },
      shape: {
        type: "circle", // Shape of particles
      },
      size: {
        value: { min: 1, max: 3 }, // Size range of particles
      },
    },
    detectRetina: true, // Detect retina displays for better quality
  };

  return (
    <Particles
      id="tsparticles-background" // Unique ID for the Particles canvas
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
      className="absolute inset-0 z-0" // Tailwind classes to make it cover the entire parent and be behind other content
    />
  );
};