import { Button } from "../UI/Button/Button";
import "./Chat.scss";

export const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-history"></div>
      <input type="text" placeholder="send your message" />
      <Button btnType="btn-chat">Send</Button>
    </div>
  );
};
