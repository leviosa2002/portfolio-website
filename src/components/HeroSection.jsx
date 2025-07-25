import { ArrowDown } from "lucide-react";
import "../styles/card.css";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroSection = ({id}) => {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Simpler animations for mobile/reduced motion users
  const shouldUseSimpleAnimations = prefersReducedMotion || isMobile;
  
  const fadeInProps = (delay = 0) => shouldUseSimpleAnimations 
    ? { 
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.3, delay }
      } 
    : {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, delay }
      };
      
  const imageProps = shouldUseSimpleAnimations
    ? {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5, delay: 0.3 }
      }
    : {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.8, type: "spring", stiffness: 100 }
      };
      
  const imageHoverProps = shouldUseSimpleAnimations
    ? { whileHover: { scale: 1.03 } }
    : { whileHover: { scale: 1.05, rotate: 5 } };

  return (
    <section
      data-scroll-section
      data-scroll
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="flex flex-col md:flex-row items-center justify-center md:space-x-12">
          <motion.div
            {...fadeInProps()}
            className="space-y-6 md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <motion.span
                {...fadeInProps()}
                className="inline-block"
              >
                Hi, I'm
              </motion.span>
              <motion.span
                {...fadeInProps(0.1)}
                className="text-primary inline-block"
              >
                {" "}
                Ankit
              </motion.span>
              <motion.span
                {...fadeInProps(0.2)}
                className="text-gradient ml-2 inline-block"
              >
                {" "}
                Prasad
              </motion.span>
            </h1>

            <motion.p
              {...fadeInProps(0.3)}
              className="text-lg md:block md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0"
            >
              <strong className="font-bold">Data Analyst</strong> &amp;{" "}
              <strong className="font-bold">UI/UX Designer</strong> focused on crafting impactful digital
              solutions, integrating <strong className="font-bold">Machine Learning</strong> and building
              out full-stack web experiences.
            </motion.p>

            <motion.div
              {...fadeInProps(0.4)}
              className="pt-4 text-center md:text-left"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "tween", duration: 0.2 }}
                href="#projects" 
                className="cosmic-button">
                View My Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            {...imageProps}
            className="mt-12 md:mt-0 md:w-1/3 flex justify-center">
            <motion.div
              {...imageHoverProps}
              transition={{ type: "tween", duration: 0.2 }}
              className="card rounded-full h-40 w-40 md:h-56 md:w-56"
              role="button">
              <div className="inner rounded-[50%] overflow-hidden">
                <img
                  src="/projects/profile_photo.jpg"
                  alt="Ankit Prasad Profile"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        onClick={()=>{
          const height = window.pageYOffset
          window.scrollTo(0,height+100)
        }}
        className="cursor-pointer absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, repeatType: "loop" }}
        >
          <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
};