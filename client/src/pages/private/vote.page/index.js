import React, { useState } from 'react'
import './style.scss'
//component
import VotingList from '_components/voting-list'
import Button from '_components/button'
//package
const VotePage = props => {
  const [value, setValue] = useState(null)
  const handleSubmit = e => {
    e.prventDefault()
    console.log('submit')
  }
  return (
    <form className="page-voting" onSubmit={handleSubmit}>
      <div className="title">
        <span>Hãy bầu chọn cho người bạn thích nhất</span>
      </div>
      <span className="hint">Choose an option:</span>
      <div className="content">
        <VotingList
          value={value}
          changeValue={setValue}
          options={[
            {value: 'dfsadfasdfasd'},
            {value: 'adsfwqerewcfwqeqewasdfdsfasdfasdfasdfsdafasdfdsf'},
            {value: 'asdfwefqweadcef'},
            {value: 'dfwegvasweerg'},
            {value: 'weqrewrqwer'}
          ]}
        />
      </div>
      <div className="foot">
        <Button type={`${value ? 'normal' : 'disable'}`} onClick={handleSubmit} title="Vote"/>
      </div>
    </form>
  )
}

export default VotePage