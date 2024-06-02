import { createGridTemplate } from "./createGridTemplate";

export const initializeGrid = (size, type) => {
  if (type === "expanded") {
    const boards = [];
    for (let i = 0; i < size; i++) {
      boards.push({
        grid: createGridTemplate(size),
        winner: null,
        winningCells: [],
        active: true,
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
      winningCells: [],
      turnCount: 0,
    };
  } else {
    throw new Error("Invalid grid type");
  }
};
