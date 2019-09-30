import React from 'react';
import '../styles/Call.css';

export const Call = (props) => (
  <div className="call-button" onClick = {props.handleCall}>
    { props.children }
  </div>
)