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

    const newState = calculateNextState(cells);

    expect(newState[6].includes("2")).toEqual(false);
    expect(newState[7].includes("2")).toEqual(false);
  });

  it("keeps a cell with 2 or 3 neighbours", () => {
    const cells = {
      6: ["1", "2", "3"],
      7: ["1", "2"],
    };

    const newState = calculateNextState(cells);

    expect(newState[6].includes("1")).toEqual(true);
    expect(newState[6].includes("3")).toEqual(true);
    expect(newState[7].includes("1")).toEqual(true);
  });

  xit("produces a cell in a space neighbouring exactly 3 cells", () => {
    const cells = {
      6: ["1", "2"],
      7: ["1"],
      10: ["2"],
      12: ["0", "2"],
    };

    const newState = calculateNextState(cells);

    expect(newState[7].includes("2")).toEqual(true);
    expect(newState[11].includes("1")).toEqual(true);
  });
});
