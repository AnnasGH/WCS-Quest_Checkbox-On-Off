import React from "react";
import Checkbox from "./components/Checkbox";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [active, setActive] = React.useState(true);

  function handleChange() {
    setActive(!active);
  }

  return (
    <div className="App">
      <Checkbox active={active} handleChange={handleChange} />
      <Button active={active} handleChange={handleChange} />
    </div>
  );
}

export default App;
