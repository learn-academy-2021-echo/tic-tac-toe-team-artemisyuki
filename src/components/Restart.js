import React, { Component } from 'react'

export default class Restart extends Component {
    render() {
        return (
          <div>
            <button
              className="restart"
              onClick={this.props.handleRestart}>
                Restart
            </button>
          </div>
        )
    }
}
