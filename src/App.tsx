import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const players = [
    "Peter B."
    , "Chris P."
    , "Chris B."
    , "Swastik A."
    , "Tom S."
  ];

  return (
    <div className="App">
      <h1>
        Players
      </h1>
      <ul>
        {
          players.map(x => <li>{x}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
