import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <section
      data-scroll-section
      data-scroll
      id="footer"
      className="bg-card border-t border-border py=12 px-4 flex flex-wrap justify-between items-center"
    >
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} @leviosa2002. All rights reserved.
      </p>
      {/* <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a> */}
    </section>
  );
};
