import ChatItem from "./ChatItem";
import "./ChatList.css";

export default function ChatList() {
  return (
    <div className="chat-list">
      <input className="chat-search" type="text" placeholder="Search chats" />
      <div className="chat-items">
        <ChatItem name="Pavan" lastMessage="Hey there!" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Pavan" lastMessage="Hey there!" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
        <ChatItem name="Charan" lastMessage="What's up?" />
      </div>
    </div>
  );
}
