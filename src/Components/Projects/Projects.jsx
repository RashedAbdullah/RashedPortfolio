import './Projects.css';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import CodeImg from '../../assets/Img/codeimg.png'
import { useTranslation } from 'react-i18next';
import allProjects from './JSON/projects.json';
import { useState } from 'react';

const Projects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState(allProjects);
  return (
    <div className='projectsMainDiv1'>
        <div className='projectHead animate__animated animate__flipInX'><h2>{t("projects")}</h2></div>
        <div className='projectsMainDiv2'>
            {projects.map(project=>(
            <div key={project.id} className='ProjectCard animate__animated animate__fadeInUp'>
                <div className='projectsImgBox'>
                    <img src={CodeImg} alt="" />
                </div>
                <div className='projectsTitleBox'>

                </div>
                <div className='ProjectsDetailsBox'>
                    <h3>{t(`${project.title}`)}</h3>
                </div>
                <div className='projectInfo'>
                    <p>{t(`${project.desc}`)}</p>
                </div>
                <div className='ProjectGithubAndLiveLink'>
                    <p><a target='_blank' rel="noreferrer" href={project.github}><FaGithub /></a></p>
                    <p><a href={project.live}><FaLink /></a></p>
                </div>
            </div>

            ))}
        </div>
    </div>
  )
}

export default Projects;