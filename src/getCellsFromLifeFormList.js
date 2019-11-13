import mapKeys from "lodash/mapKeys";
import mapValues from "lodash/mapValues";

export default function getCellsFromLifeFormList(lifeForms) {
  return lifeForms.map(lifeForm => incrementCoordinates(lifeForm));
}

function incrementCoordinates(lifeForm) {
  const incrementedByX = incrementXCoordinates(lifeForm);
  return incrementYCoordinates({
    pattern: incrementedByX,
    coordinates: lifeForm.coordinates,
  });
}

const incrementXCoordinates = ({ pattern, coordinates }) =>
  mapKeys(pattern, (y, x) => parseInt(x) + parseInt(coordinates[0]));

const incrementYCoordinates = ({ pattern, coordinates }) =>
  mapValues(pattern, yCoordinates => {
    return yCoordinates.map(y =>
      (parseInt(y) + parseInt(coordinates[1])).toString(),
    );
  });