import { Link } from "react-router-dom";
import { ExternalLink, Github, ArrowRight } from "lucide-react";

const featuredProjects = [
	{
		id: 1,
		title: "Movie Recommendation System",
		description:
			"ML-based movie recommendation engine using collaborative filtering",
		image: "/projects/movie-rec.png",
		tags: ["Python", "ML", "Pandas"],
		demoUrl: "https://demo-link.com/movie-rec",
		githubUrl: "https://github.com/yourusername/movie-rec",
	},
	{
		id: 2,
		title: "Sales Analytics Dashboard",
		description:
			"Interactive dashboard showing real-time sales metrics and trends",
		image: "/projects/dashboard.png",
		tags: ["React", "D3.js", "TailwindCSS"],
		demoUrl: "https://demo-link.com/dashboard",
		githubUrl: "https://github.com/yourusername/dashboard",
	},
	{
		id: 3,
		title: "AI Image Generator",
		description: "Generate unique images using stable diffusion models",
		image: "/projects/ai-image.png",
		tags: ["Python", "PyTorch", "React"],
		demoUrl: "https://demo-link.com/ai-image",
		githubUrl: "https://github.com/yourusername/ai-image",
	},
];

export const ProjectsSection = () => {
	return (
		<section
			id="projects"
			className="py-20 bg-background/60 backdrop-blur-sm"
		>
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center mb-12">
					Featured Projects
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
										<a
											href={project.demoUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="text-foreground/80 hover:text-primary transition-colors duration-300"
										>
											<ExternalLink size={20} />
										</a>
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

				<div className="flex justify-center gap-4 mt-12">
					<Link
						to="/projects"
						className="cosmic-button flex items-center gap-2"
					>
						View All Projects
						<ArrowRight size={16} />
					</Link>

					<a
						href="https://github.com/yourusername"
						target="_blank"
						rel="noopener noreferrer"
						className="cosmic-button flex items-center gap-2"
					>
						Check My Github
						<Github size={16} />
					</a>
				</div>
			</div>
		</section>
	);
};
