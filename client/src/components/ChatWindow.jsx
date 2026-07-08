import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

function ChatWindow({ messages, loading }) {
  return (
    <div className="flex-1 overflow-y-auto p-6">
      {messages.length === 0 && (
        <div className="text-center text-slate-500 mt-20">
          <h2 className="text-3xl font-bold mb-4">
            Welcome to StudyGenie AI
          </h2>

          <p>
            Ask any academic question to begin.
          </p>
        </div>
      )}

      {messages.map((message, index) => (
        <Message
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

      {loading && <LoadingSpinner />}
    </div>
  );
}

export default ChatWindow;