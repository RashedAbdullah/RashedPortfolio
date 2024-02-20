import "./Hero1.css";
import { ImDownload3 } from "react-icons/im";
import "animate.css";
import { useTranslation } from "react-i18next";

const Hero1 = () => {
  const { t } = useTranslation();

  return (
    <div className="mainHeroDiv">
      <div className="flex h-full justify-center items-center">
        <div className="flex justify-center items-center text-center">
          <div>
            <h2 className=" text-3xl">
              {t("fname")} <span>{t("lname")}</span>
            </h2>
            <h3 className=" text-xl mt-2 uppercase">{t("frontend")}</h3>
            <div className="w-[90vw] lg:w-[60vw] text-xl">
              <p>
                {t("aboutmeInhome1")} <span>{t("react")}</span>
                {t("and")}
                <span>{t("js")}</span>
                {t("aboutmeInhome2")}
              </p>
            </div>
            <div className="mt-5">
              <button className="flex justify-center items-center gap-2 transition duration-200 m-auto border border-[#00ffff] rounded px-10 py-2 hover:bg-[#00ffff] hover:text-[#121212]">
                <ImDownload3 />
                {t("resume")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
