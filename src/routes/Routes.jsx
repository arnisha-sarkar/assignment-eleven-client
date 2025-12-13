import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AddProduct from "../components/Form/AddProduct";
import AllProduct from "../pages/AllProduct/AllProduct";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import PaymentSucess from "../pages/Payment/PaymentSucess";
import MyOrders from "../pages/Dashboard/Customer/MyOrders";
import Profile from "../pages/Dashboard/Common/Profile";
import ManageOrder from "../pages/Dashboard/Manager/ManageOrder";
import PendingOrders from "../pages/Dashboard/Manager/PendingOrders";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import Statistics from "../pages/Dashboard/Common/Statistics";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import AllProducts from "../pages/Dashboard/Admin/AllProducts";
import AllOrders from "../pages/Dashboard/Admin/AllOrders";
import AllOrderDetails from "../pages/Dashboard/Admin/AllOrderDetails";
import ApproveOrders from "../pages/Dashboard/Manager/ApproveOrders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-product",
        element: <AllProduct />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/product-details/:id",
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-success",
        element: <PaymentSucess />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Statistics />
          </PrivateRoute>
        ),
      },
      {
        path: "add-product",
        element: (
          <PrivateRoute>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "all-products",
        element: (
          <PrivateRoute>
            <AllProducts />
          </PrivateRoute>
        ),
      },
      {
        path: "all-orders",
        element: (
          <PrivateRoute>
            <AllOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "order-details/:id",
        element: (
          <PrivateRoute>
            <AllOrderDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "pending-orders",
        element: (
          <PrivateRoute>
            <PendingOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "approve-orders",
        element: (
          <PrivateRoute>
            <ApproveOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "manage-orders",
        element: <ManageOrder />,
      },
      // {
      //   path: "update-modal/:id",
      //   element: (
      //     <PrivateRoute>
      //       <UpdateModal />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);
