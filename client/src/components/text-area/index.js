import React from 'react'
import './style.scss'

const TextArea = props => {
  const {
    title = false,
    ...rest
  } = props
  return (
    <div className="component-textarea">
      {title && <span className="title">{title}</span>}
      <textarea {...rest}/>
    </div>
  )
}

export default TextArea