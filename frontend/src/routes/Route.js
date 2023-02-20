import AdminRoot from '../components/Admin/AdminRoot';
import Beauty from '../components/Main/Footer/Categories/Beauty/Beauty';
import LifeStyle from '../components/Main/Footer/Categories/LifeStyle/LifeStyle';
import Products from '../components/Main/Footer/Categories/Products/Products';
import Tips from '../components/Main/Footer/Categories/Tips/Tips';
import MainRoot from '../components/Main/MainRoot';
import About from '../pages/Main/About/About';
import DataDetails from '../pages/Main/DataDetails/DataDetails';
import Home from '../pages/Main/Home/Home';
import NotFound from '../pages/Main/NotFound/NotFound';
import AllProducts from '../pages/Admin/Products/AllProducts';
import DashBoard from '../pages/Admin/DashBoard/DashBoard';
import Contact from '../pages/Main/Contact/Contact';
import CategoryDetail from '../components/Main/Navbar/CategoryDetail';

export const ROUTES = [
  {
    path: '/',
    element: <MainRoot />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'notFound',
        element: <NotFound />,
      },
      {
        path: ':id',
        element: <DataDetails />,
      },
      {
        path: 'beauty',
        element: <Beauty />,
      },
      {
        path: 'lifestyle',
        element: <LifeStyle />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'tips',
        element: <Tips />,
      },
      {
        path:"category/:id",
        element:<CategoryDetail/>
      }
    ],
  },
  {
    path: '/admin/',
    element: <AdminRoot />,
    children: [
        {
         path:"",
         element:<DashBoard/>
        },
      {
        path: 'products',
        element: <AllProducts />,
      },
    ],
  },
];
