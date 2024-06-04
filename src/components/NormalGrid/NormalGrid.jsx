import { useEffect, useState } from "react";
import "./NormalGrid.scss";
import { handleNormalGridClick } from "../../helpers/handleNormalGridClick";
import { checkTurn } from "../../helpers/checkTurn";
import { initializeGrid } from "../../helpers/initializeGrid";
import { checkWinningScenarios } from "../../helpers/checkWinningScenarios";
import { StateOfTheGame } from "../UI/StateOfTheGame/StateOfTheGame";
import { Button } from "../UI/Button/Button";
import { useHandleKeyPresses } from "../../hooks/useHandleKeyPresses";
import clsx from "clsx";
import { Board } from "../Board/Board";

const GRID_SIZE = 9;
const MIN_TURNS_TO_WIN = 5;

export const NormalGrid = () => {
  const [board, setBoard] = useState(initializeGrid(GRID_SIZE, "normal"));

  const handleClick = (cellIndex) =>
    handleNormalGridClick(board, setBoard, cellIndex);

  useEffect(() => {
    if(board.turnCount < MIN_TURNS_TO_WIN) return;
    //check winner
    const [newWinningCells, winner] = checkWinningScenarios(board.grid);
    if (newWinningCells) {
      setBoard((prev) => ({
        ...prev,
        winningCells: newWinningCells,
        winner: winner,
      }));
    }
    //check draw
    if (board.turnCount === 9 && !board.winner) {
      setBoard((prev) => ({ ...prev, winner: "draw" }));
    }
  }, [board.grid, board.winner, board.turnCount]);

  useHandleKeyPresses(handleClick);

  const resetTheGame = () => {
    setBoard(initializeGrid(GRID_SIZE, "normal"));
  };

  const turn = checkTurn(board.turnCount);

  return (
    <>
      <p className="hint">you can also play the game with number keys</p>
      <div className="normal-grid-container">
        <Board
          handleClick={handleClick}
          board={board}
          boardIndex={0}
          className="normal-grid"
        />
        <StateOfTheGame winner={board.winner} turn={turn} />
        <Button
          btnType={clsx("btn-reset", board.winner && "btn-big")}
          onClick={resetTheGame}
        >
          Reset the game
        </Button>
      </div>
    </>
  );
};
