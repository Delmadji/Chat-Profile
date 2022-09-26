import React from "react";
import "./InBoxes.css";

function InBoxes({ name, text, date }) {
  return (
    <div className="inboxes">
      <div className="name">
        <h4>{name}</h4>
      </div>
      <div className="desc">
        <p className="text">{text}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
}

export default InBoxes;
