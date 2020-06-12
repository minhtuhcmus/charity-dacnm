import React from 'react'
import './style.scss'

const AppMain = (props) => {
  return (
    <div className="main-component">
      {props.children}
    </div>
  )
}

export default AppMain