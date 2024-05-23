const winningScenarios = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinningScenarios(grid) {
  for (let i = 0; i < winningScenarios.length; i++) {
    let [a, b, c] = winningScenarios[i];
    if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) {
      let newWinningCells = [];
      [a, b, c].forEach((cell) => {
        newWinningCells.push(cell);
      });
      return [newWinningCells, grid[a]];
    }
  }
  return [];
}
