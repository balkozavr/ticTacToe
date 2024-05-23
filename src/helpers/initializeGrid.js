import { createGridTemplate } from "./createGridTemplate";

export const initializeGrid = (size, type) => {
  if (type === "expanded") {
    const boards = [];
    for (let i = 0; i < 9; i++) {
      boards.push({
        active: true,
        winner: null,
        winningCells: [],
        grid: createGridTemplate(size),
      });
    }
    return {
      boards,
      turnCount: 0,
      mainWinner: null,
      mainWinningCells: [],
    };
  } else if (type === "normal") {
    return {
      grid: createGridTemplate(size),
      winner: null,
      turnCount: 0,
      winningCells: [],
    };
  } else {
    throw new Error("Invalid grid type");
  }
};
