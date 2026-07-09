import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { User, Bot } from "lucide-react";

function Message({ role, content }) {
  const isUser = role === "user";

  return (
    <div
      className={`flex items-start gap-4 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* AI Avatar */}

      {!isUser && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-lg">
          <Bot size={22} className="text-white" />
        </div>
      )}

      {/* Bubble */}

      <div
        className={`max-w-4xl rounded-3xl border px-7 py-6 shadow-xl transition-all ${
          isUser
            ? "border-blue-500 bg-gradient-to-r from-blue-600 to-violet-600 text-white"
            : "border-slate-800 bg-slate-900/80 backdrop-blur text-slate-100"
        }`}
      >
        <div className="mb-4 flex items-center gap-2">

          {isUser ? (
            <>
              <User size={18} />
              <span className="font-semibold">
                You
              </span>
            </>
          ) : (
            <>
              <Bot size={18} />
              <span className="font-semibold">
                StudyGenie AI
              </span>
            </>
          )}

        </div>

        <div className="prose prose-invert max-w-none prose-p:leading-8 prose-pre:rounded-2xl prose-headings:text-white">

          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({
                inline,
                className,
                children,
                ...props
              }) {
                const match =
                  /language-(\w+)/.exec(className || "");

                if (!inline && match) {
                  return (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      customStyle={{
                        borderRadius: "16px",
                        padding: "18px",
                        fontSize: "14px",
                      }}
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  );
                }

                return (
                  <code className="rounded bg-slate-800 px-2 py-1 text-blue-300">
                    {children}
                  </code>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>

        </div>

      </div>

      {/* User Avatar */}

      {isUser && (
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-700 shadow-lg">
          <User size={22} className="text-white" />
        </div>
      )}
    </div>
  );
}

export default Message;