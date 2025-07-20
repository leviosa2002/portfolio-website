import { useState } from "react";
import { cn } from "@/lib/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faCode, faTerminal, faDatabase, faCloud, faChartBar, faPalette,
  faBlender, faSquareRootVariable, faFileExcel, faFilm, faServer, faTableList,
  faFileCode, faC
} from '@fortawesome/free-solid-svg-icons';

import {
  faPython, faHtml5, faCss3Alt, faJs, faReact, faNodeJs, faGitAlt, faGithub,
  faDocker, faFigma, faLinux, faAws, faReadme
} from '@fortawesome/free-brands-svg-icons';


const skillCategories = [
  { id: "all", name: "All Skills" },
  { id: "languages", name: "💻 Languages" },
  { id: "libraries_frameworks", name: "📚 Libraries & Frameworks" },
  { id: "cloud_databases", name: "☁️ Cloud & Databases" },
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

  // Libraries & Frameworks
  { name: "TensorFlow", icon: faCode, category: "libraries_frameworks" },
  { name: "PyTorch", icon: faCode, category: "libraries_frameworks" },
  { name: "OpenCV", icon: faCode, category: "libraries_frameworks" },
  { name: "Flask", icon: faServer, category: "libraries_frameworks" },
  { name: "Django", icon: faServer, category: "libraries_frameworks" },
  { name: "NumPy", icon: faCode, category: "libraries_frameworks" },
  { name: "Pandas", icon: faTableList, category: "libraries_frameworks" },
  { name: "Streamlit", icon: faReadme, category: "libraries_frameworks" },

  // Cloud & Databases
  { name: "MySQL", icon: faDatabase, category: "cloud_databases" },
  { name: "SQLite", icon: faDatabase, category: "cloud_databases" },
  { name: "MongoDB", icon: faDatabase, category: "cloud_databases" },
  { name: "AWS", icon: faAws, category: "cloud_databases" },

  // Data & BI Tools
  { name: "Azure", icon: faCloud, category: "data_bi_tools" },
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
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillsToDisplay =
    activeCategory === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeCategory);

  const renderSkillCard = (skill) => (
    <div key={skill.name} className="gradient-border p-4 card-hover flex flex-col items-center justify-center text-center">
      <div className="p-3 rounded-full bg-primary/10 mb-2"> {/* Added mb-2 for spacing */}
        <FontAwesomeIcon icon={skill.icon} className="h-6 w-6 text-primary" />
      </div>
      <p className="font-medium text-sm text-foreground">{skill.name}</p> {/* Re-added skill name */}
    </div>
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category.name.startsWith("All") ? "All" : category.name.split(' ')[1] || category.name}
            </button>
          ))}
        </div>

        <div className="space-y-12">
          {activeCategory === "all" ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skillsToDisplay.map(renderSkillCard)}
            </div>
          ) : (
            <div className="bg-card p-6 rounded-lg shadow-xs">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center">
                {skillCategories.find(cat => cat.id === activeCategory)?.name}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {skillsToDisplay.map(renderSkillCard)}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};