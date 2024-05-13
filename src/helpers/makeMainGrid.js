export const makeMainGrid = () => {
  const boards = [];
  for (let i = 0; i < 9; i++) {
    boards.push({
      active: true,
      winner: null,
			winningCells: [],
			grid: Array(9).fill(null),
    });
  }
  return {
    boards: boards,
    turnCount: 0,
    mainWinner: null,
    mainWinningCells: [],
  };
};
