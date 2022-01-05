import React, { Component } from "react";
import Square from "./components/Square";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  render() {
    return (
      <>
        <h1 className="header">Tic Tac Toe</h1>
        <div className="gameboard">
          {this.state.squares.map((value, idx) => (
            <Square value={value} key={idx} idx={idx} />
          ))}
        </div>
      </>
    );
  }
}
export default App;
