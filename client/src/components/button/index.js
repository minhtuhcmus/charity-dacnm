import React from 'react'
import './style.scss'
//package
import classNames from 'classnames'
const Button = props => {
  const BUTTON_TYPES = [
    'primary',
    'disable',
    'danger',
    'empty'
  ]
  const BUTTON_SIZES = [
    'small',
    'normal',
    'large'
  ]
  const {
    size = 'normal',
    type = 'primary',
    onClick,
    title = "",
    icon = false,
    loading = false,
    ...rest
  } = props
  return (
    <div className="component-button">
      <button
        {...rest}
        disabled={type === 'disable'}
        onClick={onClick}
        className={`${BUTTON_SIZES.includes(size) ? size : 'normal'} ${BUTTON_TYPES.includes(type) ? type : 'primary'} ${classNames({loading: loading})}`}
      >
        {title}
      </button>
    </div>
  )
}

export default Button