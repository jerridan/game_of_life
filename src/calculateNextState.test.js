import isEqual from "lodash/isEqual";
import some from "lodash/some";
import calculateNextState from "./calculateNextState";

describe("calculateNextState", () => {
  it("kills a cell with fewer than 2 neighbours", () => {
    const cells = [
      [0, 10],
      [1, 1],
      [1, 2],
    ];

    expect(calculateNextState(cells)).toEqual([]);
  });

  it("kills a cell with more than 3 neighbours", () => {
    const cells = [
      [6, 1],
      [6, 2],
      [6, 3],
      [7, 1],
      [7, 2],
    ];

    const newState = calculateNextState(cells);

    expect(some(newState, cell => isEqual(cell, [6, 2]))).toEqual(false);
    expect(some(newState, cell => isEqual(cell, [7, 2]))).toEqual(false);
  });

  it("keeps a cell with 2 or 3 neighbours", () => {
    const cells = [
      [6, 1],
      [6, 2],
      [6, 3],
      [7, 1],
      [7, 2],
    ];

    const newState = calculateNextState(cells);

    expect(some(newState, cell => isEqual(cell, [6, 1]))).toEqual(true);
    expect(some(newState, cell => isEqual(cell, [6, 3]))).toEqual(true);
    expect(some(newState, cell => isEqual(cell, [7, 1]))).toEqual(true);
  });

  it("produces a cell in a space neighbouring exactly 3 cells", () => {
    const cells = [
      [6, 1],
      [6, 2],
      [7, 1],
      [10, 2],
      [12, 0],
      [12, 2],
      [20, 2],
      [21, 2],
      [22, 0],
      [22, 2],
    ];

    const newState = calculateNextState(cells);

    expect(some(newState, cell => isEqual(cell, [7, 2]))).toEqual(true);
    expect(some(newState, cell => isEqual(cell, [11, 1]))).toEqual(true);
    expect(some(newState, cell => isEqual(cell, [21, 1]))).toEqual(false);
  });

  it("correctly computes the next state of a toad", () => {
    const cells = [
      [20, 10],
      [21, 10],
      [21, 11],
      [22, 10],
      [22, 11],
      [23, 11],
    ];

    const intermediateState = calculateNextState(cells);

    expect(intermediateState.sort()).toEqual(
      [
        [20, 10],
        [20, 11],
        [21, 9],
        [22, 12],
        [23, 10],
        [23, 11],
      ].sort(),
    );
    expect(calculateNextState(intermediateState).sort()).toEqual(cells.sort());
  });
});
