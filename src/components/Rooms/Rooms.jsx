import "./Rooms.scss";
import { Window } from "../UI/Window/Window";
import { useState } from "react";
import { Button } from "../UI/Button/Button";
import { Link } from "react-router-dom";
import { RoomButton } from "../NonUIButtons/RoomButton";

export const Rooms = () => {

  return (
    <div className="rooms">
      <Window>
        <Link to="/">
          <Button btnType="btn-window-back">Back</Button>
        </Link>
        <h1 className="rooms-title">Room list</h1>
        {rooms &&
          rooms.map((room) => (
            <div className="room" key={room.id}>
              <Button btnType="btn-join-room">Join</Button>
              <div className="room-desc">
                Room <span>{room.name}</span> <br />
                hosted by <span>{room.host}</span>
              </div>
            </div>
          ))}
        {!rooms && (
          <>
            <div className="no-rooms">
              No rooms found, try hosting one yourself!
            </div>
            <RoomButton type="host" />
          </>
        )}
      </Window>
    </div>
  );
};
