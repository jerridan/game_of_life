import React, { Component } from "react";
import Cell from "./Cell";
import { CELL_SIZE } from "./constants";
import getCoordinates from "./getCoordinates";
import calculateNextState from "./calculateNextState";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: {
        20: ["10"],
        21: ["10", "11"],
        22: ["10", "11"],
        23: ["11"],
      },
    };
  }

  getPixelPosition = coordinates => {
    return {
      x: `${coordinates[0] * CELL_SIZE}px`,
      y: `${coordinates[1] * CELL_SIZE}px`,
    };
  };

  nextState = () => {
    this.setState(state => {
      return { cells: calculateNextState(state.cells) };
    });
  };

  render() {
    const cellCoordinates = getCoordinates(this.state.cells);
    return (
      <div>
        {cellCoordinates.map((coordinates, index) => (
          <Cell position={this.getPixelPosition(coordinates)} key={index} />
        ))}
        <button onClick={this.nextState}>Next</button>
      </div>
    );
  }
}
