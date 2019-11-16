import React, { Component } from "react";
import Cell from "./Cell";
import { CELL_SIZE } from "./constants";
import calculateNextState from "./calculateNextState";
import { beacon, toad } from "./patterns";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cells: toad,
    };
  }

  getPixelPosition = coordinates => {
    return {
      x: `${coordinates[0] * CELL_SIZE}px`,
      y: `${coordinates[1] * CELL_SIZE}px`,
    };
  };

  setToad = () => {
    this.setState(() => ({ cells: toad }));
  };

  setBeacon = () => {
    this.setState(() => ({ cells: beacon }));
  };

  nextState = () => {
    this.setState(state => {
      return { cells: calculateNextState(state.cells) };
    });
  };

  render() {
    const cellCoordinates = this.state.cells;
    return (
      <div>
        <button onClick={this.setToad}>Toad</button>
        <button onClick={this.setBeacon}>Beacon</button>
        {cellCoordinates.map((coordinates, index) => (
          <Cell position={this.getPixelPosition(coordinates)} key={index} />
        ))}
        <button onClick={this.nextState}>Next</button>
      </div>
    );
  }
}
