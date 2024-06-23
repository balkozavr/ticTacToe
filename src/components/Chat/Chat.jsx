import { useState } from "react";
import { Button } from "../UI/Button/Button";
import "./Chat.scss";
import { useRef } from "react";

export const Chat = () => {
  const [chatHitory, setChatHistory] = useState([]);
  const [sender, setSender] = useState("you");
  const messageInput = useRef("");
  const scrollDiv = useRef(null);

  const sendMesssage = (e) => {
    e.preventDefault();
    const message = {
      text: messageInput.current.value,
      sender: sender,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    if (!message.text.trim()) return;
    setChatHistory([...chatHitory, message]);
    messageInput.current.value = "";
    setTimeout(() => {
      scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };
  return (
    <form className="chat" onSubmit={sendMesssage}>
      <div className="chat-history">
        {chatHitory.map((message, index) => {
          return (
            <div className={`message message-${message.sender}`} key={index}>
              {" "}
              {message.text}{" "}
              <span className="message-time">{message.time}</span>
            </div>
          );
        })}
        <div ref={scrollDiv}></div>
      </div>
      <Button
        btnType="btn-sender"
        type='button'
        onClick={() => (setSender(sender === "you" ? "other" : "you"))}
      >
        text from: {sender}
      </Button>
      <input
        maxLength="36"
        ref={messageInput}
        type="text"
        placeholder="send your message"
      />
      <Button btnType="btn-chat" type="submit">
        Chat
      </Button>
    </form>
  );
};
