import Hero1 from "../HeroArea/Hero1";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Contact from "../Cotacts/Contact";
import Header from "../header/header";
import Footer from "../Footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n/i18n";
import { useContext, useState } from "react";
import { context } from "../../context/Context";

const Home = () => {
  const [arClass, setArClass] = useState(false);
  const { isLight, setIsLight } = useContext(context);
  const darkMode = {
    color: "#fff",
    backgroundColor: "#121212",
    backgroundImage:
      "radial-gradient(circle at center center, #444cf7, #646464), repeating-radial-gradient(circle at center center, #444cf7, #444cf7, 4px, transparent 8px, transparent 4px)",
    backgroundBlendMode: "multiply",
    opacity: "1",
  };

  const lightMode = {
    color: "#000",
    backgroundColor: "#ffffff",
    backgroundImage:
      "radial-gradient(circle at center center, #ffffff, #ffffff), repeating-radial-gradient(circle at center center, #ffffff, #f3f3f3, 4px, transparent 8px, transparent 4px)",
    backgroundBlendMode: "multiply",
    opacity: "1",
  };
  return (
    <div
      style={isLight ? lightMode : darkMode}
      className={`${arClass ? "arabicFont" : ""}`}
    >
      <I18nextProvider i18n={i18n}>
        <Header
          setArClass={setArClass}
          isLight={isLight}
          setIsLight={setIsLight}
        />
        <Hero1 />
        <Projects />
        {/* <Skills /> */}
        <Contact />
        <About />
        <Footer setArClass={setArClass} />
      </I18nextProvider>
    </div>
  );
};

export default Home;
