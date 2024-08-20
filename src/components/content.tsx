import "../assets/css/content.scss";
import Resume from "../assets/resume.pdf";
import ExperienceCard from "./experience-card";
import { Hero } from "./hero";

export function Content() {
  return (
    <>
      <Hero />
      <section id="content">
        <div className="about">
          <p>
            In <strong>2013</strong>, I embarked on my journey in Information
            Technology, enrolling in a BSIT program where I developed my
            foundational skills. Upon graduating, I started my career as a{" "}
            <strong>Technical Support Engineer</strong> on{" "}
            <strong>March 2017</strong>. This role allowed me to gain valuable
            experience troubleshooting and resolving complex software and
            hardware issues.
          </p>
          <p>
            Driven by a desire to deepen my technical expertise, I made a
            lateral move into <strong>Software development</strong> on{" "}
            <strong>April 2021</strong>. I’ve had the privilege of building
            software solutions for bank clients, focusing on creating secure,
            bug-free, and accessible web portals. My primary goal is to design
            and develop web applications that are not only robust and secure but
            also offer a seamless user experience from the front end to the back
            end.
          </p>

          <p>
            I am passionate about building new projects and constantly expanding
            my knowledge of the latest technologies. I spend my free time
            learning through online resources, videos, and documentation, and I
            enjoy working on side projects to sharpen my skills.
          </p>
          <p>
            When I’m not coding, you’ll likely find me on the basketball court,
            immersed in a book, experimenting in the kitchen, or tending to my
            aquascaping projects. I also enjoy staying active with badminton and
            running.
          </p>
        </div>
        
          <ExperienceCard />
          <a href={Resume} target="_blank" rel="noreferrer" id="resume">
            View full Résumé <i class="fa-solid fa-arrow-right" title="Next Page"></i>
          </a>
        
      </section>
    </>
  );
}
