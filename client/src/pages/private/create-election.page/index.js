import React, { useState, useRef } from 'react'
import './style.scss'
// components
import TextArea from '_components/text-area'
import TextInput from '_components/text-input'
const CreateElectionPage = props => {
  const [candidate, setCandidate] = useState(0)
  const [candidateList, setCandidateList] = useState([])
  const uploadRef = useRef(null)
  const renderCandidateInput = () => {
    const res = []
    for (let i = 0; i < candidate; i++) {
      res.push(
        <div className="input">
          <TextInput
            key={i}
            placeholder={`Tên ứng viên ${i + 1}`}
            
            onChange={
              e => {
                let temp = {...candidateList}
                temp[i] = e.target.value
                setCandidateList(temp)
              }
            }
          />
        </div>
      )
    }
    if (res.length > 0) {
      return res
    }
    return null
  }
  return (
    <div className="page-create-election">
      <div className="description">
        <TextArea placeholder="Mô tả"/>
      </div>
      <div className="option-list">
        <div className="candidate">
          <TextInput
            placeholder="Số lượng ứng viên"
            onChange={e => setCandidate(e.target.value)}
          />
        </div>
        <div className="list">
          {
            renderCandidateInput()
          }
        </div>
      </div>
      <div
        className="file-upload"
        onClick={() => uploadRef.current.click()}
      >
        <input type="file" style={{ display: 'none' }} ref={uploadRef}/>
        <div className="upload-area">
          <span>Tải lên file</span>
        </div>
      </div>
    </div>
  )
}

export default CreateElectionPage