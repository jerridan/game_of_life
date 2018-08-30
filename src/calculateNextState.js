import getCoordinates from "./getCoordinates";
import getPositionsByColumn from "./getPositionsByColumn";

export default function calculateNextState(cellPositions) {
  const listOfCoordinates = getCoordinates(cellPositions);

  const cellsThatLive = listOfCoordinates.filter(coordinates =>
    twoOrThreeNeighbours({ coordinates, listOfCoordinates }),
  );

  return getPositionsByColumn(cellsThatLive);
}

const twoOrThreeNeighbours = ({ coordinates, listOfCoordinates }) => {
  const numberOfNeighbours = getNumberOfNeighbours({
    coordinates,
    listOfCoordinates,
  });

  return numberOfNeighbours === 2 || numberOfNeighbours === 3;
};

const getNumberOfNeighbours = ({ coordinates, listOfCoordinates }) => {
  const neighbours = getAllNeighbourCoordinates(coordinates);

  return neighbours.filter(coordinates =>
    cellExistsAtCoordinates({ coordinates, listOfCoordinates }),
  ).length;
};

const cellExistsAtCoordinates = ({ coordinates, listOfCoordinates }) =>
  listOfCoordinates.some(
    fromList =>
      fromList[0] === coordinates[0] && fromList[1] === coordinates[1],
  );

const getAllNeighbourCoordinates = coordinates => {
  const x = parseInt(coordinates[0], 10);
  const y = parseInt(coordinates[1], 10);
  return [
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
  ].map(coordinates => [coordinates[0].toString(), coordinates[1].toString()]);
};
