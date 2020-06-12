import React, { useEffect } from 'react'
import './style.scss'
import AppHeader from './header'
import AppMain from './main'
import AppSider from './sider'
import AppFooter from './footer'
import classNames from 'classnames'
const  AppLayout = props => {
  const { layout } = props
  useEffect(() => {
  }, [])
  return (
    <div className="app-layout">
      {
        layout.header &&
        <div className={classNames('app-header')}>
          <AppHeader/>
        </div>
      }
      <div className="app-content">
        {
          layout.sider &&
          <div className={classNames('app-sider')}>
            <AppSider/>
          </div>
        }
        <div className="app-main">
          <AppMain>
            {
              props.children
            }
          </AppMain>
        </div>
      </div>
      {
        layout.footer &&
        <div className={classNames('app-footer')}>
          <AppFooter/>
        </div>
      }
    </div>
  )
}

export default AppLayout