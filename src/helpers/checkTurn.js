export const checkTurn = (turnCount) => {
  return turnCount % 2 === 0 ? "x" : "o";
};
