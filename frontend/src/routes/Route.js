import AdminRoot from '../components/Admin/AdminRoot';
import Beauty from '../components/Footer/Categories/Beauty/Beauty';
import LifeStyle from '../components/Footer/Categories/LifeStyle/LifeStyle';
import Products from '../components/Footer/Categories/Products/Products';
import Tips from '../components/Footer/Categories/Tips/Tips';
import MainRoot from '../components/Main/MainRoot';
import About from '../pages/Main/About/About';
// import Contact from '../pages/Contact/Contact';
import DataDetails from '../pages/DataDetails/DataDetails';
import Home from '../pages/Home/Home';
import NotFound from '../pages/Main/NotFound/NotFound';
import AllProducts from '../pages/Admin/Products/AllProducts';
import DashBoard from '../pages/Admin/DashBoard/DashBoard';
import Contact from '../pages/Main/Contact/Contact';

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
