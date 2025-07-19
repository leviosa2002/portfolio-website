import { ArrowDown } from "lucide-react";
import "../styles/card.css";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* If you are using a background component, keep its import and uncomment it here: */}
      {/* import { ParticlesBackground } from './ParticlesBackground'; */}
      {/* <ParticlesBackground /> */}

      <div className="container max-w-5xl mx-auto text-center z-10">
        {/* Main content container for text and photo */}
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          {/* Left side: Text Content */}
          <div className="space-y-6 md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                {" "}
                Ankit
              </span>
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                {" "}
                Prasad
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
              I specialize in unlocking insights through **Data Analysis** and leveraging those findings to craft intuitive digital experiences as a **UI/UX Designer**. My passion lies in solving real-world problems and creating impactful solutions, often integrating **Machine Learning** concepts to enhance functionality. I'm continuously expanding my skillset with full-stack web development and explore creative expression through video editing with Adobe Premiere Pro and 3D design with Blender.
            </p>

            <div className="pt-4 opacity-0 animate-fade-in-delay-4 text-center md:text-left">
              <a href="#projects" className="cosmic-button">
                View My Work
              </a>
            </div>
          </div>

          {/* Right side: Glowing Card with Photo */}
          <div className="mt-12 md:mt-0 md:w-1/3 flex justify-center">
            <div className="card rounded-full h-40 w-40 md:h-56 md:w-56" role="button">
              <span className="glow"></span>
              <div className="inner">
                <img
                  src="/projects/profile_photo.jpg"
                  alt="Ankit Prasad Profile"
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};