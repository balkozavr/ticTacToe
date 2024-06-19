import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { SoloGamePage } from "./pages/SoloGamePage";
import { Auth } from "./pages/Auth";
import { Header } from "./components/Header/Header";
import { RoomsPage } from "./pages/RoomsPage";
import { HostPage } from "./pages/HostPage";

export const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/solo" element={<SoloGamePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/host" element={<HostPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
};
