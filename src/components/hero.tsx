import HeroNav from "./hero-nav";
import Links from "./links";
import { NavType } from "../../ts/types/data";
import { useEffect, useState } from "react";

const NavItems: NavType[] = [
  {
    id: "about",
    label: "ABOUT",
    state: true,
    section: "top-div",
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
  const [selectedRadio, setSelectedRadio] = useState<string>("about");
  const ownerName = "Raymart Lauigan";
  const position = "Software Developer";
  const tagline =
    "I craft dynamic, efficient, and innovative software solutions that bring your ideas to life!";

  useEffect(() => {
    const radio = document.getElementById(selectedRadio) as HTMLInputElement;
    radio.checked = true;
  }, [selectedRadio]);

  const onSelect = (section: string) => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      switch (section) {
        case "experience-container":
          setSelectedRadio("experience-container");
          break;
        case "project-container":
          setSelectedRadio("project-container");
          break;
        default:
          setSelectedRadio("about");
      }
    }
  };
  return (
    <section id="hero">
      <div>
        <a
          href="###"
          method="POST"
          onClick={() => onSelect("top-div")}
          className="pointer"
        >
          <h1>{ownerName}</h1>
        </a>
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
