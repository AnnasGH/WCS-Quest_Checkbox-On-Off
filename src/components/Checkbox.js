import React, { Component } from "react";

function Checkbox(props) {
  const { active, handleChange } = props;
  return <input type="checkbox" onChange={handleChange} checked={active} />;
}

export default Checkbox;
