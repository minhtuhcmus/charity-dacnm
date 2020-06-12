import React, { useState, useEffect } from 'react'
import API from '_api'
import './style.scss'
// packages
import { useHistory } from 'react-router-dom'

// components
import TextInput from '_components/text-input'
import Button from '_components/button'
const HomePage = () => {
  const handleChose = value => {
    console.log(value)
  }
  return (
    <TextInput></TextInput>
    
  )
}

export default HomePage