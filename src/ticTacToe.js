function TicTacToeGame() {
  this.board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  this.place = (symbol, xAxis, yAxis) => {
    if (!validateSymbolInput(symbol)) throw new Error("illegal symbol input");
    if (!validateAxisInput(xAxis)) throw new Error("illegal xAxis input");
    if (!validateAxisInput(yAxis)) throw new Error("illegal yAxis input");
    if (this.board[XYtoArrayPosition(xAxis, yAxis)] != "-") throw new Error("slot already taken");
    this.board[XYtoArrayPosition(xAxis, yAxis)] = symbol;

    return checkForWin(this.board);
  };

  const checkForWin = (board) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const playerSymbols = ["X", "O"];

    for (let symbol of playerSymbols) {
      if (winPatterns.some((winPattern) => winPattern.every((pos) => board[pos] === symbol))) return output(symbol);
    }
    return output();
  };

  const XYtoArrayPosition = (x, y) => y * 3 + x;

  const validateSymbolInput = (symbol) => {
    if (symbol === undefined) return false;
    return symbol.replace(/[XO\ ]+/g, "").length === 0;
  };

  const validateAxisInput = (num) => {
    if (num === undefined) return false;
    return num >= 0 && num <= 2;
  };

  const output = (winningSymbol = undefined) => {
    if (winningSymbol === undefined) return "ok";
    return winningSymbol + " wins";
  };
}

module.exports = { TicTacToeGame };
