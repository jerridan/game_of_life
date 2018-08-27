import getPositionsByColumn from "./getPositionsByColumn";

describe("getPositionsByColumn", () => {
  it("converts an array of x,y coordinates to a hash of positions by x-coordinates", () => {
    const cellCoordinates = [["1", "2"], ["2", "3"]];

    expect(getPositionsByColumn(cellCoordinates)).toEqual({
      1: ["2"],
      2: ["3"],
    });
  });

  it("handles multiple positions with the same x-coordinate", () => {
    const cellCoordinates = [
      ["1", "5"],
      ["1", "13"],
      ["3", "0"],
      ["3", "10"],
      ["3", "4"],
      ["10", "1"],
    ];

    expect(getPositionsByColumn(cellCoordinates)).toEqual({
      1: ["5", "13"],
      3: ["0", "10", "4"],
      10: ["1"],
    });
  });
});
