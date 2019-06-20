import React, { Component } from 'react';
import Board from './Board.js'
import Square from './Square.js'
//import Leaf from './leaf.JPEG'
//import Treasure from "./treasure.JPEG";

import './App.css';

class App extends Component {
   
   
    
render () {
  
  return (
    <div>
      <div className= "app">
        <h1> Treasure Hunt</h1>
        <Board />
        <form>
            <button onClick = "" className="button">Reset</button>
        </form>
      </div>
    </div>
  );
}
}

export default App;
