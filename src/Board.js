import React, {Component} from 'react';
import './App.css';
// import Leaf from './leaf.JPEG';



class Board extends Component {
    constructor(props){
        //console.log("Board::constructor")
        super(props)
        this.state = {
            question: ['?', '?', '?', '?', '?', '?','?','?', '?'],
            content: ["tree", "tree", "tree","tree","tree","tree","tree","tree","tree"],
            tries: 0,
            maxTries: 5,
            winOrLose: "win"
            // winOrLose
        }
        
         const coin = <img src="./coin.jpeg"/>

        
        // created a var for a random index to contain a treasure
        let target = Math.floor(Math.random()*9)
        this.state.content[target] = "treasure"
        
        
    } 
    
    // reset function
     
    
        
    

     
    updateImage = (e) => {

        //alert("Board::updateImage")
        // if winOrLose -> return
        const { question } = this.state
        let { tries } = this.state
        let { maxTries } = this.state
        let { winOrLose } = this.state
        
        
    // created a variable for the index
        let target = e.target.id
        let win = this.state.content[target]
        

        
        // created a condition for the question"?" at the index to equal content "tree"
        
        if(question[target] === "?"){
            question[target] = this.state.content[target]
            // set winOrLose
            maxTries -= 1 
            
            
            // if too many tries, set winOrLose
        } 
        
            


        if (win === "treasure"){
               alert("You Win!")
            window.location.reload() 
        } else if(tries === maxTries){
            alert("You Lose!")
            window.location.reload()
        }
        // alert(e.target.id)
        this.setState({question, tries, maxTries})
        
    }
    

    render(){
        const { question } = this.state
        let square = question.map((value, index) => {
            return (
                <div id={index} onClick={this.updateImage}>{value}</div>
            )
        })
        // let gameState say "win" or "lose" based on this.state.winOrLose
        return (
            <div className="board">
            
                {square}
                <h1>
                     Tries Left: {this.state.maxTries}  
                </h1>
               // Another h1 to display gameState
            </div>
           
        );
    }
}


export default Board;














    //  <div id={question[1]} onClick={this.updateImage}>{this.state.question[1]}</div>
    //         <div id={question[2]} onClick={this.updateImage}>{this.state.question[2]}</div>
    //         <div id={question[3]} onClick={this.updateImage}>{this.state.question[3]}</div>
    //         <div id={question[4]} onClick={this.updateImage}>{this.state.question[4]}</div>
    //         <div id={question[5]} onClick={this.updateImage}>{this.state.question[5]}</div>
    //         <div id={question[6]} onClick={this.updateImage}>{this.state.question[6]}</div>
    //         <div id={question[7]} onClick={this.updateImage}>{this.state.question[7]}</div>
    //         <div id={question[8]} onClick={this.updateImage}>{this.state.question[8]}</div>
   
