import { winningScenarios } from "./winningScenarios";

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
