export default function ChatPanel() {
  return (
    <div className="chat-panel">
      <h3>Chat</h3>

      <div className="chat-box">
        <p className="msg">Good Day!</p>
        <p className="msg user">
          Looking for Harry Potter editions
        </p>
      </div>

      <input placeholder="Write a message..." />
    </div>
  );
}
