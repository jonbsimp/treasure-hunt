import React, { Component } from 'react';
import './App.css';

class Square extends Component {
  
    onClick = (e) => {
        alert("square clicked")
    }
    render() {
        let value = this.props.value
        let winOrLose = this.props.winOrLose
        let index = this.props.index
        
        if (value === "coin") { // it displays the image of a coin
            return (
                <div><img src="./coin.jpeg" /></div>
            )
        } else if (value === "tree") { //has been clicked but was not the right spot
            if (winOrLose === "") {
                return (
                    <div><img src="./lebron.jpeg" /></div>
                )
            } else {
                return (
                    <div>{winOrLose}</div>
                )
            }
        } else { // has not been clicked on
            if (winOrLose === "") {
                return (
                    <div id={index} onClick={this.props.callback}>{value}</div>
                )
            } else {
                return (
                    <div>{winOrLose}</div>
                )
            }
        }
     
      

    }
}

export default Square;
