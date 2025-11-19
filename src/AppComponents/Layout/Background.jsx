// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
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

      <div className="grid-pattern" />

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