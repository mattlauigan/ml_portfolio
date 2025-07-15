import HeroNav from "./hero-nav";
import Links from "./links";
import { NavType } from "../../ts/types/data";
import { useEffect, useState } from "react";
import useScroll from "../store/scroll";

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

type RadioMappingType = {
  [key: string]: string;
};

const radioMapping: RadioMappingType = {
  "experience-container": "experience-container",
  "project-container": "project-container",
  about: "top-div",
};

type HeroDataType = {
  ownername: string;
  jobtitle: string;
  tagline: string;
};

const HeroData: HeroDataType = {
  ownername: "Raymart Lauigan",
  jobtitle: "Software Developer",
  tagline:
    "I craft dynamic, efficient, and innovative software solutions that bring your ideas to life!",
};

export function Hero() {
  const [selectedRadio, setSelectedRadio] = useState<string>("about");
  const yPosition: number = useScroll((state) => state.scrollTop);
  const currentSection = useScroll((state) => state.currentSection);

  useEffect(() => {
    if (yPosition > 0) {
      let selected = "";
      switch (currentSection) {
        case "top-div":
          selected = "about";
          break;
        case "project-container":
          selected = "projects";
          break;
        case "experience-container":
          selected = "experiences";
          break;
        default:
          selected = "about";
      }
      setSelectedRadio(selected);
    } else {
      setSelectedRadio("about");
    }

    const radio = document.getElementById(selectedRadio) as HTMLInputElement;

    radio.checked = true;
  }, [selectedRadio, yPosition]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        console.log(" has ", hash);
        const element = document.getElementById(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); 

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const onSelect = (section: string) => {
    setSelectedRadio(radioMapping[section]);
    const element = document.getElementById(section) as HTMLElement;

    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero">
      <div>
        <a
          href="###"
          method="POST"
          onClick={() => onSelect(radioMapping.about)}
          className="pointer"
        >
          <h1>{HeroData.ownername}</h1>
        </a>
        <h3>{HeroData.jobtitle}</h3>
        <p>{HeroData.tagline}</p>
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
