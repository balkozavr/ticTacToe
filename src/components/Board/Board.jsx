import "./Board.scss";
import { Cell } from "../Cell/Cell";
import { handleExpandedGridClick } from "../../helpers/handleExpandedGridClick";

export const Board = ({ gameState, setGameState, boardIndex, ...props }) => {
  const handleClick = (boardIndex, cellIndex) => {
    handleExpandedGridClick(gameState, setGameState, boardIndex, cellIndex);
  };
  const board = gameState.boards[boardIndex];

  return (
    <div {...props}>
      {!board.winner ? (
        <div className="grid">
          {board.grid.map((cell, index) => (
            <Cell
              value={cell}
              key={index}
              className={`cell` + `${cell ? ` cell-${cell}` : ""}`}
              onClick={() => board.active && handleClick(boardIndex, index)}
            />
          ))}
        </div>
      ) : (
        <div className={`board-win-container win-${board.winner}`}>
          <div className="board-win">
            {board.winner !== "draw" ? board.winner : "∅"}
          </div>
        </div>
      )}
    </div>
  );
};
