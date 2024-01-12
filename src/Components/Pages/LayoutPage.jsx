import React, { useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "./../Footer/Footer";
import Header from "./../Navbar/Navbar";
import { I18nextProvider } from "react-i18next";
import i18n from "./../../i18n/i18n";

const LayoutPage = () => {
  const [arClass, setArClass] = useState(false);
  return (
    <div className={arClass ? "arabicFont" : ""}>
      <ScrollRestoration />
      <I18nextProvider i18n={i18n}>
        <Header setArClass={setArClass} />
        <Outlet setArClass={setArClass} />
        <Footer setArClass={setArClass} />
      </I18nextProvider>
    </div>
  );
};

export default LayoutPage;
