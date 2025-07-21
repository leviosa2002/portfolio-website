// src/components/ProjectsSection.jsx

import { Link } from "react-router-dom";
import { ExternalLink, Code, Github, ArrowRight } from "lucide-react"; // ArrowRight is for the "View All Projects" button

const featuredProjects = [
    {
        id: 1,
        title: "Medical Cost Predictions",
        description:
            "A machine learning model forecasting healthcare expenditures to aid financial planning and policy.",
        image: "/projects/medical.png",
        tags: ["Python", "Jupyter", "Pandas"],
        //demoUrl: "https://demo-link.com/movie-rec",
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
    },
    {
        id: 2,
        title: "Speech Analysis",
        description:
            "A full-stack application (React + Python) that processes and extracts insights from audio data.",
        image: "/projects/speech.png",
        tags: ["React", "Vite", "TailwindCSS", "Python","OpenAI Wisper"],
        //demoUrl: "https://demo-link.com/dashboard",
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

export const ProjectsSection = () => {
    return (
        <section data-scroll-section
            id="projects"
            className="py-20 bg-background/60 backdrop-blur-sm"
        >
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Featured Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6 space-y-4">
                                <h3 className="text-xl font-semibold">{project.title}</h3>
                                <p className="text-muted-foreground">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex justify-between items-center pt-4">
                                    <div className="flex space-x-3">
                                        

                                    {project.Url && (
                                    <a
                                        href={project.Url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    )}
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    {/* THIS IS THE CORRECTED "View All Projects" button with the lavender style */}
                    <Link
						to="/projects" // Link correctly goes to /projects
						className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg shadow-lg
									bg-[#8b5cf6] text-white /* Set background to #8b5cf6, text to white for contrast */
									hover:bg-[#7e4ad4] /* Slightly darker shade of #8b5cf6 on hover */
									transition-all duration-300 transform hover:scale-105
									focus:outline-none focus:ring-4 focus:ring-[#8b5cf6]/50 focus:ring-offset-2 focus:ring-offset-background /* Ring color based on button color */
									hover:ring-4 hover:ring-[#8b5cf6]/50 hover:ring-offset-2 hover:ring-offset-background /* Ring color based on button color */
									"
						>
						View All Projects {/* Correct text */}
						<ArrowRight size={20} className="ml-1" /> {/* Correct icon */}
					</Link>
                </div>
            </div>
        </section>
    );
};