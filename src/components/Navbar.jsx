import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle"; 
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = ({ onNavLinkClick, activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    const targetId = href.startsWith('#') ? href.substring(1) : href;

    if (onNavLinkClick) {
      onNavLinkClick(targetId);
    } else {
      console.warn("Navbar: onNavLinkClick prop not provided. Falling back to native scroll.");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
      "fixed w-full z-40 transition-all duration-300",
      "py-3 bg-background backdrop-blur-md shadow-xs"
    )}>
      <div className="container flex items-center justify-between">
        <motion.a
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold text-primary flex items-center cursor-pointer"
          onClick={(e) => handleClick(e, '#home')}
          href="#home"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground"> Ankit's </span>{" "}
            Portfolio
          </span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, key) => {
            const itemId = item.href.substring(1);
            const isActive = activeSection === itemId;

            return (
              <motion.a
                key={key}
                href={item.href}
                whileHover={{ scale: 1.1 }}
                className={cn(
                  "text-foreground/80 hover:text-primary transition-colors duration-300",
                  {
                    "font-bold underline text-primary": isActive,
                  }
                )}
                onClick={(e) => handleClick(e, item.href)}
              >
                {item.name}
              </motion.a>
            );
          })}
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Toggle Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "md:hidden"
              )}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, staggerChildren: 0.1 }}
                className="flex flex-col space-y-8 text-xl">
                {navItems.map((item, key) => {
                  const itemId = item.href.substring(1);
                  const isActive = activeSection === itemId;

                  return (
                    <motion.a
                      key={key}
                      href={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * key }}
                      whileHover={{ scale: 1.1, x: 5 }}
                      className={cn(
                        "text-foreground/80 hover:text-primary transition-colors duration-300",
                        {
                          "font-bold underline text-primary": isActive,
                        }
                      )}
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.name}
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};
