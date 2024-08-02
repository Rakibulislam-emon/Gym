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
                path: "/contact",
                element: <Contact />
            },
            {
                path: '/payment',
                element: <Payment/>
            }
            

        ]
    },
    { path: '/login',element: <Login />},
    { path: '/register', element: <RegisterNow/>},

])