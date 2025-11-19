/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="footer"
    >
      <div className="footer-content">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="footer-heart"
        >
          <FaHeart className="heart-icon" />
        </motion.div>
        <p className="footer-text">
          Crafted with passion and attention to detail
        </p>
        <p className="footer-copyright">
          © 2025 Shakar Hassan. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}