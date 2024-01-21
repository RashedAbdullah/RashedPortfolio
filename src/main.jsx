import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RoutePages from "./Components/Routs/Routes";
import "./css/MainCSS.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={RoutePages}></RouterProvider>
  </React.StrictMode>
);
