import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <button className="sidebar-btn" title="Chats">💬</button>
      <button className="sidebar-btn" title="Call History">📞</button>
      <button className="sidebar-btn" title="Settings">⚙️</button>
    </div>
  );
}
