import { Link } from "react-router-dom";
import { ProjectCard } from "./ProjectCard";

const featuredProjects = [
  {
    title: "AI Disease Prediction",
    description:
      "Machine learning model to predict diseases from symptoms using Python and scikit-learn",
    image: "/projects/ai-health.jpg",
    tags: ["Python", "Machine Learning", "scikit-learn"],
    link: "https://github.com/yourusername/project1",
  },
  {
    title: "E-commerce Dashboard",
    description:
      "Interactive dashboard design for tracking sales and inventory",
    image: "/projects/dashboard.jpg",
    tags: ["UI/UX", "Figma", "Dashboard"],
    link: "https://github.com/yourusername/project2",
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio built with React and TailwindCSS",
    image: "/projects/portfolio.jpg",
    tags: ["React", "TailwindCSS", "Web Development"],
    link: "https://github.com/yourusername/project3",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="cosmic-button inline-flex items-center gap-2 px-6 py-3"
          >
            Check More Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};
