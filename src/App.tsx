import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const players = [
    "Tom S."
    , "Chris P."
    , "Chris B."
    , "Peter B."
    , "Swastik A."
    , "Caden J."
  ];

  return (
    <div className="App">
      <h1>
        Players
      </h1>
      <ul>
        {
          players.map(x => <li style={{ textAlign: 'left'}}>{x}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
