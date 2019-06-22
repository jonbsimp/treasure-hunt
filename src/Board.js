import React, { Component } from 'react';
import './App.css';
import Square from './Square';
// import Leaf from './leaf.JPEG';



class Board extends Component {
    constructor(props) {
        //console.log("Board::constructor")
        super(props)
        this.state = {
            question: ['?', '?', '?', '?', '?', '?', '?', '?', '?'], //The visible top layer of "?"
            content: ["tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree", "tree"], //The content that is really there but hidden
            tries: 0,
            maxTries: 5,
            winOrLose: "" //Has three values of "win","lose" or ""
        }

        // created a var for a random index to contain a coin
        let target = Math.floor(Math.random() * 9)
        // Turns the random index into a coin and places it
        this.state.content[target] = "coin"
    }

    updateImage = (e) => {

        // take data and created variables to modify the state
        const { question } = this.state
        let { tries } = this.state
        let { maxTries } = this.state
        let { winOrLose } = this.state

        // create a var to access the index and value of the target square
        let target = e.target.id
        let content = this.state.content[target]

        if (question[target] === "?") { // the square has not been clicked on
            question[target] = this.state.content[target] // after clicked, the "?" turns into the content
            maxTries -= 1 // This decreases the amount of tries after each click
            // set winOrLose
            if (content === "coin") {
                winOrLose = "win"
                alert("You Win!")
                //window.location.reload() 
            } else if (tries === maxTries) {
                alert("You Lose!")
                winOrLose = "lose"
            }

        }

        this.setState({ question, tries, maxTries, winOrLose })
    }


    render() {
        const coin = <img src="./coin.jpeg" />
        const { question } = this.state
        let { winOrLose } = this.state

        //  loops over all 9 squares and returns the html content
        let squares = question.map((value, index) => {

            return (
                <Square value={value} winOrLose={winOrLose} index={index } callback={this.updateImage}/>
            )

        })
        // let gameState say "win" or "lose" based on this.state.winOrLose
        return (
            <div className="board">
                {squares}
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

