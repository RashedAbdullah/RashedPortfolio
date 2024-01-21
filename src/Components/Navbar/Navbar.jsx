import { IoIosSunny } from "react-icons/io";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

import { useTranslation } from "react-i18next";
import logo from "../../assets/Img/namlogoforwebsite.jpg";

function Header({ setArClass, setIsLight, isLight }) {
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const enFunc = () => {
    changeLanguage("en");
    setArClass(false);
  };
  const arFunc = () => {
    changeLanguage("ar");
    setArClass(true);
  };

  const handleLightDarkMode = () => {
    setIsLight(!isLight);
  };

  return (
    <div className="MainNavbarDiv">
      <header>
        <div className="logo">
          <img onClick={() => navigate("/")} src={logo} alt="website logo" />
        </div>
        <div className="navigations">
          <ul>
            <li>
              <NavLink to="/">{t("home")}</NavLink>
            </li>
            <li>
              <NavLink to="/project">{t("projects")}</NavLink>
            </li>
            <li>
              <NavLink to="/blog">{t("blogs")}</NavLink>
            </li>
            <li>
              <NavLink to="/contact">{t("contact")}</NavLink>
            </li>
            <li>
              <NavLink to="/about">{t("about")}</NavLink>
            </li>
          </ul>
        </div>
        <div className="LangsAndDarkMode">
          <div className="Languages">
            <div className="english">
              <button onClick={enFunc}>English</button>
            </div>
            <div className="arabic">
              <button onClick={arFunc}>العربية</button>
            </div>
          </div>
          <div className="DarkMode">
            <button onClick={handleLightDarkMode}>
              <IoIosSunny />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
