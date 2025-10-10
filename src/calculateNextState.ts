import union from "lodash/union";
import { Coordinates } from "./patterns";

export default function calculateNextState(cells: Coordinates[]): Coordinates[] {
  const survivingCells = determineSurvivingCells(cells);
  const newCells = produceNewCells(cells);

  return union(survivingCells, newCells);
}

const determineSurvivingCells = (listOfCoordinates: Coordinates[]): Coordinates[] =>
  listOfCoordinates.filter(coordinates =>
    hasTwoOrThreeNeighbours({ coordinates, listOfCoordinates }),
  );

const hasTwoOrThreeNeighbours = ({
  coordinates,
  listOfCoordinates,
}: {
  coordinates: Coordinates;
  listOfCoordinates: Coordinates[];
}): boolean => {
  const numberOfNeighbours = getNumberOfNeighbours({
    coordinates,
    listOfCoordinates,
  });

  return numberOfNeighbours === 2 || numberOfNeighbours === 3;
};

const produceNewCells = (listOfCoordinates: Coordinates[]): Coordinates[] => {
  let checkedEmptySpaces: Coordinates[] = [];
  let newCells: Coordinates[] = [];

  const checkedSpacesDoesNotIncludeCoordinates = (coordinates: Coordinates): boolean =>
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

const getNumberOfNeighbours = ({
  coordinates,
  listOfCoordinates,
}: {
  coordinates: Coordinates;
  listOfCoordinates: Coordinates[];
}): number => {
  const neighbours = getAllNeighbourCoordinates(coordinates);

  return neighbours.filter(coordinates =>
    cellExistsAtCoordinates({ coordinates, listOfCoordinates }),
  ).length;
};

const cellExistsAtCoordinates = ({
  coordinates,
  listOfCoordinates,
}: {
  coordinates: Coordinates;
  listOfCoordinates: Coordinates[];
}): boolean =>
  listOfCoordinates.some(fromList =>
    coordinatesAreEqual(fromList, coordinates),
  );

const coordinatesAreEqual = (
  coordinatesOne: Coordinates,
  coordinatesTwo: Coordinates,
): boolean =>
  coordinatesOne[0] === coordinatesTwo[0] &&
  coordinatesOne[1] === coordinatesTwo[1];

const getAllNeighbourCoordinates = (coordinates: Coordinates): Coordinates[] => {
  const x = coordinates[0];
  const y = coordinates[1];
  return [
    [x - 1, y + 1],
    [x, y + 1],
    [x + 1, y + 1],
    [x - 1, y],
    [x + 1, y],
    [x - 1, y - 1],
    [x, y - 1],
    [x + 1, y - 1],
  ].map(coordinates => [coordinates[0], coordinates[1]] as Coordinates);
};
