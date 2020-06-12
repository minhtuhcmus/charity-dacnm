import React, { useEffect } from 'react'
import './style.scss'
// package
// components
import TextInput from '_components/text-input'
const LoginPage = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-form">
        <div className="title">
          <p>Login</p>
        </div>
        <div className="content">
          <TextInput placeholder="Username"/>
          <TextInput placeholder="Password"/>
        </div>
        <div className="foot">
          
        </div>
      </div>
    </div>
  )
}

export default LoginPage