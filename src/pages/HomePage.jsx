import { Button } from "../components/UI/Button/Button";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <h1 className="main-title">TicTacToe</h1>
      <h2 className="subtitle">Choose the game mode</h2>
      <div className="btn-container">
        <Link to="/normal" tabIndex={-1}>
          <Button btnType="btn-game-mode">Normal</Button>
        </Link>
        <Link to="/expanded" tabIndex={-1}>
          <Button btnType="btn-game-mode">Expanded</Button>
        </Link>
      </div>
    </>
  );
};
