export const ProjectCard = ({ title, description, image, tags, github, demo }) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-4">
          <a 
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            GitHub →
          </a>
          {demo && (
            <a 
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
