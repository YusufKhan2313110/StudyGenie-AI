import { useState } from "react";
import { FiSend } from "react-icons/fi";

function PromptBox({ onSend, loading }) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!prompt.trim() || loading) return;

    onSend(prompt);

    setPrompt("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-slate-800 bg-slate-900 p-4"
    >
      <div className="max-w-5xl mx-auto flex gap-3">
        <textarea
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 resize-none rounded-xl bg-slate-800 p-4 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="px-6 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
        >
          <FiSend size={22} />
        </button>
      </div>
    </form>
  );
}

export default PromptBox;