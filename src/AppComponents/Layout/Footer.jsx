/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const [liked, setLiked] = useState(false);

    function scrollToTop() {
    setLiked(true);

    document.documentElement.classList.add('smooth-scroll');
    window.scrollTo(0, 0);

    setTimeout(() => {
      document.documentElement.classList.remove('smooth-scroll');
    }, 1000);
  }
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
          onClick={scrollToTop}
        >
          <FaHeart
            className="heart-icon"
            style={{ color: liked ? "red" : "inherit", cursor: "pointer" }}
          />
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
