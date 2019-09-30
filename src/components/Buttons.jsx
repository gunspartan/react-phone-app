import React from 'react';
import '../styles/Buttons.css'

export const Button = props => (
  <div className="button-wrapper" onClick={() => props.handleClick(props.children)}>
    { props.children }
  </div>
)