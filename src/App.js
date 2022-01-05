import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

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

  handleTurns = (index) => {
    const { squares, player, player1Ticks, player2Ticks } = this.state;
    if (squares[index] === "") {
      player === "Player 1's Turn"
        ? (squares[index] = "❌")
        : (squares[index] = "⭕️");
      this.setState({
        squares: squares,
        player:
          player === "Player 1's Turn" ? "Player 2's Turn" : "Player 1's Turn",
        player1Ticks:
          player === "Player 1's Turn"
            ? [...player1Ticks, index]
            : player1Ticks,
        player2Ticks:
          player === "Player 2's Turn"
            ? [...player2Ticks, index]
            : player2Ticks,
      });
    }
  };

  handleWinning = () => {};

  render() {
    console.log("Player1: ", this.state.player1Ticks);
    console.log("Player2: ", this.state.player2Ticks);
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
            />
          ))}
        </div>
      </>
    );
  }
}
export default App;
