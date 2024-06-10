import { Link } from "react-router-dom";
import { NormalGrid } from "../components/NormalGrid/NormalGrid";
import { Button } from "../components/UI/Button/Button";
import { AnimateComponent } from "../components/UI/AnimateComponent";

export const NormalGamePage = () => {
  return (
    <AnimateComponent>
      <Link to="/" tabIndex={-1}>
        <Button btnType="btn-back">Back to menu</Button>
      </Link>
      <NormalGrid />
    </AnimateComponent>
  );
};
