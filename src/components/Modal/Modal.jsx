import { Link } from "react-router-dom";
import { Button } from "../UI/Button/Button";
import "./Modal.scss";
export const Modal = ({ open, children, ...props }) => {
  if (!open) return;
  return (
    <div className="modal" {...props}>
      <div className="modal-content">
        {children}
        <Link to="/">
          <Button btnType="btn-window-back">Back to menu</Button>
        </Link>
      </div>
    </div>
  );
};
