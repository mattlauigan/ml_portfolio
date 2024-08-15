import "../assets/css/Hero.scss";
import Behance from "../assets/behance.svg";
import HeroNav from "./hero-nav";

export function Hero() {
  const ownerName = "Raymart Lauigan";
  const position = "Software Developer";
  const tagline =
    "I craft dynamic, efficient, and innovative software solutions that bring your ideas to life!";
  return (
    <section id="hero">
      <div>
        <h1>{ownerName}</h1>
        <h3>{position}</h3>
        <p>{tagline}</p>
      </div>
      <div className="HeroNav">
        <HeroNav id="about" state={true} label="ABOUT" />
        <HeroNav id="experience" state={false} label="EXPERIENCES" />
        <HeroNav id="projects" state={false} label="PROJECTS" />
      </div>
      <div className="links">
        <a href="">
          <img src="" alt="Github" />
        </a>
        <a href="">
          <img src="" alt="linkedin" />
        </a>
        <a href="">
          <img src={Behance} alt="React Logo" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
        <a href="">
          <img src="" alt="" />
        </a>
      </div>
    </section>
  );
}
