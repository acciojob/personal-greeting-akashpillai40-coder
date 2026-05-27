import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {name.trim() !== "" && (
        <p>Hello, {name}!</p>
      )}
    </div>
  );
}

export default App;
