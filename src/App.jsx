import "./App.scss";
import { Routes, Route } from 'react-router-dom';
import { HomePage } from "./pages/HomePage";
import { NormalGamePage } from "./pages/NormalGamePage";
import { ExpandedGamePage } from "./pages/ExpandedGamePage";

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/normal' element={<NormalGamePage />} />
        <Route path='/expanded' element={<ExpandedGamePage />} />
      </Routes>
  );
};
