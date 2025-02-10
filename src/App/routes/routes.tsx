import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Register from "../components/Auth/Register";
import Login from "../components/Auth/Login";
import AllProducts from "../components/AllProducts/AllProducts";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import PrivateRoute from "../components/Private/PrivateRoutes";
import CreateProduct from "../components/AdminDashboard/CreateProduct";
import AdminLayout from "../components/Layout/AdminLayout";
import GetAllProducts from "../components/AdminDashboard/GetAllProducts";

import UserManagement from "../components/AdminDashboard/UserManagement";
import ProductInfo from "../components/AllProducts/ProductInfo";
import PaymentPage from "../components/Payment/PaymentPage";

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
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/product/:id",
        element: <ProductInfo />,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "/admin/dashboard/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/create-product",
        element: (
          <PrivateRoute>
            <CreateProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/all-products",
        element: (
          <PrivateRoute>
            <GetAllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard/users",
        element: (
          <PrivateRoute>
            <UserManagement />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
