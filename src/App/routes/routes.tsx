import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import AllProducts from "../components/AllProducts/AllProducts";

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
        path: "about",
        element: <About />,
      },
      {
        path: "all-products",
        element: <AllProducts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
