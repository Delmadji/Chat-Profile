import React from "react";
import "./Content.css";
import Avatar from "@mui/material/Avatar";
import Chats from "./Chats";
import avatarimage from "../assete/avatar.png";

function Content() {
  return (
    <div className="content">
      <div className="container">
        <header>
          <div className="content__logo">
            <Avatar alt="Michael Healy" src={avatarimage} />
            <h3>Michael Healy</h3>
          </div>
          <div className="content__list">
            <ul>
              <li>PROFILE</li>
              <li className="active">CHATS</li>
              <li>YOUR TEAM</li>
            </ul>
          </div>
        </header>
        <Chats />
      </div>
    </div>
  );
}

export default Content;
