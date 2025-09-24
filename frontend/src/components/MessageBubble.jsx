import React from "react";
import "./MessageBubble.css";

export default function MessageBubble({ sender, text, time }) {
  return (
    <div className={`message ${sender}`}>
      <div className="message-content">{text}</div>
      <div className="message-time">{time}</div>
    </div>
  );
}
