import { useEffect, useState } from "react";
import "./Timer.scss";

export const Timer = ({ running }) => {
  const [time, setTime] = useState(0);


	const formatTime = (time) => {
		const minutes = Math.floor(time / 60);
		const seconds = time % 60;
		return `${minutes < 10 ? "0" + minutes : minutes}:${
			seconds < 10 ? "0" + seconds : seconds
		}`;
	}
  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  });
  return <div className="timer">{formatTime(time)}</div>;
};
