import { createGrid } from "./createGrid";
export const initializeNormalGrid = (size) => {
	return {
    grid: createGrid(size),
    winner: null,
    turnCount: 0,
    winningCells: [],
  }
};
