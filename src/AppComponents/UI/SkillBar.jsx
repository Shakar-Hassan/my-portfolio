// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SkillBar({ skill, percentage, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="skill-bar"
    >
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`skill-progress ${color}`}
        />
      </div>
    </motion.div>
  );
}