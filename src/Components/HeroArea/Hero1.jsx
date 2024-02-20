import "./Hero1.css";
import { ImDownload3 } from "react-icons/im";
import "animate.css";
import { useTranslation } from "react-i18next";

const Hero1 = () => {
  const { t } = useTranslation();

  return (
    <div className="mainHeroDiv">
      <div className="threeDiv">
        <div className="centerHeroArea">
          <div>
            <h2 className=" ">
              {t("fname")} <span>{t("lname")}</span>
            </h2>
            <h3 className=" ">{t("frontend")}</h3>
            <div className="heroPara  ">
              <p>
                {t("aboutmeInhome1")} <span>{t("react")}</span>
                {t("and")}
                <span>{t("js")}</span>
                {t("aboutmeInhome2")}
              </p>
            </div>
            <div className="resumeDownload  ">
              <div className="flex justify-center items-center gap-2">
                <ImDownload3 />
                {t("resume")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
