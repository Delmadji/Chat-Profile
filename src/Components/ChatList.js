import React, { useState } from "react";
import "./ChatList.css";
import InBoxes from "./InBoxes";

function ChatList() {
  const [search, setSearch] = useState("Search");
  return (
    <div className="chatList">
      <div className="chatList__top">
        <h3>Your Chats</h3>
        <form>
          <input
            type="text"
            placeholder={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>

      <div className="chatList__bottom">
        <div className="boxes">
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
          <InBoxes
            name="Paul Healy"
            text="Thanks for all this"
            date="12 hours ago"
          />
        </div>
      </div>
    </div>
  );
}

export default ChatList;
