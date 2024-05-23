import { useEffect, useState } from "react";
import { Cell } from "../Cell/Cell";
import "./NormalGrid.scss";
import { handleNormalGridClick } from "../../helpers/handleNormalGridClick";
import { checkTurn } from "../../helpers/checkTurn";
import { Grid } from "../Grid/Grid";
import { initializeGrid } from "../../helpers/initializeGrid";
import { checkWinningScenarios } from "../../helpers/checkWinningScenarios";
import { StateOfTheGame } from "../UI/StateOfTheGame/StateOfTheGame";
import { Button } from "../UI/Button/Button";

const GRID_SIZE = 9;

export const NormalGrid = () => {
  const [board, setBoard] = useState(initializeGrid(GRID_SIZE, "normal"));

  const handleClick = (cellIndex) =>
    handleNormalGridClick(board, setBoard, cellIndex);

  useEffect(() => {
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= "1" && e.key <= "9") {
        handleClick(e.key - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const resetTheGame = () => {
    setBoard(initializeGrid(GRID_SIZE, "normal"));
  };

  const turn = checkTurn(board.turnCount);

  return (
    <>
      <p className="hint">you can also play the game with number keys</p>
      <Grid
        gridType="normal-grid"
        winner={board.winner}
        turn={turn}
        resetFunction={resetTheGame}
      >
        <div className="grid">
          {board.grid.map((cell, index) => (
            <Cell
              value={cell}
              key={index}
              data-cell-number={index + 1}
              className={
                `cell` +
                `${cell || board.winner ? " cell-deac" : ""}` +
                `${cell ? ` cell-${cell}` : ""}` +
                `${
                  board.winner
                    ? board.winningCells?.includes(index)
                      ? ` winning-cell winning-cell-${cell}`
                      : ``
                    : ""
                }`
              }
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
        <StateOfTheGame winner={board.winner} turn={turn} />
        <Button
          btnType={"btn-reset" + (board.winner ? ` btn-big` : "")}
          onClick={resetTheGame}
        >
          Reset the game
        </Button>
      </Grid>
    </>
  );
};
