// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaMoon, FaSun, FaEnvelope } from "react-icons/fa";
import SocialIcon from "../UI/SocialIcon";
import { useTheme } from "../common/ThemeContext";

export default function Navbar() {
  const { dark, toggleTheme } = useTheme();

  return (
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
        Let That Sink In.
      </motion.h1>

      <div className="nav-icons">
        <SocialIcon href="https://github.com/Shakar-Hassan">
          <FaGithub size={20}/>
        </SocialIcon>
        <SocialIcon href="https://www.linkedin.com/in/shakarhassan/">
          <FaLinkedin size={20}/>
        </SocialIcon>
        <SocialIcon href="mailto:Shakarmohammed2002@gmail.com">
          <FaEnvelope size={20}/>
        </SocialIcon>

        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="theme-toggle"
        >
          {dark ? <FaSun size={20} className="sun-icon"/> : <FaMoon size={20} className="moon-icon"/>}
        </motion.button>
      </div>
    </motion.nav>
  );
}