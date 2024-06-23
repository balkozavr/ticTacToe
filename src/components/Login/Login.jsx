import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { Button } from "../UI/Button/Button";
import "./Login.scss";
import { fakeUsers } from "./fakeUsers";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername: setLoggedIn } = useContext(UserContext);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = fakeUsers.find(
      (user) => user.username === username && user.password === password,
    );
    if (!user) {
      setError(true);
      return;
    }
    setLoggedIn(user.username);
    localStorage.setItem('username', user.username);
    navigate('/');
  };
  return (
    <>
      <form className="auth" onSubmit={handleSubmit}>
        <h1 className="title">Welcome back!</h1>
        <label className={error && 'error'}>
          Username
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError(false);
            }}
          />
        </label>
        <label className={error && 'error'}>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError(false);
            }}
          />
        </label>
        <Button btnType={"btn-form"} type="submit">
          Sign Up
        </Button>
      </form>
    </>
  );
};
