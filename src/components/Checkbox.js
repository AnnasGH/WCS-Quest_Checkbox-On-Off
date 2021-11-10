import React, { Component } from "react";

function Checkbox(props) {
  /*const { active, handleChange } = props;*/
  return (
    <input
      type="checkbox"
      onChange={props.handleChange}
      checked={props.active}
    />
  );
}

export default Checkbox;
