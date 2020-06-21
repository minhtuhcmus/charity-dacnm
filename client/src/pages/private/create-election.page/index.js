import React, { useState, useRef, useEffect } from 'react'
import './style.scss'
import userAPI from '_api/user'
// components
import TextArea from '_components/text-area'
import TextInput from '_components/text-input'
import Button from '_components/button'
const CreateElectionPage = props => {
  const [candidate, setCandidate] = useState(0)
  const [candidateList, setCandidateList] = useState(false)
  const [data, setData] = useState(false)
  const uploadRef = useRef(null)
  useEffect(() => {
    let temp = []
    for (let i = 0; i < candidate; i++) {
      temp.push(false)
    }
    setCandidateList(temp)
  }, [candidate])
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
                let temp = [...candidateList]
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
  const handleUploadFile = files => {
    const { length } = files
    const reader = new window.FileReader()
    if (length === 0) {
      return false
    }
    const { type, name } = files[0]
    if (type != 'text/plain') {
      return
    }
    reader.readAsText(files[0])
    reader.onload = loadEvt => {
      const data = loadEvt.target.result
      setData({
        filename: name,
        data: data.split("\n")
      })
    }
  }
  const onDrop = e => {
    e.preventDefault()
    const {
      dataTransfer: { files }
    } = e
    handleFileUpload(files)
  }
  const onDragOver = e => {
    e.preventDefault()
  }
  const onDragLeave = e => {
    e.preventDefault()
  }
  const handleSubmit = async () => {
    const res = await userAPI.createElection(data)
    console.log(res)
  }
  const controllButton = () => {
    if (candidate === 0)
      return false
    else {
      if (candidateList.length === 0)
        return false
      else
        candidateList.forEach(el => {
          if (!el)
            return false
        })
    }
    if (!data)
      return false
    return true
  }
  return (
    <div className="page-create-election">
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
        onDrop={e => onDrop(e)}
        onDragOver={e => onDragOver(e)}
        onDragLeave={e => onDragLeave(e)}
      >
        {
          data ?
          <span className="heading-6">
            {data.filename}
            {
              console.log(data)
            }
          </span>
          :
          <>
            <input
              type="file"
              style={{ display: 'none' }}
              ref={uploadRef}
              onChange={e => handleUploadFile(e.target.files)}
            />
            <div className="upload-area">
              <span>Tải lên file</span>
            </div>
          </>
        }
        
      </div>
      <div className="controller">
        <Button
          title="Create"
          type={`${controllButton() ? 'normal' : 'disable'}`}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default CreateElectionPage