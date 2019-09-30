import React from 'react';
import '../styles/Backspace.css';

export const Backspace = (props) => (
  <div className="backspace-button" onClick = {props.handleBackspace}>
    { props.children }
  </div>
)