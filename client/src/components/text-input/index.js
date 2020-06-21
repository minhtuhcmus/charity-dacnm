import React from 'react'
import './style.scss'

// import external package
import classNames from 'classnames'
const TextInput = props => {
  const {
    size = 'normal',
    value,
    onChange,
    error = false,
    warning = false,
    title = false,
    ...rest
  } = props
  return (
    <div className="component-text-input">
      {title && <span className="title">{title}</span>}
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className={classNames(size, {error: error}, {warning: warning})}
      />
      {error && <span className="errors">{error}</span>}
    </div>
  )
}

export default TextInput