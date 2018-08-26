import React, { Component } from "react";
import Cell from "./Cell";
import { CELL_SIZE } from "./constants";
import getCoordinates from "./getCoordinates";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: {
        1: ["5"],
        3: ["1", "10"],
      },
    };
  }

  getPixelPosition = coordinates => {
    return {
      x: `${coordinates[0] * CELL_SIZE}px`,
      y: `${coordinates[1] * CELL_SIZE}px`,
    };
  };

  render() {
    const cellCoordinates = getCoordinates(this.state.cells);
    return (
      <div>
        {cellCoordinates.map((coordinates, index) => (
          <Cell position={this.getPixelPosition(coordinates)} key={index} />
        ))}
      </div>
    );
  }
}
