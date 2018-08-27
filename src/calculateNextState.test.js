import calculateNextState from "./calculateNextState";

describe("calculateNextState", () => {
  it("kills a cell with no neighbours", () => {
    const cells = {
      0: ["1"],
    };

    expect(calculateNextState(cells)).toEqual({});
  });

  it("kills a cell with only 1 neighbour", () => {
    const cells = {
      0: ["1", "2"],
    };

    expect(calculateNextState(cells)).toEqual({});
  });

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
});
