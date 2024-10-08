import { ExperienceType } from "../../ts/types/data";
import Resume from "../assets/resume.pdf";

const ExperienceItems: ExperienceType[] = [
  {
    title: "Software Developer",
    description:
      "As a software developer, I turn designs into functional code using HTML, CSS, JavaScript, and PHP. I work with MySQL for data needs, build front-end apps with React.js, and create APIs with PHP and Laravel. I fix bugs, improve system performance, and add new features. I also lead QA testing, gather user feedback, provide training, and manage version control with GitHub to keep the team coordinated.",
    Period: {
      from: "2022",
      to: "PRESENT",
    },
    skills: [
      "HTML",
      "CSS3",
      "Javascript",
      "JQuery",
      "React.JS",
      "Laravel",
      "Yii",
      "CodeIgniter",
      "PHP",
      "Redis",
      "MySQL",
    ],
  },
  {
    title: "Technical Support Engineer",
    description:
      "As a Technical Support Engineer, my role involved setting up and configuring applications and databases on Linux-based servers, maintaining database servers, and providing 24/7 third-level client support. I deployed servers to production, pushed patches and updates, and collaborated with other teams to resolve issues. Additionally, I debugged ATM and POS transaction errors and created documentation and guidelines for future reference.",
    Period: {
      from: "2017",
      to: "2022",
    },
    skills: [
      "MySQL",
      "Shell Scripting",
      "CentOS",
      "safenet PKI Solution",
      "ISO Standards",
      "Windows",
      "Apache",
      "Red Hat Linux",
      "MS Office",
      "Amazon Web Services (AWS)",
    ],
  },
];

const ExperienceCard = () => {
  return (
    <>
      
      
      <div id="experience-container">
      <p className="section-header">EXPERIENCE</p>
        {ExperienceItems.map((Experience) => (
          <a href="####" className="xp-card card-hover">
            <div>
              <p className="experience-period">
                {Experience.Period.from} - {Experience.Period.to}
              </p>
            </div>
            <div>
              <h3 className="experience-card-title">{Experience.title}</h3>
              {Experience.subtitle ?? (
                <h4 className="experience-card-subheader">
                  {Experience.subtitle}
                </h4>
              )}
              <p className="experience-card-description">
                {Experience.description}
              </p>
              <div className="skills">
                {Experience.skills?.map((skill) => (
                  <p>{skill}</p>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <a href={Resume} target="_blank" rel="noreferrer" id="resume">
        View full Résumé{" "}
        <i class="fa-solid fa-arrow-right" title="Next Page"></i>
      </a>
    </>
  );
};

export default ExperienceCard;
