import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const RoomButton = () => {
  return (
    <Link to="/online">
      <Button btnType="btn-room">Play online</Button>
    </Link>
  );
};
