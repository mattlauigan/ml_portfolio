
import About from "./about";
import ExperienceCard from "./experience-card";
import Footer from "./footer";
import ProjectsCard from "./projects-card";

export function Content() {
  return (
    <>
    
      <section id="content">
        
        <About />
        <ExperienceCard />

        <ProjectsCard />
        <Footer />
      </section>
    </>
  );
}
