import HomePage from './HomePage'
import PublicRoute from '_router/PublicRoute'
const routeConfig = {
  layout: {
    header: true,
    sider: false,
    footer: true,
  },
  route: PublicRoute
}

const PublicRoutes = [
  {
    ...routeConfig,
    title: "Home Page",
    component: HomePage,
    path: '/'
  },
]

export default PublicRoutes