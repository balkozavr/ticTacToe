import { useState } from "react";
import ExpandedGrid from "./components/ExpandedGrid/ExpandedGrid";
import NormalGrid from "./components/NormalGrid/NormalGrid";
import "./App.scss";

const App = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="game">
      {menu === "menu" && (
        <>
          <h1 className="main-title">
            <span style={{ color: "var(--X)" }}>Tic</span> Tac{" "}
            <span style={{ color: "var(--O)" }}>Toe</span>
          </h1>
          <h2 className="subtitle">Choose the game mode:</h2>
          <div className="btn-container">
            <button
              className="btn btn-game-mode"
              onClick={() => setMenu("normal")}
            >
              Normal
            </button>
            <button
              className="btn btn-game-mode"
              onClick={() => setMenu("advanced")}
            >
              Advanced
            </button>
          </div>
        </>
      )}
      {menu !== "menu" && (
        <button
          tabIndex={100}
          className="btn btn-back"
          onClick={() => setMenu("menu")}
        >
          Back to menu
        </button>
      )}
      {menu === "advanced" && <ExpandedGrid />}
      {menu === "normal" && <NormalGrid />}
    </div>
  );
};
export default App;
