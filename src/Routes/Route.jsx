import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Classes from "../Pages/Classes/Classes";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Login from "../Authentication/Login";
import RegisterNow from "../Components/Home/RegisterNow/RegisterNow";
import Payment from "../Stripe/Payment";
import PaymentSuccessful from "../Stripe/PaymentSuccessful";
import BlogDetails from "../Components/Blog/BlogDetails";
import Dashboard from "../Dashboard/Dashboard";
// import Profile from "../DBcomponents/Profile";
import AdminDashboard from "../DBcomponents/AdminDashboard/AdminDashboard";
import EditUser from "../DBcomponents/AdminDashboard/EditUser";
import SubscriptionLists from "../DBcomponents/UserDashboard/SubscriptionLists";
import ClassTimeTable from '../Components/Clasess/ClassTimeTable'
export const route = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [

            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/classes",
                element: <Classes />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: '/blog/details',
                element: <BlogDetails />
            },

            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: '/payment',
                element: <Payment />
            },
            {
                path: '/payment-successful',
                element: <PaymentSuccessful />
            }


        ]
    },
    // dashboard
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: '/dashboard',
                element: <AdminDashboard />
            },
         
            {
                path: "/dashboard/edit/:id",
                element: <EditUser />,
                loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
            },
            // users 

            {
                path: 'subscriptionLists', element: <SubscriptionLists />
            },
            {
                path: 'classTimeTable', element: <ClassTimeTable />
            }
          
        ]
    },

    { path: '/login', element: <Login /> },
    { path: '/register', element: <RegisterNow /> },

])