import { useEffect, useState } from "react";
import Board from "../Board/Board";
import "./ExpandedGrid.scss";
import { makeMainGrid } from "../../helpers/makeMainGrid";
import { checkTurn } from "../../helpers/checkTurn";
import { winningScenarios } from "../../helpers/winningScenarios";
import Grid from "../Grid/Grid";

const ExpandedGrid = () => {
  const [mainGrid, setMainGrid] = useState(makeMainGrid());

  const resetTheGame = () => {
    setMainGrid(makeMainGrid());
  };

  useEffect(() => {
    for (let i = 0; i < winningScenarios.length; i++) {
      let [a, b, c] = winningScenarios[i];
      if (
        mainGrid.boards[a].winner &&
        mainGrid.boards[a].winner === mainGrid.boards[b].winner &&
        mainGrid.boards[a].winner === mainGrid.boards[c].winner
      ) {
        setMainGrid((prevGameState) => ({
          ...prevGameState,
          mainWinner: mainGrid.boards[a].winner,
          mainWinningCells: [a, b, c],
        }));
        return;
      }
    }

    //check draw in main grid
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
  }, [mainGrid.boards]);
  const turn = checkTurn(mainGrid);
  
  return (
    <Grid
      gridType="expanded-grid"
      winner={mainGrid.mainWinner}
      turn={turn}
      resetFunction={resetTheGame}
    >
      <div className="main-grid">
        {mainGrid.boards.map((board, index) => (
          <Board
            gameState={mainGrid}
            boardIndex={index}
            setGameState={setMainGrid}
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
    </Grid>
  );
};
export default ExpandedGrid;
