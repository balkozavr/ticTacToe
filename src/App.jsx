import { useState } from "react";
import { ExpandedGrid } from "./components/ExpandedGrid/ExpandedGrid";
import { NormalGrid } from "./components/NormalGrid/NormalGrid";
import "./App.scss";
import { Button } from "./components/UI/Button/Button";

export const App = () => {
  const [menu, setMenu] = useState("menu");
  return (
    <div className="game">
      {menu === "menu" && (
        <>
          <h1 className="main-title">TicTacToe</h1>
          <h2 className="subtitle">Choose the game mode</h2>
          <div className="btn-container">
            <Button btnType="btn-game-mode" onClick={() => setMenu("normal")}>
              Normal
            </Button>
            <Button btnType="btn-game-mode" onClick={() => setMenu("advanced")}>
              Advanced
            </Button>
          </div>
        </>
      )}
      {menu !== "menu" && (
        <Button btnType="btn-back" onClick={() => setMenu("menu")}>
          Back to menu
        </Button>
      )}
      {menu === "advanced" && <ExpandedGrid />}
      {menu === "normal" && <NormalGrid />}
    </div>
  );
};
