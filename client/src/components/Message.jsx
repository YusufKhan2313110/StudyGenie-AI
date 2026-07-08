import ReactMarkdown from "react-markdown";

function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-5`}>
      <div
        className={`max-w-[80%] rounded-2xl px-5 py-4 ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-slate-800 text-slate-100"
        }`}
      >
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

export default Message;