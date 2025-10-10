import flatten from "lodash/flatten";
import uniq from "lodash/uniq";
import { Coordinates } from "./patterns";

interface LifeForm {
  pattern: Coordinates[];
  coordinates: Coordinates;
}

export default function getCellsFromLifeFormList(lifeForms: LifeForm[]): Coordinates[] {
  const cells = lifeForms.map(({ pattern, coordinates }) =>
    pattern.map(([x, y]): Coordinates => [x + coordinates[0], y + coordinates[1]]),
  );

  return uniq(flatten(cells));
}
