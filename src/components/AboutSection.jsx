import { Briefcase, Code, User } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = ({id}) => {
  return (
    <section
  data-scroll-section
  data-scroll
  id={id}
  className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
>
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: "100%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About<span className="text-primary"> Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Data Analysis</h4>
                  <p className="text-muted-foreground">
                    Proficient in extracting insights, creating visualizations, and reporting with
                    tools like Python and SQL.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                    Designing intuitive and user-centered interfaces with Figma and foundational
                    design principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development & Creative Tools</h4>
                  <p className="text-muted-foreground">
                    Learning responsive web development and creating visual content using{" "}
                    <strong>Blender</strong> and <strong>Adobe Premiere Pro</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};