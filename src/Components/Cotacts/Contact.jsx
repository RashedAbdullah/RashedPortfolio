import { useContext, useState } from "react";
import "./Contact.css";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { LuMessageCircle } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";
import { HiPhoneMissedCall } from "react-icons/hi";
import { FaTelegramPlane } from "react-icons/fa";
import { TiWorld } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { context } from "../../context/Context";

const Contact = () => {
  const { t } = useTranslation();
  const { isLight } = useContext(context);
  const [lightMode, setLightMode] = useState(isLight);

  const dark = {
    backgroundColor: "",
    opacity: "1",
    backgroundSize: "4px 4px",
    backgroundImage:
      "repeating-linear-gradient(45deg, #000000 0, #171717 0.4px, #000000 0, #363636 50%)",
  };
  const light = {
    backgroundColor: "#e5e5f7",
    opacity: "0.8",
    backgroundSize: "10px 10px",
    backgroundImage:
      "repeating-linear-gradient(45deg, #dcdcdc 0, #dcdcdc 1px, #e5e5f7 0, #e5e5f7 50%)",
  };

  return (
    <div className="mainContactBox">
      <div>
        <div className="contactHeadline">
          <h3 className="projectHead animate__animated animate__flipInX">
            {t("talk")}
          </h3>
        </div>
        <div className="formAndConcatBox">
          <div
            style={lightMode ? light : dark}
            className="formbox animate__animated animate__fadeInUp"
          >
            <form action="">
              <div>
                <span>
                  <FaRegUser />
                </span>
                <input type="text" placeholder={t("palcename")} />
              </div>
              <div>
                <span>
                  <MdOutlineEmail />
                </span>
                <input type="email" placeholder={t("placeMail")} />
              </div>
              <div>
                <span>
                  <MdAddCall />
                </span>
                <input type="number" placeholder={t("placePhone")} />
              </div>
              <div className="msgBox">
                <p>
                  <span>
                    <LuMessageCircle />
                  </span>{" "}
                  {t("msg")}
                </p>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Talk what you want..."
                ></textarea>
              </div>
              <div>
                <button>{t("submit")}</button>
              </div>
            </form>
          </div>

          <div
            style={lightMode ? light : dark}
            className="ContactBox animate__animated animate__fadeInUp"
          >
            <div>
              <p>{t("suggestion")}</p>
            </div>
            <div className="address">
              <p>
                <span className="locationIcon">
                  <FaLocationDot />
                </span>{" "}
                {t("address")}
              </p>
            </div>

            <div className="mail">
              <p>
                <span className="mailIcon">
                  <FaTelegramPlane />
                </span>{" "}
                {t("mail")}
              </p>
            </div>

            <div className="phone">
              <p>
                <span className="phoneIcon">
                  <HiPhoneMissedCall />
                </span>{" "}
                {t("phone")}
              </p>
            </div>

            <div className="mail">
              <p>
                <span className="mailIcon">
                  <TiWorld />
                </span>{" "}
                {t("website")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
