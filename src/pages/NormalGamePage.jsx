import { Link } from "react-router-dom";
import { NormalGrid } from "../components/NormalGrid/NormalGrid";
import { Button } from "../components/UI/Button/Button";

export const NormalGamePage = () => {
  return (
    <>
      <Link to="/" tabIndex={-1}>
        <Button btnType="btn-back">Back to menu</Button>
      </Link>
      <NormalGrid />
    </>
  );
};
