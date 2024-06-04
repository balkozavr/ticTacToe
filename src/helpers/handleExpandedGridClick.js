import { checkTurn } from "./checkTurn";
import { winningScenarios } from "./winningScenarios";

export const handleExpandedGridClick = (
  gameState,
  setGameState,
  boardIndex,
  cellIndex,
) => {
  const changeState = (targetName, targetValue) => {
    return {
      ...gameState,
      [targetName]: targetValue,
    };
  };

  //if we have a winner, we don't handle clicks anymore. we don't have to check for the boards winners, because there is conditional rendering in mainGrid component
  if (gameState.mainWinner) return;

  //updating the grid of small boards
  let gridObj = gameState.boards[boardIndex];
  let grid = gridObj.grid;
  if (grid[cellIndex]) return;
  let newGrid = grid;
  grid[cellIndex] = checkTurn(gameState.turnCount);
  setGameState(changeState(grid, newGrid));

  //incrementing turnCount
  setGameState(changeState("turnCount", gameState.turnCount + 1));

  //checking the small boards win
  for (let i = 0; i < winningScenarios.length; i++) {
    let [a, b, c] = winningScenarios[i];
    if (grid[a] && grid[a] === grid[b] && grid[b] === grid[c]) {
      let newWinningCells = gridObj.winningCells;
      [a, b, c].forEach((cell) => {
        newWinningCells.push(cell);
      });
      setGameState((prevGameState) => ({
        ...prevGameState,
        boards: prevGameState.boards.map((board, index) =>
          index === boardIndex
            ? {
                ...board,
                winner: grid[a],
                active: false,
              }
            : board,
        ),
      }));
      break;
    }
  }

  //check draw in a small board
  if (gameState.boards[boardIndex].winningCells.length === 0) {
    if (gameState.boards[boardIndex].grid.every((cell) => cell)) {
      setGameState((prevGameState) => ({
        ...prevGameState,
        boards: prevGameState.boards.map((board, index) =>
          index === boardIndex
            ? {
                ...board,
                winner: "draw",
                winningCells: [0],
                active: false,
              }
            : board,
        ),
      }));
    }
  }

  //MAIN EXPANDED-GRID GAME LOGIC
  //check if cellIndex = boardIndex, if not deactivate the cell. if the activated cell is a winning cell, make all the cells active again. if the cell we are going to is a winning cell, active all other cells
  setGameState((prev) => ({
    ...prev,
    boards: prev.boards.map((board, index) =>
      board.winner
        ? {
            ...board,
            active: false,
          }
        : cellIndex === index
          ? {
              ...board,
              active: true,
            }
          : {
              ...board,
              active: false,
            },
    ),
  }));
};
