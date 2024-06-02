import { useEffect } from "react";

export const useHandleKeyPresses = (handleClick) => {
	useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key >= "1" && e.key <= "9") {
        handleClick(e.key - 1);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  })
}