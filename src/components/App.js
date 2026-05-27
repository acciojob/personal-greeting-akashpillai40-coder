import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name && <h1>Hello, {name}!</h1>}
    </div>
  );
}

export default App;
