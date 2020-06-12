import LoginPage from './LoginPage'
import AuthRoute from '_router/AuthRoute'
const routeConfig = {
  layout: {
    header: false,
    sider: false,
    footer: false,
  },
  route: AuthRoute
}

const AuthRoutes = [
  {
    ...routeConfig,
    title: "Login Page",
    component: LoginPage,
    path: '/login',
  },
]

export default AuthRoutes