// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import AnimatedSection from "../UI/AnimatedSection";
import SkillBar from "../UI/SkillBar";

export default function About() {
  return (
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
              2+ Years
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} className="stat-item purple">
              5+ Projects
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
          <SkillBar skill="Ruby" percentage={80} color="red" />
          <SkillBar skill="Python" percentage={85} color='yellow' />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}