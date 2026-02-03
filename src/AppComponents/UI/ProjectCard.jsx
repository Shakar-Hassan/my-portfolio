// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

export default function ProjectCard({ title, desc, tags = [], link }) {
  return (
    <motion.a
      href={link || "#"}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="project-card"
      aria-label={title}
    >
      <div className="project-bg-gradient" />

      <div className="project-content">
        <div className="project-icon">
          <FaCode className="project-code-icon" />
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="project-tag"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        {/* clickable card — link handled on outer element */}
      </div>
    </motion.a>
  );
}