import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";

export const RoomButton = ({ type }) => {
  return (
    <Link to={type === 'join' ? '/rooms' : '/host'}>
      <Button btnType="btn-room">{type} a room</Button>
    </Link>
  );
};
