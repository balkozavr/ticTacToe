import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const BackButton = () => {
  return (
    <Link to="/" tabIndex={-1}>
      <Button btnType="btn-back">Back to menu</Button>
    </Link>
  );
};
