import React from "react";
import ChatInput from "./ChatInput";
import ChatList from "./ChatList";
import "./Chats.css";

function Chats() {
  return (
    <div className="chats">
      <ChatList />
      <ChatInput />
    </div>
  );
}

export default Chats;
