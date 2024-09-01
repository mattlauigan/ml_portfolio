import { ProjectType } from "../../ts/types/data";
import posswitch from "../assets/images/posswitch.png"
import fusionswitchatm from "../assets/images/fusionswitchatm.png"
import peacock from "../assets/images/peacock.png"
import fusionv1 from "../assets/images/fusionv1.png"

const ProjectsCardItems: ProjectType[] = [
  {
    title: "Core POS Management Portal",
    description:
      "Web-based access to monitor and analyze business transactions in real-time, and manage all customers, users, and lot of devices such as ATM Terminals & POS Terminals. Built to be all-encompassing, intuitive, secure, and cost-effective for organizations of all sizes, with a microservices architecture and containerization using Docker, ensuring scalability, flexibility, and seamless integration with existing systems",
    image: posswitch,
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
      "The next-generation business process management system designed to accommodate diverse integration pathways, leveraging cutting-edge technologies.",
    image: fusionswitchatm,
    stack: ["Laravel", "Tailwind", "React.JS", "Typescript", "MySQL"],
  },
  {
    title: "Core FS Fusion (Pos & Switch) Ver. 1",
    description:
      "The next generation enterprise transaction processing system capable of making room for access channels. Designed to be comprehensive in nature, user-friendly, secured, and affordable to any institution",
    image: fusionv1,
    stack: ["CodeIgniter", "HTML", "CSS", "JQuery", "MySQL"],
  },
  {
    title: "Peacock Painting & Decoration Pty Ltd",
    description:
      "Peacock Painting is a reliable and trustworthy painting professional in New South Wales, Australia. With 11 years into the business, they providing clients with excellent-quality work towards their painting needs and requests.",
    image: peacock,
    stack: ["HTML", "HTML", "CSS", "WordPress"],
  },
];

const ProjectsCard = () => {
  return (
    
    <div id="project-container">
      <p className="section-header">PROJECTS</p>
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
