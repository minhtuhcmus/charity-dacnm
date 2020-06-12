import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { PAGE_TYPE } from '_constants'
import AppLayout from '_layout'
function directRoute (checkAuth, pageType, pathname) {
  return function AppRoute ({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props => {
          const PageComponent = () => <AppLayout layout={rest.layout} {...props}><Component/></AppLayout>
          switch (pageType){
            case PAGE_TYPE.PUBLIC:
              return <PageComponent/>
            default:
              if (checkAuth()) {
                return <PageComponent/>
              }
              return <Redirect to={{ pathname, state: { from: props.location } }}/>
          }
        }}
      />
    )
  }
}

export default directRoute