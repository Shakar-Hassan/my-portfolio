// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import AnimatedSection from "../UI/AnimatedSection";
import ContactItem from "../UI/ContactItem";

export default function Contact() {
  return (
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
          <ContactItem
            icon={<FaEnvelope/>}
            label="Email"
            href="mailto:Shakarmohammed2002@gmail.com"
          />

          <ContactItem
            icon={<FaGithub />}
            label="GitHub"
            href="https://github.com/Shakar-Hassan"
          />

          <ContactItem
            icon={<FaLinkedin />}
            label="LinkedIn"
            href="https://www.linkedin.com/in/shakarhassan"
          />
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
