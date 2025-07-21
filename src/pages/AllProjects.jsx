import { useEffect, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Footer } from "../components/Footer";
import { ProjectNavbar } from "../components/ProjectNavbar";

// Removed "All" from categories
const categories = ["Data Analysis", "Machine Learning", "UI/UX", "Web Dev"];

const allProjects = [
    {
        id: 1,
        title: "Medical Cost Predictions",
        description:
            "A machine learning model forecasting healthcare expenditures to aid financial planning and policy.",
        image: "/projects/medical.png",
        tags: ["Python", "Jupyter", "Pandas"],
        githubUrl: "https://github.com/leviosa2002/Medical_Cost_Prediction",
        category: ["Data Analysis"]
    },
    {
        id: 2,
        title: "Speech Analysis",
        description:
            "A full-stack application (React + Python) that processes and extracts insights from audio data.",
        image: "/projects/speech.png",
        tags: ["React", "Vite", "TailwindCSS", "Python", "OpenAI Wisper"],
        githubUrl: "https://github.com/leviosa2002/Speech-Analysis",
        category: ["Machine Learning", "Web Dev"]
    },
    {
        id: 3,
        title: "YouTube Analysis 1",
        description: "A full-stack application (React + Python) to extract channel performance metrics and visualize audience engagement trends.",
        image: "/projects/ytflask.png",
        tags: ["Python", "Flask", "React"],
        Url: "https://youtube-analysis-using-react-and-fl.vercel.app/",
        githubUrl: "https://github.com/leviosa2002/Youtube-Analysis-Using-React-and-Flask",
        category: ["Data Analysis", "Web Dev"]
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
];

export const AllProjects = () => {
    // Default activeCategory to the first item in the categories array
    const [activeCategory, setActiveCategory] = useState(categories[0]);

    const filteredProjects = allProjects.filter(project => {
        // Filter based on whether the activeCategory is included in the project's category array
        // project.category is guaranteed to be an array now.
        return project.category.includes(activeCategory);
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <ParticlesBackground />

            {/* Theme Toggle and New Navbar */}
            <div className="relative z-50">
                
                <ProjectNavbar />
            </div>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-20 relative z-10">
                <h1 className="text-4xl font-bold text-center mb-12">All Projects</h1>
                
                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-4 py-2 rounded-full transition-all ${
                                activeCategory === category 
                                    ? "bg-primary text-white" 
                                    : "bg-card hover:bg-primary/20"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/10"
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="text-xs rounded-full bg-primary/10 text-primary px-3 py-1">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex gap-3">
                                        {
                                            project.Url && (
                                                <a
                                                    href={project.Url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                                >
                                                    <ExternalLink size={20} />
                                                </a>
                                            )
                                        }
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
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};