import React, { Component } from "react";
import toPairs from "lodash/toPairs";
import Cell from "./Cell";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      10: 50,
      30: 10
    };
  }

  render() {
    const cellCoordinates = toPairs(this.state);
    return (<div>
      {cellCoordinates.map(cellPosition => <Cell x={`${cellPosition[0]}px`} y={`${cellPosition[1]}px`}/>)}
    </div>)
      ;
  }
}
