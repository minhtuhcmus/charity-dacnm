import React, { useState, useEffect } from 'react'
import './style.scss'
import { loginValid } from './validation'

// function
import { convertYupError } from '_helpers'
// package

// components
import Button from '_components/button'
import TextInput from '_components/text-input'
import { convertErrorYup } from '../../../utils/helpers'
const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({
    username: false,
    password: false
  })
  
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(e.key)
    try {
      let payload = { username, password }
      await loginValid.validate(payload, { abortEarly: false })
    } catch (error) {
      let err = convertErrorYup(error)
      console.log('err', err)
      setErrors(err)
    }
  }

  const clearError = e => {
    e.preventDefault()
    let { name } = e.target
    console.log(name)
    console.log('errors', errors)
    let errTmp = { ...errors }
    console.log('errTmp', errTmp)
    errTmp[name] = false
    setErrors(errTmp)
  }

  const validateField = async e => {
    e.preventDefault()
    try {
      await loginValid.validate({ username, password })
    } catch (error) {
      let err = convertErrorYup(error)
      console.log('err', err)
      setErrors(err)
    }
  }

  return (
    <div className="page-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="title">
          Login
        </div>
        <div className="content">
          <TextInput
            placeholder="Username"
            autoFocus
            value={username}
            name="username"
            onFocus={clearError}
            onChange={e => {
              if (errors.username) {
                let errTmp = { ...errors }
                errTmp.username = false
                setErrors(errTmp)
              }
              setUsername(e.target.value)
            }}
            error={errors.username}
          />
          <TextInput
            placeholder="Password"
            type="password"
            value={password}
            name="password"
            onFocus={clearError}
            onChange={e => {
              if (errors.password) {
                let errTmp = { ...errors }
                errTmp.password = false
                setErrors(errTmp)
              }
              setPassword(e.target.value)
            }}
            error={errors.password}
          />
        </div>
        <div className="foot">
          <Button title="Login" onClick={handleSubmit}/>
        </div>
      </form>
    </div>
  )
}

export default LoginPage