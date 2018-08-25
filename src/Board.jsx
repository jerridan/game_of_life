import React, { Component } from "react";
import toPairs from "lodash/toPairs";
import Cell from "./Cell";

const cellSize = 10;

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      1: 5,
      3: 1,
    };
  }

  getPixelPosition = coordinates => {
    return {
      x: `${coordinates[0] * cellSize}px`,
      y: `${coordinates[1] * cellSize}px`,
    };
  };

  render() {
    const cellCoordinates = toPairs(this.state);
    return (
      <div>
        {cellCoordinates.map((coordinates, index) => (
          <Cell position={this.getPixelPosition(coordinates)} key={index} />
        ))}
      </div>
    );
  }
}
