import React from 'react'
import './Button.css'
const Button = ({style, children}) => {
  return (
    <div className="frame-13 flex-col-hstart-vstart">
      <div style={style}>
        {children}
      </div>
    </div>
  )
}

export default Button