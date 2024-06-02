import "./Board.scss";
import { Cell } from "../Cell/Cell";
import { handleExpandedGridClick } from "../../helpers/handleExpandedGridClick";
import { useContext } from "react";
import { ExpandedGridContext } from "../ExpandedGrid/ExpandedGrid";
import clsx from "clsx";

export const Board = ({ boardIndex, ...props }) => {
  const { mainGrid, setMainGrid } = useContext(ExpandedGridContext);

  const handleClick = (boardIndex, cellIndex) => {
    handleExpandedGridClick(mainGrid, setMainGrid, boardIndex, cellIndex);
  };

  const board = mainGrid.boards[boardIndex];

  return (
    <div {...props}>
      {!board.winner ? (
        <div className="grid">
          {board.grid.map((cell, index) => (
            <Cell
              value={cell}
              key={index}
              className={clsx("cell", cell && `cell-${cell}`)}
              onClick={() => board.active && handleClick(boardIndex, index)}
            />
          ))}
        </div>
      ) : (
        <div className={clsx("board-win", `win-${board.winner}`)}>
          <div className="board-win-symbol">
            {board.winner !== "draw" ? board.winner : "∅"}
          </div>
        </div>
      )}
    </div>
  );
};
