import Sidebar from "../components/Sidebar";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <ChatList />
      <ChatWindow />
    </div>
  );
}
