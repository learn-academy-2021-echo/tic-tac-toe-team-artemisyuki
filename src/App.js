import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";
import Restart from "./components/Restart";

const winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const found = (arr1, arr2) => {
  return arr1.every((value) => arr2.includes(value));
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      player: "Player 1's Turn",
      player1Ticks: [],
      player2Ticks: [],
    };
  }

  handleTurns = (idx) => {
    const { squares, player, player1Ticks, player2Ticks } = this.state;
    if (squares[idx] === "") {
      player === "Player 1's Turn"
        ? (squares[idx] = "X")
        : (squares[idx] = "O");
      this.setState({
        squares: squares,
        player:
          player === "Player 1's Turn" ? "Player 2's Turn" : "Player 1's Turn",
        player1Ticks:
          player === "Player 1's Turn" ? [...player1Ticks, idx] : player1Ticks,
        player2Ticks:
          player === "Player 2's Turn" ? [...player2Ticks, idx] : player2Ticks,
      });
    }
    setTimeout(() => {
      this.handleWinning();
    }, 1);
  };

  // draw if
  // does not fit winning array conditions
  // all blocks are filled no more "" or null

  handleWinning = () => {
    for (let i = 0; i < winning.length; i++) {
      if (found(winning[i], this.state.player1Ticks)) {
        this.setState({
          squares: this.state.squares.map((value) =>
            value === "" ? null : value
          ),
          player: "Player 1 wins!",
        });
        break;
      } else if (found(winning[i], this.state.player2Ticks)) {
        this.setState({
          squares: this.state.squares.map((value) =>
            value === "" ? null : value
          ),
          player: "Player 2 wins!",
        });
        break;
      } else if (
        (this.state.player !== "Player 1 wins!" &&
          !this.state.squares.includes("") &&
          !this.state.squares.includes(null)) ||
        (this.state.player !== "Player 2 wins!" &&
          !this.state.squares.includes("") &&
          !this.state.squares.includes(null))
      ) {
        this.setState({ player: "The match was a draw..." });
      }
    }
  };

  handleRestart = () => {
    this.setState({squares:Array(9).fill(""), player:"Player 1's Turn", player1Ticks:[], player2Ticks:[]})

  }

  render() {
    return (
      <>
        <h1 className="header">Tic Tac Toe</h1>
        <h3 className="turns">{this.state.player}</h3>
        <div className="gameboard">
          {this.state.squares.map((value, idx) => (
            <Square
              value={value}
              key={idx}
              idx={idx}
              handleTurns={this.handleTurns}
              handleWinning={this.handleWinning}
            />
          ))}
        </div>
        <Restart
          handleRestart={this.handleRestart}/>
      </>
    );
  }
}
export default App;
