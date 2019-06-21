import React, {Component} from 'react';
import './App.css';
// import Leaf from './leaf.JPEG';



class Board extends Component {
    constructor(props){
        //console.log("Board::constructor")
        super(props)
        this.state = {
            question: ['?', '?', '?', '?', '?', '?','?','?', '?'], //The visible top layer
            content: ["tree", "tree", "tree","tree","tree","tree","tree","tree","tree"], //
            tries: 0,
            maxTries: 5,
            winOrLose: ""
            // winOrLose
        }
        
        

        
        // created a var for a random index to contain a treasure
        let target = Math.floor(Math.random()*9)
        this.state.content[target] = "coin"
        
        
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
        let content = this.state.content[target]
        

        
        // created a condition for the question"?" at the index to equal content "tree"
        
        if(question[target] === "?"){
            question[target] = this.state.content[target]
            // set winOrLose
            maxTries -= 1 
            if (content === "coin"){
                winOrLose = "win"
                alert("You Win!")
                //window.location.reload() 
            } else if(tries === maxTries){
                alert("You Lose!")
                //window.location.reload()
                winOrLose = "lose"
            }
            
            // if too many tries, set winOrLose
        } 
        
            

        
        
    

        // alert(e.target.id)
        this.setState({question, tries, maxTries, winOrLose})
        
    }
    

    render(){
        const coin = <img src="./coin.jpeg"/>
        const { question } = this.state
        let { winOrLose } = this.state
        let square = question.map((value, index) => {
            if (value === "coin"){
                return(
                    <div><img src="./coin.jpeg"/></div>
                )
            }else if(value === "tree"){
                if (winOrLose === ""){
                    return(
                       <div><img src="./lebron.jpeg"/></div>
                    )
                }else{
                    return (
                        <div>{winOrLose}</div>
                    )
                }
            }else{
                if(winOrLose === ""){
                    return (
                         <div id={index} onClick={this.updateImage}>{value}</div>
                    )                    
                }else{
                    return (
                        <div>{winOrLose}</div>
                    )
                }
              
            }
          
        })
        // let gameState say "win" or "lose" based on this.state.winOrLose
        return (
            <div className="board">
            
                {square}
                <h1>
                     Tries Left: {this.state.maxTries}  
                </h1>
               
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
   
