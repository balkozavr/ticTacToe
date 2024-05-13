import { useEffect, useState } from "react";
import Cell from "../Cell/Cell";
import "./NormalGrid.scss";
import { useHandleNormalClick } from "../../hooks/useHandleNormalClick";
import { checkTurn } from "../../helpers/checkTurn";
import Grid from "../Grid/Grid";
import { makeNormalGrid } from "../../helpers/makeNormalGrid";

const NormalGrid = () => {
  const [board, setBoard] = useState(makeNormalGrid());

  const handleClick = (cellIndex) =>
    useHandleNormalClick(board, setBoard, cellIndex);

  useEffect(() => {
    
    const handleKeyDown = (e) => {
      if (
        (e.keyCode >= 49 && e.keyCode <= 57) ||
        (e.keyCode >= 97 && e.keyCode <= 105)
      ) {
        handleClick(e.keyCode <= 57 ? e.keyCode - 49 : e.keyCode - 97);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  const resetTheGame = () => {
    setBoard(makeNormalGrid());
  };

  const turn = checkTurn(board);

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
                `btn cell` +
                `${cell || board.winner ? " cell-deac" : ""}` +
                `${cell ? ` cell-${cell}` : ""}` +
                `${
                  board.winner
                    ? board.winningCells.includes(index)
                      ? ` winning-cell winning-cell-${cell}`
                      : ``
                    : ""
                }`
              }
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </Grid>
    </>
  );
};
export default NormalGrid;
