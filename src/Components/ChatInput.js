import React, { useState } from "react";
import "./ChatInput.css";

function ChatInput() {
  const [text, setText] = useState("Type your message here");
  return (
    <div className="chatInput">
      <div className="chatInput__top">
        <form>
          <input
            type="text"
            placeholder={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button>Send</button>
        </form>
      </div>
      <div className="chatInput__bottom">
        <div className="chatInput__bottom__content">
          <div className="message__left">
            <div className="bubble-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              orci
            </div>
            <div></div>
          </div>
          <div className="message__right">
            <div></div>
            <div className="bubble-right">
              Hey there, I reviewed the brief and I think it will be Lorem ipsum
              dolor sit amet,
            </div>
          </div>

          <div className="message__left">
            <div className="bubble-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              orci
            </div>
            <div></div>
          </div>

          <div className="message__right">
            <div></div>
            <div className="bubble-right">
              Hey there, I reviewed the brief and I think it will be Lorem ipsum
              dolor sit amet,
            </div>
          </div>

          <div className="message__right">
            <div></div>
            <div className="bubble-right">
              Hey there, I reviewed the brief and I think it will be Lorem ipsum
              dolor sit amet,
            </div>
          </div>

          <div className="message__right">
            <div></div>
            <div className="bubble-right">
              Hey there, I reviewed the brief and I think it will be Lorem ipsum
              dolor sit amet,
            </div>
          </div>

          <div className="message__left">
            <div className="bubble-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus
              orci
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;
