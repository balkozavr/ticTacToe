export default function useGameObjectState(gameState, targetName, targetValue) {
  return {
    ...gameState,
    [targetName]: targetValue,
  };
}
