// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function AnimatedSection({ title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}