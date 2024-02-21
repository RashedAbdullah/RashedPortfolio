import "./Hero1.css";
import { ImDownload3 } from "react-icons/im";
import "animate.css";
import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Hero1 = ({ arClass }) => {
  const { t } = useTranslation();

  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
    transition: {
      duration: 0.5,
    },
  };

  return (
    <div id="Home" className="mainHeroDiv">
      <div className="flex h-full justify-center items-center">
        <div className="flex justify-center items-center text-center">
          <div>
            {!arClass ? (
              <motion.h2
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
                className="text-3xl tracking-tight"
              >
                {t("fullname")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i}>
                      {word.split("").map((char, i) => (
                        <motion.span
                          variants={defaultAnimation}
                          key={i}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                      <span>&nbsp;</span>
                    </span>
                  ))}{" "}
              </motion.h2>
            ) : (
              <h2 className="text-3xl">{t("fullname")}</h2>
            )}
            {!arClass ? (
              <motion.h3
                className=" text-xl mt-2 uppercase"
                initial="hidden"
                animate="visible"
                transition={{ staggerChildren: 0.1 }}
              >
                {t("frontend")
                  .split(" ")
                  .map((word, i) => (
                    <span key={i}>
                      {word.split("").map((char, i) => (
                        <motion.span
                          variants={defaultAnimation}
                          key={i}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      ))}
                      <span>&nbsp;</span>
                    </span>
                  ))}{" "}
              </motion.h3>
            ) : (
              <h3 className="text-xl mt-2">{t("frontend")}</h3>
            )}
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
