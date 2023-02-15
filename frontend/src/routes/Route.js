import Beauty from "../components/Footer/Categories/Beauty/Beauty";
import LifeStyle from "../components/Footer/Categories/LifeStyle/LifeStyle";
import Products from "../components/Footer/Categories/Products/Products";
import Tips from "../components/Footer/Categories/Tips/Tips";
import MainRoot from "../components/MainRoot";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import DataDetails from "../pages/DataDetails/DataDetails";
import Home from "../pages/Home/Home";
import Beauty2 from "../pages/Home/SecondSection/Beauty2/Beauty2";
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
                path:":id",
                element:<DataDetails/>
            },
            {
                path:"firstCard",
                element:<FirstCard/>
            },
            {
                path:"beauty2",
                element:<Beauty2/>
            },
            {
                path:"beauty",
                element:<Beauty/>
            },
            {
                path:"lifestyle",
                element:<LifeStyle/>
            },
            {
                path:"products",
                element:<Products/>
            },
            {
                path:"tips",
                element:<Tips/>
            }
        ]
    },
]