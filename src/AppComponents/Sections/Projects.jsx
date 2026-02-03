import AnimatedSection from "../UI/AnimatedSection";
import ProjectCard from "../UI/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" >
      <AnimatedSection title="Featured Projects" delay={0.2}>
        <div className="projects-grid">
          <ProjectCard
          link="https://github.com/Shakar-Hassan/Lingo-Live"
            title="Lingo Live"
            desc="An Interactive Web Application for German Language Learning Progress Tracking."
            tags={["JavaScript", "Ruby on rails", "PostgreSQL"]}
          />
          <ProjectCard
          link="https://github.com/Shakar-Hassan/ECO-BIKERS"
            title="Eco Bickers"
            desc="Sustainable Transport Web Platform for Eco-friendly Products."
            tags={["JavaScript", "Ruby on rails", "PostgreSQL"]}
          />
          <ProjectCard
            title="NicBlendz"
            desc="Custom Web Platform for Barber Shop Operations and Client Management."
            tags={["JavaScript", "Ruby on rails", "PostgreSQL"]}
          />
        </div>
      </AnimatedSection>
    </section>
  );
}
