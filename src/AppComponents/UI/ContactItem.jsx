// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ContactItem({ icon, label, href }) {
  return (
    <motion.a
      whileHover={{ scale: 1.05, y: -5 }}
      className="contact-item"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="contact-icon">{icon}</div>
      <div className="contact-label">{label}</div>
    </motion.a>
  );
}
