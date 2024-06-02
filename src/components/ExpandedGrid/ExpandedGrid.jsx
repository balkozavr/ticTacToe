import React, { useEffect, useState } from "react";
import { Board } from "../Board/Board";
import "./ExpandedGrid.scss";
import { initializeGrid } from "../../helpers/initializeGrid";
import { checkTurn } from "../../helpers/checkTurn";
import { StateOfTheGame } from "../UI/StateOfTheGame/StateOfTheGame";
import { Button } from "../UI/Button/Button";
import { checkWinningScenarios } from "../../helpers/checkWinningScenarios";

const GRID_SIZE = 9;

export const ExpandedGridContext = React.createContext();

export const ExpandedGrid = () => {
  const [mainGrid, setMainGrid] = useState(
    initializeGrid(GRID_SIZE, "expanded"),
  );
  const resetTheGame = () => {
    setMainGrid(initializeGrid(GRID_SIZE, "expanded"));
  };

  useEffect(() => {
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
    //check for draw in the main grid]/
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
  }, [mainGrid.boards, mainGrid.mainWinner]);

  const turn = checkTurn(mainGrid.turnCount);

  return (
    <ExpandedGridContext.Provider value={{ mainGrid, setMainGrid }}>
      <div className="expanded-grid">
        <div className="main-grid">
          {mainGrid.boards.map((board, index) => (
            <Board
              boardIndex={index}
              key={index}
              className={
                `board board${index}` +
                `${
                  mainGrid.boards[index].active && !mainGrid.mainWinner
                    ? " board-active"
                    : ""
                }` +
                `${
                  mainGrid.mainWinningCells.includes(index)
                    ? ` board-winner-${board.winner}`
                    : ""
                }`
              }
            />
          ))}
        </div>
        <StateOfTheGame winner={mainGrid.mainWinner} turn={turn} />
        <Button
          btnType={"btn-reset" + (mainGrid.mainWinner ? ` btn-big` : "")}
          onClick={resetTheGame}
        >
          Reset the game
        </Button>
      </div>
    </ExpandedGridContext.Provider>
  );
};
