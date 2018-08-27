import getCoordinates from "./getCoordinates";

describe("getCoordinates", () => {
  it("converts a hash of positions by x-coordinates to an array of x,y coordinates", () => {
    const cellPositions = {
      1: ["2"],
      2: ["3"],
    };

    expect(getCoordinates(cellPositions)).toEqual([["1", "2"], ["2", "3"]]);
  });

  it("creates separate coordinates for a column with multiple y-coordinates", () => {
    const cellPositions = {
      1: ["5", "13"],
      3: ["0", "10", "4"],
      10: ["1"],
    };

    expect(getCoordinates(cellPositions)).toEqual([
      ["1", "5"],
      ["1", "13"],
      ["3", "0"],
      ["3", "10"],
      ["3", "4"],
      ["10", "1"],
    ]);
  });
});
