import filter from "lodash/filter";
import getCoordinates from "./getCoordinates";
import getPositionsByColumn from "./getPositionsByColumn";

export default function calculateNextState(cellPositions) {
  const listOfCoordinates = getCoordinates(cellPositions);
  const cellsThatLive = filter(listOfCoordinates, coordinates => {
    return (
      numberOfNeighbours({
        cell: [coordinates[0], coordinates[1]],
        cellPositions,
      }) >= 2
    );
  });
  return getPositionsByColumn(cellsThatLive);
}

const numberOfNeighbours = ({ cell, cellPositions }) => {
  const x = parseInt(cell[0], 10);
  const y = parseInt(cell[1], 10);
  const possibleNeigbourPositions = [
    { x: x - 1, y: y + 1 },
    { x: x, y: y + 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y },
    { x: x + 1, y: y },
    { x: x - 1, y: y - 1 },
    { x: x, y: y - 1 },
    { x: x + 1, y: y - 1 },
  ];

  return filter(possibleNeigbourPositions, position =>
    cellExistsAtPosition({ position, cellPositions }),
  ).length;
};

const cellExistsAtPosition = ({ position: { x, y }, cellPositions }) =>
  Object.keys(cellPositions).includes(x.toString()) &&
  cellPositions[x].includes(y.toString());
