import React, { useState, useEffect } from 'react'
import API from '_api'
import './style.scss'
// packages
import { useHistory } from 'react-router-dom'

// components
import TextInput from '_components/text-input'
import TextArea from '_components/text-area'
import Button from '_components/button'
import VotingList from '_components/voting-list'
const HomePage = () => {
  const handleChose = value => {
    console.log(value)
  }
  const [value, setValue] = useState(null)
  return (
    <>
      <TextInput></TextInput>
      <div style={{width: '200px', height: '200px'}}>
        <TextArea></TextArea>
      </div>
      <div style={{paddingTop: '20px'}}>
        <VotingList
          value={value}
          changeValue={setValue}
          options={[
            {value: 'dfsadfasdfasd'},
            {value: 'adsfwqerewcfwqeqew'},
            {value: 'asdfwefqweadcef'},
            {value: 'dfwegvasweerg'},
            {value: 'weqrewrqwer'}
          ]}
        />
      </div>
    </>
  )
}

export default HomePage