import clsx from "clsx";
import "./StateOfTheGame.scss";
export const StateOfTheGame = ({ winner, turn }) => {
  return (
    <>
      <div className="game-state">
        {!winner ? (
          <>
            <span>
              It's{" "}
              <span className={clsx("state", `state-${turn}`)}>{turn}</span>'s
              turn
            </span>
          </>
        ) : (
          <>
            {winner === "draw" ? (
              "Draw!"
            ) : (
              <>
                <span className={clsx("state", `state-${winner}`)}>
                  {winner}
                </span>{" "}
                won!
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};
