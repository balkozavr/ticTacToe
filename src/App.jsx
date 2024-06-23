import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SoloGamePage } from "./pages/SoloGamePage";
import { Header } from "./components/Header/Header";
import { RoomsPage } from "./pages/RoomsPage";
import { OnlineGamePage } from "./pages/OnlineGamePage";
import { Auth } from "./pages/Auth";
import { useContext, useEffect } from "react";
import { UserContext } from "./UserContext";

export const App = () => {
  const navigate = useNavigate();
  const { username, setUsername} = useContext(UserContext);
  useEffect(() => {
    if(!username) {
      const localUser = localStorage.getItem("username");
      if (!localUser) navigate("/auth");
      setUsername(localUser);
    }    
  }, [username, navigate, setUsername]); 
  return (
    <>
      {username && <Header />}
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/solo" element={<SoloGamePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/online" element={<OnlineGamePage />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
