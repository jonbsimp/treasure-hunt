import React, {Component} from 'react';
import './App.css';

class Board extends Component {
    constructor(props){
        super(props)
            this.state = {
                question: ['?', '?', '?', '?', '?', '?','?','?', '?'],
            }
    }
    
    updateImage = (e) => {
        const { question } = this.state
        
        if(question[0] === "?"){
          question[0] ="tree"
       
      }     
    console.log(e.target.id)
    this.setState({question})
    }
    
    //  <div id={question[1]} onClick={this.updateImage}>{this.state.question[1]}</div>
    //         <div id={question[2]} onClick={this.updateImage}>{this.state.question[2]}</div>
    //         <div id={question[3]} onClick={this.updateImage}>{this.state.question[3]}</div>
    //         <div id={question[4]} onClick={this.updateImage}>{this.state.question[4]}</div>
    //         <div id={question[5]} onClick={this.updateImage}>{this.state.question[5]}</div>
    //         <div id={question[6]} onClick={this.updateImage}>{this.state.question[6]}</div>
    //         <div id={question[7]} onClick={this.updateImage}>{this.state.question[7]}</div>
    //         <div id={question[8]} onClick={this.updateImage}>{this.state.question[8]}</div>
   
    
    render(){
        const { question } = this.state
        let square = question.map((value, index) => {
            return (
                <div id={index} onClick={this.updateImage}>{value}</div>
                )
        })
      return (
      <div className="board">
       
        {square}
            
           
      </div>
        
      );
  }
}


export default Board;
