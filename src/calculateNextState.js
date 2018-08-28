import filter from "lodash/filter";
import getCoordinates from "./getCoordinates";
import getPositionsByColumn from "./getPositionsByColumn";

export default function calculateNextState(cellPositions) {
  const listOfCoordinates = getCoordinates(cellPositions);

  const cellsThatLive = killCellsWithFewerThanTwoNeighbours({
    listOfCoordinates,
    cellPositions,
  });
  return getPositionsByColumn(cellsThatLive);
}

const killCellsWithFewerThanTwoNeighbours = ({
  listOfCoordinates,
  cellPositions,
}) =>
  filter(
    listOfCoordinates,
    coordinates =>
      numberOfNeighbours({
        cell: [coordinates[0], coordinates[1]],
        cellPositions,
      }) >= 2,
  );

const numberOfNeighbours = ({ cell, cellPositions }) => {
  const x = parseInt(cell[0], 10);
  const y = parseInt(cell[1], 10);
  const possibleNeighbourPositions = [
    { x: x - 1, y: y + 1 },
    { x: x, y: y + 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y },
    { x: x + 1, y: y },
    { x: x - 1, y: y - 1 },
    { x: x, y: y - 1 },
    { x: x + 1, y: y - 1 },
  ];

  return filter(possibleNeighbourPositions, position =>
    cellExistsAtPosition({ position, cellPositions }),
  ).length;
};

const cellExistsAtPosition = ({ position: { x, y }, cellPositions }) =>
  Object.keys(cellPositions).includes(x.toString()) &&
  cellPositions[x].includes(y.toString());
