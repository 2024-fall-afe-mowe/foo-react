import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const players = ["Caden J", "Tom S", "Charles L", "Enzo F"];

  return (
    <div className="App" style={{ textAlign: "left" }}>
      <h1>Players</h1>
      <ul>
        {players.map((x) => (
          <li>{x}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
