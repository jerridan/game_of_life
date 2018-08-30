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

  it("produces a cell in a space neighbouring exactly 3 cells", () => {
    const cells = {
      6: ["1", "2"],
      7: ["1"],
      10: ["2"],
      12: ["0", "2"],
      20: ["2"],
      21: ["2"],
      22: ["0", "2"],
    };

    const newState = calculateNextState(cells);

    expect(newState[7].includes("2")).toEqual(true);
    expect(newState[11].includes("1")).toEqual(true);
    expect(newState[21].includes("1")).toEqual(false);
  });

  it("correctly computes the next state of a toad", () => {
    const cells = {
      20: ["10"],
      21: ["10", "11"],
      22: ["10", "11"],
      23: ["11"],
    };

    const intermediateState = calculateNextState(cells);

    expect(intermediateState).toEqual({
      20: ["10", "11"],
      21: ["9"],
      22: ["12"],
      23: ["10", "11"],
    });
    expect(calculateNextState(intermediateState)).toEqual(cells);
  });
});
