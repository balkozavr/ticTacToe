import { NavLink, redirect, useNavigate } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import "./Header.scss";
import { useContext } from "react";
import { UserContext } from "../../UserContext";
export const Header = () => {
  const { setUsername } = useContext(UserContext);
  const addActive = (isActive) => (isActive ? "active-link" : "");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem('username');
    setUsername('');
    navigate('/auth');
  }
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
            <Button btnType="btn-header" onClick={logOut}>Log Out</Button>
          </div>
        </nav>
      </div>
    </header>
  );
};
