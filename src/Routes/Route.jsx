import { createBrowserRouter } from "react-router-dom";
import Login from "../Authentication/Login";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Classes from "../Pages/Classes/Classes";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
// import RegisterNow from "../Components/Home/RegisterNow/RegisterNow";
import BlogDetails from "../Components/Blog/BlogDetails";
import Dashboard from "../Dashboard/Dashboard";
import Payment from "../Stripe/Payment";
import PaymentSuccessful from "../Stripe/PaymentSuccessful";
// import Profile from "../DBcomponents/Profile";
import ClassTimeTable from "../Components/Clasess/ClassTimeTable";
import Signup from "../Components/Home/RegisterNow/Signup";
import AdminDashboard from "../DBcomponents/AdminDashboard/AdminDashboard";
import EditUser from "../DBcomponents/AdminDashboard/EditUser";
import SubscriptionLists from "../DBcomponents/UserDashboard/SubscriptionLists";
import PrivateRoute from "./PrivateRout";
export const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
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
        path: "/classes",
        element: <Classes />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/details",
        element: <BlogDetails />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
      },
      {
        path: "/payment-successful",
        element: <PaymentSuccessful />,
      },
    ],
  },
  // dashboard
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/edit/:id",
        element: (
          <PrivateRoute>
            <EditUser />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/users/${params.id}`),
      },
      // users

      {
        path: "subscriptionLists",
        element: <SubscriptionLists />,
      },
      {
        path: "classTimeTable",
        element: <ClassTimeTable />,
      },
    ],
  },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Signup /> },
]);
