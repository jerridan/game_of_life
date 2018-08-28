import calculateNextState from "./calculateNextState";

describe("calculateNextState", () => {
  it("kills a cell with fewer than 2 neighbours", () => {
    const cells = {
      0: ["10"],
      1: ["1", "2"],
      3: ["1", "2"],
      4: ["1"],
    };

    expect(calculateNextState(cells)).toEqual({
      3: ["1", "2"],
      4: ["1"],
    });
  });

  it("kills a cell with more than 3 neighbours", () => {
    const cells = {
      3: ["1", "2"],
      4: ["1"],
      6: ["1", "2", "3"],
      7: ["1", "2", "3"],
      8: ["1", "2", "3"],
    };

    expect(calculateNextState(cells)).toEqual({
      3: ["1", "2"],
      4: ["1"],
      6: ["1", "3"],
      8: ["1", "3"],
    });
  });
});
