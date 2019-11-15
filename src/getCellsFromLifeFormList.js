import flatten from "lodash/flatten";
import uniq from "lodash/uniq";

export default function getCellsFromLifeFormList(lifeForms) {
  const cells = lifeForms.map(({ pattern, coordinates }) =>
    pattern.map(([x, y]) => [x + coordinates[0], y + coordinates[1]]),
  );

  return uniq(flatten(cells));
}
