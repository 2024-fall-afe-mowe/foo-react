import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const players = ["Caden J", "Tom S", "Charles L", "Enzo F"];

  return (
    <div className="App">
      <h1>Players</h1>
      <ul>
        {players.map((x) => (
          <li style={{ textAlign: "left" }}>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
