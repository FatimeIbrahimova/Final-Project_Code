import AdminRoot from "../components/Admin/AdminRoot";
import Beauty from "../components/Main/Footer/Categories/Beauty/Beauty";
import LifeStyle from "../components/Main/Footer/Categories/LifeStyle/LifeStyle";
import Products from "../components/Main/Footer/Categories/Products/Products";
import Tips from "../components/Main/Footer/Categories/Tips/Tips";
import MainRoot from "../components/Main/MainRoot";
import About from "../pages/Main/About/About";
import DataDetails from "../pages/Main/DataDetails/DataDetails";
import Home from "../pages/Main/Home/Home";
import NotFound from "../pages/Main/NotFound/NotFound";
import AllProducts from "../pages/Admin/Products/AllProducts";
import DashBoard from "../pages/Admin/DashBoard/DashBoard";
import Contact from "../pages/Main/Contact/Contact";
import CategoryDetail from "../components/Main/Navbar/Category/CategoryDetail";
import Login from "../pages/Main/Login/Login";
import Register from "../pages/Main/Register/Register";
import UserDetail from "../pages/UserDetail";
import NudeCategory from "../components/Main/Navbar/Category/NudeCategory";
import PermanentCategory from "../components/Main/Navbar/Category/PermanentCategory";
import MatteCategory from "../components/Main/Navbar/Category/MatteCategory";
import EditorialCategory from "../components/Main/Navbar/Category/EditorialCategory";
import DewyCategory from "../components/Main/Navbar/Category/DewyCategory";
import CelebrityCategory from "../components/Main/Navbar/Category/CelebrityCategory";
import AirbrushCategory from "../components/Main/Navbar/Category/AirbrushCategory";
import AllCategories from "../pages/Admin/Categories/AllCategories";
import Comments from "../pages/Admin/Comments/Comments";
import User from "../pages/Admin/User/User";

export const ROUTES = [
	{
		path: "/",
		element: <MainRoot />,
		children: [
			{
				path: "",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: ":id",
				element: <DataDetails />,
			},
			{
				path: "beauty",
				element: <Beauty />,
			},
			{
				path: "lifestyle",
				element: <LifeStyle />,
			},
			{
				path: "products",
				element: <Products />,
			},
			{
				path: "tips",
				element: <Tips />,
			},
			{
				path: "hd",
				element: <CategoryDetail />,
			},
			{
				path: "nude",
				element: <NudeCategory />,
			},
			{
				path: "permanent",
				element: <PermanentCategory />,
			},
			{
				path: "matte",
				element: <MatteCategory />,
			},
			{
				path: "editorial",
				element: <EditorialCategory />,
			},
			{
				path: "dewy",
				element: <DewyCategory />,
			},
			{
				path: "celebrity",
				element: <CelebrityCategory />,
			},
			{
				path: "airbrush",
				element: <AirbrushCategory />,
			},
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "register",
				element: <Register />,
			},
			{
				path: "user",
				element: <UserDetail />,
			},
		],
	},
	{
		path: "notFound",
		element: <NotFound />,
	},
	{
		path: "/admin/",
		element: <AdminRoot />,
		children: [
			{
				path: "",
				element: <DashBoard />,
			},
			{
				path: "products",
				element: <AllProducts />,
			},
			{
				path: "categories",
				element: <AllCategories />,
			},
			{
				path: "comments",
				element: <Comments />,
			},
			{
				path:"user",
				element:<User/>
			}
		],
	},
];
