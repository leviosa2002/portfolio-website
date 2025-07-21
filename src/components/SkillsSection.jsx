import { useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid icons
import {
  faCode, faTerminal, faDatabase, faChartBar, faPalette,
  faBlender, faSquareRootVariable, faFileExcel, faFilm, faServer, faTableList,
  faFileCode, faC,
} from '@fortawesome/free-solid-svg-icons';

// Brand icons
import {
  faPython, faHtml5, faCss3Alt, faGitAlt, faGithub,
  faDocker, faFigma, faLinux, faAws, faReadme
} from '@fortawesome/free-brands-svg-icons';

const skillCategories = [
  { id: "data_analytics", name: "📊 Data Analytics" },
  { id: "machine_learning", name: "🤖 Machine Learning & AI" },
  { id: "backend", name: "🗄️ Databases & Backend" },
  { id: "web_dev", name: "🌐 Web Development" },
  { id: "creative", name: "🎨 Design & Creative Tools" },
];

const allSkills = [
  // Data Analytics
  { name: "Python", icon: faPython, category: "data_analytics" },
  { name: "Excel", icon: faFileExcel, category: "data_analytics" },
  { name: "Power BI", icon: faChartBar, category: "data_analytics" },
  { name: "Tableau", icon: faChartBar, category: "data_analytics" },
  { name: "Pandas", icon: faTableList, category: "data_analytics" },
  { name: "NumPy", icon: faCode, category: "data_analytics" },
  { name: "Seaborn", icon: faCode, category: "data_analytics" },
  { name: "Matplotlib", icon: faCode, category: "data_analytics" },
  { name: "Jupyter Notebook", icon: faFileCode, category: "data_analytics" },
  { name: "Streamlit", icon: faReadme, category: "data_analytics" },

  // Machine Learning & AI
  { name: "Scikit-learn", icon: faCode, category: "machine_learning" },
  { name: "TensorFlow", icon: faCode, category: "machine_learning" },
  { name: "PyTorch", icon: faCode, category: "machine_learning" },
  { name: "OpenCV", icon: faCode, category: "machine_learning" },

  // Databases & Backend
  { name: "MySQL", icon: faDatabase, category: "backend" },
  { name: "SQLite", icon: faDatabase, category: "backend" },
  { name: "MongoDB", icon: faDatabase, category: "backend" },
  { name: "Flask", icon: faServer, category: "backend" },
  { name: "Django", icon: faServer, category: "backend" },
  { name: "Docker", icon: faDocker, category: "backend" },
  { name: "AWS Basics", icon: faAws, category: "backend" },

  // Web Development
  { name: "HTML", icon: faHtml5, category: "web_dev" },
  { name: "CSS", icon: faCss3Alt, category: "web_dev" },
  { name: "JavaScript (basics)", icon: faCode, category: "web_dev" },
  { name: "Git", icon: faGitAlt, category: "web_dev" },
  { name: "GitHub", icon: faGithub, category: "web_dev" },
  { name: "VS Code", icon: faTerminal, category: "web_dev" },
  { name: "Linux", icon: faLinux, category: "web_dev" },

  // Design & Creative Tools
  { name: "Figma", icon: faFigma, category: "creative" },
  { name: "Blender", icon: faBlender, category: "creative" },
  { name: "Canva", icon: faPalette, category: "creative" },
  { name: "Premiere Pro", icon: faFilm, category: "creative" },
];

export const SkillsSection = ({id}) => {
  const [activeCategory, setActiveCategory] = useState("data_analytics");

  const skillsToDisplay = allSkills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
  data-scroll-section
  data-scroll
  id={id}
  className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 overflow-hidden"
>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        {/* --- Filter Buttons --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                "cursor-pointer",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary/70 text-foreground hover:bg-secondary hover:text-primary"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* --- Skill Cards --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsToDisplay.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-2 rounded-lg shadow-xl border border-border transition-transform duration-300 hover:scale-[1.03]"
            >
              <div
                className={cn(
                  "p-4 flex flex-col items-center justify-center text-center rounded-lg bg-muted",
                  "relative group transition-all duration-300 ease-in-out",
                  "dark:hover:ring-2 dark:hover:ring-[#8b5cf6] dark:hover:ring-offset-1 dark:hover:ring-offset-background"
                )}
              >
                <div className="p-3 rounded-full bg-primary/10 mb-2">
                  <FontAwesomeIcon icon={skill.icon} className="h-6 w-6 text-primary" />
                </div>
                <p className="font-medium text-sm text-foreground">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};