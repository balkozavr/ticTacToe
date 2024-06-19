import "./Home.scss";
import { Window } from "../UI/Window/Window";
import { RoomButton } from "../NonUIButtons/RoomButton";
export const Home = () => {
  return (
    <Window>
      <img className="logo" src="logo.png" alt="ultimate tic-tac-toe logo" />
      <h1 className="main-title">What is this game?</h1>
      <h2 className="subtitle">
        This is an extended version of the classic tic-tac-toe game. You can
        check out the rules on{" "}
        <a
          href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe"
          target="_blank"
        >
          Wikipedia
        </a>{" "}
        and practice in solo mode before playing online.
        <br />
        <span className="ps-text">
          Don't flame your opponents in chat, you just have skill issues
        </span>
      </h2>
      <div className="btn-container">
        <RoomButton type="join" />
        <RoomButton type="host" />
      </div>
    </Window>
  );
};
