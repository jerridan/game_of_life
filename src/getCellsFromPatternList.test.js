import getCellsFromPatternList from "./getCellsFromPatternList";
import { beacon } from "./patterns";

describe("getCellsFromPatternList", () => {
  it("returns the coordinates of all cells given a single pattern, beginning at 0,0", () => {
    const patterns = [{ pattern: beacon, coordinates: ["0", "0"] }];

    expect(getCellsFromPatternList(patterns)).toEqual(beacon);
  });
});
