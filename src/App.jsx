import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaEnvelope, FaCode, FaHeart } from "react-icons/fa";
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiPython } from "react-icons/si";
import shk from "./assets/shk.jpg";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={dark ? "dark-theme" : "light-theme"}>
      <div className="portfolio-container">

        {/* ENHANCED BACKGROUND ANIMATION */}
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

        {/* ANIMATED GRID PATTERN */}
        <div className="grid-pattern" />

        {/* ENHANCED FLOATING ORBS */}
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

        {/* GLASS MORPHISM NAVBAR */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="navbar"
        >
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="logo"
          >
            Shakar Hassan
          </motion.h1>

          <div className="nav-icons">
            <SocialIcon href="https://github.com">
              <FaGithub size={20}/>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com">
              <FaLinkedin size={20}/>
            </SocialIcon>
            <SocialIcon href="mailto:your@email.com">
              <FaEnvelope size={20}/>
            </SocialIcon>

            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setDark(!dark)}
              className="theme-toggle"
            >
              {dark ? <FaSun size={20} className="sun-icon"/> : <FaMoon size={20} className="moon-icon"/>}
            </motion.button>
          </div>
        </motion.nav>

        {/* ENHANCED HERO SECTION */}
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

          {/* SKILLS BADGES */}
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
          </motion.div>

          {/* ENHANCED CTA BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="cta-container"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button primary"
            >
              <FaEnvelope className="button-icon" />
              Get In Touch
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
              className="cta-button secondary"
            >
              <FaCode className="button-icon" />
              View Projects
            </motion.button>
          </motion.div>
        </header>

        {/* ENHANCED SECTIONS */}
        <AnimatedSection title="About Me" delay={0.1}>
          <div className="about-grid">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="about-content"
            >
              <p className="about-text">
                I create <span className="highlight-cyan">immersive digital experiences</span> 
                {" "}that blend cutting-edge animation with robust performance and clean, maintainable code.
              </p>
              <p className="about-text">
                With expertise in both frontend magic and backend stability, I bring ideas to life 
                through thoughtful design and technical excellence.
              </p>
              <div className="stats-container">
                <motion.div whileHover={{ scale: 1.05 }} className="stat-item cyan">
                  5+ Years
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="stat-item purple">
                  50+ Projects
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="skills-grid"
            >
              <SkillBar skill="React/Next.js" percentage={95} color="cyan" />
              <SkillBar skill="TypeScript" percentage={90} color="blue" />
              <SkillBar skill="Node.js" percentage={85} color="green" />
              <SkillBar skill="UI/UX Design" percentage={80} color="purple" />
            </motion.div>
          </div>
        </AnimatedSection>

        <AnimatedSection title="Featured Projects" delay={0.2}>
          <div className="projects-grid">
            <ProjectCard
              title="E-Commerce Platform"
              desc="Next.js e-commerce with animations, Stripe integration, and admin dashboard."
              tags={["Next.js", "Stripe", "Tailwind"]}
            />
            <ProjectCard
              title="AI Chat Application"
              desc="Real-time chat app with AI integration, voice messages, and end-to-end encryption."
              tags={["React", "Node.js", "WebSocket"]}
            />
            <ProjectCard
              title="Data Visualization Dashboard"
              desc="Interactive dashboard with real-time data, charts, and customizable widgets."
              tags={["TypeScript", "D3.js", "Express"]}
            />
          </div>
        </AnimatedSection>

        <AnimatedSection title="Get In Touch" delay={0.3}>
          <div className="contact-container">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="contact-text"
            >
              Ready to bring your next project to life? Let's create something amazing together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="contact-info"
            >
              <ContactItem icon={<FaEnvelope />} label="Email" value="your@email.com" />
              <ContactItem icon={<FaGithub />} label="GitHub" value="github.com/yourusername" />
              <ContactItem icon={<FaLinkedin />} label="LinkedIn" value="linkedin.com/in/yourusername" />
            </motion.div>
          </div>
        </AnimatedSection>

        {/* ENHANCED FOOTER */}
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
              © 2025 Your Name. All rights reserved.
            </p>
          </div>
        </motion.footer>
      </div>
    </div>
  );
}

/* ENHANCED SOCIAL ICON */
function SocialIcon({ href, children }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.2, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="social-icon"
    >
      {children}
    </motion.a>
  );
}

/* TECH ICON COMPONENT */
function TechIcon({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="tech-icon"
    >
      <div className="tech-icon-wrapper">
        {icon}
      </div>
      <span className="tech-name">
        {name}
      </span>
    </motion.div>
  );
}

/* SKILL BAR COMPONENT */
function SkillBar({ skill, percentage, color }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="skill-bar"
    >
      <div className="skill-header">
        <span className="skill-name">{skill}</span>
        <span className="skill-percentage">{percentage}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className={`skill-progress ${color}`}
        />
      </div>
    </motion.div>
  );
}

/* ENHANCED ANIMATED SECTION */
function AnimatedSection({ title, children, delay = 0 }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="section"
    >
      <motion.h2
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        className="section-title"
      >
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

/* ENHANCED PROJECT CARD */
function ProjectCard({ title, desc, tags = [] }) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -10 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
      className="project-card"
    >
      <div className="project-bg-gradient" />

      <div className="project-content">
        <div className="project-icon">
          <FaCode className="project-code-icon" />
        </div>

        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <motion.span
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="project-tag"
            >
              {tag}
            </motion.span>
          ))}
        </div>

        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className="project-link"
        >
          View Project
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="link-arrow"
          >
            →
          </motion.span>
        </motion.a>
      </div>
    </motion.div>
  );
}

/* CONTACT ITEM COMPONENT */
function ContactItem({ icon, label, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      className="contact-item"
    >
      <div className="contact-icon">{icon}</div>
      <div className="contact-label">{label}</div>
      <div className="contact-value">{value}</div>
    </motion.div>
  );
}