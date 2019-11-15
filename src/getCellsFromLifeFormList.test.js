import getCellsFromLifeFormList from "./getCellsFromLifeFormList";
import { beacon, toad } from "./patterns";

describe("getCellsFromLifeFormList", () => {
  it("returns the coordinates of all cells given a single pattern and non-zero coordinates", () => {
    const lifeForms = [
      { pattern: beacon, coordinates: [10, 15] },
      { pattern: toad, coordinates: [20, 15] },
    ];

    expect(getCellsFromLifeFormList(lifeForms)).toEqual([
      [10, 17],
      [10, 18],
      [11, 18],
      [12, 15],
      [13, 15],
      [13, 16],
      [20, 15],
      [21, 15],
      [21, 16],
      [22, 15],
      [22, 16],
      [23, 16],
    ]);
  });
});
