import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import PromptBox from "../components/PromptBox";
import api from "../services/api";

function Dashboard() {
  const [selectedTool, setSelectedTool] = useState("chat");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSend(prompt) {
    const updatedMessages = [
      ...messages,
      { role: "user", content: prompt },
    ];

    setMessages(updatedMessages);
    setLoading(true);

    try {
      const response = await api.post("/ai/chat", {
        prompt,
        tool: selectedTool,
      });

      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: response.data.response,
        },
      ]);
    } catch {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "❌ Unable to generate response.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="flex h-[calc(100vh-81px)]">
        <Sidebar
          selectedTool={selectedTool}
          setSelectedTool={setSelectedTool}
        />

        <div className="flex-1 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setMessages([])}
              className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700"
            >
              Clear Chat
            </button>
          </div>

          <ChatWindow
            messages={messages}
            loading={loading}
          />

          <PromptBox
            onSend={handleSend}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;