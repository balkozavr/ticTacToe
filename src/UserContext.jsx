import React, { useState } from "react";

export const UserContext = React.createContext({});
export const UserContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
