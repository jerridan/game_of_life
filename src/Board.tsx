import { useState } from "react";
import Cell from "./Cell";
import { CELL_SIZE } from "./constants";
import calculateNextState from "./calculateNextState";
import { beacon, toad, Coordinates } from "./patterns";

export default function Board() {
  const [cells, setCells] = useState<Coordinates[]>(toad);

  const getPixelPosition = (coordinates: Coordinates) => {
    return {
      x: `${coordinates[0] * CELL_SIZE}px`,
      y: `${coordinates[1] * CELL_SIZE}px`,
    };
  };

  const setToad = () => {
    setCells(toad);
  };

  const setBeacon = () => {
    setCells(beacon);
  };

  const nextState = () => {
    setCells(currentCells => calculateNextState(currentCells));
  };

  return (
    <div>
      <button onClick={setToad}>Toad</button>
      <button onClick={setBeacon}>Beacon</button>
      {cells.map((coordinates, index) => (
        <Cell position={getPixelPosition(coordinates)} key={index} />
      ))}
      <button onClick={nextState}>Next</button>
    </div>
  );
}
