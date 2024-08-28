import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const players = ["Tom", "Jack"];

  return (
    <div className="App">
      <ul>
        {players.map(x => <li style={{ textAlign: 'left' }}>{x}</li>)}
      </ul>
    </div>
  );
}

export default App;
