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
      <p className="title">{title && <span>{title}</span>}</p>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        className={classNames(size, {error: error}, {warning: warning})}
      />
      <p className="errors">{error && <span>{error}</span>}</p>
    </div>
  )
}

export default TextInput