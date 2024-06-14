import { useState } from "react";
import { Button } from "../UI/Button/Button";
import './Login.scss';

export const Login = () => {
  const [hasAccount, setHasAccount] = useState(false);
  return (
    <>
    <form className="auth">
			<h1 className="title">{hasAccount ? "Welcome back!" : "Create an account"}</h1>
        <label>Username<input type="text"/></label>
        <label>Password<input type="password"/></label>
				{!hasAccount && <label>Confirm your password<input type="password"></input></label>}
        <Button btnType={"btn-form"} type='submit'>
          {hasAccount ? "Sign In" : "Sign Up"}
        </Button>
        <Button
          btnType={"btn-form btn-small"}
					type='reset'
          onClick={() => setHasAccount(!hasAccount)}
        >
          {hasAccount && "don't"} have an account?
        </Button>
    </form></>
  );
};
