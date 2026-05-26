
import './../styles/App.css';
import React, { useState } from "react";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  const change = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <h2>Enter your name:</h2>

      <input 
      type="text" 
      value={name} 
      onChange={change}>
      </input>

      {name && <p>Hello, {name}!</p>}
    </div>
  );
};

export default App;

