/* eslint-disable no-unused-vars */
import { useState } from "react";
import { motion } from "framer-motion";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  const [liked, setLiked] = useState(false);

  const scrollToTop = () => {
    // Turn heart red
    setLiked(true);

    const startY = window.scrollY;
    const distance = -startY; // scroll up
    const duration = 1500; // 1.5 seconds
    let startTime = null;

    function step(currentTime) {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startY + distance * percent);
      if (progress < duration) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  };

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
