import { BackButton } from "../components/NonUIButtons/BackButton";
import { NormalGrid } from "../components/NormalGrid/NormalGrid";
import { AnimateComponent } from "../components/UI/AnimateComponent";

export const NormalGamePage = () => {
  return (
    <AnimateComponent>
      <BackButton />
      <NormalGrid />
    </AnimateComponent>
  );
};
