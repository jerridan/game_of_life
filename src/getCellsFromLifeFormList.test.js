import getCellsFromLifeFormList from "./getCellsFromLifeFormList";
import { beacon } from "./patterns";

describe("getCellsFromLifeFormList", () => {
  it("returns the coordinates of all cells given a single pattern and non-zero coordinates", () => {
    const lifeForms = [{ pattern: beacon, coordinates: ["10", "15"] }];

    expect(getCellsFromLifeFormList(lifeForms)).toEqual({
      10: ["17", "18"],
      11: ["18"],
      12: ["15"],
      13: ["15", "16"],
    });
  });
});
