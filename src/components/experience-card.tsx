import "../assets/css/experience-card.scss";

type PeriodType = {
  from: string;
  to: string;
};

type ExperienceType = {
  title: string;
  subtitle?: string;
  description: string;
  Period: PeriodType;
  skills?: string[];
};

const ExperienceItems: ExperienceType[] = [
  {
    title: "Software Developer",
    description:
      "            As a software developer, I turn designs into functional code using HTML, CSS, JavaScript, and PHP. I work with MySQL for data needs, build front-end apps with React.js, and create APIs with PHP and Laravel. I fix bugs, improve system performance, and add new features. I also lead QA testing, gather user feedback, provide training, and manage version control with GitHub to keep the team coordinated.",
    Period: {
      from: "2022",
      to: "Present",
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
    ],
  },
  {
    title: "Technical Support Engineer",
    description:
      "As a Technical Support Engineer, my role involved setting up and configuring applications and databases on Linux-based servers, maintaining database servers, and providing 24/7 third-level client support. I deployed servers to production, pushed patches and updates, and collaborated with other teams to resolve issues. Additionally, I debugged ATM and POS transaction errors and created documentation and guidelines for future reference.",
    Period: {
      from: "2027",
      to: "2022",
    },
  },
];

const ExperienceCard = () => {
  return (
    <div className="experience-container">
      {ExperienceItems.map((Experience) => (
        <a href="####">
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
  );
};

export default ExperienceCard;
