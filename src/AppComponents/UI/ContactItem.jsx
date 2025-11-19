// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function ContactItem({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="contact-item"
    >
      <div className="contact-icon">{icon}</div>
      <div className="contact-label">{label}</div>
      <div className="contact-value">{value}</div>
    </motion.div>
  );
}