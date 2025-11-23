// eslint-disable-disable no-unused-vars
import { motion } from "framer-motion";

export default function Background() {
  // Generate random stars
  const stars = Array.from({ length: 100 }).map((_, i) => ({
    id: i,
    size: Math.random() * 3 + 1, // Random size between 1-4px
    left: Math.random() * 100, // Random horizontal position
    top: Math.random() * 100, // Random vertical position
    opacity: Math.random() * 0.7 + 0.3, // Random opacity
    delay: Math.random() * 5, // Random animation delay
    duration: Math.random() * 4 + 3, // Random animation duration
  }));

  return (
    <>
      {/* Background gradients */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="bg-gradient-1"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 2, delay: 0.3 }}
        className="bg-gradient-2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.6 }}
        className="bg-gradient-3"
      />

      {/* Grid pattern */}
      <div className="grid-pattern" />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.left}%`,
            top: `${star.top}%`,
            position: 'absolute',
          }}
        />
      ))}

      {/* Floating orbs */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="floating-orb orb-1"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, -25, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
        className="floating-orb orb-2"
      />
      <motion.div
        animate={{
          y: [0, -60, 0],
          x: [0, 15, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
        className="floating-orb orb-3"
      />
    </>
  );
}