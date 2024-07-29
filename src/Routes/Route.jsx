import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Classes from "../Pages/Classes/Classes";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";

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
                element: <About/>
            },
            {
                path: "/classes",
                element: <Classes/>
            },
            {
                path: "/Blog",
                element: <Blog/>
            },
         
            {
                path: "/contact",
                element: <Contact/>
            },
        ]
    },

])