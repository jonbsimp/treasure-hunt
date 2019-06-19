import React, { Component } from 'react';
import Board from './Board.js'
import Square from './Square.js'
import './App.css';

class App extends Component {
  
    
render () {
    return (
      <div className= "app">
        <h1> Treasure Hunt </h1>
        <Board />
        <button>Click Me</button>
       
      </div>
    );
}
}

export default App;
