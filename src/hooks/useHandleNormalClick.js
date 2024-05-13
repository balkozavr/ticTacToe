import { checkTurn } from "../helpers/checkTurn";
import useGameObjectState from "./useGameObjectState";
import { winningScenarios } from "../helpers/winningScenarios";

export const useHandleNormalClick = (
  gameState,
  setGameState,
  cellIndex
) => {
  const changeState = (targetName, targetValue) =>
    useGameObjectState(gameState, targetName, targetValue);

  if (gameState.grid[cellIndex]) return;
  if(gameState.winner) return;
  
  //updating the grid of small boards
  let grid = gameState.grid;
  let newGrid = grid;
  grid[cellIndex] = checkTurn(gameState);
  setGameState(changeState(grid, newGrid));

  //incrementing turnCount
  setGameState(changeState("turnCount", gameState.turnCount + 1));

  //checking the small boards win
  for (let i = 0; i < winningScenarios.length; i++) {
    let [a, b, c] = winningScenarios[i];
    if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) {
      let newWinningCells = gameState.winningCells;
      [a, b, c].forEach((cell) => {
        newWinningCells.push(cell);
      });
      setGameState((prev) => ({
        ...prev,
        winningCells: newWinningCells,
        winner: grid[a],
      }));
      break;
    }
  }

  //check draw in a small board
  if(gameState.turnCount === 8 && gameState.winningCells.length === 0) { 
    setGameState(changeState("winner", "draw"));
  }
};
