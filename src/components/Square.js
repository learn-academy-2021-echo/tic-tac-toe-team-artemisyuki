import React, { Component } from "react";

class Square extends Component {
  render() {
    return (
      <>
        <div className="square">{this.props.idx}</div>
      </>
    );
  }
}
export default Square;