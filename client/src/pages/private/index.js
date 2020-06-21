import ProfilePage from './profile.page'
import VotePage from './vote.page'
import CreateElectionPage from './create-election.page'
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
    roleAllow: ['USER', 'ADMIN']
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
    roleAllow: ['USER']
  },
  {
    ...routeConfig,
    layout: {
      header: true,
      sider: false,
      footer: true,
    },
    title: 'Create Election Page',
    component: CreateElectionPage,
    path: '/admin/create-election',
    roleAllow: ['ADMIN']
  }
]

export default PrivateRoutes