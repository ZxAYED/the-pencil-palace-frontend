import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import About from "../components/About/About";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import CreateProduct from "../components/AdminDashboard/CreateProduct";
import GetAllProducts from "../components/AdminDashboard/GetAllProducts";
import AllProducts from "../components/AllProducts/AllProducts";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Home from "../components/Home/Home";
import AdminLayout from "../components/Layout/AdminLayout";
import PrivateRoute from "../components/Private/PrivateRoutes";

import UserManagement from "../components/AdminDashboard/UserManagement";
import ProductInfo from "../components/AllProducts/ProductInfo";
import ChangePassword from "../components/Auth/ChangePassword";
import ResetPassword from "../components/Auth/ResetPassword";

import AdminOrderManagement from "../components/AdminDashboard/AdminOrderManagement";
import PaymentPage from "../components/CheckoutPage/PaymentPage";
import UserDashboard from "../components/UserDashboard/UserDashboard";

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
        path: "/admin/dashboard/orders",
        element: (
          <PrivateRoute>
            <AdminOrderManagement />
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
    path: "/user/dashboard",
    element: (
      <PrivateRoute>
        <AdminLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/payment/:orderId",
    element: <PaymentPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
