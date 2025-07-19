import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import { Footer } from "../components/Footer";

const categories = ["All", "Web Dev", "Machine Learning", "UI/UX", "Data Analysis"];

const allProjects = [
  {
    id: 1,
    title: "Personal Portfolio",
    description: "Showcase of my work and skills",
    image: "/projects/portfolio.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://demo-link.com/portfolio",
    githubUrl: "https://github.com/yourusername/portfolio",
    category: "Web Dev"
  },
  {
    id: 2,
    title: "AI Chatbot",
    description: "Conversational AI using GPT-3",
    image: "/projects/chatbot.png",
    tags: ["Python", "Flask", "OpenAI"],
    demoUrl: "https://demo-link.com/chatbot",
    githubUrl: "https://github.com/yourusername/chatbot",
    category: "Machine Learning"
  },
  {
    id: 3,
    title: "E-commerce Site",
    description: "Online store with payment integration",
    image: "/projects/ecommerce.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://demo-link.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
    category: "Web Dev"
  },
  {
    id: 4,
    title: "Personal Finance Dashboard",
    description: "Track expenses and investments with interactive charts",
    image: "/projects/finance.png",
    tags: ["React", "ChartJS", "Firebase"],
    demoUrl: "https://demo-link.com/finance",
    githubUrl: "https://github.com/yourusername/finance",
    category: "Web Dev"
  },
  // Add more projects here
];

export const AllProjects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = allProjects.filter(project => 
    activeCategory === "All" || project.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <ParticlesBackground />

      {/* Navbar and Theme Toggle Container */}
      <div className="relative z-50">
        <div className="absolute top-4 right-4 md:top-6 md:right-6">
          <ThemeToggle />
        </div>
        <Navbar className="pt-16 md:pt-20" />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
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
              className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
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
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:underline">
                    <Github className="w-4 h-4 inline-block" />
                  </a>
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
