import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footerMainDiv">
      <footer>
        <div className="footerSocialLinks">
          <ul>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/RashedAbdullah"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/rashed4abdullah"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/Rashed4Abdullah"
              >
                <FaFacebook />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/Rashed4Abdullah"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div className="footerNavLinks hidden lg:block">
          <ul>
            <li>
              <a href="/">{t("home")}</a>
            </li>
            <li>
              <a href="/project">{t("projects")}</a>
            </li>
            <li>
              <a href="/blog">{t("blogs")}</a>
            </li>
            <li>
              <a href="/contact">{t("contact")}</a>
            </li>
            <li>
              <a href="/about">{t("about")}</a>
            </li>
          </ul>
        </div>
        <div className="subFooter">
          <p>{t("subFooter")}</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
