import { checkTurn } from "./checkTurn";

export const handleNormalGridClick = (gameState, setGameState, cellIndex) => {
  const changeState = (targetName, targetValue) => {
    return {
      ...gameState,
      [targetName]: targetValue,
    };
  };

  if (gameState.grid[cellIndex]) return;
  if (gameState.winner) return;

  //updating the grid of small boards
  let grid = gameState.grid;
  let newGrid = grid;
  grid[cellIndex] = checkTurn(gameState.turnCount);
  setGameState(changeState(grid, newGrid));

  //incrementing turnCount
  setGameState(changeState("turnCount", gameState.turnCount + 1));
};
