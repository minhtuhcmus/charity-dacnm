import React from 'react'
import './style.scss'
//package
import classNames from 'classnames'
const VotingList = props => {
  const {
    options = false,
    value,
    changeValue,
  } = props

  const renderList = () => {
    return options.map((el, index) =>
      <div
        className={classNames('container', { active: el.value === value })}
        key={index}
        onClick={() => {
          changeValue(index)
        }}
      >
        <span>{el.value}</span>
      </div>
    )
  }
  return (
    <div className="component-voting-list">
      {
        options &&
        <div className="list-wrapper">
          {
            renderList()
          }
        </div>
      }
    </div>
  )
}

export default VotingList