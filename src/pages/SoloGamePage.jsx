import { ExpandedGrid } from "../components/ExpandedGrid/ExpandedGrid";
import { BackButton } from "../components/NonUIButtons/BackButton";
import { AnimateComponent } from "../components/UI/AnimateComponent";
export const SoloGamePage = () => {
  return (
    <div className="solo-game">
      <AnimateComponent>
        <BackButton />
        <ExpandedGrid isSolo={true} />
      </AnimateComponent>
    </div>
  );
};
