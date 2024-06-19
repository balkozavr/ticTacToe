import { Link } from "react-router-dom";
import { Window } from "../UI/Window/Window";
import "./Host.scss";
import { Button } from "../UI/Button/Button";
import { CheckBox } from "../NonUIButtons/CheckBox/CheckBox";
import { useState } from "react";
export const Host = () => {
  const [privateRoom, setPrivateRoom] = useState(false);

  return (
    <div className="host">
      <Window>
        <Link to="/">
          <Button btnType="btn-window-back">Back</Button>
        </Link>
        <h1 className="host-title">Host a room</h1>
        <form>
          <label htmlFor="room-name">Name</label>
          <input
            maxLength="15"
            type="text"
            placeholder="up to 15 characters"
            id="room-name"
          />
          <CheckBox onChange={() => setPrivateRoom(!privateRoom)}>
            Make the room private?
          </CheckBox>
          {privateRoom && (
            <>
              <label htmlFor="room-pass">Password</label>
              <input
                maxLength="5"
                type="text"
                placeholder="up to 5 characters"
                id="room-pass"
              />
            </>
          )}
          <Button btnType="btn-host">Host</Button>
        </form>
      </Window>
    </div>
  );
};
