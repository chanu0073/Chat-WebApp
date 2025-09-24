import React, { useState } from "react";
import MessageInputBox from "./MessageInputBox";
import AIComposerPanel from "./AIComposerPanel";
import "./MessageInput.css";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");
  const [isAIComposerOpen, setIsAIComposerOpen] = useState(false);

  const handleSend = () => {
    if (message.trim() === "") return;
    if (onSend) onSend(message);
    setMessage("");
  };

  return (
    <div className="message-input-row">
      <button className="icon-btn">😊</button>
      <button className="icon-btn">📎</button>

      <MessageInputBox value={message} onChange={(e) => setMessage(e.target.value)} />

      <button className="icon-btn send-btn" onClick={handleSend}>
        ➤
      </button>

      <button
        className="icon-btn ai-btn"
        onClick={() => setIsAIComposerOpen(!isAIComposerOpen)}
      >
        🤖
      </button>

      {isAIComposerOpen && <AIComposerPanel onClose={() => setIsAIComposerOpen(false)} />}
    </div>
  );
}
