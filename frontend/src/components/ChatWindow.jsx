import React from "react";
import MessageBubble from "./MessageBubble"; 
import MessageInput from "./MessageInput";
import "./ChatWindow.css";

export default function ChatWindow() {
    const [messages, setMessages] = React.useState([
    { sender: "me", text: "Hey Chanu!", time: "10:00 AM" },
    { sender: "other", text: "Hello! How are you?", time: "10:02 AM" },
    ]);

    const handleSend = (newMessage) => {
    const now = new Date();
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages([...messages, { sender: "me", text: newMessage, time }]);
    };


  return (
    <div className="chat-window">
      <div className="chat-header">
        <span>Chanu</span>
        <div className="chat-actions">
          <button>📞</button>
          <button>🎥</button>
        </div>
      </div>

    <div className="messages">
    {messages.map((msg, idx) => (
        <MessageBubble key={idx} sender={msg.sender} text={msg.text} time={msg.time} />
    ))}
    </div>


      <MessageInput onSend={handleSend} />
    </div>
  );
}
