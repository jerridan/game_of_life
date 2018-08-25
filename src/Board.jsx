import React, { Component } from "react";
import toPairs from "lodash/toPairs";
import Cell from "./Cell";
import { CELL_SIZE } from "./constants";

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
      x: `${coordinates[0] * CELL_SIZE}px`,
      y: `${coordinates[1] * CELL_SIZE}px`,
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
