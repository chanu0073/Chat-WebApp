import React from "react";
import "./MessageInput.css";

export default function MessageInputBox({ value, onChange }) {
  return (
    <input
      type="text"
      className="message-box"
      placeholder="Type a message..."
      value={value}
      onChange={onChange}
    />
  );
}
