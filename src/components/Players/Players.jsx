import clsx from "clsx";
import { Window } from "../UI/Window/Window";
import "./Players.scss";

const Player = ({ suit, name, winrate }) => {
  return (
    <div className="player">
      <div className={clsx('player-suit', `player-suit-${suit}  `)}>{suit}</div>
      <div className="player-info">
        <div className="player-name">{name}</div>
        <div className="player-winrate">{winrate}%</div>
      </div>
    </div>
  );
};

export const Players = () => {
  return (
    <div className="players">
      <Window>
        <h1 className="players-title">Players</h1>
        <Player suit="X" name="player1" winrate="100" />
        <Player suit="O" name="player2" winrate="100" />
      </Window>
    </div>
  );
};
