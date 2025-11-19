import AnimatedSection from "../UI/AnimatedSection";
import ProjectCard from "../UI/ProjectCard";

export default function Projects() {
  return (
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
  );
}