export const makeNormalGrid = () => {
	return {
    grid: Array(9).fill(null),
    winner: null,
    turnCount: 0,
    winningCells: [],
  }
};
