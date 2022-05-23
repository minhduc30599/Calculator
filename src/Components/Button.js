import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <input 
    className={props.className}
    type='button'
    value={props.id} 
    onClick={props.onPressButton}
    />
  );
}

export default Button;