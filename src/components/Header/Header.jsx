import { NavLink } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import "./Header.scss";
export const Header = () => {
  const addActive = (isActive) => (isActive ? "active-link" : "");

  return (
    <header className="header">
      <div className="container">
        <nav className="header-nav">
          <h2>TicTacToe</h2>
          <nav className="routes-nav">
            <NavLink className={({ isActive }) => addActive(isActive)} to="/">
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => addActive(isActive)}
              to="/solo"
            >
              Solo
            </NavLink>
          </nav>
          <div className="header-btn-container">
            <NavLink to="/auth" tabIndex={-1}>
              <Button btnType="btn-header">Log In</Button>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};
