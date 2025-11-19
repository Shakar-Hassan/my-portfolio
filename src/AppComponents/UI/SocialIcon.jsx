// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function SocialIcon({ href, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="social-icon"
    >
      {children}
    </motion.a>
  );
}