import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      data-scroll-section
      data-scroll
      id="footer"
      className="bg-card border-t border-border py=12 px-4 flex flex-wrap justify-between items-center"
    >
      <motion.p 
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} @leviosa2002. All rights reserved.
      </motion.p>
      {/* <motion.a
        whileHover={{ y: -5, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </motion.a> */}
    </motion.section>
  );
};
