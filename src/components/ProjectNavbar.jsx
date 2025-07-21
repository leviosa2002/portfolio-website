import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

export const ProjectNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Not used, can be removed


    return (
        <nav
            className={cn(
                "fixed w-full z-40 transition-all duration-300",
                "py-3 bg-background backdrop-blur-md shadow-xs" 
            )}
        >
            <div className="container flex w-full gap-5"> {/* Changed justify-between to justify-start */}
                <Link
                    to="/"
                    className="text-xl font-bold text-primary flex items-center mr-8" // Added mr-8 for spacing from the next link
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ankit's</span>{" "}
                        Portfolio
                    </span>
                </Link>
                <p className="ml-auto"></p>
                <Link
                    to="/"
                    className="cosmic-button flex items-center gap-2"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </Link>
                <ThemeToggle />
                    {/* <div className="absolute top-4 right-4 md:top-6 md:right-6">
                        <ThemeToggle />
                    </div> */}
            </div>
        </nav>
    );
};