import { motion } from "framer-motion";

export const ProjectCard = ({ title, description, image, tags, github, demo }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300">
      <motion.div className="aspect-video overflow-hidden">
        <motion.img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </motion.div>
      
      <div className="p-6 space-y-4">
        <motion.h3 
          className="text-xl font-semibold">{title}</motion.h3>
        <motion.p className="text-muted-foreground">{description}</motion.p>
        
        <motion.div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <motion.span 
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex gap-4 pt-4">
          <motion.a 
            whileHover={{ x: 3 }}
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            GitHub →
          </motion.a>
          {demo && (
            <motion.a 
              whileHover={{ x: 3 }}
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Live Demo →
            </motion.a>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};
