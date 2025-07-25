import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

// Optimized variants to reduce unnecessary re-renders
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { 
      delay: custom * 0.1,
      duration: 0.4,
      ease: "easeOut"
    }
  })
};

export const AboutSection = ({id}) => {
  return (
    <section
      data-scroll-section
      data-scroll
      id={id}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
    >
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto max-w-5xl"
      >
        <motion.h2
          variants={textVariants}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About<span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            variants={textVariants}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Data Analyst | UI/UX Designer | Web Development Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate <strong>Data Analyst</strong> with a keen eye for insights, a{" "}
              <strong>UI/UX Designer</strong> focused on creating intuitive experiences, and an
              enthusiastic learner in <strong>Web Development</strong>. I leverage my skills to
              build meaningful digital products.
            </p>

            <p className="text-muted-foreground">
              My journey includes hands-on experience in extracting valuable information from data,
              designing user-centric interfaces, and continuously expanding my proficiency in web
              technologies. I also delve into creative tools like <strong>Blender</strong> for 3D
              design and <strong>Adobe Premiere Pro</strong> for video editing, adding unique
              dimensions to my projects.
            </p>

            <motion.div 
              variants={textVariants} 
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.2 }}
                href="#contact" 
                className="cosmic-button"
              >
                Get In Touch
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween", duration: 0.2 }}
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {[
              {
                icon: <Briefcase className="h-6 w-6 text-primary" />,
                title: "Data Analysis",
                description: "Proficient in extracting insights, creating visualizations, and reporting with tools like Python and SQL."
              },
              {
                icon: <User className="h-6 w-6 text-primary" />,
                title: "UI/UX Design",
                description: "Designing intuitive and user-centered interfaces with Figma and foundational design principles."
              },
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "Web Development & Creative Tools",
                description: "Learning responsive web development and creating visual content using Blender and Adobe Premiere Pro."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "tween", duration: 0.2 }}
                className="gradient-border p-6 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {card.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{card.title}</h4>
                    <p className="text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};