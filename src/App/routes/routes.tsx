import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default routes;
