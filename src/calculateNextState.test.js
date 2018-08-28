import calculateNextState from "./calculateNextState";

describe("calculateNextState", () => {
  it("kills a cell with fewer than 2 neighbours", () => {
    const cells = {
      0: ["10"],
      1: ["1", "2"],
    };

    expect(calculateNextState(cells)).toEqual({});
  });

  it("kills a cell with more than 3 neighbours", () => {
    const cells = {
      6: ["1", "2", "3"],
      7: ["1", "2"],
    };

    expect(calculateNextState(cells)).toEqual({
      6: ["1", "3"],
      7: ["1"],
    });
  });
});
