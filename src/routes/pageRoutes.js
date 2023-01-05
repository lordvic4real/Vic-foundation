import AboutPage from "../pages/AboutPage";
import Contact from "../pages/Contact";
import Gallery from "../pages/Gallery";
import Home from "../pages/Home";
import { Programs } from "../pages/Programs";

const pagesRoutes = [
    {
      path: '',
      element: <Home /> ,
      alias: 'Login',
      icon: null,
      isAuth: false,
      isIndex: true,
      subRoute: null,
  },
  {
    path: 'about',
    element: <AboutPage />,
    alias: 'Layout',
    icon: null,
    isAuth: false,
    isIndex: false,
    subRoute: null,
  },
  {
    path: 'contact',
    element: <Contact />,
     alias: 'Layout',
   icon: null,
   isAuth: false,
    isIndex: false,
    subRoute: null,
   },
   {
    path: 'gallery',
    element: <Gallery />,
     alias: 'Layout',
   icon: null,
   isAuth: false,
    isIndex: false,
    subRoute: null,
   },
   {
    path: 'programs',
    element: <Programs />,
     alias: 'Layout',
   icon: null,
   isAuth: false,
    isIndex: false,
    subRoute: null,
   },

]

export default pagesRoutes;
