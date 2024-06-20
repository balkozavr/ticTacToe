import { useEffect, useState } from "react";
import { Board } from "../Board/Board";
import "./ExpandedGrid.scss";
import { initializeGrid } from "../../helpers/initializeGrid";
import { checkTurn } from "../../helpers/checkTurn";
import { StateOfTheGame } from "../UI/StateOfTheGame/StateOfTheGame";
import { Button } from "../UI/Button/Button";
import { checkWinningScenarios } from "../../helpers/checkWinningScenarios";
import { handleExpandedGridClick } from "../../helpers/handleExpandedGridClick";
import clsx from "clsx";

const GRID_SIZE = 9;
const MIN_TURNS_TO_WIN = 17;

export const ExpandedGrid = ({ isSolo }) => {
  const [mainGrid, setMainGrid] = useState(
    initializeGrid(GRID_SIZE, "expanded"),
  );
  const resetTheGame = () => {
    setMainGrid(initializeGrid(GRID_SIZE, "expanded"));
  };

  useEffect(() => {
    if (
      !mainGrid.mainWinner &&
      mainGrid.boards.every((board) => !board.active)
    ) {
      setMainGrid((prevGameState) => ({
        ...prevGameState,
        boards: prevGameState.boards.map((board) => ({
          ...board,
          active: true,
        })),
      }));
    }

    if (mainGrid.turnCount < MIN_TURNS_TO_WIN) return;

    const [newWinningCells, winner] = checkWinningScenarios(
      mainGrid.boards.map((board) => board.winner),
    );
    if (newWinningCells) {
      setMainGrid((prevGameState) => ({
        ...prevGameState,
        mainWinner: winner,
        mainWinningCells: newWinningCells,
      }));
    }
    //check for draw in the main grid
    if (
      mainGrid.boards.every((board) => board.winner) &&
      !mainGrid.mainWinner
    ) {
      setMainGrid((prevGameState) => ({
        ...prevGameState,
        mainWinner: "draw",
        mainWinningCells: [],
      }));
    }
  }, [mainGrid.boards, mainGrid.mainWinner, mainGrid.turnCount]);

  const turn = checkTurn(mainGrid.turnCount);

  const handleClick = (boardIndex, cellIndex) => {
    handleExpandedGridClick(mainGrid, setMainGrid, boardIndex, cellIndex);
  };

  return (
    <div className='expanded-grid-container'>
      <div className="expanded-grid">
        {mainGrid.boards.map((board, index) => (
          <div
            key={index}
            className={clsx(
              `board board${index}`,
              mainGrid.boards[index].active &&
                !mainGrid.mainWinner &&
                (turn === "x"
                  ? "board-active board-active-x"
                  : "board-active board-active-o"),
              mainGrid.mainWinningCells.includes(index) &&
                `board-winner-${board.winner}`,
            )}
          >
            <Board
              aria-label={`Board ${index + 1}`}
              handleClick={handleClick}
              board={board}
              boardIndex={index}
              className="grid"
              key={index}
            />
          </div>
        ))}
      </div>
      <StateOfTheGame winner={mainGrid.mainWinner} turn={turn} />
      {isSolo && (
        <Button
          btnType={clsx("btn-reset", mainGrid.mainWinner && "btn-big")}
          onClick={resetTheGame}
        >
          Reset the game
        </Button>
      )}
    </div>
  );
};
