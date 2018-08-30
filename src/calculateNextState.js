import getCoordinates from "./getCoordinates";
import getPositionsByColumn from "./getPositionsByColumn";

export default function calculateNextState(cellPositions) {
  const listOfCoordinates = getCoordinates(cellPositions);

  return getPositionsByColumn(
    determineSurvivingCells(listOfCoordinates).concat(
      produceNewCells(listOfCoordinates),
    ),
  );
}

const twoOrThreeNeighbours = ({ coordinates, listOfCoordinates }) => {
  const numberOfNeighbours = getNumberOfNeighbours({
    coordinates,
    listOfCoordinates,
  });

  return numberOfNeighbours === 2 || numberOfNeighbours === 3;
};

const determineSurvivingCells = listOfCoordinates =>
  listOfCoordinates.filter(coordinates =>
    twoOrThreeNeighbours({ coordinates, listOfCoordinates }),
  );

const produceNewCells = listOfCoordinates => {
  let checkedEmptySpaces = [];
  let newCells = [];

  const checkedSpacesDoesNotIncludeCoordinates = coordinates =>
    checkedEmptySpaces.every(
      fromList => !coordinatesAreEqual(fromList, coordinates),
    );

  listOfCoordinates.forEach(coordinates => {
    const emptyNeighbouringSpaces = getAllNeighbourCoordinates(
      coordinates,
    ).filter(
      neighbourCoordinates =>
        checkedSpacesDoesNotIncludeCoordinates(neighbourCoordinates) &&
        !cellExistsAtCoordinates({
          coordinates: neighbourCoordinates,
          listOfCoordinates,
        }),
    );

    emptyNeighbouringSpaces.forEach(coordinates => {
      checkedEmptySpaces.push(coordinates);
      if (getNumberOfNeighbours({ coordinates, listOfCoordinates }) === 3) {
        newCells.push(coordinates);
      }
    });
  });

  return newCells;
};

const getNumberOfNeighbours = ({ coordinates, listOfCoordinates }) => {
  const neighbours = getAllNeighbourCoordinates(coordinates);

  return neighbours.filter(coordinates =>
    cellExistsAtCoordinates({ coordinates, listOfCoordinates }),
  ).length;
};

const cellExistsAtCoordinates = ({ coordinates, listOfCoordinates }) =>
  listOfCoordinates.some(fromList =>
    coordinatesAreEqual(fromList, coordinates),
  );

const coordinatesAreEqual = (coordinatesOne, coordinatesTwo) =>
  coordinatesOne[0] === coordinatesTwo[0] &&
  coordinatesOne[1] === coordinatesTwo[1];

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
