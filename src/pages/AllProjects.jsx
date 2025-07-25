import { useEffect, useState, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Footer } from "../components/Footer";
import { ProjectNavbar } from "../components/ProjectNavbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Data Analysis", "Machine Learning", "UI/UX", "Web Dev"];

const allProjects = [  {
        id: 1,
        title: "Medical Cost Predictions",
        description:
            "A machine learning model forecasting healthcare expenditures to aid financial planning and policy.",
        image: "/projects/medical.png",
        tags: ["Python", "Streamlit", "Pandas"],
        Url: "https://medical-insurance-2002.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
        category: ["Machine Learning", "Data Analysis"]
    },
    {
        id: 2,
        title: "Speech Analysis",
        description:
            "A full-stack application (React + Python) that processes and extracts insights from audio data.",
        image: "/projects/speech.png",
        tags: ["React", "Vite", "TailwindCSS", "Python", "OpenAI Wisper"],
        githubUrl: "https://github.com/leviosa2002/Speech-Analysis",
        category: ["Machine Learning"]
    },
    {
        id: 3,
        title: "YouTube Analysis 1",
        description: "A full-stack application (React + Python) to extract channel performance metrics and visualize audience engagement trends.",
        image: "/projects/ytflask.png",
        tags: ["Python", "Flask", "React"],
        Url: "https://youtube-analysis-using-react-and-fl.vercel.app/",
        githubUrl: "https://github.com/leviosa2002/Youtube-Analysis-Using-React-and-Flask",
        category: ["Data Analysis"]
    },
    {
        id: 4,
        title: "YouTube Analysis 2",
        description: "A full-stack application (React + Python) to extract channel performance metrics and visualize audience engagement trends with detailed sentiment and toxicity analysis.",
        image: "/projects/ytfastapi.png",
        tags: ["React", "TailwindCSS", "Recharts", "Python", "FastAPI", "Vader Sentiment", "KeyBERT"],
        githubUrl: "https://github.com/leviosa2002/Youtube-Analysis-with-React-FastAPI",
        category: ["Machine Learning", "Data Analysis", "Web Dev", "UI/UX"]
    },
    {
        id: 5,
        title: "Sales Analysis",
        description:
            "Identified trends and forecasts to optimize sales strategies and boost revenue",
        image: "/projects/sales.png",
        tags: ["Python", "Jupyter", "Pandas"],
        Url: "https://sales-analysis-2002.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
        category: ["Data Analysis"]
    },
    {
        id: 6,
        title: "Breast Cancer Analysis",
        description:
            "Applied data science to improve detection and understand disease progression.",
        image: "/projects/breastcancer.png",
        tags: ["Python", "Jupyter", "Pandas"],
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
        category: ["Data Analysis", "Machine Learning"]
    },
    {
        id: 7,
        title: "Reddit Pulse Analysis",
        description:
            "A Streamlit app analyzing Reddit posts for trends and insights.",
        image: "/projects/reddit.png",
        tags: ["React", "Vite", "TailwindCSS", "Python","OpenAI Wisper"],
        Url: "https://redditpulseanalysis.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Speech-Analysis",
        category: ["Machine Learning", "Data Analysis"]
    },
    {
        id: 8,
        title: "Competex",
        description:
            "A Frontend prototype for a competition platform, built with Next and TailwindCSS.",
        image: "/projects/competex.png",
        tags: ["React", "Vite", "TailwindCSS", "Python","OpenAI Wisper"],
        Url: "https://redditpulseanalysis.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Speech-Analysis",
        category: ["UI/UX", "Web Dev"]
    },
  
  ];

// Define animations with variants for better performance
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const containerRef = useRef(null);

  const filteredProjects = allProjects.filter((project) =>
    project.category.includes(activeCategory)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticlesBackground />

      <LocomotiveScrollProvider
        options={{ smooth: true }}
        containerRef={containerRef}
        watch={[]}
      >
      <div className="relative z-50">
        <ProjectNavbar />
      </div>

      
        <main
          data-scroll-container
          ref={containerRef}
          className="relative z-10"
        >
          <section data-scroll-section>
            <div className="container mx-auto px-4 py-20">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold text-center mb-12"
              >
                All Projects
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4 mb-12"
              >
                {categories.map((category, index) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-full transition-all ${
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-card hover:bg-primary/20"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </motion.div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      variants={fadeInUp}
                      custom={index}
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.2, type: "tween" }}
                      className="group bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10"
                      data-scroll
                    >
                      <motion.div
                        className="h-40 overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, idx) => (
                            <motion.span
                              key={tag}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.05 * idx, duration: 0.2 }}
                              whileHover={{ scale: 1.1 }}
                              className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                        <div className="flex justify-between">
                          <div className="flex gap-3">
                            {project.Url && (
                              <motion.a
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                                href={project.Url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                              >
                                <ExternalLink size={20} />
                              </motion.a>
                            )}
                            <motion.a
                              whileHover={{ scale: 1.2 }}
                              transition={{ duration: 0.2 }}
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            >
                              <Github size={20} />
                            </motion.a>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>

          
            <Footer />
          
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
};
