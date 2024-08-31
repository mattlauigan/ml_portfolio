import { ProjectType } from "../../ts/types/data";
import rl from "../assets/rl.svg";

const ProjectsCardItems: ProjectType[] = [
  {
    title: "Core POS Management Portal",
    description:
      "Web based access to monitor POS transactions in real-time and manage all merchants, users and POS devices.",
    image: rl,
    stack: [
      "Laravel",
      "Tailwind",
      "React.JS",
      "Typescript",
      "MySQL",
      "Redis",
      "Docker",
    ],
  },
  {
    title: "Core FS Fusion (ATM Switch) Ver. 2",
    description:
      "The next generation enterprise transaction processing system capable of making room for access channels. Designed to be comprehensive in nature, user-friendly, secured, and affordable to any institution",
    image: rl,
    stack: ["Laravel", "Tailwind", "React.JS", "Typescript", "MySQL"],
  },
  {
    title: "Core FS Fusion (Pos & Switch) Ver. 1",
    description:
      "The next generation enterprise transaction processing system capable of making room for access channels. Designed to be comprehensive in nature, user-friendly, secured, and affordable to any institution",
    image: rl,
    stack: ["CodeIgniter", "HTML", "CSS", "JQuery", "MySQL"],
  },
  {
    title: "Peacock Painting & Decoration Pty Ltd",
    description:
      "Peacock Painting is a reliable and trustworthy painting professional in New South Wales, Australia. With 11 years into the business, they providing clients with excellent-quality work towards their painting needs and requests.",
    image: rl,
    stack: ["HTML", "HTML", "CSS", "WordPress"],
  },
];

const ProjectsCard = () => {
  return (
    <div id="project-container">
      {ProjectsCardItems.map((project) => (
        <a href="####" className="project-card card-hover">
          <div>
            <img src={project.image} alt={project.title} />
          </div>
          <div>
            <h3 className="project-card-title">{project.title}</h3>

            <p className="project-card-description">{project.description}</p>

            {project.remarks ?? (
              <h4 className="project-card-remark">{project.remarks}</h4>
            )}
            <div className="stack">
              {project.stack?.map((skill) => (
                <p>{skill}</p>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ProjectsCard;
