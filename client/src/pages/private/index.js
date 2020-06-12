import ProfilePage from './ProfilePage'
import PrivateRoute from '_router/PrivateRoute'
const routeConfig = {
  layout: {
    header: true,
    sider: true,
    footer: true,
  },
  route: PrivateRoute
}

const PrivateRoutes = [
  {
    ...routeConfig,
    title: 'Profile Page',
    component: ProfilePage,
    path: '/profile',
  }
]

export default PrivateRoutes