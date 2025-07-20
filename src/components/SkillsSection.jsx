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
  // { id: "all", name: "All Skills" },
  { id: "languages", name: "💻 Languages" },
  { id: "libraries", name: "📚 Libraries" },
  { id: "frameworks", name: "🧩 Frameworks" },
  { id: "databases", name: "🗄️ Databases" },
  { id: "cloud", name: "☁️ Cloud Platforms" },
  { id: "data_bi_tools", name: "📊 Data & BI Tools" },
  { id: "design_creative", name: "🎨 Design & Creative" },
  { id: "development_tools", name: "🛠️ Development Tools" },
];

const allSkills = [
  // Languages
  { name: "Python", icon: faPython, category: "languages" },
  { name: "C", icon: faC, category: "languages" },
  { name: "C++", icon: faCode, category: "languages" },
  { name: "HTML", icon: faHtml5, category: "languages" },
  { name: "CSS", icon: faCss3Alt, category: "languages" },
  { name: "MATLAB", icon: faSquareRootVariable, category: "languages" },

  // Libraries
  { name: "TensorFlow", icon: faCode, category: "libraries" },
  { name: "PyTorch", icon: faCode, category: "libraries" },
  { name: "OpenCV", icon: faCode, category: "libraries" },
  { name: "NumPy", icon: faCode, category: "libraries" },
  { name: "Pandas", icon: faTableList, category: "libraries" },

  // Frameworks
  { name: "Flask", icon: faServer, category: "frameworks" },
  { name: "Django", icon: faServer, category: "frameworks" },
  { name: "Streamlit", icon: faReadme, category: "frameworks" },

  // Databases
  { name: "MySQL", icon: faDatabase, category: "databases" },
  { name: "SQLite", icon: faDatabase, category: "databases" },
  { name: "MongoDB", icon: faDatabase, category: "databases" },

  // Cloud Platforms
  { name: "AWS", icon: faAws, category: "cloud" },

  // Data & BI Tools
  { name: "Tableau", icon: faChartBar, category: "data_bi_tools" },
  { name: "Excel", icon: faFileExcel, category: "data_bi_tools" },
  { name: "Power BI", icon: faChartBar, category: "data_bi_tools" },

  // Design & Creative
  { name: "Figma", icon: faFigma, category: "design_creative" },
  { name: "Blender", icon: faBlender, category: "design_creative" },
  { name: "Canva", icon: faPalette, category: "design_creative" },
  { name: "Premiere Pro", icon: faFilm, category: "design_creative" },

  // Development Tools
  { name: "Git", icon: faGitAlt, category: "development_tools" },
  { name: "GitHub", icon: faGithub, category: "development_tools" },
  { name: "VS Code", icon: faTerminal, category: "development_tools" },
  { name: "Linux", icon: faLinux, category: "development_tools" },
  { name: "Jupyter", icon: faFileCode, category: "development_tools" },
  { name: "Docker", icon: faDocker, category: "development_tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  const skillsToDisplay = allSkills.filter(
  (skill) => skill.category === activeCategory
);

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
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
              {category.id === "all" ? "All Skills" : category.name}
            </button>
          ))}
        </div>

        {/* --- Skill Cards --- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skillsToDisplay.map((skill) => (
            <div
              key={skill.name}
              className="bg-card p-2rounded-lg shadow-xl border border-border transition-transform duration-300 hover:scale-[1.03]"
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
