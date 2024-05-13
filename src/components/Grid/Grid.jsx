const Grid = ({ gridType, children, winner, turn, resetFunction }) => {
  return (
    <>
      <div className={gridType}>
        {children}
        <div className="game-state">
          {!winner ? (
            <>
              It's <span className={`state state-${turn}`}>{turn}</span>'s turn
            </>
          ) : (
            <>
              {winner === "draw" ? (
                "Draw!"
              ) : (
                <>
                  <span className={`state state-${winner}`}>{winner}</span> won!
                </>
              )}
            </>
          )}
        </div>
        <button
          tabIndex={0}
          className={"btn btn-reset" + `${winner ? " btn-reset-big" : ""}`}
          onClick={resetFunction}
        >
          Reset the game
        </button>
      </div>
    </>
  );
};
export default Grid;
