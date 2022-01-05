import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: ["", "", "", "", "", "", "", "", ""],
      player: "Player 1's Turn",
    };
  }

  handleTurns = (index) => {
    const { squares, player } = this.state;
    if (squares[index] === "") {
      player === "Player 1's Turn"
        ? (squares[index] = "❌")
        : (squares[index] = "⭕️");
      this.setState({
        squares: squares,
        player:
          player === "Player 1's Turn" ? "Player 2's Turn" : "Player 1's Turn",
      });
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
            />
          ))}
        </div>
      </>
    );
  }
}
export default App;
