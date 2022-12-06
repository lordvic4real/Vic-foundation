import Contact from "../pages/Contact";
import Home from "../pages/Home";

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
//   {
//     path: 'about',
//     element: <AboutPage />,
//     alias: 'Layout',
//     icon: null,
//     isAuth: false,
//     isIndex: false,
//     subRoute: null,
//   },
  {
    path: 'contact',
    element: <Contact />,
     alias: 'Layout',
   icon: null,
   isAuth: false,
    isIndex: false,
    subRoute: null,
   },

]

export default pagesRoutes;
