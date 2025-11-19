// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function TechIcon({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="tech-icon"
    >
      <div className="tech-icon-wrapper">
        {icon}
      </div>
      <span className="tech-name">
        {name}
      </span>
    </motion.div>
  );
}