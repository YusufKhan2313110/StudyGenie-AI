import { useEffect, useRef } from "react";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center max-w-xl">
          <h2 className="text-4xl font-bold mb-4">
            Welcome to StudyGenie AI
          </h2>

          <p className="text-slate-400 mb-8">
            Choose a tool from the left and start learning.
          </p>

          <div className="bg-slate-900 rounded-xl p-6 text-left space-y-3">
            <div>💬 Explain Binary Trees</div>
            <div>📝 Summarize these notes</div>
            <div>❓ Generate an Operating System quiz</div>
            <div>🧠 Make flashcards for DBMS</div>
            <div>💡 Explain Dynamic Programming simply</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((message, index) => (
        <Message
          key={index}
          role={message.role}
          content={message.content}
        />
      ))}

      {loading && <LoadingSpinner />}

      <div ref={bottomRef} />
    </div>
  );
}

export default ChatWindow;