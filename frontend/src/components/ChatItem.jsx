import "./ChatItem.css";

export default function ChatItem({ name, lastMessage, time }) {
  return (
    <div className="chat-item">
      <div className="chat-icon">👤</div>
      <div className="chat-info">
        <span className="chat-name">{name}</span>
        <span className="chat-last">{lastMessage}</span>
      </div>
      {time && <span className="chat-time">{time}</span>}
      <div className="chat-menu">⋮</div>
    </div>
  );
}

