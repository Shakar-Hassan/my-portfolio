// FallingStars.jsx
import { motion } from "framer-motion";

export default function FallingStars() {
  const colors = [
    "255,255,255",   // white
    "59,130,246",    // blue
    "236,72,153",    // pink
    "6,182,212",     // cyan
    "245,158,11",    // orange
  ];

  const stars = Array.from({ length: 30 }, (_, i) => {
    const isShooting = Math.random() < 0.2; // 20% shooting stars
    const bounce = !isShooting && Math.random() < 0.3; // 30% of normal stars bounce
    const color = colors[Math.floor(Math.random() * colors.length)];

    return {
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: isShooting ? 1 + Math.random() * 1.5 : 2 + Math.random() * 3,
      isShooting,
      bounce,
      drift: (Math.random() - 0.5) * 200,
      height: 800 + Math.random() * 400,
      riseHeight: 200 + Math.random() * 200,
      color,
    };
  });

  return (
    <div className="falling-stars-container">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className={`falling-star ${star.isShooting ? "shooting" : ""}`}
          style={{ left: `${star.left}%`, "--star-color": star.color }}
          initial={{ opacity: 0, y: 0, x: 0 }}
          animate={
            star.isShooting
              ? {
                  opacity: [0, 1, 1, 0],
                  y: [0, -star.riseHeight, star.height],
                  x: [0, star.drift / 2, star.drift],
                }
              : star.bounce
              ? {
                  opacity: [0, 1, 1, 0],
                  y: [0, -star.riseHeight, star.height],
                  x: [0, star.drift / 2, star.drift],
                }
              : {
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
        />
      ))}
    </div>
  );
}
