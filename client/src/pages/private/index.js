import ProfilePage from './ProfilePage'
import VotePage from './VotePage'

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
  },
  {
    ...routeConfig,
    layout: {
      header: true,
      sider: false,
      footer: true,
    },
    title: 'Vote Page',
    component: VotePage,
    path: '/vote',
    roleAllow: 'USER'
  }
]

export default PrivateRoutes