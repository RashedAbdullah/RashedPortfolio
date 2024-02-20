/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import MobileMenu from "./mobileMenu";
import { navigations, navigationsAr } from "./navigations";
import "./headerStyle.css";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { LuSunMoon } from "react-icons/lu";
import { MdNightlight } from "react-icons/md";
import SwitchLang from "./switchLang";

export default function Header({ setArClass, setIsLight, isLight }) {
  const [isOn, setIsOn] = useState(false);
  const [isArabic, setIsArabic] = useState(true);
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
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

  function SwitchTheme({ isOn, ...props }) {
    const className = `switch ${isOn ? "on" : "off"}`;

    return (
      <motion.div animate className={className} {...props}>
        <motion.div
          animate
          className="flex items-center justify-center transition duration-300"
        >
          {isOn ? <MdNightlight color="black" /> : <LuSunMoon color="black" />}
        </motion.div>
      </motion.div>
    );
  }

  useEffect(() => {
    document.body.style.backgroundColor = isOn ? "#1c1c1c" : "#ffffff";
  }, [isOn]);

  const handleToggle = () => {
    setIsOn(!isOn);
    setIsLight(!isLight);
  };

  const switchLangAr = () => {
    setIsArabic(!isArabic);
    if (isArabic) {
      arFunc();
    } else {
      enFunc();
    }
  };
  return (
    <div className=" bg-transparent fixed w-full top-0 flex items-center justify-center pt-5">
      <div className="header-bg w-[95%] rounded-[10px]">
        {/* Mobile menu */}
        <MobileMenu
          open={open}
          setOpen={setOpen}
          isArabic={isArabic}
          switchLangAr={switchLangAr}
        />

        <header className="relative bg-primaryHover text-white">
          <nav
            aria-label="Top"
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
          >
            <div>
              <div className="flex py-4 justify-between items-center">
                {!open && (
                  <button
                    type="button"
                    className="relative rounded-md bg-textWhite p-2 text-gray-400 lg:hidden"
                    onClick={() => setOpen(true)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                  </button>
                )}

                {/* User info */}
                <div className="ml-4 flex lg:ml-0">
                  {/* {user ? (
                <>
                  <button onClick={() => navigate("/user")}>
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="user profile"
                        className="h-10 w-10 rounded-full"
                      />
                    ) : (
                      <FaUserAlt size={"25px"} />
                    )}
                  </button>
                </>
              ) : (
                <NavLink to="/signin">
                  <span className="sr-only">sign in</span>
                  <FaSignInAlt size={"25px"} />
                </NavLink>
              )} */}
                </div>

                {/* Flyout menus */}
                <Popover.Group className="hidden lg:ml-8 lg:block lg:self-center">
                  <div
                    dir={!isArabic ? "rtl" : "ltr"}
                    className="flex h-full space-x-8 gap-8"
                  >
                    {isArabic
                      ? navigations.map((page) => (
                          <NavLink
                            key={page.name}
                            to={page.navlink}
                            className="flex items-center text-lg font-medium text-textWhite hover:text-gray-400 py-1 px-3 rounded"
                          >
                            {page.name}
                          </NavLink>
                        ))
                      : navigationsAr.map((page) => (
                          <NavLink
                            key={page.name}
                            to={page.navlink}
                            className="flex items-center text-lg font-medium text-textWhite hover:text-gray-400 py-1 px-3 rounded"
                          >
                            {page.name}
                          </NavLink>
                        ))}
                  </div>
                </Popover.Group>
                {/* Light and Dark */}
                <div className="flex gap-5">
                  <div>
                    <SwitchTheme isOn={isOn} onClick={handleToggle} />
                  </div>
                  <div className="hidden lg:block">
                    <SwitchLang isArabic={isArabic} onClick={switchLangAr} />
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
