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
    setTimeout(() => {
      this.handleWinning();
    }, 1);
  };

  handleWinning = () => {
    for (let i = 0; i < winning.length; i++) {
      if (found(winning[i], this.state.player1Ticks)) {
        this.setState({ player: "Player 1 wins!" });
      } else if (found(winning[i], this.state.player2Ticks)) {
        this.setState({ player: "Player 2 wins!" });
      }
    }
  };

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
      </>
    );
  }
}
export default App;
