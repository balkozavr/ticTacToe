import clsx from "clsx";
import "./Button.scss";
export const Button = ({ btnType, ...props }) => {
  return <button className={clsx("btn", btnType)} {...props}></button>;
};
