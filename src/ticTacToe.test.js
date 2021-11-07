const { TicTacToeGame } = require("./ticTacToe");

describe("throws from incorrect arguments", () => {
  test("invalid symbol", () => {
    const game = new TicTacToeGame();
    expect(() => game.place("i", 0, 0)).toThrow("illegal symbol input");
  });

  test("invalid xAxis number", () => {
    const game = new TicTacToeGame();
    expect(() => game.place("X", -1, 0)).toThrow("illegal xAxis input");
    expect(() => game.place("X", 3, 0)).toThrow("illegal xAxis input");
  });

  test("invalid yAxis number", () => {
    const game = new TicTacToeGame();
    expect(() => game.place("O", 0, -1)).toThrow("illegal yAxis input");
    expect(() => game.place("O", 0, 3)).toThrow("illegal yAxis input");
  });

  test("slot position already taken 1", () => {
    const game = new TicTacToeGame();
    expect(game.place("X", 0, 0)).toBe("ok");
    expect(() => game.place("O", 0, 0)).toThrow("slot already taken");
  });
  test("slot position already taken 2", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 2)).toBe("ok");
    expect(() => game.place("X", 0, 2)).toThrow("slot already taken");
  });
});

describe("simple tests in winning scenarios", () => {
  test("X wins top row", () => {
    const game = new TicTacToeGame();
    expect(game.place("X", 0, 0)).toBe("ok");
    expect(game.place("X", 1, 0)).toBe("ok");
    expect(game.place("X", 2, 0)).toBe("X wins");
  });
  test("O wins middle row", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 1)).toBe("ok");
    expect(game.place("O", 1, 1)).toBe("ok");
    expect(game.place("O", 2, 1)).toBe("O wins");
  });
  test("X wins bottom row", () => {
    const game = new TicTacToeGame();
    expect(game.place("X", 0, 2)).toBe("ok");
    expect(game.place("X", 1, 2)).toBe("ok");
    expect(game.place("X", 2, 2)).toBe("X wins");
  });

  test("O wins left column", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 0)).toBe("ok");
    expect(game.place("O", 0, 1)).toBe("ok");
    expect(game.place("O", 0, 2)).toBe("O wins");
  });
  test("X wins middle column", () => {
    const game = new TicTacToeGame();
    expect(game.place("X", 1, 0)).toBe("ok");
    expect(game.place("X", 1, 1)).toBe("ok");
    expect(game.place("X", 1, 2)).toBe("X wins");
  });
  test("O wins right Column", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 2, 0)).toBe("ok");
    expect(game.place("O", 2, 1)).toBe("ok");
    expect(game.place("O", 2, 2)).toBe("O wins");
  });

  test("X wins diagonal 1", () => {
    const game = new TicTacToeGame();
    expect(game.place("X", 0, 0)).toBe("ok");
    expect(game.place("X", 1, 1)).toBe("ok");
    expect(game.place("X", 2, 2)).toBe("X wins");
  });
  test("O wins diagonal 2", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 2, 0)).toBe("ok");
    expect(game.place("O", 1, 1)).toBe("ok");
    expect(game.place("O", 0, 2)).toBe("O wins");
  });
});

describe("full game tests in winning scenarios", () => {
  test("X wins middle row", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 0)).toBe("ok");
    expect(game.place("X", 0, 1)).toBe("ok");
    expect(game.place("O", 2, 0)).toBe("ok");
    expect(game.place("X", 1, 1)).toBe("ok");
    expect(game.place("O", 2, 2)).toBe("ok");
    expect(game.place("X", 2, 1)).toBe("X wins");
  });
  test("O wins diagonally", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 0)).toBe("ok");
    expect(game.place("X", 0, 1)).toBe("ok");
    expect(game.place("O", 1, 1)).toBe("ok");
    expect(game.place("X", 0, 2)).toBe("ok");
    expect(game.place("O", 2, 2)).toBe("O wins");
  });
});

describe("full game tests in winning scenarios", () => {
  test("X wins middle row", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 0)).toBe("ok");
    expect(game.place("X", 0, 1)).toBe("ok");
    expect(game.place("O", 2, 0)).toBe("ok");
    expect(game.place("X", 1, 1)).toBe("ok");
    expect(game.place("O", 2, 2)).toBe("ok");
    expect(game.place("X", 2, 1)).toBe("X wins");
  });
  test("O wins diagonally", () => {
    const game = new TicTacToeGame();
    expect(game.place("O", 0, 0)).toBe("ok");
    expect(game.place("X", 0, 1)).toBe("ok");
    expect(game.place("O", 1, 1)).toBe("ok");
    expect(game.place("X", 0, 2)).toBe("ok");
    expect(game.place("O", 2, 2)).toBe("O wins");
  });
});
