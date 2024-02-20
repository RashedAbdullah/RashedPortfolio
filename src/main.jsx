import React from "react";
import ReactDOM from "react-dom/client";
import "./css/MainCSS.css";
import Home from "./Components/Pages/Home";
import Context from "./context/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
      <Home />
    </Context>
  </React.StrictMode>
);
