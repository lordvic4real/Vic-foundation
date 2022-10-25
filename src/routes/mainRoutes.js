import Layout from '../Layout/Layout'
import pagesRoutes from './pageRoutes'

const mainRoute = [
  {
    path: '/',
    element: <Layout />,
    alias: 'userLayout',
    icon: null,
    isAuth: false,
    isIndex: false,
    subRoute: pagesRoutes,
  },
]

export default mainRoute
