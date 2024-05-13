export const checkTurn = (gameState) => {
  return gameState?.turnCount % 2 === 0 ? "x" : "o";
};
