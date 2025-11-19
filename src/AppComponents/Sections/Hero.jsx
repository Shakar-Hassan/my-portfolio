// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaCode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython, SiRuby } from "react-icons/si";
import shk from "../../assets/shk.jpg";
import TechIcon from "../UI/TechIcon";

export default function Hero() {
  return (
    <header className="hero-section">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="avatar-container"
      >
        <div className="avatar">
          <div className="avatar-inner">
            <img src={shk} alt="Shakar Hassan" className="avatar-image" />
          </div>
        </div>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-title"
      >
        <span className="hero-gradient">
          Hi, I'm
        </span>
        <br />
        <motion.span
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-name"
        >
          Shakar Hassan
        </motion.span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="hero-subtitle"
      >
        Full-Stack Developer & Creative Engineer crafting digital experiences
        with <span className="highlight-cyan">innovation</span> and{" "}
        <span className="highlight-purple">passion</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="skills-container"
      >
        <TechIcon icon={<SiReact className="react-icon" />} name="React" />
        <TechIcon icon={<SiJavascript className="js-icon" />} name="JavaScript" />
        <TechIcon icon={<SiTypescript className="ts-icon" />} name="TypeScript" />
        <TechIcon icon={<SiNodedotjs className="node-icon" />} name="Node.js" />
        <TechIcon icon={<SiPython className="python-icon" />} name="Python" />
        <TechIcon icon={<SiRuby className="ruby-icon" />} name="Ruby" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="cta-container"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button primary"
          onClick={() => window.location.href = "mailto:Shakarmohammed2002@gmail.com"}
        >
          <FaEnvelope className="button-icon"/>
          Get In Touch
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button secondary"
        >
          <FaCode className="button-icon" />
          View Projects
        </motion.button>
      </motion.div>
    </header>
  );
}