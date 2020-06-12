import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import AuthRoutes from '_pages/auth'
import PublicRoutes from '_pages/public'
import PrivateRoutes from '_pages/private'

const MergedRoute = [
  ...AuthRoutes,
  ...PublicRoutes,
  ...PrivateRoutes
]

const AppRouter = () => {
  useEffect(() => {
  }, [])
  return (
    <Router>
      {
        MergedRoute ?
        MergedRoute.map(route => {
          const Route = route.route
          return <Route
            exact
            key={route.path}
            path={route.path}
            layout={route.layout}
            component={route.component}
          />
        }) :
        <div>
        </div>
      }
    </Router>
  )
}

export default AppRouter