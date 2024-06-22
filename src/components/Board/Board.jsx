import "./Board.scss";
import { Cell } from "../Cell/Cell";
import clsx from "clsx";

export const Board = ({ board, boardIndex, handleClick, ...props }) => {
  const checkActive = (index) => {
    return board.active === undefined
      ? handleClick(index)
      : handleClick(boardIndex, index);
  };
  if (!board.winner || board.active === undefined) {
    return (
      <div {...props}>
        {board.grid.map((cell, index) => (
          <Cell
            value={cell}
            key={index}
            data-cell-number={index + 1}
            aria-label={`Cell ${index + 1}`}
            className={clsx(
              "cell",
              (cell || board.winner) && "cell-deac",
              cell && `cell-${cell}`,
              board.winner &&
                board.winningCells?.includes(index) &&
                `winning-cell-${cell}`,
            )}
            onClick={() => checkActive(index)}
          />
        ))}
      </div>
    );
  }
  return (
    <div className={clsx("board-win", `win-${board.winner}`)}>
      <div className="board-win-symbol">
        {board.winner !== "draw" ? board.winner : "∅"}
      </div>
    </div>
  );
};
