import "./Projects.css";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import CodeImg from "../../assets/Img/codeimg.png";
import { useTranslation } from "react-i18next";
import allProjects from "./JSON/projects.json";
import { useContext, useState } from "react";
import { context } from "../../context/Context";

const Projects = () => {
  const { t } = useTranslation();
  const [projects, setProjects] = useState(allProjects);
  const { isLight } = useContext(context);

  const light = {
    backgroundColor: "#ebebeb",
    backgroundImage:
      "radial-gradient( ellipse farthest-corner at 4px 4px , #f9f9f9, #f9f9f9 50%, #ebebeb 50%)",
    opacity: "1",
    backgroundSize: "4px 4px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  };
  const dark = {
    backgroundColor: "#0d0d0d",
    backgroundImage:
      "repeating-radial-gradient( circle at 0 0, transparent 0, #0d0d0d 4px ), repeating-linear-gradient( #13131355, #131313 )",
    opacity: "1",
    backgroundBlendMode: "multiply",
  };

  return (
    <div className="projectsMainDiv1">
      <div className="projectHead animate__animated animate__flipInX">
        <h2>{t("projects")}</h2>
      </div>
      <div className="projectsMainDiv2">
        {projects.map((project) => (
          <div
            key={project.id}
            style={isLight ? light : dark}
            className="ProjectCard animate__animated animate__fadeInUp"
          >
            <div className="projectsImgBox">
              <img src={CodeImg} alt="" />
            </div>
            <div className="projectsTitleBox"></div>
            <div className="ProjectsDetailsBox">
              <h3>{t(`${project.title}`)}</h3>
            </div>
            <div className="projectInfo">
              <p>{t(`${project.desc}`)}</p>
            </div>
            <div className="ProjectGithubAndLiveLink">
              <div>
                <a
                  style={{ color: isLight ? "black" : "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href={project.github}
                >
                  <FaGithub />
                </a>
              </div>
              <div>
                <a
                  style={{ color: isLight ? "black" : "white" }}
                  target="_blank"
                  rel="noreferrer"
                  href={project.live}
                >
                  <FaLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
