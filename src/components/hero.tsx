import HeroNav from "./hero-nav";
import Links from "./links";
import { NavType } from "../../ts/types/data";

const NavItems: NavType[] = [
  {
    id: "about",
    label: "ABOUT",
    state: true,
    section: "about",
  },
  {
    id: "experiences",
    label: "EXPERIENCES",
    state: false,
    section: "experience-container",
  },
  {
    id: "projects",
    label: "PROJECTS",
    state: false,
    section: "project-container",
  },
];

export function Hero() {
  const ownerName = "Raymart Lauigan";
  const position = "Software Developer";
  const tagline =
    "I craft dynamic, efficient, and innovative software solutions that bring your ideas to life!";

  const onSelect = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="hero">
      <div>
        <h1>{ownerName}</h1>
        <h3>{position}</h3>
        <p>{tagline}</p>
      </div>
      <div className="HeroNav">
        {NavItems.map((item) => (
          <HeroNav
            id={item.id}
            state={item.state}
            label={item.label}
            section={item.section}
            handleSelect={onSelect}
          />
        ))}
      </div>
      <Links />
    </section>
  );
}
