import MainRoot from "../components/MainRoot";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import FirstCard from "../pages/Home/SecondSection/FirstCard/FirstCard";
import NotFound from "../pages/NotFound/NotFound";

export const ROUTES=[
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>,
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"notFound",
                element:<NotFound/>
            },
            {
                path:"firstCard",
                element:<FirstCard/>
            }
        ]
    },
]