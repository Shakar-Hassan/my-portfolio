/* eslint-disable react-hooks/purity */
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function FallingStars() {
  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 100,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="falling-star"
          initial={{
            opacity: 0,
            y: -100,
            x: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: [0, 1000],
            x: [0, 100],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{
            left: `${star.left}%`,
          }}
        />
      ))}
    </div>
  );
}



