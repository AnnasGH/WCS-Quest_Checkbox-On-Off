import React, { Component } from "react";

function Button(props) {
  /*const { active, handleChange } = props;*/
  return (
    <button
      className={props.active ? "button-on" : "button-off"}
      onClick={props.handleChange}
      type="button"
    >
      {props.active ? "on" : "off"}
    </button>
  );
}

export default Button;
