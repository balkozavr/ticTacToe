import { createGrid } from "./createGrid";

export const initializeExpandedGrid = (size) => {
  const boards = [];
  for (let i = 0; i < 9; i++) {
    boards.push({
      active: true,
      winner: null,
      winningCells: [],
      grid: createGrid(size),
    });
  }
  return {
    boards,
    turnCount: 0,
    mainWinner: null,
    mainWinningCells: [],
  };
};
