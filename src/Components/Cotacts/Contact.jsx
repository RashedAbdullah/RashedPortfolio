import { useContext } from "react";
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
    <div
      id="Contact"
      className="mainContactBox text-center mx-20 lg:p-28 min-h-screen lg:mx-0"
    >
      <div>
        <div className="text-3xl m-5">
          <h3>{t("talk")}</h3>
        </div>
        <div className="formAndConcatBox flex-col lg:flex-row flex m-auto align-middle items-center justify-center gap-1">
          <div
            style={isLight ? light : dark}
            className="lg:w-[400px] w-[80vw] h-[500px] p-[4vw] formbox"
          >
            <form action="">
              <div className="flex items-center ">
                <span>
                  <FaRegUser />
                </span>
                <input type="text" placeholder={t("palcename")} />
              </div>
              <div className="flex items-center">
                <span>
                  <MdOutlineEmail />
                </span>
                <input type="email" placeholder={t("placeMail")} />
              </div>
              <div className="flex items-center">
                <span>
                  <MdAddCall />
                </span>
                <input type="number" placeholder={t("placePhone")} />
              </div>
              <div className="msgBox">
                <div className="flex items-center">
                  <span>
                    <LuMessageCircle />
                  </span>{" "}
                  {t("msg")}
                </div>
              </div>
              <div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="5"
                  placeholder="Talk what you want..."
                  className=" w-full resize-none bg-transparent border border-[#004545] text-lg outline-none p-2"
                ></textarea>
              </div>
              <div>
                <button className="w-full h-[28px] text-white bg-[#003b3b]">
                  {t("submit")}
                </button>
              </div>
            </form>
          </div>

          <div
            style={isLight ? light : dark}
            className="ContactBox  p-[4vw] flex flex-col gap-[40px] lg:w-[400px] w-[80vw] h-[500px] transition duration-300"
          >
            <div>
              <p className="text-center">{t("suggestion")}</p>
            </div>
            <div className="address">
              <p className="flex gap-5">
                <span className="locationIcon text-lg">
                  <FaLocationDot />
                </span>{" "}
                {t("address")}
              </p>
            </div>

            <div className="mail">
              <p className="flex gap-5">
                <span className="mailIcon text-lg">
                  <FaTelegramPlane />
                </span>{" "}
                {t("mail")}
              </p>
            </div>

            <div className="phone">
              <p className="flex gap-5">
                <span className="phoneIcon">
                  <HiPhoneMissedCall />
                </span>{" "}
                {t("phone")}
              </p>
            </div>

            <div className="mail">
              <p className="flex gap-5">
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
