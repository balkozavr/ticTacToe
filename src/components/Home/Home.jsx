import "./Home.scss";
import { Button } from "../UI/Button/Button";
import { Window } from "../UI/Window/Window";
export const Home = () => {
  return (
    <Window>
      <img className="logo" src="logo.png" alt="ultimate tic-tac-toe logo" />
      <h1 className="main-title">What is this game?</h1>
      <h2 className="subtitle">This is an extended version of the classic tic-tac-toe game. You can check out the rules on <a href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe" target="_blank">Wikipedia</a> and practice in solo mode before playing online.</h2>
      <Button btnType='btn-queue'>Join room</Button>
    </Window>
  );
};
