import { useEffect, useRef } from "react";
import {
  Sparkles,
  FileText,
  Brain,
  BookOpen,
  CircleHelp,
} from "lucide-react";
import Message from "./Message";
import LoadingSpinner from "./LoadingSpinner";

const suggestions = [
  {
    icon: FileText,
    title: "Summarize Notes",
    prompt: "Summarize my lecture notes into exam-ready points.",
  },
  {
    icon: Brain,
    title: "Create Flashcards",
    prompt: "Generate flashcards for Database Management Systems.",
  },
  {
    icon: BookOpen,
    title: "Generate Quiz",
    prompt: "Create a 15-question quiz on Operating Systems.",
  },
  {
    icon: CircleHelp,
    title: "Explain Topic",
    prompt: "Explain Dynamic Programming like I'm a beginner.",
  },
];

function ChatWindow({ messages, loading }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (messages.length === 0) {
    return (
      <div className="flex-1 overflow-y-auto">

        <div className="max-w-5xl mx-auto px-8 py-14">

          {/* Welcome */}

          <div className="text-center mb-14">

            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 shadow-xl">

              <Sparkles
                size={36}
                className="text-white"
              />

            </div>

            <h1 className="text-5xl font-black text-white">

              Welcome to StudyGenie AI

            </h1>

            <p className="mt-5 text-xl text-slate-400 max-w-3xl mx-auto leading-8">

              Choose a tool from the left and start learning with
              Google's Gemini AI.

            </p>

          </div>

          {/* Suggestions */}

          <div className="grid gap-6 md:grid-cols-2">

            {suggestions.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-800 bg-slate-900/70 p-7 transition duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-600/10"
                >

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600">

                    <Icon
                      size={26}
                      className="text-white"
                    />

                  </div>

                  <h3 className="mt-6 text-xl font-bold">

                    {item.title}

                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">

                    {item.prompt}

                  </p>

                </div>
              );
            })}

          </div>

          {/* Bottom Text */}

          <div className="mt-14 text-center text-slate-500">

            Start typing below to begin your study session.

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto">

      <div className="max-w-5xl mx-auto px-8 py-8 space-y-8">

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

    </div>
  );
}

export default ChatWindow;