import "./Skills.css";

import Csharp from "../../Assets/icons8-c.svg"; import Aspdotnet from "../../Assets/icons8-.net-framework.svg";
import { faHtml5, faCss3Alt, faSass, faJsSquare, faReact, faBootstrap, faDocker, faGithub, } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faClipboardList, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiVite, SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaAngular } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";

type Skill = {
  name: string;
  icon: JSX.Element;
  className: string;
};

const skills: Skill[] = [
  { name: "HTML5", icon: <FontAwesomeIcon icon={faHtml5} />, className: "html" },
  { name: "CSS3", icon: <FontAwesomeIcon icon={faCss3Alt} />, className: "css" },
  { name: "SCSS", icon: <FontAwesomeIcon icon={faSass} />, className: "scss" },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJsSquare} />, className: "javascript" },
  { name: "TypeScript", icon: <SiTypescript />, className: "typescript" },
  { name: "Angular", icon: <FaAngular />, className: "angular" },
  { name: "React", icon: <FontAwesomeIcon icon={faReact} />, className: "react" },
  { name: "Vite", icon: <SiVite />, className: "vite" },
  { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} />, className: "bootstrap" },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, className: "tailwind" },
  { name: "C# Language", icon: <img src={Csharp} alt="Csharp" className="csharp" />, className: "csharp" },
  { name: "ASP.NET Core", icon: <img src={Aspdotnet} alt="ASP.NET Core" className="aspdotnetcore" />, className: "aspdotnetcore" },
  { name: "MySQL", icon: <GrMysql />, className: "mysql" },
  { name: "SQL Server", icon: <FontAwesomeIcon icon={faDatabase} />, className: "sqlserver" },
  { name: "Swagger", icon: <FontAwesomeIcon icon={faClipboardList} />, className: "swagger" },
  { name: "Postman", icon: <FontAwesomeIcon icon={faEnvelopeOpenText} />, className: "postman" },
  { name: "Docker", icon: <FontAwesomeIcon icon={faDocker} />, className: "docker" },
  { name: "GitHub", icon: <FontAwesomeIcon icon={faGithub} />, className: "github" },
];

const Skills = () => {

  return (
    <section className="container skills-section">
      <h2 className="main-head">What I Do</h2>
      <p>Frontend, Backend, Databases, Frameworks and other technologies.</p>
      <div className="skills-container" >
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card ${skill.className}`}>
              <div className="skill-icon">{skill.icon}</div>
              <h1 className="skill-title">{skill.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
