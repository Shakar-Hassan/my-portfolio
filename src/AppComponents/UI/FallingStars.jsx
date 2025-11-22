import { motion } from "framer-motion";

export default function FallingStars() {
  const stars = Array.from({ length: 20 }, (_, i) => {
    const isShooting = Math.random() < 0.3; // 30% are shooting stars

    return {
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 2 + Math.random() * 3,
      isShooting,
      drift: (Math.random() - 0.5) * 200, // sideways movement
      height: 800 + Math.random() * 400, // fall distance
      shootHeight: 200 + Math.random() * 200, // how high they shoot
    };
  });

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="falling-star"
          initial={{
            opacity: 0,
            y: star.isShooting ? 200 : -100, // shooting starts low; normal starts high
            x: 0,
          }}
          animate={
            star.isShooting
              ? {
                  // 🚀 SHOOTING STAR ANIMATION:
                  opacity: [0, 1, 1, 0],
                  y: [0, -star.shootHeight, star.height], // up → down
                  x: [0, star.drift / 2, star.drift], // slight curve
                }
              : {
                  // 🌠 NORMAL STAR ANIMATION:
                  opacity: [0, 1, 0],
                  y: [0, star.height],
                  x: [0, star.drift],
                }
          }
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          style={{ left: `${star.left}%` }}
        />
      ))}
    </div>
  );
}
