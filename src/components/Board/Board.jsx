import "./Board.scss";
import Cell from "../Cell/Cell";
import { useHandleExpandedClick } from "../../helpers/useHandleExpandedClick";

const Board = ({ gameState, setGameState, boardIndex, ...props }) => {
  const handleClick = (boardIndex, cellIndex) => {
    useHandleExpandedClick(gameState, setGameState, boardIndex, cellIndex);
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
              className={`btn cell` + `${cell ? ` cell-${cell}` : ""}`}
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
export default Board;
