import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const ProjectNavbar = () => {
  return (
    <nav className="fixed w-full z-40 transition-all duration-300 py-5">
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="text-xl font-bold text-primary flex items-center"
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ankit's</span>{" "}
            Portfolio
          </span>
        </Link>

        <Link
          to="/"
          className="cosmic-button flex items-center gap-2"
        >
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        {/* <div className="cosmic-button flex items-center gap-2" onClick={()=>{history.back()}}>
          <ArrowLeft size={16} />
          Back to Home
        </div> */}
      </div>
    </nav>
  );
};
