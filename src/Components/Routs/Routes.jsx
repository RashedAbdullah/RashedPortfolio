import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Projects from "./../Projects/Projects";
import Contact from "./../Cotacts/Contact";
import About from "./../About/About";
import LayoutPage from "../Pages/LayoutPage";
import Context from "../../context/Context";

const RoutePages = createBrowserRouter([
  {
    element: (
      <Context>
        <LayoutPage />
      </Context>
    ),
    errorElement: <h2>404 Not Found page</h2>,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "/",
      },
      {
        element: (
          <Context>
            <Projects />
          </Context>
        ),
        path: "/project",
      },
      {
        element: (
          <div
            style={{
              color: "white",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>The blog page is comming...</h1>
          </div>
        ),
        path: "/blog",
      },
      {
        element: (
          <Context>
            <Contact />
          </Context>
        ),
        path: "/contact",
      },
      {
        element: <About />,
        path: "/about",
      },
    ],
  },
]);

export default RoutePages;
