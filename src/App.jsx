import { ThemeProvider, useTheme } from "./AppComponents/common/ThemeContext";
import Background from "./AppComponents/Layout/Background";
import Navbar from "./AppComponents/Layout/Navbar";
import Hero from "./AppComponents/Sections/Hero";
import About from "./AppComponents/Sections/About";
import Projects from "./AppComponents/Sections/Projects";
import Contact from "./AppComponents/Sections/Contact";
import Footer from "./AppComponents/Layout/Footer";
import FallingStars from "./AppComponents/UI/FallingStars";

function AppContent() {
  const { dark, mounted } = useTheme();

  if (!mounted) return null;

  return (
    <div className={dark ? "dark-theme" : "light-theme"}>
      <div className="portfolio-container">
        <Background />
        <FallingStars />
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}