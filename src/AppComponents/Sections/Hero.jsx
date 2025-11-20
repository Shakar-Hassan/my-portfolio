// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaCode } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython, SiRuby } from "react-icons/si";
import shk from "../../assets/shk.jpg";
import TechIcon from "../UI/TechIcon";

export default function Hero() {

  // Function to scroll slowly to projects
  const scrollToProjects = () => {
    const projects = document.getElementById("projects");
    if (!projects) return;

    const targetY = projects.getBoundingClientRect().top + window.scrollY;
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1500; // 1500ms = 1.5 seconds
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
    <header className="hero-section">
      {/* Avatar */}
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

      {/* Hero Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hero-title"
      >
        <span className="hero-gradient">Hi, I'm</span>
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

      {/* Subtitle */}
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

      {/* Skills */}
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

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="cta-container"
      >
        {/* Email */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button primary"
          href="mailto:Shakarmohammed2002@gmail.com"
        >
          <FaEnvelope className="button-icon" />
          Get In Touch
        </motion.a>

        {/* View Projects with slow scroll */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button secondary"
          onClick={scrollToProjects}
        >
          <FaCode className="button-icon" />
          View Projects
        </motion.button>
      </motion.div>
    </header>
  );
}
