import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { motion } from "framer-motion";

export const ProjectNavbar = () => {
    // Remove unused state
    // const [isMenuOpen, setIsMenuOpen] = useState(false); 

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                "py-3 bg-background backdrop-blur-md shadow-xs" 
            )}
        >
            <div className="container flex w-full gap-5">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Link
                        to="/"
                        className="text-xl font-bold text-primary flex items-center mr-8"
                    >
                        <span className="relative z-10">
                            <span className="text-glow text-foreground">Ankit's</span>{" "}
                            Portfolio
                        </span>
                    </Link>
                </motion.div>
                <p className="ml-auto"></p>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "tween", duration: 0.2 }}
                >
                    <Link
                        to="/"
                        className="cosmic-button flex items-center gap-2"
                    >
                        <ArrowLeft size={16} />
                        Back to Home
                    </Link>
                </motion.div>
                <ThemeToggle />
            </div>
        </motion.nav>
    );
};