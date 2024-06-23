import clsx from "clsx";
import { Window } from "../UI/Window/Window";
import "./Players.scss";
import { UserContext } from "../../UserContext";
import { useContext } from "react";

const Player = ({ suit, name }) => {
  return (
    <div className="player">
      <div className={clsx("player-suit", `player-suit-${suit}`)}>{suit}</div>
      <div className="player-info">
        <div className="player-name">{name}</div>
      </div>
    </div>
  );
};

export const Players = () => {
  const { username } = useContext(UserContext);
  return (
    <div className="players">
      <Window>
        <h1 className="players-title">Players</h1>
        <Player suit="X" name={username} />
        <Player suit="O" name="other" />
      </Window>
    </div>
  );
};
