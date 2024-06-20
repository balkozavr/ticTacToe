import { Chat } from "../components/Chat/Chat";
import { ExpandedGrid } from "../components/ExpandedGrid/ExpandedGrid";
import { Players } from "../components/Players/Players";
import { AnimateComponent } from "../components/UI/AnimateComponent";

export const OnlineGamePage = () => {
  return (
    <div className="online-game-container">
      <AnimateComponent>
        <div className="online-game">
          <Players />
          <ExpandedGrid isSolo={false} />
          <Chat />
        </div>
      </AnimateComponent>
    </div>
  );
};
