import React, { useState, useEffect } from 'react'
import './style.scss'
import userAPI from '_api/user'
//component
import VotingList from '_components/voting-list'
import Button from '_components/button'
import TextInput from '_components/text-input'
//package
const VotePage = props => {
  const [value, setValue] = useState(null)
  const [code, setCode] = useState(null)
  const [candidates, setCandidates] = useState(null)
  const handleSubmit = async e => {
    e.prventDefault()
    await userAPI.vote(value)
  }
  const getCandidates = async () => {
    const res = await userAPI.getCandidates()
    setCandidates(res)
  }
  useEffect(() => {
    getCandidates()
  }, [])
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
          options={candidates}
        />  
      </div>
      <div className="code">
        <TextInput title="Hãy nhập mã code" value={code} onChange={e => setCode(e.target.value)}/>
      </div>
      <div className="foot">
        <Button
          type={`${value && code ? 'normal' : 'disable'}`}
          onClick={handleSubmit}
          title="Vote"
        />
      </div>
    </form>
  )
}

export default VotePage