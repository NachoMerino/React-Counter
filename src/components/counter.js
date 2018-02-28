import React from 'react';

const counter = (props) => {
let style;
  if (props.toggle){
    style = {
      display: 'block'
    }
  } else {
    style = {
      display: 'none'
    }
  }

  return (
      <h1 style={style}>{props.num}</h1>
    );
}


export default counter;