import getCoordinates from "./getCoordinates";
import getPositionsByColumn from "./getPositionsByColumn";

export default function calculateNextState(cellPositions) {
  const listOfCoordinates = getCoordinates(cellPositions);

  const cellsThatLive = saveCellsWithTwoOrThreeNeigbours({
    listOfCoordinates,
    cellPositions,
  });

  return getPositionsByColumn(cellsThatLive);
}

const saveCellsWithTwoOrThreeNeigbours = ({
  listOfCoordinates,
  cellPositions,
}) =>
  listOfCoordinates.filter(coordinates =>
    twoOrThreeNeighbours({ coordinates, cellPositions }),
  );

const twoOrThreeNeighbours = ({ coordinates, cellPositions }) => {
  const numberOfNeighbours = getNumberOfNeighbours({
    coordinates,
    cellPositions,
  });

  return numberOfNeighbours === 2 || numberOfNeighbours === 3;
};

const getNumberOfNeighbours = ({ coordinates, cellPositions }) => {
  const neighbours = getAllNeighbourCoordinates(coordinates);

  return neighbours.filter(neighbourCoordinates =>
    cellExistsAtPosition({ neighbourCoordinates, cellPositions }),
  ).length;
};

const cellExistsAtPosition = ({
  neighbourCoordinates: { x, y },
  cellPositions,
}) =>
  Object.keys(cellPositions).includes(x.toString()) &&
  cellPositions[x].includes(y.toString());

const getAllNeighbourCoordinates = coordinates => {
  const x = parseInt(coordinates[0], 10);
  const y = parseInt(coordinates[1], 10);
  return [
    { x: x - 1, y: y + 1 },
    { x: x, y: y + 1 },
    { x: x + 1, y: y + 1 },
    { x: x - 1, y: y },
    { x: x + 1, y: y },
    { x: x - 1, y: y - 1 },
    { x: x, y: y - 1 },
    { x: x + 1, y: y - 1 },
  ];
};
