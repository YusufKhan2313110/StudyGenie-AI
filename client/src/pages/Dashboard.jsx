import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import PromptBox from "../components/PromptBox";
import api from "../services/api";
import { Trash2 } from "lucide-react";

function Dashboard() {
  const location = useLocation();

  const [selectedTool, setSelectedTool] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (location.state?.tool) {
      setSelectedTool(location.state.tool);
    }
  }, [location.state]);

  async function handleSend(prompt) {
    const updated = [
      ...messages,
      {
        role: "user",
        content: prompt,
      },
    ];

    setMessages(updated);
    setLoading(true);

    try {
      const res = await api.post("/ai/chat", {
        prompt,
        tool: selectedTool,
      });

      // Add an empty assistant message
      setMessages([
        ...updated,
        {
          role: "assistant",
          content: "",
        },
      ]);

      const fullResponse = res.data.response;
      let index = 0;

      const interval = setInterval(() => {
        index++;

        setMessages((prev) => {
          const copy = [...prev];

          copy[copy.length - 1] = {
            ...copy[copy.length - 1],
            content: fullResponse.slice(0, index),
          };

          return copy;
        });

        if (index >= fullResponse.length) {
          clearInterval(interval);
          setLoading(false);
        }
      }, 12);
    } catch {
      setMessages([
        ...updated,
        {
          role: "assistant",
          content: "❌ Unable to generate a response. Please try again.",
        },
      ]);

      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />

        <div className="flex flex-1 flex-col">
          <div className="border-b border-slate-800 bg-slate-900/70 backdrop-blur-xl">
            <div className="flex items-center justify-between px-8 py-5">
              <div>
                <h2 className="text-3xl font-bold">
                  Study Workspace
                </h2>

                <p className="mt-1 text-slate-400">
                  Powered by Google Gemini
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-sm">
                  Current Tool:
                  <span className="ml-2 font-semibold text-blue-400 capitalize">
                    {selectedTool}
                  </span>
                </div>

                <button
                  onClick={() => setMessages([])}
                  className="flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-slate-300 transition hover:border-red-500 hover:text-red-400"
                >
                  <Trash2 size={18} />
                  Clear
                </button>
              </div>
            </div>
          </div>

          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <PromptBox
            loading={loading}
            onSend={handleSend}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;