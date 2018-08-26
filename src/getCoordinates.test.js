import getCoordinates from "./getCoordinates";

describe("getCoordinates", () => {
  it("converts a hash of x-columns and their y coordinates to a double array off coordinates", () => {
    const cells = {
      1: ["2"],
      2: ["3"],
    };

    expect(getCoordinates(cells)).toEqual([["1", "2"], ["2", "3"]]);
  });

  it("creates separate coordinates for a column with multiple y coordinates", () => {
    const cells = {
      1: ["5", "13"],
      3: ["0", "10", "4"],
      10: ["1"],
    };

    expect(getCoordinates(cells)).toEqual([
      ["1", "5"],
      ["1", "13"],
      ["3", "0"],
      ["3", "10"],
      ["3", "4"],
      ["10", "1"],
    ]);
  });
});
