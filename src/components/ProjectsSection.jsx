// src/components/ProjectsSection.jsx

import { Link } from "react-router-dom";
import { ExternalLink, Code, Github, ArrowRight } from "lucide-react"; 
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const featuredProjects = [
    {
        id: 1,
        title: "Medical Cost Predictions",
        description:
            "A machine learning model forecasting healthcare expenditures to aid financial planning and policy.",
        image: "/projects/medical.png",
        tags: ["Python", "Jupyter", "Pandas"],
        Url: "https://medical-insurance-2002.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
    },
    {
        id: 2,
        title: "Reddit Pulse Analysis",
        description:
            "A Streamlit app analyzing Reddit posts for trends and insights.",
        image: "/projects/speech.png",
        tags: ["React", "Vite", "TailwindCSS", "Python","OpenAI Wisper"],
        Url: "https://redditpulseanalysis.streamlit.app/",
        githubUrl: "https://github.com/leviosa2002/Speech-Analysis",
    },
    {
        id: 3,
        title: "YouTube Analysis 1",
        description: "A full-stack application (React + Python) to extract channel performance metrics and visualize audience engagement trends.",
        image: "/projects/ytflask.png",
        tags: ["Python", "Flask", "React"],
        Url: "https://youtube-analysis-using-react-and-fl.vercel.app/",
        githubUrl: "https://github.com/leviosa2002/Youtube-Analysis-Using-React-and-Flask",
    },
];

export const ProjectsSection = ({id}) => {
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
    
    // Simplify animations for mobile or reduced motion
    const shouldUseSimpleAnimations = prefersReducedMotion || isMobile;
    
    // Optimized container variants
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: shouldUseSimpleAnimations ? 0.1 : 0.2,
                delayChildren: shouldUseSimpleAnimations ? 0.1 : 0.2,
                duration: shouldUseSimpleAnimations ? 0.3 : 0.5
            }
        }
    };
    
    // Optimized item variants
    const item = {
        hidden: { opacity: 0, y: shouldUseSimpleAnimations ? 10 : 20 },
        show: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: shouldUseSimpleAnimations ? 0.3 : 0.5,
                type: "tween" // Use tween instead of spring for better performance
            }
        }
    };

    return (
        <section
            data-scroll-section
            data-scroll
            id={id}
            className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
        >
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: shouldUseSimpleAnimations ? 0.3 : 0.8 }}
                viewport={{ once: true, margin: "-100px" }}
                className="container mx-auto px-4"
            >
                <motion.h2 
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: shouldUseSimpleAnimations ? 0.3 : 0.5 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold text-center mb-12"
                >
                    Featured Projects
                </motion.h2>

                <motion.div 
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {featuredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={item}
                            whileHover={shouldUseSimpleAnimations ? {} : { y: -5 }}
                            className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <motion.img
                                    whileHover={shouldUseSimpleAnimations ? {} : { scale: 1.1 }}
                                    transition={{ duration: 0.3, type: "tween" }}
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <motion.span
                                            key={index}
                                            initial={shouldUseSimpleAnimations ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                                            animate={shouldUseSimpleAnimations ? { opacity: 1 } : { opacity: 1, scale: 1 }}
                                            transition={{ 
                                                delay: shouldUseSimpleAnimations ? 0.05 * index : 0.1 * index,
                                                duration: 0.2,
                                                type: "tween"
                                            }}
                                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4">
                                    <div className="flex space-x-3">
                                        {project.Url && (
                                            <motion.a
                                                whileHover={shouldUseSimpleAnimations ? { scale: 1.1 } : { scale: 1.2, rotate: 5 }}
                                                transition={{ duration: 0.2, type: "tween" }}
                                                href={project.Url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                            >
                                                <ExternalLink size={20} />
                                            </motion.a>
                                        )}
                                        <motion.a
                                            whileHover={shouldUseSimpleAnimations ? { scale: 1.1 } : { scale: 1.2, rotate: 5 }}
                                            transition={{ duration: 0.2, type: "tween" }}
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

                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                        delay: shouldUseSimpleAnimations ? 0.2 : 0.5, 
                        duration: shouldUseSimpleAnimations ? 0.3 : 0.5 
                    }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <motion.div 
                        whileHover={shouldUseSimpleAnimations ? { scale: 1.02 } : { scale: 1.05 }} 
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "tween", duration: 0.2 }}
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg
                                    bg-[#8b5cf6] text-white
                                    hover:bg-[#7e4ad4]
                                    transition-all duration-300
                                    focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/50 focus:ring-offset-2 focus:ring-offset-background
                                    hover:ring-4 hover:ring-[#8b5cf6]/50 hover:ring-offset-2 hover:ring-offset-background"
                        >
                            View All Projects
                            <motion.div 
                                animate={shouldUseSimpleAnimations ? {} : { x: [0, 5, 0] }}
                                transition={{ 
                                    repeat: shouldUseSimpleAnimations ? 0 : Infinity, 
                                    duration: 1.5 
                                }}
                            >
                                <ArrowRight size={20} className="ml-1" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};